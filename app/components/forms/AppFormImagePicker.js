import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

export default function AppFormImagePicker({ name }) {
	const { errors, setFieldValue, touched, values } = useFormikContext()
	const imageUris = values[name]

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri])
	}
	const handleRemove = (uri) =>
		imageUrisValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		)

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

const styles = StyleSheet.create({})
