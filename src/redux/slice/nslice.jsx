import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'counter',
  initialState: {
    toggle: false,
    profile: false
  },
  reducers: {
    navbarToggle: (state,action) => {
      state.toggle = action.payload
    },
    profileToggle: (state,action) => {
      state.profile = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { navbarToggle,profileToggle } = navbarSlice.actions

export default navbarSlice.reducer