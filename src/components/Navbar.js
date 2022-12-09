import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = ({size,setShow}) => {
  return (
    <div className='navbar'>
        <div className='header'onClick={()=>setShow(true)} >
            <span>My Shopping</span>
        </div>
        <div className='icon' onClick={()=>setShow(false)}>
            <ShoppingCartIcon></ShoppingCartIcon>
            <sup>{size}</sup>
        </div>
    </div>
  )
}

export default Navbar