import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { ThemeContext } from './src/context/ThemeContext'
import { colors } from './src/styles/Colors'
import Button from './src/components/Button'

export default function App() {
	const [theme, setTheme] = useState('light')
	return (
		<ThemeContext.Provider value={theme}>
			<View
				style={
					theme === 'light'
						? styles.container
						: [styles.container, { backgroundColor: '#000' }]
				}
			>
				<StatusBar style='auto' />
				<Switch
					// If theme is equal to light , value of state will be true
					value={theme === 'light'}
					// Changing the value of the theme
					onValueChange={() =>
						setTheme(theme === 'light' ? 'dark' : 'light')
					}
        />
        <Button title='5' onPress={() => {alert('You pressed 5')}} />
			</View>
		</ThemeContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
