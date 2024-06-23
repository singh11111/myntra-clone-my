
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ItemActions } from '../storeData/ItemSlice';
import { fetchStatusActions } from '../storeData/fetchStatusSlice';

const Fetchitems = () => {
 const fetchStatus=useSelector(store => store.fetchStatus);
 const dispatch=useDispatch();
  return (
    <>
    </>
  );
};

export default Fetchitems;
