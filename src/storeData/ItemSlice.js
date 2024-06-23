import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEM } from "../data/items";


const ItemSlice = createSlice({
    name: 'item',
    initialState: DEFAULT_ITEM,
    reducers: {
        addInitialItems: (state, action) => {
            return state;
        }
    }
});

export const ItemActions = ItemSlice.actions; 
export default ItemSlice;
