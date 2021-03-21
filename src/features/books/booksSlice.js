import { createSlice } from '@reduxjs/toolkit'

export const  booksSlice = createSlice({
    name: 'books',
    initialState:[],
    reducers:{
        fetch: (state,action) => {
            return Object.assign([], state, action.payload);
        }
    }
})

export const { fetch } = booksSlice.actions;
export default booksSlice.reducer;