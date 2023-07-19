import React from "react";
import { Image, FlatList,TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import NotificationComponent from "../components/Rows/NotificationComponent";


const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={['All Residential', 'office', 'industrial', "retail", 'Iran', 'kuwait', 'UAE']}
        renderItem={({ item }) => (<NotificationComponent opened={true} />)}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      <NotificationComponent opened={true} />
      <NotificationComponent />
      <NotificationComponent />
    </SafeAreaView>
    //  <SafeAreaView style={styles.center}>
    //    <Image source={require("../assets/images/ringbell.jpeg")} style={styles.img} />
    //   <Text style={{
    //     fontFamily: fonts.REGULAR,
    //     fontSize: 24,
    //     marginHorizontal: 12,
    //     textAlign: 'center', color: colors.black
    //   }}>No Notification... yet! </Text>
    //   <Text style={{
    //     fontFamily: fonts.REGULAR,
    //     fontSize: 14,
    //     marginHorizontal: 28,
    //     textAlign: 'center', color: colors.black
    //   }}>View ad Recommendation and news by Buissness Hub</Text>
    //   <TouchableOpacity
    //     onPress={() => navigation.goBack()}
    //     activeOpacity={0.8}
    //     style={styles.button}>
    //     <Text style={{
    //       color: colors.black,
    //       paddingHorizontal: 15,
    //       fontSize: 18,
    //       fontFamily: fonts.REGULAR
    //     }}>Explore Now</Text>
    //   </TouchableOpacity> 
    //  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  center: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    alignSelf: 'center',
    paddingHorizontal: 14,
    width: wp('85'),
    height: 48,
    backgroundColor: colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginTop: 18,
    marginBottom: 40
  },
})
export default Notifications