import React from "react";
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from "./../Extras/Separator";

const MessageComponent = (props) => {
  return (
    <>
      <TouchableOpacity
       activeOpacity={0.7
       } onPress={props.handlePress}
        style={[{ padding: 15, flexDirection: 'row' }, props.opened && { padding: 15, flexDirection: 'row', backgroundColor: colors.gray300 }]}>
        <>
          <Image style={styles.cardImg} source={{uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"}} />
          <View style={{ paddingHorizontal: 15, }}>
            <Text style={styles.h1}>John Doe</Text>
            <Text style={styles.h2}>Hello Developer!</Text>
            <Text style={styles.h4}>3 mins ago</Text>
          </View>
        </>
      </TouchableOpacity>
      <Separator />
    </>
  )
}
const styles = StyleSheet.create({
  cardImg: {
    width: 50,
    height: 50,
  },
  h1: {
    color: colors.black,
    fontSize: 14,
    zIndex: 2,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginVertical: 2
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.BOLD,
    marginVertical: 2
  },
})
export default MessageComponent