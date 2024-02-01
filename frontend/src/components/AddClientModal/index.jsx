import './addClient-styles.css'
import React, { useState } from 'react';
import { Alert, Button, Input, InputNumber, Modal, Typography,message } from 'antd';
import {UserAddOutlined, 
    PhoneOutlined,MailOutlined, 
    BorderVerticleOutlined, 
    BorderHorizontalOutlined
}  from  '@ant-design/icons'
 
import { createClient } from '../../services/createClient';
const { Title } = Typography;

export function AddClientModal(){
    const [name, setName]=useState()
    const [mail, setMail]=useState()
    const [phone, setPhone]=useState()
    const [coordinateX, setCoordinateX]=useState()
    const [coordinateY, setCoordinateY]=useState()  
    const [messageApi, contextHolder] = message.useMessage();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const resetState = () => {
        setName(undefined);
        setMail(undefined);
        setPhone(undefined);
        setCoordinateX(undefined);
        setCoordinateY(undefined);
    };

    const sendClient =async() =>{
        let clientStage = {
            "name" : name,
            "mail" : mail,
            "phone" : phone,
            "coordinates": `${coordinateX}, ${coordinateY}`
        }

        const response = await createClient(clientStage)
     
        if (response){
            messageApi.open({
                type: response.error ? 'error' : 'success',
                content: response.error ? 'Por favor, Preencha todos os campos e tente novamente' : response.message,
            });
        }      
           
        if (!response.error) {
            resetState();
            setIsModalOpen(false);
        }
    }
    
    const needAlert = !name || !mail || !phone || ! coordinateX || !coordinateY

    return(
        <div  className='modal_add_client_out'>
            {contextHolder}
            <Button type="primary" 
                onClick={showModal} 
                icon={<UserAddOutlined />} >
                Adicionar cliente
            </Button>
            <Modal className='modal'
                open={isModalOpen} 
                onOk={sendClient} 
                onCancel={handleCancel} 
                footer={[
                    <Button className='modal_form__item__button' 
                        size="large" 
                        type="primary"
                        onClick={sendClient}
                    >
                        Salvar
                    </Button>
                ]}
            >
                <h2 className='modal_tittle'>Adicionar cliente</h2>
                <div className='modal_form'>
                    { needAlert && <Alert className='modal_form__item__error' message="Por favor, Preencha todos os campos!" type="error" />}
                    <Input className='modal_form__item' 
                        size="large" 
                        placeholder="Nome" 
                        prefix={<UserAddOutlined />} 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <Input className='modal_form__item' 
                        size="large" 
                        placeholder="E-mail" 
                        prefix={<MailOutlined />} 
                        value={mail}
                        onChange={(e)=>setMail(e.target.value)}
                    />
                    <Input className='modal_form__item' 
                        size="large" 
                        placeholder="Telefone" 
                        prefix={<PhoneOutlined />} 
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    
                    <Title className='moda_form_item_coord_tittle' level={5}>Coordenandas</Title>
                    <div className='moda_form_item_coord'>
                        <InputNumber className='item_coord'
                            size="large"
                            placeholder="Eixo X"
                            prefix={<BorderVerticleOutlined />}
                            value={coordinateX}
                            onChange={(value) => setCoordinateX(value)}
                        />
                        <InputNumber className='item_coord'
                            size="large"
                            placeholder="Eixo Y"
                            prefix={<BorderHorizontalOutlined />}
                            value={coordinateY}
                            onChange={(value) => setCoordinateY(value)}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}