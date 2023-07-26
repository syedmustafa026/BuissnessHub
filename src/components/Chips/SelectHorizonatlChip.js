import * as React from 'react';
import { StyleSheet, View, } from 'react-native'
import { Chip } from 'react-native-paper';

import * as colors from "../../utilities/colors"

const SelectHorizontalChip = ({ name,selected, handlePress }) => (
    <View style={{marginTop: 12}}>
        <Chip
            style={[styles.chip, (name === selected && styles.active)]}
            mode='outlined'
            onPress={() => console.log('Pressed')}
        >{name}
        </Chip>
    </View>
)
const styles = StyleSheet.create({
    chip: {
        marginHorizontal: 3,
        backgroundColor: colors.gray100,
        borderColor: colors.black,
        borderWidth: 0.7
    },
    active:{
        borderColor: colors.primary,
        borderWidth: 1
    }
})
export default SelectHorizontalChip;