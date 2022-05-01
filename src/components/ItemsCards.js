import React from 'react'

const ItemsCards = (productosData) => {
  return (
   <div style={{border:'solid green 2px', margin:'20px', padding:'20px'}}>
      <strong>{productosData.name}</strong>
      <div>{productosData.brand}</div>
   </div>
  )
}

export default ItemsCards