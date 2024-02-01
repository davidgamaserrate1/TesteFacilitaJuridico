import './addClient-styles.css'
import React, { useState } from 'react';
import { Button, Input, InputNumber, Modal, Typography } from 'antd';
import {
    UserAddOutlined, 
    PhoneOutlined,MailOutlined, 
    BorderVerticleOutlined, 
    BorderHorizontalOutlined
}  from  '@ant-design/icons'
 
const { Title } = Typography;

export function AddClientModal(){
    const [name, setName]=useState('')
    const [mail, setMail]=useState('')
    const [phone, setPhone]=useState('')
    const [coordinateX, setcoordinateX]=useState(0)
    const [coordinateY, setcoordinateY]=useState(0)
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const sendClient =() =>{
        const client = {
            name : name,
            mail : mail,
            phone : phone,
            coordinate: `${coordinateX}, ${coordinateY}`
        }
        console.log(client)
        setIsModalOpen(false);
    }
    return(
        <div  className='modal_add_client_out'>
            <Button
                type="primary" 
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
                            onChange={(value) => setcoordinateX(value)}
                        />
                        <InputNumber className='item_coord'
                            size="large"
                            placeholder="Eixo Y"
                            prefix={<BorderHorizontalOutlined />}
                            value={coordinateY}
                            onChange={(value) => setcoordinateY(value)}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}