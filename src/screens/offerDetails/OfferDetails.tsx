import React, {useState} from 'react';
import {Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {useFetchClaimOffer} from "../../hooks/useClaimOffer";
import {useSelector} from "react-redux";

const OfferDetails = ({ route }) => {
  const { offer } = route.params;
  const { retailerLogo, title, description, termsAndConditions, id } = offer;
  const { fetchOffer } = useFetchClaimOffer(id);

  const { data, loading, error } = useSelector((state: any) => state.cashback);

  const isClaimed = data.indexOf(id) !== -1;

  const claimOffer = () => {
    Alert.alert(
      'Confirm Claim',
      'Are you sure you want to claim this offer?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => fetchOffer(),
        },
      ],
      { cancelable: true }
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>Failed to load offers</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: retailerLogo}} style={styles.bannerImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.terms}>{termsAndConditions}</Text>
      {!isClaimed ? (
        <TouchableOpacity style={styles.claimButton} onPress={claimOffer}>
          <Text style={styles.claimButtonText}>Claim Offer</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.appliedDescriptionContainer}>
          <Text style={styles.appliedDescription}>Cashback Applied!</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  terms: {
    fontSize: 16,
    color: '#555',
  },
  claimButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  claimButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appliedDescriptionContainer: {
    marginVertical: 16,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  appliedDescription: {
    textAlign: 'center',
    color: '#62ff00',
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default OfferDetails;
