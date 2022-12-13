import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormPicker from '../components/AppFormPicker'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	category: Yup.object().nullable().required().label('Category'),
	description: Yup.string().label('Description'),
})

export default function ListingEditScreen() {
	const categories = [
		{
			label: 'Furniture',
			icon: 'floor-lamp',
			backgroundColor: '#fc5c65',
			value: 1,
		},
		{ label: 'Clothing', icon: 'car', backgroundColor: '#fd9644', value: 2 },
		{ label: 'Camera', icon: 'camera', backgroundColor: '#fed330', value: 3 },
		{ label: 'Games', icon: 'cards', backgroundColor: '#26de81', value: 4 },
		{
			label: 'Clothing',
			icon: 'shoe-heel',
			backgroundColor: '#2bcbba',
			value: 5,
		},
		{
			label: 'Sports',
			icon: 'basketball',
			backgroundColor: '#45aaf2',
			value: 6,
		},
		{
			label: 'Movies & Music',
			icon: 'headphones',
			backgroundColor: '#4b7bec',
			value: 7,
		},
	]

	return (
		<Screen>
			<AppForm
				validationSchema={validationSchema}
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
			>
				<AppFormField
					autoCapitalize="sentences"
					autoCorrect={false}
					maxLength={255}
					name="name"
					placeholder="Title"
					width={120}
				/>
				<AppFormField
					name="price"
					keyboardType="numeric"
					placeholder="Price"
					maxLength={8}
				/>
				<AppFormPicker
					items={categories}
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					name={'category'}
					placeholder="Category"
					width={'50%'}
				/>

				<AppFormField
					autoCapitalize="sentences"
					maxLength={255}
					multiline
					numberOfLines={3}
					autoCorrect={false}
					name="description"
					placeholder="Description"
				/>

				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({})
