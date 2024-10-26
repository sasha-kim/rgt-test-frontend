import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: Array<any>,
  hasOrdered: boolean,
}

const initialState: CartState = {
  items: [],
  hasOrdered: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setHasOrdered: (state, action: PayloadAction<boolean>) => {
      state.hasOrdered = action.payload
    },
    addItem: (state, action: PayloadAction<any>) => {
      const items = [...state.items]
      // @ts-ignore
      const index = items.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        const obj = { ...action.payload, quantity: 1 }
        items.push(obj)
      } else {
        items[index].quantity++
      }
      state.items = items;
    },
    clearCart: (state, action: PayloadAction<any>) => {
      state.items = []
    },
    removeItem: (state, action: PayloadAction<any>) => {
      const items = [...state.items]
      const index = items.findIndex(item => item.id === action.payload)
      if (index > -1) {
        items.splice(index, 1)
        state.items = items
      }
    },
    incrementItem: (state, action: PayloadAction<any>) => {
      const items = [...state.items]
      const index = items.findIndex(item => item.id === action.payload)
      if (index >=0) {
        items[index].quantity++
        state.items = items
      }
    },
    decrementItem: (state, action: PayloadAction<any>) => {
      const items = [...state.items]
      const index = items.findIndex(item => item.id === action.payload)
      if (index >=0) {
        if (items[index].quantity <= 1) {
          items.splice(index, 1)
        } else {
          items[index].quantity--
        }
        state.items = items;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrementItem, decrementItem, clearCart, setHasOrdered} = cartSlice.actions

export default cartSlice.reducer