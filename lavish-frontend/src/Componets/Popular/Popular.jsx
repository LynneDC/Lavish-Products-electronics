import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {data_products}

    </div>
  )
}

export default Popular