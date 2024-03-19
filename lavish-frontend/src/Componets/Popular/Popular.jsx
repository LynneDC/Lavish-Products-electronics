import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {data_products.map((product) => {
                return (
                    <div className='item'>
                        <img src={product.image} alt={product.title} />
                        <p>{product.name}</p>
                        <div className='item-prices'>
                            <div className='item-price-new'>
                                {product.new_price}
                            </div>
                            <div className='item-price-old'>
                                {product.old_price}
                            </div>
                        </div> 
                    </div>
                )
            })}

    </div>
  )
}

export default Popular