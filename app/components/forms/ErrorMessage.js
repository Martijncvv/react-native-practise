import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Apptext from '../AppText'

export default function ErrorMessage({ error, visible }) {
	if (!error || !visible) return null

	return <Apptext style={styles.error}>{error}</Apptext>
}

const styles = StyleSheet.create({
	error: { color: 'red' },
})
