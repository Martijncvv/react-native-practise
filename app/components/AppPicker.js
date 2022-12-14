import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import PickerItem from './PickerItem'
import Screen from './Screen'

export default function AppPicker({
	icon,
	items,
	numberOfColumns = 1,
	onSelectItem,
	placeholder,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = '100%',
}) {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setModalVisible(false)} />

					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setModalVisible(false)
									onSelectItem(item)
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		padding: 15,
		flexDirection: 'row',

		borderRadius: 25,
		backgroundColor: defaultStyles.colors.light,
	},

	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
	text: {
		flex: 1,
	},
})