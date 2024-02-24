import { configureStore } from '@reduxjs/toolkit'
import reducer from './userSlice.js'

export const store = configureStore({
  reducer: {user:reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  })
})