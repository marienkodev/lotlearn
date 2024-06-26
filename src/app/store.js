import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import sessionReducer from '../features/session/sessionSlice';


export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    categories: categoriesReducer,
    session: sessionReducer,
  },
});
