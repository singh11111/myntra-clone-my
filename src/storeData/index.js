import {configureStore} from "@reduxjs/toolkit"
import ItemSlice from './ItemSlice.js'
import fetchStatusSlice from "./fetchStatusSlice.js";
import bagSlice from "./bag.js";


const myntraStore = configureStore({
    reducer:{
        items: ItemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})
export default myntraStore;