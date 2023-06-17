import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
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
    add: (state, action: PayloadAction<MenuItem>) => {
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
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, orderOpen, closeOrderOpen, clear } =
  cartSlice.actions
export default cartSlice.reducer
