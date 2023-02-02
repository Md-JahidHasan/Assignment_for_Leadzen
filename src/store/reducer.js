import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    persons: []
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers:{
        getPersons:(state) =>{

        }
    }
})


export const { getPersons } = personSlice.actions;
export default personSlice.reducer;