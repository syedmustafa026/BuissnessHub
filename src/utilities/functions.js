import React, { useEffect, useState } from 'react'
import axios from "axios"
import { apiUrl } from '../utilities/constants'
import AsyncStorage from "@react-native-async-storage/async-storage"


export const getHeader = async () => {
    const USER_TOKEN = await getItem('token')
    if (USER_TOKEN != null) {
        const AuthStr = {
            Authorization: `Bearer ${USER_TOKEN}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        return AuthStr
    }
    else return null
}
export const getLoggedInUser = async () => {
    const user = await getItem('user')
    if (user != null) {
        return user
    }
    else return null
}

export const login = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/login`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const register = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/register`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const forgotPassword = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/forgot-password-check`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const resetPassword = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/reset-password`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const getListing = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/category/list`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const popularAds = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/popular-ads`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const getPostedAds = async (subcategory_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/ads/${subcategory_id}`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const getAdDetails = async (ad_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/ads/detail/${ad_id}`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const getSubCategories = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}subcategory/list`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const saveListingTitle = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/save-listing-title`, payload, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const searchListing = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/search`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const submitListingDetail = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/save-ad`, payload, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const agreeTermsConditions = async (listing_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/agree-to-terms/${listing_id}`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const verifyEmail = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/verify-email`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const verifyEmailCode = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/verify-email-code`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const logout = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/logout`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const deleteAccount = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/user/delete-account`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const removeSearchedItem = async (search_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/search/delete/${search_id}`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const deleteSavedSearches = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/search/delete-all`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const savedSearches = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/user/searches`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const updatePassword = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/update-password`, payload, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const user = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/user-data`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const getFavorites = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/user/favourites`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const addFavorite = async (listing_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/add-to-favourites/${listing_id}`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const removeFavorite = async (listing_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/remove-from-favourites/${listing_id}`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const updateProfile = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/update-profile`, payload, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const getUserAds = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/user/ads`, null, {
            headers: await getHeader()
        })
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const forgetVerificationCode = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/reset-code-check`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return 'set'
    } catch (error) {
        return error.message
    }
}

export const getItem = async (key) => {
    try {
        return JSON.parse(await AsyncStorage.getItem(key))
    } catch (error) {
        return error.message
    }
}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)

        return 'removed'
    } catch (error) {
        return error.message
    }
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()

        return 'cleared'
    } catch (error) {
        return error.message
    }
}