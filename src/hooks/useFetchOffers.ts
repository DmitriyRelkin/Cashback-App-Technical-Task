import {useEffect} from "react";
import { fetchOffersStart, fetchOffersSuccess, fetchOffersFailure } from '../store/slices/offersSlice';
import {useDispatch} from "react-redux";

// Mock fetch function
const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = require('../../assets/data.json');
      resolve({
        json: () => Promise.resolve(data)
      });
    }, 1000); // Simulate a network delay
  });
};

export const useFetchOffers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(fetchOffersStart());
      try {
        const response = await mockFetch();
        const data = await response.json();
        dispatch(fetchOffersSuccess(data.offers));
      } catch (error) {
        dispatch(fetchOffersFailure(error.toString()));
      }
    };

    loadData();
  }, [])
}
