import './addClient-styles.css'
import React, { useState } from 'react';
import { Alert, Button, Input,  Modal, Typography,message } from 'antd';
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
        if(needAlert){
            return 'Por favor, Preencha todos os campos e tente novamente'
        }
        let clientStage = {
            "name" : name,
            "mail" : mail,
            "phone" : phone,
            "x_coordinate" : coordinateX, 
            "y_coordinate" : coordinateY,

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
                     needAlert && <Alert  message="Por favor, Preencha todos os campos!" type="error" />,
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
                                        
                    <Title className='moda_form_item_coord_tittle' level={5}>Coordenandas </Title>
                    <Alert className='modal_form__item__error' message="Por favor, Preencha apenas com numeros" closable type="warning" />
                    <div className='moda_form_item_coord'>
                        <Input className='item_coord'
                            size="large"
                            placeholder="X"
                            prefix={<BorderVerticleOutlined />}
                            value={coordinateX}
                            onChange={(e)=>setCoordinateX(e.target.value)}
                        />
                        <Input className='item_coord'
                            size="large"
                            placeholder="Y"
                            prefix={<BorderHorizontalOutlined />}
                            value={coordinateY}   
                            onChange={(e)=>setCoordinateY(e.target.value)}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}