import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Card = ({ item ,handleCart}) => {
    const { title, author, price, img } = item

    return (
        <div className='card' >
            <div className='cardImage'>
                <img src={img} alt='' />
            </div>
            <div className='cardDetails'>
                <p>{title}</p>
                <p>Author: {author}</p>
                <p>Price: {price}</p>
                <button onClick={()=>handleCart(item)}>Add to cart <ShoppingCartIcon className='icon1'/></button>
            </div>
        </div>
    )
}

export default Card