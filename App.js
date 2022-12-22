import { NavigationContainer } from '@react-navigation/native'

import React, { useCallback, useState, useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'

import navigationTheme from './app/navigation/navigationTheme'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [user, setUser] = useState()
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		restoreUser()
	}, [])

	const restoreUser = async () => {
		const user = await authStorage.getUser()
		if (user) setUser(user)
		setIsReady(true)
	}

	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync()
		}
	}, [isReady])

	if (!isReady) {
		return null
	}

	return (
		<View onLayout={onLayoutRootView}>
			<AuthContext.Provider value={{ user, setUser }}>
				<NavigationContainer theme={navigationTheme}>
					{user ? <AppNavigator /> : <AuthNavigator />}
				</NavigationContainer>
			</AuthContext.Provider>
		</View>
	)
}
