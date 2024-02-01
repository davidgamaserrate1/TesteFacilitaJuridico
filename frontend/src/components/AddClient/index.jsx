import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import {UserAddOutlined, PhoneOutlined,MailOutlined}  from  '@ant-design/icons'
import './addClient-styles.css'

export function AddClient(){
    const [name, setName]=useState('')
    const [mail, setMail]=useState('')
    const [phone, setPhone]=useState('')
    
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

    const sendClient =() =>{
        const client = {
            name : name,
            mail : mail,
            phone : phone
        }
        console.log(client)
        setIsModalOpen(false);
    }

    return(
        <>
        <Button type="primary" onClick={showModal} icon={<UserAddOutlined />}>
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

                
            </div>
        </Modal>
        </>
    )
}