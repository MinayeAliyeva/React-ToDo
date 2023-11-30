import {createSlice} from '@reduxjs/toolkit'

const formSlice=createSlice({
    name:"form",
    initialState:{
       data: []
    },
    reducers:{
      add(action,paylo){

      }
    }

})

export const formReducer=formSlice.reducer;