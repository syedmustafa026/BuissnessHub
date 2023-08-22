import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native-paper"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const Profile = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: colors.white }}>
                <View style={styles.gapRow}>
                    <Text style={styles.topicHeading}>Personal Details</Text>
                    <Button
                        onPress={() => navigation.navigate('EditProfile',route.params)}
                        mode="contained"
                        icon={'pencil'}
                        style={styles.button}
                        labelStyle={styles.ButtonLabel}
                    >Edit</Button>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                    <Image style={styles.image} source={{ uri: route.params.image_url }} />
                    <View style={{ marginVertical: 12, marginHorizontal: 15, paddingHorizontal: 5, paddingVertical: 15, borderRadius: 10 }}>
                        <View style={[styles.header, {}]}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <View style={styles.row}>
                                    <Icon name='account-outline' color={colors.gray} size={20} />
                                    <Text style={styles.h2}>{route.params.name}</Text>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.row}>
                                        <Icon name='email-outline' color={colors.gray} size={20} />
                                        <Text style={styles.h2}>{route.params.email}</Text>
                                    </View>
                                    <Icon name='check-circle' color={colors.green} size={20} />
                                </View>
                                <View style={styles.row}>
                                    <Icon name='cellphone' color={colors.gray} size={20} />
                                    <Text style={styles.h2}></Text>
                                    <Icon name='close-circle' color={colors.red} size={20} />
                                </View>
                                {/* <View style={styles.row}>
                                    <Icon name='facebook' color={colors.gray} size={20} />
                                    <Text style={styles.h2}>Arora Pawas </Text>
                                    <Icon name='check-circle' color={colors.green} size={20} />
                                </View> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ padding: 20, marginTop: 30, backgroundColor: colors.white }}>
                <Text style={styles.topicHeading}> Account Settings</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={styles.selectRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name='lock-outline'
                            size={24}
                            color={colors.black} />
                        <Text style={styles.selectText}>Change your Password</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialIcon
                            name='arrow-forward-ios'
                            size={16}
                            color={colors.black} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Sure", "Are you sure you want to delete your account?", [{
                            text: "Yes",
                            onPress: () => navigation.navigate("BottomNavigator")
                        }, {
                            text: "Cancel",
                        }], {
                            cancelable: true
                        })
                    }}
                    style={styles.selectRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name='trash-can-outline'
                            size={24}
                            color={colors.black} />
                        <Text style={styles.selectText}>Delete Account</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialIcon
                            name='arrow-forward-ios'
                            size={16}
                            color={colors.black} />
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: -18
    },
    gapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 5,
        marginRight:12,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
    },
    h2: {
        fontSize: 13,
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD,
        marginVertical: 8,
        marginHorizontal: 4
    },
    topicHeading: {
        color: colors.secondary,
        fontFamily: fonts.SEMIBOLD
    },
    selectRow: {
        marginHorizontal: 5,
        marginVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    selectText: {
        fontSize: 16,
        color: colors.black,
        marginHorizontal: 15,
        fontFamily: fonts.SEMIBOLD
    },
    button: {
        width: '20%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1
    },
    ButtonLabel: {
        color: colors.primaryLight,
        fontSize: 12,
        fontFamily: fonts.SEMIBOLD
    },
})
export default Profile


// import React, { useState, useEffect } from "react"
// import { SafeAreaView, StyleSheet, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
// import { TextInput, Button } from 'react-native-paper'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import * as colors from "../../utilities/colors"
// import * as fonts from "../../utilities/fonts"

// const Profile = ({ navigation }) => {
//     const [email, setEmail] = useState("")
//     const [mobile, setMobile] = useState("")
//     const [username, setUserName] = useState("")
//     const [name, setName] = useState("")
//     const [editIcon, setEditIcon] = useState(true)

//     const handlePress = async () => {
//         try {
//             // if (name === "") throw new Error("Enter your name")
//             // if (mobile === "") throw new Error("Enter phone number")
//             //   else{
//             //   let payload = {
//             //     id: user.id,
//             //     name: name,
//             //     email: email,
//             //     mobile: mobile,
//             //     username: username
//             //   }
//             setEditIcon(!editIcon)
//             //   let details = await customerDetails(payload)
//             //   if (!details.status) throw new Error(details.message)
//             //   if (details.status) {
//             //     dispatch(registerDispatch(payload))
//             //     dispatch(loginDispatch(payload))
//             //     navigation.goBack()
//             //   }
//             //   else {
//             //     Toast(details.message)
//             //   }
//             // }
//         }
//         catch (error) {
//             console.log(error.message)
//         }
//     }
//     useEffect(() => {
//         navigation.setOptions({
//             headerRight: () => (
//                 <Text onPress={() => { editIcon === true ? setEditIcon(false) : handlePress() }} style={styles.h2}>Edit</Text>
//             ),
//         })
//     }, [])
//     return (
//         <SafeAreaView style={styles.container}>

//             <ScrollView>
//                 <View style={styles.head}>
//                     <Text style={styles.h1}>
//                         Edit Profile
//                     </Text>
//                     <Text style={styles.h4}>
//                         By tapping on edit button you can  {"\n"}
//                         change your personal information
//                     </Text>
//                 </View>
//                 <View style={styles.center}>
//                     <View style={styles.InputBoxes}>
//                         <View style={styles.InputBox}>
//                             <TextInput style={styles.Input}
//                                 theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
//                                 placeholder="Name"
//                                 value={name}
//                                 activeUnderlineColor={colors.primary}
//                                 disabled={editIcon ? true : false}
//                                 onChangeText={(value) => setName(value)}
//                             />
//                         </View>
//                         <View style={styles.InputBox}>
//                             <TextInput
//                                 theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
//                                 style={styles.Input}
//                                 placeholder="Email Address"
//                                 value={email}
//                                 activeUnderlineColor={colors.primary}
//                                 disabled={editIcon ? true : false}
//                                 onChangeText={(value) => setEmail(value)}
//                             />
//                         </View>
//                         <View style={styles.InputBox}>
//                             <TextInput
//                                 theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
//                                 style={styles.Input}
//                                 placeholder="Phone number"
//                                 activeUnderlineColor={colors.primary}
//                                 value={mobile}
//                                 disabled={editIcon ? true : false}
//                                 maxLength={11}
//                                 keyboardType="number-pad"
//                                 onChangeText={(value) => setMobile(value)}
//                             />
//                         </View>
//                         <View style={styles.InputBox}>
//                             <TextInput
//                                 theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
//                                 style={styles.Input}
//                                 placeholder="Date of Birth"
//                                 activeUnderlineColor={colors.primary}
//                                 value={mobile}
//                                 disabled={editIcon ? true : false}
//                                 maxLength={11}
//                                 keyboardType="number-pad"
//                                 onChangeText={(value) => setMobile(value)}
//                             />
//                         </View>
//                         <View style={styles.InputBox}>
//                             <TextInput
//                                 theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
//                                 style={styles.Input}
//                                 placeholder="Date of Birth"
//                                 activeUnderlineColor={colors.primary}
//                                 value={mobile}
//                                 disabled={editIcon ? true : false}
//                                 maxLength={11}
//                                 keyboardType="number-pad"
//                                 onChangeText={(value) => setMobile(value)}
//                             />
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.btn}>
//                     <Button
//                         disabled={editIcon ? true : false}
//                         mode="contained"
//                         color={colors.white}
//                         onPress={handlePress}
//                         style={styles.footerButton}
//                         contentStyle={styles.footerButtonContent}
//                         labelStyle={styles.ButtonLabel}
//                     >SAVE CHANGES</Button>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         padding: wp("5"),
//         flex: 1,
//         backgroundColor: colors.white
//     },
//     head: {
//         justifyContent: 'flex-end',
//         flex: 0.2,
//     },
//     center: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     h1: {
//         fontSize: hp("4.2"),
//         color: colors.primary,
//         marginHorizontal: wp("4"),
//         marginVertical: hp("2"),
//         fontFamily: fonts.BOLD
//     },
//     h4: {
//         fontSize: hp("2"),
//         marginHorizontal: wp("5"),
//         fontFamily: fonts.SEMIBOLD,
//         color: colors.primaryLight
//     },
//     h2: {
//         fontSize: hp("2.1"),
//         fontFamily: fonts.SEMIBOLD,
//         color: colors.secondary
//     },
//     ImageBox: {
//         borderColor: colors.white,
//         borderWidth: 1,
//         borderRadius: 100
//     },
//     InputBoxes: {
//         flex: 0.9,
//     },
//     icon: {
//         position: 'absolute',
//         right: 20
//     },
//     eye: {
//         position: 'absolute',
//         right: 30,
//         zIndex: 2,
//         alignItems: 'center'
//     },
//     InputBox: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: hp("2"),
//     },
//     Input: {
//         backgroundColor: colors.white,
//         marginHorizontal: wp("3.5"),
//         width: '90%',
//     },
//     btn: {
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     footerButton: {
//         width: '90%',
//         marginVertical: 8,
//     },
//     footerButtonContent: {
//         paddingVertical: 8,
//     },
//     ButtonLabel: {
//         fontSize: hp("2.2"),
//         color: colors.white,
//         fontFamily: fonts.SEMIBOLD
//     }
// })

// export default Profile