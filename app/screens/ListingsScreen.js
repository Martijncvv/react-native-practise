import { StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import AppCard from '../components/AppCard'
import colors from '../config/colors'

export default function ListingsScreen() {
	console.log('LSITNSGS')
	const listings = [
		{
			id: 1,
			title: 'Red Jacket for Sale',
			price: 100,
			image: require('../assets/jacket.jpg'),
		},
		{
			id: 2,
			title: 'Couch in great condition',
			price: 2495,
			image: require('../assets/couch.jpg'),
		},
	]

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<AppCard
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.light },
})