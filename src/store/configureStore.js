import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(
      'http://[::1]:3000/api/v1/greetings'
    );
    const data = await response.json();
    return data;
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchGreetings.fulfilled, (_state, action) => {
      return action.payload;
    }),
});

const store = configureStore({
  reducer: {
    greetings: greetingsSlice.reducer,
  },
});

export default store;
export { fetchGreetings };
