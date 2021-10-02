import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {setUserEmail} = userSlice.actions;
