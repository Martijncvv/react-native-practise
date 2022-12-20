import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

export default useLocation = () => {
	const [location, setLocation] = useState()

	const getLocation = async () => {
		try {
			const { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== 'granted') {
				alert('Permission to access location was denied')
				return
			}
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync({})

			setLocation({ latitude, longitude })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getLocation()
	}, [])

	return location
}
