import React, {  } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Table, Popconfirm } from 'antd';
import { removeClient } from '../../services/removeClient';
import './tableClients-styles.css'
import { EditClientModal } from '../EditClientModal';

export function TableClients ({clientList}) {

  async function handleDelete (id){
    await removeClient(id)
    window.location.reload()
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
        <Space size="small">
          <EditClientModal 
            id={record.id} 
            nameParam={record.name} 
            mailParam={record.mail} 
            phoneParam={record.phone} 
            coordinates={record.coordinates} 
             
          />
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

  if( clientList.message ) return  <Table className='table_clients' columns={columns}   locale={{emptyText: clientList.message }}/> 

  return(
      clientList.length > 0  && <Table className='table_clients' columns={columns} dataSource={clientList} /> 
  );
};

