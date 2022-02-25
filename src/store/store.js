import { configureStore } from '@reduxjs/toolkit'
// import newsReducer from '../features/News/News'
import authReducer from '../features/auth/authSlice'
// import { newsApi } from '../api/newsApi'
// import { eventsApi } from '../api/eventsApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import toastsReducer from '../features/toasts/toastSlice'
import newsReducer from '../features/news/newsSlice'
import eventsReducer from '../features/events/eventsSlice'

const store = configureStore({
  reducer: {
    // [newsApi.reducerPath]: newsApi.reducer,
    // [eventsApi.reducerPath]: eventsApi.reducer,
    auth: authReducer,
    toasts: toastsReducer,
    news: newsReducer,
    events: eventsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(newsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store
