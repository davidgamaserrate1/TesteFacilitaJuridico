import React, {  } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Table, Popconfirm } from 'antd';
import { removeClient } from '../../services/removeClient';
import './tableClients-styles.css'

export function TableClients ({clientList}) {
 
  
  const handleEdit = (record) => {    
    console.log('Editar cliente:', record);
  };

  const handleDelete = (id) => {
    removeClient(id)
  };

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'E-mail',
      dataIndex: 'mail',
      key: 'mail',
      width: '15%',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      width: '15%',
    },
    {
      title: 'Coordenadas',
      dataIndex: 'coordinates',
      key: 'coordinates',
      width: '10%',      
    },
    {
      title: 'Ação',
      key: 'action',width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm 
            title="Deseja realmente excluir este cliente?"
            onConfirm={() => handleDelete(record.id)}
            okText="Sim"
            cancelText="Cancelar"
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if( clientList.message ) return  <div className='empty_message'>{clientList.message}</div> 

  return(
      clientList.length > 0  && <Table className='table_clients' columns={columns} dataSource={clientList} /> 
  );
};

