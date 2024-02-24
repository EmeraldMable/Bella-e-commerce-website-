import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading:false,
    error:false
}
const useSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false
        },
        signInFail: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {signInStart,signInSuccess,signInFail} = useSlice.actions;
export default useSlice.reducer;