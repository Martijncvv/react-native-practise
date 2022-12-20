import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import listingsApi from '../api/listings'

import useApi from '../hooks/useApi'

import ActivityIndicator from '../components/ActivityIndicator'
import Screen from '../components/Screen'
import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

import colors from '../config/colors'

import routes from '../navigation/routes'

export default function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings)

	useEffect(() => {
		getListingsApi.request()
	}, [])

	return (
		<Screen style={styles.screen}>
			{getListingsApi.error && (
				<>
					<AppText>Couldn't retrieve the listings</AppText>
					<AppButton title="Retry" onPress={getListingsApi.request} />
				</>
			)}
			<ActivityIndicator visible={getListingsApi.loading} />
			<FlatList
				data={getListingsApi.data}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<AppCard
						title={item.title}
						subTitle={'$' + item.price}
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.light },
})
