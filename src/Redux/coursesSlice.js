import { combineReducers, createSlice} from '@reduxjs/toolkit'
import { ErrorMessage } from 'formik';

    const initialState =  {
        courses : [],
        loading : false,
        error : false,
        
    }

    

export const couresSlice =  createSlice({
    name: 'courses',
    initialState,
    reducers: {
        fetchLoading : (state) =>{
            state.loading = true
        },
        addError : (state, action) =>{
            state.error = action.payload
            state.loading = false
        },

        addToCourses : (state, action) =>{
            state.courses = action.payload
            state.loading = false
        },

    }
})

export const {addError, addToCourses, fetchLoading} = couresSlice.actions;
export default couresSlice.reducer;