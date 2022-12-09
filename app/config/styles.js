import { Platform } from 'react-native'
import colors from '../config/colors'

export default {
	colors: colors,
	text: {
		color: colors.medium,
		fontSize: 18,
		...Platform.select({
			ios: { fontFamily: 'Avenir' },
			android: { fontFamily: 'Roboto' },
		}),
	},
}
