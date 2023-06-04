import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../components/CardapioLista'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  isOrderOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrderOpen: false
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
    },
    orderOpen: (state) => {
      state.isOrderOpen = true
    },
    closeOrderOpen: (state) => {
      state.isOrderOpen = false
    }
  }
})

export const { add, remove, open, close, orderOpen, closeOrderOpen } =
  cartSlice.actions
export default cartSlice.reducer
