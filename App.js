import { StatusBar } from 'expo-status-bar'
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks'
import { StyleSheet, View, TextInput, Text, Switch, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

import AppButton from './app/components/AppButton'
import AppPicker from './app/components/AppPicker'
import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput'
// import ListItem from './app/components/ListItem'

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
]

export default function App() {
	const [firstName, setFirstName] = useState('')
	const [isNew, setIsNew] = useState(false)
	const [category, setCategory] = useState(categories[0])

	useEffect(() => {
		requestPermission()
	}, [])

	const requestPermission = async () => {
		const promise = await MediaLibrary.presentPermissionsPickerAsync()
		const { granted } = await MediaLibrary.requestPermissionsAsync(true)
		console.log('granted: ', granted)
		if (!granted) {
			alert('You need to enable permission to access the library')
		}

		// const selectImage = () => {
		// 	await
		// }
	}

	return (
		<Screen>
			{/* <Button title="Select Image" onPress={selectImage} /> */}
		</Screen>
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
