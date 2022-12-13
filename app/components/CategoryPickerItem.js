import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Icon from './Icon'
export default function CategoryPickerItem({ item, onPress }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon
					name={item.icon}
					backgroundColor={item.backgroundColor}
					size={80}
				/>
			</TouchableOpacity>
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: 'center',
		width: '33%',
	},

	label: { marginTop: 5, textAlign: 'center' },
})
