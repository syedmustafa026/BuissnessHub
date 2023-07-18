import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { Button } from 'react-native-paper';
import ThickSeparator from '../components/Extras/ThickSeparator';

const Checkout = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center', marginVertical: 16 }}>
        <Text style={styles.h1}>Secure Checkout</Text>
      </View>
      <Text style={styles.h2}>Order Summary</Text>
      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.h4}>PAYBLE NOW</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h5}>Sign up Free</Text>
          <Text style={styles.h5}>AED 99.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h5}>VAT 5%</Text>
          <Text style={styles.h5}>AED 4.95</Text>
        </View>
        <ThickSeparator />
        <View style={styles.row}>
          <Text style={[styles.h5, { fontFamily: fonts.BOLD }]}>Total</Text>
          <Text style={[styles.h5, { fontFamily: fonts.BOLD }]}>AED 103.95</Text>
        </View>
      </View>
      <View style={[styles.card, { height: hp('29') }]}>
        <View style={styles.section}>
          <Text style={styles.h4}>PAYBLE AFTER CAR SOLD</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h5}>Success Fee</Text>
          <Text style={[styles.h5, { fontFamily: fonts.BOLD }]}>    3.99% of the final {'\n'}    selling price</Text>
        </View>

        <ThickSeparator />
        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.h5}>This fees will be deducted upon the successful sale of the car.</Text>
          <Text style={styles.h5}>All prices listed above are exclusive of 5% VAT.</Text>
        </View>
      </View>
        <Button
          onPress={() => { }}
          mode="contained"
          style={styles.button}
          labelStyle={styles.ButtonLabel}
        >Pay AED 103.95 Now</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.white,
  },
  h1: {
    color: colors.black,
    fontSize: 26,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginVertical: 14,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    marginHorizontal: 12
  },
  h5: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 16
  },
  card: {
    width: "100%",
    height: hp('33'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    marginVertical: 8
  },
  section: {
    backgroundColor: colors.gray300,
    height: 28,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    padding: 2
  },
  button: {
    marginTop:15,
    width: '90%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1
},
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.white,
    fontFamily: fonts.SEMIBOLD,
},
});

export default Checkout;