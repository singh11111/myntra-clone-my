import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addOToBag: (state,action) => {
             state.push(action.payload);
        },
        removeToBag: (state,action) => {
          return state.filter(itemId=>itemId!== action.payload);
       }
    }
});

export const bagActions =  bagSlice.actions; 
export default bagSlice;
