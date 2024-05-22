import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IOffer {
  id: number;
  title: string;
  description: string;
  cashbackAmount: number;
  expirationDate: string;
  retailerLogo: string;
  termsAndConditions: string;
}

interface OffersState {
  data: IOffer[];
  loading: boolean;
  error: string | null;
}

const initialState: OffersState = {
  data: [],
  loading: false,
  error: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    fetchOffersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOffersSuccess: (state, action: PayloadAction<IOffer[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchOffersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchOffersStart, fetchOffersSuccess, fetchOffersFailure } = offersSlice.actions;
export default offersSlice.reducer;
