import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: [],
}

export const toastSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    createToast: (state, action) => {
      state.messages.push(action.payload)
    },
  },
})

export const { createToast } = toastSlice.actions

export default toastSlice.reducer
