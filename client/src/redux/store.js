import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userreducer  from './userSlice.js'
import cartreducer from './cartSlice.js'
import {persistReducer , persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({user:userreducer , cart:cartreducer })

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