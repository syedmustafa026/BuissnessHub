import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import ThinNameRow from '../Rows/ThinNameRow';
import Separator from '../Extras/Separator';

const Dropdown = (props) => {
    // ['Still with the dealer', 'Only used once since it was purchased new', 'Used very rarely, "Used once or twice a week', 'Used as primary mode of transpotation']
    return (
        <View style={{ position: 'relative' }}>
            <TouchableOpacity activeOpacity={0.6}
                onPress={props.toggleModal} style={[styles.selectButton, props.style]}>
                <Text style={styles.selectLabel}>{props.value}</Text>
                <Icon
                    name={props.modal ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    color={colors.black} />
            </TouchableOpacity>
            {props.modal && <View style={styles.dropdown}>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    data={props.data}
                    renderItem={({ item }) => (<ThinNameRow handlePress={() => {props.setValue(item),props.setModal(false)}} name={item} />)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={<Separator />}
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
    },
    selectLabel: {
        fontSize: hp("2"),
        color: colors.gray,
        textAlign: 'justify',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    dropdown: {
        width: '95%',
        padding: 8,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 3,
        backgroundColor: colors.white,
        top: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: 4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

    }
})
export default Dropdown