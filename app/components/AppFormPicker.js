import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from './AppPicker'

import ErrorMessage from './forms/ErrorMessage'

export default function AppFormPicker({
	items,
	name,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
	width = '100%',
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext()

	return (
		<View>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	)
}

const styles = StyleSheet.create({})
