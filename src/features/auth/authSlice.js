import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).token
    : null,
  currentMember: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).member
    : null,
  status: null,
}

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ email, password }, { dispatch }) => {
    return axios
      .post('http://localhost:3001/api/auth', { email, password })
      .then((res) => {
        // dispatch(setCurrentMember(res.data))
        return res.data
      })
  }
)

export const getMemberAsync = createAsyncThunk(
  'auth/getMemberAsync',
  async (_, { dispatch, getState }) => {
    axios
      .get('http://localhost:3001/api/auth/member', {
        headers: {
          'x-auth-token': getState().auth.token,
        },
      })
      .then((res) => {
        dispatch(setCurrentMember(res.data))
      })
      .catch((err) => console.error(err))
  }
)

export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  (_, { dispatch }) => {
    dispatch(memberLogOut())
  }
)

export const isAuthenticated = () => {
  return sessionStorage.getItem('mtkn')
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentMember: (state, action) => {
      state.currentMember = action.payload
    },
    memberLogOut: (state) => {
      sessionStorage.removeItem('user')
      // console.log('user: ', sessionStorage.getItem('user'))
      state = {
        token: null,
        currentMember: null,
        status: 'LOGOUT:SUCCESS',
      }
    },
  },
  extraReducers: {
    // #region loginAsync
    [loginAsync.pending]: (state) => {
      state.currentMember = null
      state.status = 'LOGIN:PENDING'
    },
    [loginAsync.fulfilled]: (state, action) => {
      const { member, token } = action.payload

      sessionStorage.setItem('user', JSON.stringify(action.payload))

      if (!member || !token) {
        state.currentMember = null
        state.token = null
        state.status = 'LOGIN:REJECTED'
      } else if (member && token) {
        state.currentMember = member
        state.token = token
        state.status = 'LOGIN:SUCCESS'
      }
    },
    [loginAsync.rejected]: (state) => {
      state = { ...initialState, status: 'LOGIN:FAILED' }
    },
    // #endregion

    // #region logoutAsync
    [logoutAsync.pending]: (state) => {
      state.status = 'LOGOUT:PENDING'
    },
    [logoutAsync.fulfilled]: (state) => {
      state.status = 'LOGOUT:SUCCESS'
      state.currentMember = null
      state.token = null
    },
    [logoutAsync.rejected]: (state) => {
      state.stats = 'LOGOUT:FAILED'
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
