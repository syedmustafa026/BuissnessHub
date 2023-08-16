import axios from "axios"
import { apiUrl } from '../utilities/constants'
import AsyncStorage from "@react-native-async-storage/async-storage"

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
        const { data: response } = await axios.get(`${apiUrl}/categories/list`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const getSubCategories = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/subcategories/list`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const SaveListingTitle = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/save-listing-title`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const SubmitListingDetail = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/save-ad`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const AgreeTermsConditions = async (listing_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/listing/agree-to-terms/${listing_id}`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const Logout = async () => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/logout`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const UpdatePassword = async (listing_id) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/update-password`, payload)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}

export const User = async () => { //
    try {
        const { data: response } = await axios.get(`${apiUrl}/user-data`)
        const json = response
        return json
    } catch (error) {
        return error.message
    }
}
export const UpdateProfile = async (payload) => {
    try {
        const { data: response } = await axios.post(`${apiUrl}/update-profile`, payload)
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