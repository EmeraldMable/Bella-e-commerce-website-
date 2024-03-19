import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list : null,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
         productInCart: (state, action) => {
           state.list = action.payload
         }
    }
})

export const {productInCart} = cartSlice.actions
export default cartSlice.reducer