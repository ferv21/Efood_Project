import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../components/CardapioLista'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.items.find((item) => item.id === action.payload.id)
      const item = action.payload
      state.items.push({ ...item })
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
