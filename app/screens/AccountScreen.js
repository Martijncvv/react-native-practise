import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Icon from '../components/Icon'

import colors from '../config/colors'

export default function AccountScreen() {
	const menuItems = [
		{
			title: 'My Listings',
			icon: {
				name: 'format-list-bulleted',
				backgroundColor: colors.primary,
			},
		},
		{
			title: 'My Messages',
			icon: {
				name: 'email',
				backgroundColor: colors.secondary,
			},
		},
	]

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Marty Cfly"
					subTitle="Martijncfly@gmail.com"
					image={require('../assets/marty.jpeg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>

			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
})
