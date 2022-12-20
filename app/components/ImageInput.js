import {
	StyleSheet,
	Text,
	View,
	Image,
	Touchable,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import colors from '../config/colors'

export default function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission()
	}, [])

	const requestPermission = async () => {
		const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync(false)
		if (!granted) {
			alert('Permission to access Library was denied')
		}
	}

	const handlePress = async () => {
		if (!imageUri) {
			selectImage()
		} else {
			Alert.alert('Delete', 'are you sure you want to delete this image?', [
				{
					text: 'Yes',
					onPress: () => onChangeImage(null),
				},
				{ text: 'No' },
			])
		}
	}

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			})
			if (!result.canceled) {
				onChangeImage(result.assets[0].uri)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						color={colors.medium}
						size={40}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
})
