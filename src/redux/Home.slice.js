import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { LoadingStatus } from '../helpers';

const PROFILE_FEATURE_KEY = 'test';

const profileAdapter = createEntityAdapter();

const initialProfileState = profileAdapter.getInitialState({
  isLoggedIn: false,
  loginLoadingStatus: LoadingStatus.NOT_LOADED,
  userDetails: null,
  loginError: null,
});


export const loginAction = createAsyncThunk(
  `loginAction`,
  async (val, thunkAPI) => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        val?.email,
        val?.password,
      );
      return response.user;
    } catch (error) {
      let message = getMessageFromErrorCode(error.code);
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : message,
      );
    }
  },
);
/**
 * Slice for all reducres
 */
const homeSlice = createSlice({
  name: PROFILE_FEATURE_KEY,
  initialState: initialProfileState,
  reducers: {
    add: profileAdapter.addOne,
    remove: profileAdapter.removeOne,
    resetAuthState: (state, action) => {
      return {
        ...state,
      };
    },
    
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.loginLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoadingStatus = LoadingStatus.LOADED;
        // state.userDetails = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loginLoadingStatus = LoadingStatus.FAILED;
        state.loginError = action.payload || action.error.message;
      })
    
  
  },
});

/*
 * Export reducer for store configuration.
 */
export const homeReducer = homeSlice.reducer;

export const homeActions = homeSlice.actions;
