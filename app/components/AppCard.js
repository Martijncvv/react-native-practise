import React from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function AppCard({ title, subTitle, image, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card} onPress={onPress}>
				<Image style={styles.image} source={image}></Image>
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		overflow: 'hidden',
		backgroundColor: colors.white,
	},
	image: {
		width: '100%',
		height: 200,
	},
	detailsContainer: {
		padding: 20,
	},
	title: { marginBottom: 7 },
	subTitle: { color: colors.secondary, fontWeight: 'bold' },
})
