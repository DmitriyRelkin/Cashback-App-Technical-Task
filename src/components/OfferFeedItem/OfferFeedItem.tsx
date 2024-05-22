import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import dayjs from "dayjs";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

export interface IOfferFeedItem {
  retailerLogo: string;
  title: string;
  expirationDate: string;
  description: string;
  cashbackAmount: number;
}

const OfferFeedItem: React.FC = ({ item }: {item: IOfferFeedItem}) => {
  const navigation = useNavigation();
  const { retailerLogo, title, expirationDate, description, cashbackAmount, id } = item;
  const { data } = useSelector((state: any) => state.cashback);

  const isClaimed = data.indexOf(id) !== -1;
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: isClaimed ? '#BDFFB1' : 'white'}]}
      onPress={() => navigation.navigate('OfferDetails', { offer: item })}>
      <View style={styles.header}>
        <Image source={{uri: retailerLogo}} style={styles.retailerImage} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.expiration}>Expired on: {dayjs(expirationDate).format('MMM D, YYYY')}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      {!isClaimed ? (
        <Text style={styles.cashback}>Cashback: {cashbackAmount}%</Text>
      ) : (
        <Text style={styles.cashback}>Cashback Applied!</Text>
      )}

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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

export default OfferFeedItem;
