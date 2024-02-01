import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Table, Popconfirm } from 'antd';
import { getAllClients } from '../../services/getClients';
import { removeClient } from '../../services/removeClient';
import './tableClients-styles.css'

const TableClients = () => {
  const [clientList, setClientList] = useState([]);
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    setUpdated(false)
    const fetchClients = async () => {
      try {
        const clients = await getAllClients();
        setClientList(clients);
      } catch (error) {
        console.error('Erro ao obter clientes:', error);
      }
    };

    fetchClients();
  }, [updated]); 
  
  const handleEdit = (record) => {    
    console.log('Editar cliente:', record);
    setUpdated(true)
  };

  const handleDelete = (id) => {
    setUpdated(true)
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

export default TableClients;
