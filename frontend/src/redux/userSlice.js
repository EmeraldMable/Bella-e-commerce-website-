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
            state.error = false;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false
        },
        signInFail: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state,action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = false
        },
        updateUserFailure : (state,action) => {
            state.loading = false
            state.error = action.payload
        },
        signoutSuccess : (state) => {
            state.currentUser = null
            state.loading = false 
            state.error = false
        }
    }
})

export const {signInStart,signInSuccess,signInFail,
    updateUserStart,updateUserSuccess,updateUserFailure ,
     signoutSuccess} = useSlice.actions;
export default useSlice.reducer;