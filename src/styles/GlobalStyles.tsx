import { StyleSheet } from 'react-native'
import { colors } from './Colors'

export const Styles = StyleSheet.create({
	btn: {
		width: 72,
		height: 72,
		borderRadius: 24,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 8,
	},

	btnBlue: {
		backgroundColor: colors.blue,
	},

	btnDark: {
		backgroundColor: colors.dark,
	},

	btnWhite: {
		backgroundColor: colors.white,
	},

	btnGray: {
		backgroundColor: colors.gray,
	},

	smallTextLight: {
		fontSize: 32,
		color: colors.white,
	},

	smallTextDark: {
		fontSize: 32,
		color: colors.black,
	},

	row: {
		maxWidth: '100%',
		flexDirection: 'row',
    },
    
	viewBottom: {
		position: 'absolute',
		bottom: 50,
    },
    
	screenFirstNumber: {
		fontSize: 96,
		color: colors.gray,
		fontWeight: '200',
		alignSelf: 'flex-end',
    },
    
	screenSecondNumber: {
		fontSize: 40,
		color: colors.gray,
		fontWeight: '200',
		alignSelf: 'flex-end',
	},
})
