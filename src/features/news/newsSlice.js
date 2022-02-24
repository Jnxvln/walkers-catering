import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  articles: [],
  status: '',
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  return axios.get('http://localhost:3001/api/news').then((res) => {
    return res.data
  })
})

export const deleteArticleById = createAsyncThunk(
  'news/deleteArticleById',
  async ({ id, token }) => {
    return axios
      .delete(`http://localhost:3001/api/news/${id}`, {
        headers: {
          'x-auth-token': token.toString(),
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => console.error(err))
  }
)

export const updateArticleById = createAsyncThunk(
  'news/updateArticleById',
  async (updArticle) => {
    const token = JSON.parse(sessionStorage.getItem('user')).token.toString()

    return axios
      .post(`http://localhost:3001/api/news/${updArticle._id}`, updArticle, {
        headers: {
          'x-auth-token': token,
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => console.error(err))
  }
)

export const createNews = createAsyncThunk('news/createNews', async (data) => {
  console.log('NEWS TO SUBMIT: ', data)
  return axios
    .post('http://localhost:3001/api/news', data.news, {
      headers: {
        'x-auth-token': data.token,
      },
    })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.articles.push(action.payload)
    },
  },
  extraReducers: {
    // #region fetchNews
    [fetchNews.pending]: (state) => {
      state.status = 'fetchNews:PENDING'
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = 'fetchNews:SUCCESS'
      // console.log('action: ', action)
      state.articles = action.payload
    },
    [fetchNews.rejected]: (state) => {
      state.status = 'fetchNews:FAILED'
    },
    // #endregion
    // #region deleteArticleById
    [deleteArticleById.pending]: (state) => {
      state.status = 'deleteArticleById:PENDING'
    },
    [deleteArticleById.fulfilled]: (state, action) => {
      state.status = 'deleteArticleById:SUCCESS'
      state.articles = state.articles.filter(
        (a) => a._id !== action.payload._id
      )
    },
    [deleteArticleById.rejected]: (state) => {
      state.status = 'deleteArticleById:FAILED'
    },
    // #endregion
    // #region createNews
    [createNews.pending]: (state) => {
      state.status = 'createNews:PENDING'
    },
    [createNews.fulfilled]: (state, action) => {
      state.status = 'createNews:SUCCESS'
      state.articles.push(action.payload)
    },
    [createNews.rejected]: (state) => {
      state.status = 'createNews:FAILED'
    },
    // #endregion
    // #region updateArticleById
    [updateArticleById.pending]: (state) => {
      state.status = 'updateArticleById:PENDING'
    },
    [updateArticleById.fulfilled]: (state, action) => {
      state.status = 'updateArticleById:SUCCESS'
      const articleIndex = state.articles.findIndex(
        (a) => a._id === action.payload._id
      )
      state.articles[articleIndex]['title'] = action.payload.title
      state.articles[articleIndex]['content'] = action.payload.content
      state.articles[articleIndex]['link'] = action.payload.link
      state.articles[articleIndex]['linkText'] = action.payload.linkText
    },
    [updateArticleById.rejected]: (state) => {
      state.status = 'updateArticleById:FAILED'
    },
    // #endregion
  },
})

export const { addNews } = newsSlice.actions

export default newsSlice.reducer
