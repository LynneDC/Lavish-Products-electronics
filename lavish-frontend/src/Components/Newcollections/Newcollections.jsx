import React from 'react'
import './Newcollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

export const Newcollections = () => {

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collection'>
                {new_collection.map((item, index) => {
                    return <Item key={index} item={item} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Newcollections
