import React, { useState } from 'react';
import { Alert, Button, Input, InputNumber, Modal, Typography } from 'antd';
import { BorderHorizontalOutlined, BorderVerticleOutlined, FilterOutlined } from "@ant-design/icons";
import { getClientsByFilters } from '../../services/getClientsByFilters'
import { getAllClients } from '../../services/getClients';

export function FiltersModal  ({  onFilter })  {
    const [filtersName, setfiltersName] = useState();
    const [filtersPhone, setFiltersPhone] = useState();
    const [filtersMail, setFiltersMail] = useState();
    const [filtersCoordinateX, setFiltersCoordinateX]=useState()
    const [filtersCoordinateY, setFiltersCoordinateY]=useState()  
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
  
    const clearFilters = () => {
        setfiltersName(undefined)
        setFiltersPhone(undefined)
        setFiltersMail(undefined)
        setFiltersCoordinateX(undefined)
        setFiltersCoordinateY(undefined)
    };

    const handleFilter = async () => {  
        let queryParams = [];
        let usedFilters = [];
  
        if (filtersName) {
            queryParams.push(`name=${encodeURIComponent(filtersName)}`);
            usedFilters.push(`Nome = ${filtersName}` )
        }
        if (filtersPhone) {
            queryParams.push(`phone=${encodeURIComponent(filtersPhone)}`);
            usedFilters.push(`Telefone = ${filtersPhone}` )
        }
        if (filtersMail) {
            queryParams.push(`mail=${encodeURIComponent(filtersMail)}`);
            usedFilters.push(`E-mail = ${filtersMail}` )
        }
        if (filtersCoordinateX) {
            queryParams.push(`x_coordinate=${encodeURIComponent(filtersCoordinateX)}`);
            usedFilters.push(`X = ${filtersCoordinateX}` )
        }
        if (filtersCoordinateY) {
            queryParams.push(`y_coordinate=${encodeURIComponent(filtersCoordinateY)}`);
            usedFilters.push(`Y = ${filtersCoordinateY}` )
        }
        
        const queryString = queryParams.join('&');  
        try {
            if (queryParams.length === 0) {
                const clients = await getAllClients();
                onFilter(clients, usedFilters);
                clearFilters()
            } else {
                const filteredClients = await getClientsByFilters(queryString);
                onFilter(filteredClients, usedFilters); 
                clearFilters()
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
        }
    };
  
  return (
   <>
        <Button type="primary" onClick={showModal}  icon={<FilterOutlined />}>Filtros</Button>
        <Modal open={isModalOpen} onCancel={handleCancel}
            footer={[ 
                <Button className='modal_form__item__button' type="primary" onClick={()=>handleFilter()}>Filtrar</Button> 
            ]}
        >
            <h2 className='modal_tittle'>Filtros</h2>
            <div className='modal_form'>
                <Alert className='modal_form__item__error' message="Por favor, Preencha ao menos um campo para filtrar" type="info" />                              
                <Typography.Title level={5}>Nome</Typography.Title>
                <Input className='modal_form__item' 
                    placeholder="Nome" 
                    value={filtersName}
                    onChange={(e)=>setfiltersName(e.target.value)}
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
                <Typography.Title level={5}>Coordenadas</Typography.Title>
                <div className='moda_form_item_coord'>
                    <InputNumber className='item_coord'
                        size="large"
                        placeholder="Eixo X"
                        prefix={<BorderVerticleOutlined />}
                        value={filtersCoordinateX}
                        onChange={(value) => setFiltersCoordinateX(value)}
                    />
                    <InputNumber className='item_coord'
                        size="large"
                        placeholder="Eixo Y"
                        prefix={<BorderHorizontalOutlined />}
                        value={filtersCoordinateY}
                        onChange={(value) => setFiltersCoordinateY(value)}
                    />
                </div>
            </div>
        </Modal>
   </>
  );
};

 