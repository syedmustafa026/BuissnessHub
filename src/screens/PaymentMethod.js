import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { TouchableRipple } from 'react-native-paper';

const PaymentMethod = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center', marginVertical: 16 }}>
        <Text style={styles.h1}>Choose how you want to sell your Car</Text>
      </View>
      <TouchableRipple
        rippleColor={colors.gray300}
        onPress={() => navigation.navigate('Checkout')}
        style={styles.card}>
        <View>
          <View style={{ margin: 5, paddingTop: 14,marginHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >
                Let <Text style={{ fontFamily: fonts.BOLD, fontSize: 17 }}>BuisnessHub</Text> sell it for you </Text>
              <Text style={styles.h4}>AED 99</Text>
            </View>
          </View>
          <View>
            <Text style={styles.h2}>• Hassle Free</Text>
            <Text style={styles.h2}>• Best Price</Text>
            <Text style={styles.h2}>• Secure Transactions</Text>
            <TouchableOpacity
              style={styles.backIcon}
              activeOpacity={0.5}>
              <Icon
                name="arrow-right"
                size={28}
                color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple
        rippleColor={colors.gray300}
        onPress={() => navigation.navigate('Checkout')}
        style={styles.card}>
        <View>
          <View style={{ margin: 5, paddingTop: 14,marginHorizontal: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >
                Sell it yourself </Text>
                
              <Text style={styles.h4}>AED 519*</Text>
            </View>
          </View>
          <View >
            <Text style={styles.h2}>• Place and manage your ad</Text>
            <Text style={styles.h2}>• Get contracted by buyers</Text>
            <Text style={styles.h2}>• Negotiate and sell your car</Text>
            <TouchableOpacity
              style={styles.backIcon}
              activeOpacity={0.5}>
              <Icon
                name="arrow-right"
                size={28}
                color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableRipple>
            <Text style={{fontFamily:fonts.SEMIBOLD,fontSize:14,marginHorizontal:12}}>All prices listed above are exclusive of 5% VAT.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,

  },
  h1: {
    color: colors.black,
    fontSize: 18,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
    marginBottom: 14,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 17,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 12
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    paddingHorizontal: 14,
    width: wp('80'),
    marginTop: hp('2'),
    height: 54,
    borderColor: colors.black,
    borderWidth: .6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  favIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10
  },
  backIcon: {
    position:'absolute',
    bottom:20,
    right:20,
    padding: wp('1.5'),
    borderRadius: 100,
    zIndex: 3,
    backgroundColor: colors.primaryLight,
    height: 40,
    width: 40,
  },
  card: {
    width: "98%",
    height: hp('26'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 8,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 8
  },
  cardText: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 6,
    fontFamily: fonts.REGULAR
  },
  button: {
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: colors.white,
    width: wp('25'),
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 2,
    borderWidth: 0.4,
    borderColor: colors.gray
  },
});

export default PaymentMethod;