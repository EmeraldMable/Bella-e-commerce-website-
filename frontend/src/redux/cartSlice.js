import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    loading:false,
    error:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state) => {
            state.loading = true,
            state.error = false
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer