import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from '../../utilities/functions'

import SelectHorizontalChip from "../../components/Chips/SelectHorizonatlChip";
import { Checkbox } from "react-native-paper";
import Separator from "../../components/Extras/Separator";
import Toast from "../../components/Extras/Toast";
import VerifiedModal from "../../components/Modals/VerifiedModal";

const MyAds = ({ navigation }) => {
  const [checked, setChecked] = useState(false)
  const [ads, setAds] = useState([])
  const [verifiedModal, setVerifiedModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [option, setOption] = useState('all')

  const getMyAds = async () => {
    try {
      const response = await functions.getUserAds()
      if (response) {
        const selected = response.filter(value => value.status == option)
        setAds(option === "all" ? response : selected)
      }
      setLoading(false)
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  const deleteMyAd = async (id) => {
    Alert.alert("Sure", "Are you sure you want to delete this ad?", [{
      text: "Yes",
      onPress: async () => {
        const response = await functions.deleteMyAd({
          ad_id: id
        })
        if (response.status) {
          Toast("Deleted successfully")
          navigation.goBack()
        }
        else {
          Toast(response.message)
        }
      }
    }, {
      text: "Cancel",
    }], {
      cancelable: true
    })
  }
  useEffect(() => {
    getMyAds()
  }, [option])

  const Item = (item) => {
    const data = item.item

    return (
      <View >
        <VerifiedModal visible={verifiedModal} setModalVisible={setVerifiedModal} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, }}>
          <Icon onPress={() => deleteMyAd(data.id)} name="trash-can-outline" style={{ margin: 10, alignSelf: 'center' }} size={24} color={colors.primaryLight} />
          <Image style={styles.cardImg} source={{ uri: data?.main_image_url }} />
          <View >
            <Text style={styles.h1}>{data.title || "Untitled Ad"}</Text>
            <View style={styles.badge}>
              <Text style={styles.h2}>{data.status}</Text>
            </View>
            <Text style={styles.h4}>{data.created_at_time_diff}</Text>
          </View>
        </View>
        <Separator />
        {data.status === "draft" ? <Text onPress={() => navigation.navigate('PlaceAd')} style={[styles.h1, { textAlign: 'right', marginVertical: 6, color: colors.primary }]}>Coninue Ad posting</Text> :
          <Text onPress={() => navigation.navigate('AdDetails', data)} style={[styles.h1, { textAlign: 'right', marginVertical: 6, color: colors.primary }]}>Show my ad</Text>}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <FlatList
          data={['All', 'Pending', 'Draft', 'Rejected', 'Live']}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (<SelectHorizontalChip handlePress={() => setOption(item.toLowerCase(), setLoading(true))} name={item.toLowerCase()} selected={option} />)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity onPress={() => setVerifiedModal(true)} activeOpacity={0.8} style={styles.banner} >
        <View style={{
          backgroundColor: '#cfe1fc',
          width: '27%',
          height: 90,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }}>
          <MaterialIcon name="verified" size={35} color={colors.primary} />
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 16 }}>
          <View>
            <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black }}>Become a verified user</Text>
            <Text style={{ fontFamily: fonts.SEMIBOLD, fontSize: 12, color: colors.gray }}>Get a verified badge and</Text>
            <Text style={{ fontFamily: fonts.SEMIBOLD, fontSize: 12, color: colors.gray }}>Attracts more buyer to your ads</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" style={{ margin: 20, alignSelf: 'center' }} size={20} color={colors.primaryLight} />
        </View>
      </TouchableOpacity>
      {loading ?
        <View style={styles.errorContainer}>
          <ActivityIndicator animating={true} size={"small"} color={colors.primary} />
        </View> :
        <FlatList
          data={ads}
          renderItem={({ item }) => (<Item item={item} />)}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  head: {
    paddingHorizontal: 6,
    backgroundColor: colors.gray200,
    paddingBottom: 6
  },
  cardImg: {
    width: 60,
    height: 60,
  },
  h1: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 12,

  },
  badge: {
    backgroundColor: colors.gray,
    borderRadius: 20,
    width: 80,
    padding: 2,
    marginHorizontal: 12,
    color: colors.white,
    marginVertical: 4,
  },
  h2: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.MEDIUM,
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  banner: {
    backgroundColor: '#cfe1fc',
    width: "88%",
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    height: 90,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default MyAds