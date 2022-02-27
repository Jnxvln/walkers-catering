import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  currentMember: localStorage.getItem('member') || null,
  status: null,
}

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ email, password }) => {
    return axios({
      method: 'POST',
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: 'http://localhost:3001/api/auth/login',
    })
      .then((res) => {
        if (!res) throw new Error('LOGIN: No response from server')
        if (!res.data) {
          throw new Error(
            'LOGIN: Response from server good, but no DATA property attached'
          )
        } else {
          const { member } = res.data
          localStorage.setItem('member', member)
          return member
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
)

export const getMemberAsync = createAsyncThunk(
  'auth/getMemberAsync',
  async () => {
    console.log('inside getMemberAsync...')
    return axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3001/api/auth/member',
    }).then((res) => {
      if (res.data.email) {
        localStorage.setItem('member', res.data)
      }
      return res.data
    })
  }
)

export const logoutAsync = createAsyncThunk('auth/logoutAsync', async () => {
  return axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:3001/api/auth/logout',
  })
    .then(() => localStorage.removeItem('member'))
    .catch((err) => console.error(err))
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentMember: (state, action) => {
      state.currentMember = action.payload
    },
  },
  extraReducers: {
    // #region loginAsync
    [loginAsync.pending]: (state) => {
      state.status = 'LOGIN:PENDING'
    },
    [loginAsync.fulfilled]: (state, action) => {
      // console.log('FULFILLED: MEMBER: ', action.payload)

      if (!action.payload) {
        state.status = 'LOGIN:REJECTED'
      } else {
        state.currentMember = action.payload
        state.status = 'LOGIN:SUCCESS'
      }
    },
    [loginAsync.rejected]: (state) => {
      state.status = 'LOGIN:FAILED'
    },
    // #endregion
    // #region logoutAsync
    [logoutAsync.pending]: (state) => {
      state.status = 'LOGOUT:PENDING'
    },
    [logoutAsync.fulfilled]: (state) => {
      localStorage.removeItem('member')
      state.status = 'LOGOUT:SUCCESS'
      state.currentMember = null
    },
    [logoutAsync.rejected]: (state) => {
      state.status = 'LOGOUT:FAILED'
    },
    // #endregion
    // #region getMemberAsync
    [getMemberAsync.pending]: (state) => {
      state.status = 'getMemberAsync:PENDING'
    },
    [getMemberAsync.fulfilled]: (state, action) => {
      state.status = 'getMemberAsync:SUCCESS'
      state.currentMember = action.payload
    },
    [getMemberAsync.rejected]: (state) => {
      state.status = 'getMemberAsync:FAILED'
    },
    // #endregion
  },
})

export const { setCurrentMember, memberLogOut } = authSlice.actions

export default authSlice.reducer
