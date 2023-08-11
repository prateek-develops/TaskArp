import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducers from './redux';

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
