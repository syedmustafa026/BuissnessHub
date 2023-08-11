import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"



const SelectBoxChip = ({ name, icon, handlePress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log('ee')}
            style={[styles.card, (name === 'Residential' && styles.active)]}>
            <View style={[styles.selectButton]}>
                <Icon
                    name='city'
                    size={40}
                    color={colors.gray} />
                <Text style={styles.h2}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        width: wp('26'),
        height: hp('12'),
        borderColor: colors.white,
        borderWidth: 0.6,
        backgroundColor: colors.gray100,
        marginBottom: 16,
        borderColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
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
    h2: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: fonts.BOLD,
    },
    selectButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        borderColor: colors.black,
        borderWidth: 2
    }
})
export default SelectBoxChip