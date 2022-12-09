import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Cartlist from './components/Cartlist';
import Navbar from './components/Navbar';

function App() {
  const [cart , setCart] = useState([])
  const [show,setShow] = useState(true)
  const [warning, setWarning] = useState(false)

  const handleCart = (item)=>{
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id===product.id) isPresent=true
    })
    if(isPresent){
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return 
    }
    setCart([...cart, item])
  }


  const handleChange = (item,d)=>{
    let ind=-1;
    cart.forEach((data, index)=>{
      if(data.id === item.id){
        ind= index
      }
    })
    const temparr = cart
    temparr[ind].amount +=d

    if(temparr[ind].amount===0){
      temparr[ind].amount=1
    }

    setCart([...temparr])


  }

  return (
    <div className="App">
      <Navbar size={cart.length} setShow={setShow}/>
      
      {
        show ? <Cartlist handleCart={handleCart} /> :<Cart cart = {cart} setCart={setCart} handleChange={handleChange} />
      }
      {
        warning && <div className='warning'>Item is already present in the cart</div>
      }
    </div>
  );
}

export default App;
