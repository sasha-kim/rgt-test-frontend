import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { menuApi } from './services/menu'
import {cartSlice} from "./reducers/cartSlice";

const rootReducer = combineReducers({
  [menuApi.reducerPath]: menuApi.reducer,
})

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
})


// export type RootState = ReturnType<typeof rootReducer>

setupListeners(store.dispatch)

