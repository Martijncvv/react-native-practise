import {
	StyleSheet,
	Text,
	Touchable,
	View,
	TouchableOpacity,
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 80,
		width: 80,
		bottom: 20,
		alignItems: 'center',
		justifyContent: 'center',

		borderColor: colors.white,
		borderWidth: 10,
		borderRadius: 40,
	},
})
