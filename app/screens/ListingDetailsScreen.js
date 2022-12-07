import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						title="Marty C Fly"
						subTitle="5 Listings"
						image={require('../assets/mosh.jpg')}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	userContainer: { marginVertical: 40 },
})
