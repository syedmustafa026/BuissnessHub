import * as React from 'react';
import { Chip } from 'react-native-paper'
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"

const CheckBoxChip = ({ name, checked, handlePress }) => {
    return (
        <Chip
            style={[{
                marginHorizontal: 3,
                backgroundColor: colors.gray100,
                borderColor: colors.black,
                borderWidth: 1
            }, checked === name && { borderWidth: 2 }]}
            mode='outlined'
            onPress={() => console.log('Pressed')}
        >
            {checked === name &&
                <Icon
                    name='check-bold'
                    size={16}
                    color={colors.black} />}
            <Text style={{ color: colors.black, fontSize: 14, paddingLeft: 8 }}>{name}</Text>
        </Chip>
    )
};

export default CheckBoxChip