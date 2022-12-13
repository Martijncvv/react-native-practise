import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(1).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
	passwordCheck: Yup.string()
		.required()
		.min(4)
		.label('PasswordCheck')
		.oneOf([Yup.ref('password'), null], "Passwords don't match!"),
})
// const validationSchema = Yup.object().shape({
// 	title: Yup.string().required().min(1).label('Title'),
// 	price: Yup.number().required().min(1).max(10000).label('Price'),
// 	category: Yup.object().nullable().required().label('Category'),
// 	description: Yup.string().label('Description'),
// })

export default function RegisterScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				validationSchema={validationSchema}
				initialValues={{ name: '', email: '', password: '', passwordCheck: '' }}
				onSubmit={(values) => console.log(values)}
			>
				<AppFormField
					autoCapitalize="sentences"
					autoCorrect={false}
					icon="account"
					name="name"
					keyboardType="default"
					placeholder="Name"
					textContentType="name"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					name="email"
					keyboardType="email-address"
					placeholder="Email"
					textContentType="emailAddress"
				/>

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="passwordCheck"
					placeholder="Password"
					secureTextEntry
					textContentType="passwordCheck"
				/>

				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({})
