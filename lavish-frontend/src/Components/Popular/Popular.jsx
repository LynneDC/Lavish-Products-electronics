import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR TECH</h1>
        <hr />
        <div className='popular-item'>
            {data_products.map((item, index) => {
                return <Item key={index} item={item} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

    </div>
    </div>
  )
}

export default Popular