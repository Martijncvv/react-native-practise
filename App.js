import { StatusBar } from 'expo-status-bar'
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Button
			title="View Tweet"
			onPress={() => navigation.navigate('TweetDetails', { id: 5 })}
		/>
	</Screen>
)
const TweetDetails = ({ route, navigation }) => (
	<Screen>
		<Text>TweetDetails {route.params.id}</Text>
		<Button
			title="Back to Tweets"
			onPress={() => navigation.navigate('Tweets')}
		/>
	</Screen>
)

const Link = () => {
	const navigation = useNavigation()

	return (
		<Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
	)
}

const Stack = createStackNavigator()
// const FeedNavigator = () => (
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={
			{
				// headerStyle: { backgroundColor: 'dodgerblue' },
				// headerTintColor: 'white',
				// headerShown: false,
			}
		}
	>
		<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="RegisterScreen" component={RegisterScreen} />

		{/* <Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({ route }) => ({
				title: `Tweet #${route.params.id}`,
			})}
		/> */}
	</Stack.Navigator>
)

const Account = () => (
	<Screen>
		<Text>Account</Text>
	</Screen>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: 'tomato',
			activeTintColor: 'white',
			inActiveBackgroundColor: '#eee',
			inActiveTintColor: 'black',
		}}
	>
		<Tab.Screen
			name="Feed"
			component={ListingsScreen}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="ListingEditScreen"
			component={ListingEditScreen}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="plus" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Account"
			component={AccountScreen}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="account" size={size} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
)

export default function App() {
	const [firstName, setFirstName] = useState('')
	const [isNew, setIsNew] = useState(false)
	const [category, setCategory] = useState(categories[0])

	// useEffect(() => {
	// 	requestPermission()
	// }, [])

	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<TabNavigator />
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
