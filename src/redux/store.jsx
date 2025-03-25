import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './slice/nslice'

export default configureStore({
  reducer: {
    navbar:navbarSlice
  },
})