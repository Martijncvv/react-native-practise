import { StyleSheet, FlatList } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

import Screen from '../components/Screen'
import AppCard from '../components/AppCard'
import colors from '../config/colors'

export default function ListingsScreen() {
	// const navigation = useNavigation()

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
	const ListingDetailsScreen = ({ navigation }) => (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<AppCard
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
						onPress={() => navigation.navigate('TweetDetails', { id: item.id })}
					/>
				)}
			/>
		</Screen>
	)

	const Stack = createStackNavigator()
	const StackNavigator = () => (
		<Stack.Navigator
			screenOptions={
				{
					// headerStyle: { backgroundColor: 'dodgerblue' },
					// headerTintColor: 'white',
					// headerShown: false,
				}
			}
		>
			<Stack.Screen
				name="ListingDetailsScreen"
				component={ListingDetailsScreen}
			/>
			{/* <Stack.Screen
				name="TweetDetails"
				component={TweetDetails}
				options={({ route }) => ({
					title: `Tweet #${route.params.id}`,
				})}
			/> */}
		</Stack.Navigator>
	)

	return (
		<NavigationContainer>
			<Stack.Navigator />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.light },
})
