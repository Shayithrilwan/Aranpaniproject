import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import DonorService from './donorlistservice';
import { Value } from 'sass';
import { Donor } from '../models/Donor/donor.model';
import { City } from '../models/City/city.model';
import { Country } from '../models/Country/country.model';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "./../routes/routeConstants/appRoutes";
import Item from 'antd/lib/list/Item';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const columns: ColumnsType<Donor> = [ 

  
  
  {
    title: 'Donor ID',
    dataIndex: "id",
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: "username",
    key: 'username',
  },
  {
    title: 'Mobile',
    key: 'mobileNumber',
    dataIndex: 'mobileNumber',
    
  },
  {
    title: 'Group #',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    
  },
  {
    title: 'Type #',
    dataIndex: 'donorType',
    key: 'donorType',
    
  },
  {
    title: 'Group Head',
    dataIndex: 'updatedAo',
    key: 'updatedAo',
    
  },
  {
    title: 'Country',
    dataIndex: ["country","name"],
    key: 'country.name',
    
  },
  {
    title: 'State',
    dataIndex: ["state","name"],
    key: 'state.name',
    
  },
  
  {
    title: 'District',
    dataIndex: ["city","name"],
    key: 'city.name',
    
  },
  
  {
    title: 'Pincode',
    dataIndex: 'pincode',
    key: 'pincode',
    
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (status? <span className='active'>Active</span>:<span className='Inactive'>Inactive</span>),
    
  },
];

const data: DataType[] = [ 
  
];

const DonorTable = () => {
  const {listdata, listDonor}=DonorService()
  const navigate = useNavigate();
  console.log(listdata);
  
  useEffect(()=>{
    listDonor();
    
  },[])
  return (
  <div>  <Table  columns={columns} dataSource={
    listdata
  } 
  onRow={(record, rowIndex) => {
    return {
      onClick: event => navigate(AppRoutes.UPDATE)
      
    };
  }}
  
  /> 
  
  
  </div>
  )
}

export default DonorTable;