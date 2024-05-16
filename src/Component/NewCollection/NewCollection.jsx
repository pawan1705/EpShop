import React from 'react'
import './NewCollection.css';
import new_collection from '../../assets/new_collections';
// import all_product from '../../assets/all_product';
import Item from '../Item/Item';
const NewCollection = () => {
  return (
    <div className='newCollections'>
      <h1>New Collections</h1>
      <hr/>
      <div className="collections">
      {
        new_collection.map((item,index)=>{
          return (<Item key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />)
        })
      }
      </div>
    </div>
  )
}

export default NewCollection