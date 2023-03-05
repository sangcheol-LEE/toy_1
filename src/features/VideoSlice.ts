import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface VideoState {
   search_text: string
}

const initialState:VideoState = {
   search_text : ""
}


export const videoSlice = createSlice({
   name :"videoSlice",
   initialState,
   reducers: {
      searchText : (state,action) => {
         state.search_text = action.payload
      }
   }
})

export const { searchText } = videoSlice.actions

export default videoSlice.reducer