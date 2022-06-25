import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { ThemeContext } from './src/context/ThemeContext'
import { colors } from './src/styles/Colors'
import Keyboard from './src/components/Keyboard'

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
        <View style={styles.header}>
          <Text style={styles.heading} >Calculator</Text>
					<Switch
						// If theme is equal to light , value of state will be true
						value={theme === 'light'}
						// Changing the value of the theme
						onValueChange={() =>
							setTheme(theme === 'light' ? 'dark' : 'light')
						}
					/>
				</View>
				<Keyboard />
			</View>
		</ThemeContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,
		alignItems: 'center',
		justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'stretch',
		backgroundColor: colors.gray,

  },
  heading: {
    color: colors.white,
    fontSize: 30,
  }
})
