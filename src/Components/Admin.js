import React from 'react'
import 
{ BsPersonCircle, BsJustify}
from 'react-icons/bs';


function Admin({OpenSidebar}) {
  return (
    <header className=' admin-header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='admin-header-left'>
            
        </div>
        <div className='admin-header-right'>
            
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Admin;