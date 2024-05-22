import {useEffect} from "react";
import { fetchCashbackStart, fetchCashbackSuccess, fetchCashbackFailure } from '../store/slices/cashbackSlice';
import {useDispatch} from "react-redux";
import {Alert} from "react-native";

// Mock fetch function
const mockFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSucceed = Math.floor(Math.random() * 3) > 1;
      if (isSucceed) {
        Alert.alert('Success', 'Offer claimed successfully!');
        resolve({status: 200})
      } else {
        Alert.alert('Error', 'Failed to claim the offer!');
        reject()
      }

    }, 1000); // Simulate a network delay
  });
};

export const useFetchClaimOffer = (offerId) => {
  const dispatch = useDispatch();

  const fetchOffer = async () => {
    dispatch(fetchCashbackStart());
    try {
      const response = await mockFetch();
      if (response.status === 200) {
        dispatch(fetchCashbackSuccess(offerId));
      }
    } catch (error) {
      dispatch(fetchCashbackFailure());
    }
  };

  return {
    fetchOffer,
  }
}
