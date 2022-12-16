import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import AppButton from '../components/AppButton.js'
import colors from '../config/colors'
import routes from '../navigation/routes'

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>
			<AppButton
				title="Login"
				color="primary"
				onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
			/>
			<AppButton
				title="Register"
				color="secondary"
				onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
			/>
			{/* <View style={styles.loginButton}></View> */}
			<View style={styles.registerButton}></View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		blurRadius: 10,
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingHorizontal: 15,
	},

	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20,
	},
})

export default WelcomeScreen
