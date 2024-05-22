import React from 'react';
import { Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import {useSelector} from "react-redux";
import OfferFeedItem from "../../components/OfferFeedItem/OfferFeedItem";

const OfferFeed = () => {
  const { data, loading, error } = useSelector((state: any) => state.offers);

  const renderOffer = ({ item }) => (
    <OfferFeedItem item={item} />
  )

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>Failed to load offers</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderOffer}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    alignItems: 'center',
  },
  retailerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  expiration: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#810000',
    fontWeight: "700"
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  cashback: {
    fontSize: 16,
    color: '#099d35',
    fontWeight: "700"
  },
});

export default OfferFeed;
