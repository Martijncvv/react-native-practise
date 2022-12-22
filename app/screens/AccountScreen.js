import { StyleSheet, View, FlatList } from 'react-native'
import React, { useContext } from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Icon from '../components/Icon'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'

import colors from '../config/colors'

export default function AccountScreen({ navigation }) {
	const { user, setUser } = useContext(AuthContext)

	const handleLogOut = () => {
		setUser(null)
		authStorage.removeToken()
	}

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
			targetScreen: 'Messages',
		},
	]

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subTitle={user.email}
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
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
				/>
			</View>

			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
				onPress={handleLogOut}
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
