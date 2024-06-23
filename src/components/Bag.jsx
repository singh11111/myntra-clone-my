import React from 'react'
import BagSummary from './BagSummary'
import BagItems from './BagItems'
import { useSelector } from 'react-redux'

function Bag() {
    const items = useSelector(state=>state.items);
    const bagitems = useSelector(state=>state.bag);
  const finalItems= items.filter(item =>{
    const index = bagitems.indexOf(item.id);
    return index>=0;
  })
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
         {finalItems.map(item =><BagItems item={item}/> )}   
        </div>
        <div className="bag-summary">
            <BagSummary />
        </div>
         </div>
    </main>  
  )
}

export default Bag;
