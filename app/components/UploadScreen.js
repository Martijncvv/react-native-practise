import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import AppText from './AppText'
import colors from '../config/colors'

export default function UploadScreen({
	onDone,
	progress = 0,
	visible = false,
}) {
	return (
		<Modal visible={visible} style={styles.container}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						color={colors.primary}
						progress={progress}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						onAnimationFinish={onDone}
						source={require('../assets/animations/done.json')}
						style={styles.animation}
					/>
				)}
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	animation: {
		width: 150,
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
})
