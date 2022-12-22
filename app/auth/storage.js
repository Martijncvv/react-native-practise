import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = 'authToken'

const storeToken = async (authtoken) => {
	try {
		await SecureStore.setItemAsync(key, authToken)
	} catch (error) {
		console.log('Error storing authToken: ', error)
	}
}

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key)
	} catch (error) {
		console.log('Error getting the authToken: ', error)
	}
}

const getUser = async () => {
	const token = await getToken()
	return token ? jwtDecode() : null
}

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key)
	} catch (error) {
		console.log('Error removing the authToken: ', error)
	}
}

export default { getUser, removeToken, storeToken }
