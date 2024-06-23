import React from 'react'
import Home from '../components/Home'
import { useSelector } from 'react-redux';

function Homu() {
    const items = useSelector((store)=>store.items)
  return (
    <div className="items-container">
    {items.map(item => (
      <Home key={item.id} item={item} />
    ))}
  </div>
  )
}

export default Homu;
