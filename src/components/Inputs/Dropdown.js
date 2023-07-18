import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import ThinNameRow from '../Rows/ThinNameRow';

const Dropdown = (props) => {
    return (
        <View style={{ position: 'relative' }}>
            <TouchableOpacity activeOpacity={0.6}
                onPress={props.toggleModal} style={styles.selectButton}>
                <Text style={styles.selectLabel}>{props.name}</Text>
                <Icon
                    name={props.modal ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    color={colors.black} />
            </TouchableOpacity>
            {props.modal && <View style={styles.dropdown}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={true}
                    data={['Still with the dealer', 'Only used once since it was purchased new', 'Used very rarely, "Used once or twice a week', 'Used as primary mode of transpotation']}
                    renderItem={({ item }) => (<ThinNameRow handlePress={() => props.setValue} name={item} />)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>}
        </View>
    )
};
const styles = StyleSheet.create({
    selectButton: {
        width: '95%',
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        marginTop: 8
    },
    selectLabel: {
        fontSize: hp("2"),
        color: colors.gray,
        textAlign: 'justify',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontFamily: fonts.SEMIBOLD,
    },
    dropdown: {
        width: '95%',
        padding: 5,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 3,
        backgroundColor: colors.white, top: 55
    }
})
export default Dropdown