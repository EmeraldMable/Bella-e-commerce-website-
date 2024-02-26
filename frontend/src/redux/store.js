import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from './userSlice.js'
import {persistReducer , persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({user:reducer})

const persistConfig = {
    key:'root',
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  })
})

export const persistor = persistStore(store) 