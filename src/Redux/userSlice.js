import { combineReducers, createSlice} from '@reduxjs/toolkit'
import { ErrorMessage } from 'formik';

    const initialState =  {
        currentUser : null,
        loading : false,
        error : false,
        
    }

    

export const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginLoading : (state) =>{
            state.loading = true
        },

        loginSuccess : (state, action) =>{
            state.loading = false;
            state.currentUser = action.payload
        },
        
        loginFailure : (state, action) =>{
            state.loading = false
            state.error = action.payload
        },
        signupFailure : (state, action) =>{
            state.loading = false
            state.error = action.payload
        },
        loadingReset : (state) =>{
            state.loading = false
            state.error = false
            
        },
        logout : (state) =>{
            return initialState;
        },

    }
})

export const {loginLoading, loginSuccess, loginFailure, logout, loadingReset, signupFailure} = userSlice.actions;
export default userSlice.reducer;