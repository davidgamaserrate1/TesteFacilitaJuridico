import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { Content } from "antd/es/layout/layout";
import { AddClientModal } from "../components/AddClientModal";
import {TableClients} from "../components/TableClients"; 
import { getAllClients } from "../services/getClients";
import { Alert, Button, Input, Modal, Typography } from 'antd';
import { FilterOutlined } from "@ant-design/icons";
import { getClientsByFilters } from "../services/getClientsByFilters";
 

export function Home() {
  const [clientList, setClientList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [filterName, setFilterName] = useState();
  const [filtersPhone, setFiltersPhone] = useState();
  const [filtersMail, setFiltersMail] = useState();




  const showModal = () => {
    setIsModalOpen(true);
  };
  
  // async function handleFilter()  {
  //   let filters = {}; 
    
  //   if (filterName) {
  //     filters["name"] = filterName;
  //   }
  
  //   if (filtersPhone) {
  //     filters["phone"] = filtersPhone;
  //   }
    
  //   if (filtersMail) {
  //     filters["mail"] = filtersMail;
  //   }

   
    
  //   const filtredClients = await getClientsByFilters(JSON.stringify({filters}))
  //   console.log(filtredClients);
  // };

  // Atualize a função handleFilter no seu componente Home.jsx

const handleFilter = async () => {
  let queryParams = [];

  if (filterName) {
    queryParams.push(`name=${encodeURIComponent(filterName)}`);
  }

  if (filtersPhone) {
    queryParams.push(`phone=${encodeURIComponent(filtersPhone)}`);
  }

  if (filtersMail) {
    queryParams.push(`mail=${encodeURIComponent(filtersMail)}`);
  }

  const queryString = queryParams.join('&');

  try {
    const filtredClients = await getClientsByFilters(queryString);
    console.log(filtredClients);
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
  }
};

// Atualize a função getClientsByFilters para receber uma string de consulta em vez de um objeto


  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getAllClients();
        setClientList(clients);
      } catch (error) {
        console.error('Erro ao obter clientes:', error);
      }
    };

    fetchClients();
  }, []);

return (
    <>
    <Header/>
      <Content className="main_content">
        <div className="top_actions">
          <AddClientModal className="top_action_add"/>
          <div   className="top_action_filters">
            <Button 
              type="primary" 
              onClick={showModal}  
              icon={<FilterOutlined />}
            >
              Filtros
            </Button>
            <Modal 
              open={isModalOpen} 
              
              onCancel={handleCancel}
              footer={[
                  <Button className='modal_form__item__button' 
                    type="primary" 
                    onClick={()=>handleFilter()}  
                  >
                    Filtrar
                  </Button>
                ]
              }
            >
              <h2 className='modal_tittle'>Filtros</h2>
              <div className='modal_form'>
                <Alert className='modal_form__item__error' message="Por favor, Preencha ao menos um campo para filtrar" type="info" />              
                <Typography.Title level={5}>Nome</Typography.Title>
                <Input className='modal_form__item' 
                  placeholder="Nome" 
                  value={filterName}
                  onChange={(e)=>setFilterName(e.target.value)}
                />

                <Typography.Title level={5}>E-mail</Typography.Title>
                <Input className='modal_form__item'
                placeholder="E-mail" 
                value={filtersMail}
                onChange={(e)=>setFiltersMail(e.target.value)}
                />

                <Typography.Title level={5}>Telefone</Typography.Title>
                <Input className='modal_form__item'
                  placeholder="Telefone" 
                  value={filtersPhone}
                  onChange={(e)=>setFiltersPhone(e.target.value)}
                />
              </div>
            </Modal>

          </div>
        </div>    
        <TableClients clientList={clientList} />
      </Content>
    </>
  );
}
 