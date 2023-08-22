// import React, { useState } from "react";
// import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import { Button } from "react-native-paper"
// import * as colors from "../../utilities/colors"
// import * as fonts from "../../utilities/fonts"
// import Separator from "../../components/Extras/Separator";

// const EditProfile = ({ navigation, route }) => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.imgCon}>
//                 <TouchableOpacity activeOpacity={0.6}>
//                 <Image style={styles.image} source={{ uri: route.params.image_url }} />
//                 <Icon style={{ position: 'absolute', bottom: 0, left: 70 }} name='pencil-circle' color={colors.gray} size={28} />
//                 </TouchableOpacity>
//             </View>
//             <View style={{ marginHorizontal: 20 }}>
//                 <Text style={styles.h2}>Name</Text>
//                 <TouchableOpacity style={styles.selectRow}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Text style={styles.selectText}>{route.params.name}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Icon name='pencil' color={colors.gray} size={20} />
//                     </View>
//                 </TouchableOpacity>
//                 <Separator />
//             </View>
//             <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
//                 <Text style={styles.h2}>Mobile Number</Text>
//                 <TouchableOpacity style={styles.selectRow}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Text style={styles.selectText}></Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Icon name='pencil' color={colors.gray} size={20} />
//                     </View>
//                 </TouchableOpacity>
//                 <Separator />
//             </View>
//             <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
//                 <Text style={styles.h2}>Facebook</Text>
//                 <TouchableOpacity style={styles.selectRow}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Text style={styles.selectText}>Verified</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Icon name='check-circle' color={colors.green} size={20} />
//                     </View>
//                 </TouchableOpacity>
//                 <Separator />
//             </View>
//         </SafeAreaView>

//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         alignSelf: 'center',
//         marginVertical: -18
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: 250,
//     },
//     imgCon: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative'
//     },
//     image: {
//         width: 100,
//         height: 100,
//         marginVertical: 10,
//         marginRight: 12,
//         borderRadius: 100,
//         resizeMode: 'contain'
//     },
//     heading: {
//         color: colors.black,
//         fontSize: 26,
//         fontFamily: fonts.BOLD,
//     },
//     h1: {
//         color: colors.black,
//         fontSize: 16,
//         zIndex: 2,
//         marginTop: 12,
//         fontFamily: fonts.BOLD,

//         textAlign: 'center',
//     },
//     h2: {
//         fontSize: 14,
//         color: colors.black,
//         fontFamily: fonts.BOLD,
//         marginHorizontal: 8,
//     },
//     text: {
//         color: colors.gray,
//         fontSize: 14,
//         fontFamily: fonts.SEMIBOLD,
//         marginHorizontal: wp('2')
//     },
//     signup: {
//         color: colors.primaryLight,
//         marginTop: 16,
//         paddingHorizontal: 15,
//         marginBottom: 14,
//         fontSize: 14,
//         fontFamily: fonts.SEMIBOLD,
//         textAlign: 'center'
//     },
//     topicHeading: {
//         color: colors.secondary,
//         fontFamily: fonts.SEMIBOLD
//     },
//     selectRow: {
//         marginHorizontal: 5,
//         marginVertical: 15,
//         justifyContent: 'space-between',
//         flexDirection: 'row'
//     },
//     selectText: {
//         fontSize: 16,
//         marginLeft:8,
//         color: colors.gray,
//         fontFamily: fonts.SEMIBOLD
//     },
//     button: {
//         width: '20%',
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center',
//         backgroundColor: colors.white,
//         borderColor: colors.gray,
//         borderWidth: 1
//     },
//     ButtonLabel: {
//         color: colors.primaryLight,
//         fontSize: 16,
//         fontFamily: fonts.SEMIBOLD
//     },
// })
// export default EditProfile




