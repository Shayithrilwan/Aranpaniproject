import React from 'react'
import { Link } from 'react-router-dom'

function contactdeatils() {
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
      <h1 className='dashboard__content__heading' >Contact Details</h1>
        
    </div>
    </div>
  )
}

export default contactdeatils;