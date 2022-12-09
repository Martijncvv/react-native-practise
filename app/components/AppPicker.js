import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Platform,
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
	onSelectItem,
	placeholder,
	selectedItem,
}) {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
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
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false)
									onSelectItem(item)
								}}
							/>
						)}
					></FlatList>
				</Screen>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 15,
		marginVertical: 10,
		flexDirection: 'row',

		borderRadius: 25,
		backgroundColor: defaultStyles.colors.light,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
})
