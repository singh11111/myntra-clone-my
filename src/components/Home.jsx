import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../storeData/bag';
import { useNavigate } from 'react-router-dom';


function Home({item}) {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const bagItems = useSelector(store=>store.bag)
  const elementFound = bagItems.indexOf(item.id)>=0;
 const addtoButton = () =>{
 dispatch(bagActions.addOToBag(item.id));
 }
 const handleRemove = () =>{
  navigate('/Bag');
  }
  return (
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button onClick={handleRemove} type="button" className="btn btn-add-bag btn-danger">Go to Bag</button> :<button className="btn-add-bag" onClick={addtoButton}>Add to Bag</button>}
      
      
    </div>
  )
}

export default Home
