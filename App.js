import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Button,
	Alert,
	Platform,
	ViewPort,
} from 'react-native'

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks'

export default function App() {
	console.log(useDeviceOrientation())
	let { landscape } = useDeviceOrientation()

	const [counter, setCounter] = useState(0)

	const handlePress = () => {
		console.log('Text Clicked')
	}
	const handleCompPress = () => {
		setCounter(counter + 1)
	}
	return (
		// <SafeAreaView style={styles.container}>
		<View
			style={{
				backgroundColor: '#FFF',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 300,
					alignSelf: 'flex-start',
				}}
			/>
			<View style={{ backgroundColor: 'gold', width: 100, height: 200 }} />
			<View
				style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }}
			/>
		</View>

		/* <StatusBar style="auto" /> */
		// </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: Platform.OS === 'android' ? 'white' : 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
