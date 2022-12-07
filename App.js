import { StatusBar } from 'expo-status-bar'
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks'
import { StyleSheet, View } from 'react-native'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import AppButton from './app/components/AppButton'
import React from 'react'

export default function App() {
	return <ListingsScreen />
}
