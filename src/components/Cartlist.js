import React from 'react'
import list from '../data'
import Card from './Card'


const Cartlist = ({handleCart}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Card item={item} key={item.id} handleCart={handleCart}/>
            ))
        }
    </section>
  )
}

export default Cartlist