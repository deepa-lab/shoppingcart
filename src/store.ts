import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice}  from './components/CartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { productSlice} from './components/ProductSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'products']
}
const reducer = combineReducers({
  products: productSlice.reducer,
    cart: cartSlice.reducer,
   
})
const persistedReducer = persistReducer(persistConfig, reducer)//eslint-disable-line

export const store = configureStore({
  reducer: persistedReducer
}
  )
export const persistor = persistStore(store)//eslint-disable-line

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