import React, { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button, Switch } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const EditProfile = ({ navigation, route }) => {
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [username, setUserName] = useState("")
    const [name, setName] = useState("")
    const [editIcon, setEditIcon] = useState(true)
    const [Facebook, setFacebook] = useState(false);
    const [Instagram, setInstagram] = useState(false);
    const handlePress = async () => {
        try {
            // if (name === "") throw new Error("Enter your name")
            // if (mobile === "") throw new Error("Enter phone number")
            //   else{
            //   let payload = {
            //     id: user.id,
            //     name: name,
            //     email: email,
            //     mobile: mobile,
            //     username: username
            //   }
            setEditIcon(!editIcon)
            //   let details = await customerDetails(payload)
            //   if (!details.status) throw new Error(details.message)
            //   if (details.status) {
            //     dispatch(registerDispatch(payload))
            //     dispatch(loginDispatch(payload))
            //     navigation.goBack()
            //   }
            //   else {
            //     Toast(details.message)
            //   }
            // }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Text onPress={() => { editIcon === true ? setEditIcon(false) : handlePress() }} style={styles.h2}>Edit</Text>
            ),
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <View style={styles.head}>
                    <View style={styles.imgCon}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Image style={styles.image} source={{ uri: route.params.image_url }} />
                            <Icon style={{ position: 'absolute', bottom: 0, left: 70 }} name='pencil-circle' color={colors.gray} size={28} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.center}>
                    <View style={styles.InputBoxes}>
                        <View style={styles.InputBox}>
                            <TextInput style={styles.Input}
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                placeholder="Name"
                                value={name}
                                activeUnderlineColor={colors.primary}
                                disabled={editIcon ? true : false}
                                onChangeText={(value) => setName(value)}
                            />
                        </View>
                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Email Address"
                                value={email}
                                activeUnderlineColor={colors.primary}
                                disabled={editIcon ? true : false}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>
                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Phone number"
                                activeUnderlineColor={colors.primary}
                                value={mobile}
                                disabled={editIcon ? true : false}
                                maxLength={11}
                                keyboardType="number-pad"
                                onChangeText={(value) => setMobile(value)}
                            />
                        </View>
                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Date of Birth"
                                activeUnderlineColor={colors.primary}
                                value={mobile}
                                disabled={editIcon ? true : false}
                                maxLength={11}
                                keyboardType="number-pad"
                                onChangeText={(value) => setMobile(value)}
                            />
                        </View>
                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Gender"
                                activeUnderlineColor={colors.primary}
                                value={mobile}
                                disabled={editIcon ? true : false}
                                maxLength={11}
                                keyboardType="number-pad"
                                onChangeText={(value) => setMobile(value)}
                            />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Icon
                                    name='facebook'
                                    size={22}
                                    color={colors.blue} />
                                <Text style={styles.h4}>Facebook  </Text>
                            </View>
                            <Switch value={Facebook} color={colors.blue} onValueChange={() => setFacebook(!Facebook)} />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Icon
                                    name='instagram'
                                    size={22}
                                    color={colors.pink} />
                                <Text style={styles.h4}>Instagram  </Text>
                            </View>
                            <Switch value={Instagram} color={colors.pink} onValueChange={() => setInstagram(!Instagram)} />
                        </View>
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button
                        disabled={editIcon ? true : false}
                        mode="contained"
                        onPress={handlePress}
                        style={styles.footerButton}
                        contentStyle={styles.footerButtonContent}
                        labelStyle={styles.ButtonLabel}
                    >SAVE CHANGES</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: wp("5"),
        flex: 1,
        backgroundColor: colors.white
    },
    head: {
        justifyContent: 'flex-end',
        flex: 0.2,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4,
        marginHorizontal: 6,
    },
    imgCon: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginRight: 12,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    h1: {
        fontSize: hp("4.2"),
        color: colors.primary,
        marginHorizontal: wp("4"),
        marginVertical: hp("2"),
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        marginHorizontal: wp("5"),
        fontFamily: fonts.SEMIBOLD,
        color: colors.primaryLight
    },
    h2: {
        fontSize: hp("2.1"),
        fontFamily: fonts.SEMIBOLD,
        color: colors.secondary
    },
    ImageBox: {
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 100
    },
    InputBoxes: {
        flex: 0.9,
    },
    icon: {
        position: 'absolute',
        right: 20
    },
    eye: {
        position: 'absolute',
        right: 30,
        zIndex: 2,
        alignItems: 'center'
    },
    InputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp("1"),
    },
    Input: {
        backgroundColor: colors.white,
        marginHorizontal: wp("3.5"),
        width: '90%',
    },
    btn: {
        justifyContent: "center",
        alignItems: "center"
    },
    footerButton: {
        width: '90%',
        marginVertical: 8,
        backgroundColor: colors.primary
    },
    footerButtonContent: {
        paddingVertical: 8,
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD
    }
})

export default EditProfile