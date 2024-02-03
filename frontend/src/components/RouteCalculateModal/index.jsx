import { Button, List, Modal } from "antd";
import { calculateRoute } from "../../services/calculateRoute";
import {  EnvironmentOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export function RouteCalculateModal(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clientList, setClientList] = useState([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchClientsRoutes = async () => {
        try {
            const clients = await calculateRoute();
            setClientList(clients);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
        }
    };

    useEffect(() => {   
        fetchClientsRoutes();
    },[]);

   return(
    <div  className='modal_add_client_out'>
        <Button   
             style={{
                background:'var(--primary-color)',
                color: 'var(--white-color)'
            }}
            onClick={showModal} icon={<EnvironmentOutlined   />} 
        >Visualizar Ordem de Visitação</Button>
        <Modal className='modal' open={isModalOpen} 
            onCancel={handleCancel} 
            footer={[
                <Button className='modal_form__item__button'   
                    style={{
                        background:'var(--primary-color)',
                        color: 'var(--white-color)'
                    }} size="large" type="primary"onClick={handleCancel} 
                >Fechar</Button>
            ]}
        >
            <h2 className='modal_tittle'>Rota de clientes</h2>
            <List  className='modal_form' 
                pagination={{pageSize: 12}} 
                size="small" bordered dataSource={clientList}
                renderItem={
                    ( item ) => <List.Item style={{paddingLeft:'32px'}}> {item.name}</List.Item>
                }
            />
        </Modal>
    </div>
   )
}