import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface cashbackState {
  data: number[];
  loading: boolean;
  error: string | null;
}

const initialState: cashbackState = {
  data: [],
  loading: false,
  error: null,
};

const cashbackSlice = createSlice({
  name: 'cashback',
  initialState,
  reducers: {
    fetchCashbackStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCashbackSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.data = [...state.data, action.payload];
    },
    fetchCashbackFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCashbackStart, fetchCashbackSuccess, fetchCashbackFailure } = cashbackSlice.actions;
export default cashbackSlice.reducer;
