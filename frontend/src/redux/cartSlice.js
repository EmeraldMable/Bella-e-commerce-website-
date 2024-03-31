import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    list : null,
    number:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
         productInCart: (state, action) => {
           state.list = action.payload
         },
          increaseItems : (state, action) => {
          const update = state.list.findIndex((item) => item._id == action.payload.id)
          state.list[update].qty = action.payload.qty
          },
          UpdateChecked : (state, action) => {
            
           if(action.payload.id == 'all') {
            state.list.map((li) => li.isChecked = action.payload.isChecked)
              
           }else{
            const checking = state.list.findIndex((item) => item._id == action.payload.id)
            state.list[checking].isChecked = action.payload.isChecked
           }
          
          },
          UpdateCart : (state, action) => {
            state.list = action.payload
          }
        
         
    }
})

export const {productInCart , increaseItems , UpdateChecked , UpdateCart } = cartSlice.actions
export default cartSlice.reducer