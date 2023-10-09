import { configureStore } from '@reduxjs/toolkit'
import githubReducer from './features/github/githubSlice';
import widgetReducer from './features/widget/widgetSlice';

export default configureStore({
  reducer: {
    github: githubReducer,
    widget: widgetReducer
  },
})