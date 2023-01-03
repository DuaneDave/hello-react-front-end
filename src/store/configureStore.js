import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchGreetings = createAsyncThunk("greetings/fetchGreetings", async () => {});

const greetingsSlice = createSlice({});

const store = configureStore({
    reducer: {
        greetings: greetingsSlice.reducer,
    },
});

export default store;
export { fetchGreetings };