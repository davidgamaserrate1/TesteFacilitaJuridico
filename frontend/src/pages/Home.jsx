import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { Content } from "antd/es/layout/layout";
import { AddClientModal } from "../components/AddClientModal";
import {TableClients} from "../components/TableClients"; 
import { getAllClients } from "../services/getClients";
import { Alert, Button, Input, Modal, Typography } from 'antd';
import { FilterOutlined } from "@ant-design/icons";
 

export function Home() {
  const [clientList, setClientList] = useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
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
              onOk={handleOk} 
              onCancel={handleCancel}
              footer={[
                  <Button className='modal_form__item__button' 
                    type="primary" 
                    onClick={showModal}  
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
                />

                <Typography.Title level={5}>E-mail</Typography.Title>
                <Input className='modal_form__item'
                  placeholder="E-mail" 
                />

                <Typography.Title level={5}>Telefone</Typography.Title>
                <Input className='modal_form__item'
                  placeholder="Telefone" 
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
 