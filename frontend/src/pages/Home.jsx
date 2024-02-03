import './home-styles.css' 
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Content } from "antd/es/layout/layout";
import { AddClientModal } from "../components/AddClientModal";
import {TableClients} from "../components/TableClients"; 
import { getAllClients } from "../services/getClients";
import { RouteCalculateModal } from '../components/RouteCalculateModal';
import {FiltersModal} from '../components/FiltersModal';
import { Tag, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

export function Home() {
  const [clientList, setClientList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filtersList, setFiltersList] = useState([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFilter = (filteredClients, usedFilters) => {
    setClientList(filteredClients);
    setFiltersList(usedFilters);
    setIsModalOpen(false);
  };

  const fetchClients = async () => {
    try {
      const clients = await getAllClients();
      setClientList(clients);
    } catch (error) {
      console.error('Erro ao obter clientes:', error);
    }
  };

  const clearFilters = () => {
    setFiltersList([])
    fetchClients()
  };
  
  useEffect(() => {   
    fetchClients();
  },[]);
  
  const totalClients = clientList.length
return (
      <>
      <Header/>
      <section id="home">
          <div className="main_content_tittle"> Clientes</div>
          <div className="main_content_subtittle">  <Tag color='green'>Total: {totalClients}</Tag> </div>
          <Content className="main_content">      
            <div className="top_actions">
              <div className="top_action_filters">
                <RouteCalculateModal isModalOpen={isModalOpen} />
                <FiltersModal onCancel={handleCancel} onFilter={handleFilter} />
                <AddClientModal  />
              </div>
            </div>
            {filtersList.length > 0 && 
                <>
                  <div className='tags_filters'>          
                    <Typography.Title level={5}> Filtros </Typography.Title>          
                    {filtersList.map((filter)=><Tag color="blue">{filter}</Tag> )}
                  </div>
                  <Tag  onClick={clearFilters}  className='tags_filters_remove' color="red" icon={<CloseCircleOutlined />}>Remover filtros</Tag>
                </>
              }
            <TableClients 
              clientList={clientList} 
            />
          </Content>

      </section>
      </>
  );
}
 