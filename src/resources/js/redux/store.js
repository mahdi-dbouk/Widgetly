import { configureStore } from '@reduxjs/toolkit'
import githubReducer from './features/github/githubSlice';

export default configureStore({
  reducer: {
    github: githubReducer
  },
})