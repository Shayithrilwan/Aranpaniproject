import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import Modal from './donorModal'
import DonorModal from './donorModal';
import DonorTable from './donorTable';

function Donors() {
  const [modal1Open, setModal1Open] = useState(false);
  const closemodal=function(){
    setModal1Open(false);
    const arr = [{id: 1, category: "ebjfh"}].map((value) => ({ value: value.id, label: value.category}) )
  }
  
  return (
    <div className='dashboard'>
    <div className='sidenav'>
       <h1 className='sidenav__heading'>Aran Pani</h1>
       <nav className='sidenav__contents'>
           <li >< Link className='link1' to="/dashboard">Dashboard</Link> </li>
           <li >< Link className='link1' to="/project">Projects</Link> </li>
           <li>< Link className='link1' to="/donors">Donors</Link> </li>
           <li>< Link className='link1' to="/representation">Representations</Link></li>
           <li>< Link className='link1' to="/payment">Payment</Link></li>
           <li>< Link className='link1' to="/internalusers">Internal  users</Link></li>
           <li>< Link className='link1' to="/subscriptions">Subscriptions</Link></li>
           <li>< Link className='link1' to="/contactdeatils">Contact Details</Link></li>

       </nav>
       
    
       
    </div>
    <div className='dashboard__content '>
      <div>
      <div><h1 className='dashboard__content__heading'  > Donors <PlusCircleOutlined onClick={()=>setModal1Open(true) } /></h1></div>
      <DonorModal closemodule={closemodal}    visible={modal1Open }   
         />
      <DonorTable/>
      </div>
    </div>
    </div>
  )
}

export default Donors;