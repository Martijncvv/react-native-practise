import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

// import { useFormikContext } from 'formik'
import listingsApi from '../api/listings'
import useLocation from '../hooks/useLocation'

import Screen from '../components/Screen'

import AppFormPicker from '../components/AppFormPicker'
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormImagePicker,
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import UploadScreen from '../components/UploadScreen'

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image.'),
})

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

export default function ListingEditScreen() {
	const location = useLocation()
	const [uploadVisible, setUploadVisible] = useState(false)
	const [progress, setProgress] = useState(0)

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0)
		setUploadVisible(true)
		const result = await listingsApi.addListing(
			{ ...listing, location },
			(progress) => setProgress(progress)
		)

		if (!result.ok) {
			setUploadVisible(false)
			return alert('Could not save the listing')
		}

		resetForm()
	}

	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<AppFormImagePicker name="images" />
				<AppFormField maxLength={255} name="title" placeholder="Title" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<AppFormPicker
					items={categories}
					name="category"
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					width="50%"
				/>
				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
})
