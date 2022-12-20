import { StatusBar } from 'expo-status-bar'
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks'
import { NavigationContainer } from '@react-navigation/native'

// import { AsyncStorage } from '@react-navigation/async-storage'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'

import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import FeedNavigator from './app/navigation/FeedNavigator'
import AccountNavigator from './app/navigation/AccountNavigator'

import navigationTheme from './app/navigation/navigationTheme'
// import ListItem from './app/components/ListItem'

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
]

export default function App() {
	const netInfo = useNetInfo()

	const demo = async () => {
		try {
			await AsyncStorage.setIem('person', JSON.stringify({ id: 1 }))
			const value = await AsyncStorage.getItem('person')
			const person = JSON.parse(value)
			console.log(person)
		} catch (error) {
			console.log(error)
		}
	}
	// console.log('netInfo: ', netInfo)
	// useEffect(() => {
	// 	requestPermission()
	// }, [])

	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <StackNavigator /> */}

			{/* <AuthNavigator /> */}
			{/* <AppNavigator /> */}
			{/* <AccountNavigator /> */}

			<AppNavigator />
		</NavigationContainer>
		/* <Button title="Select Image" onPress={selectImage} /> */
		// <LoginScreen />
		// <ListingEditScreen />
		// <MessagesScreen />
		// <ListItem />
		// <Screen>
		// 	{/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
		// 	{/* <AppTextInput placeholder="testest" icon="email" /> */}
		// 	{/* <Text>{firstName}</Text> */}
		// 	<AppPicker
		// 		icon="apps"
		// 		items={categories}
		// 		placeholder="Category"
		// 		selectedItem={category}
		// 		onSelectItem={(item) => setCategory(item)}
		// 	/>
		// 	<AppTextInput icon="email" placeholder="Email" />
		// </Screen>
	)
	//  <ListingsScreen />
}

const styles = StyleSheet.create({
	midButton: {
		width: 50,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: 'tomato',
		borderRadius: 25,
	},
})
