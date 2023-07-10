import * as React from 'react';
import { Chip } from 'react-native-paper';

import * as colors from "../utilities/colors"

const ChipComponet = ({ name }) => (
    <Chip
        style={{
            marginHorizontal: 3,
            backgroundColor: colors.gray100,
            borderColor: colors.black,
            borderWidth: 1
        }}
        mode='outlined'
        closeIcon={"chevron-down"}
        onClose={() => { console.log("press") }}
        onPress={() => console.log('Pressed')}
    >{name}
    </Chip>
);

export default ChipComponet;