import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  messages: [],
  status: '',
}

export const clearToastsAsync = createAsyncThunk(
  'toasts/clearToastsAsync',
  async () => {
    console.log('inside clearToastsAsync')
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 6000)
    })
    return promise
  }
)

export const toastSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    createToast: (state, action) => {
      state.messages.push(action.payload)
    },
  },
  extraReducers: {
    [clearToastsAsync.pending]: (state) => {
      state.status = 'clearToastsAsync:PENDING'
    },
    [clearToastsAsync.fulfilled]: (state) => {
      state.status = 'clearToastsAsync:SUCCESS'
      state.messages = []
    },
    [clearToastsAsync.rejected]: (state) => {
      state.status = 'clearToastsAsync:FAILED'
    },
  },
})

export const { createToast } = toastSlice.actions

export default toastSlice.reducer
