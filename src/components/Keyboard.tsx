import * as React from 'react'
import Button from './Button'
import { View, Text } from 'react-native'
import { Styles } from '../styles/GlobalStyles'
import { colors } from '../styles/Colors'

const Keyboard = () => {
	const [firstNumber, setFirstNumber] = React.useState('')
	const [secondNumber, setSecondNumber] = React.useState('')
	const [operation, setOperation] = React.useState('')
	const [result, setResult] = React.useState<Number | null>(null)

	// Concatenates each string value presses eg. if you enter 1 and 2 it will read 12 not 3
	const handleNumberPress = (buttonValue: string) => {
		// Number can not be more than 10 digits
		if (firstNumber.length < 10) {
			setFirstNumber(firstNumber + buttonValue)
		}
	}

	const handleOperationPress = (buttonValue: string) => {
		setOperation(buttonValue)
		setSecondNumber(firstNumber)
		setFirstNumber('')
	}

	// Clears the values on the screen
	const clear = () => {
		setFirstNumber('')
		setSecondNumber('')
		setOperation('')
		setResult(null)
	}

    // Perform calculations
	const calculate = () => {
        switch (operation) {
            case "+":
                clear()
                setResult(parseInt(secondNumber) + parseInt(firstNumber))
                break
            case "-":
                clear()
                setResult(parseInt(secondNumber) - parseInt(firstNumber))
                break
            case "*":
                clear()
                setResult(parseInt(secondNumber) * parseInt(firstNumber))
                break
            case "/":
                clear()
                setResult(parseInt(secondNumber) / parseInt(firstNumber))
                break
            default:
                clear()
                setResult(0)
                break
		}
	}

	return <p>hi</p>
}

export default Keyboard
