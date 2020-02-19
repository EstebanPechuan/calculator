var screen = document.querySelector('.screen')

//Firts variable of the calc
var firstVar

//To the result function
var operation

//Second variable of the calc
var secVar

//Array to print in the screen some results
var exercise = []

//To change the clicked class with the .blue class
function removeColorClass() {
	var x = document.querySelectorAll('div.eachButtonClicked')

	for (var i = 0; i <= x.length-1; i++) {
		x[i].classList.remove('eachButtonClicked')
		x[i].classList.add('eachButton')
		x[i].classList.add('blue')
	}
}

//To change the .blue class with the clicked class

function addAndRemoveColor(v) {
	var v = v

	switch (v){
		case ('a'):
		var v = document.querySelector('.add')
		break

		case ('s'):
		var v = document.querySelector('.sub')
		break

		case ('m'):
		var v = document.querySelector('.mult')
		break

		case ('d'):
		var v = document.querySelector('.div')
		break
	}


	v.classList.remove('eachButton')
	v.classList.remove('blue')
	v.classList.add('eachButtonClicked')

}

//The C button
function clearAll() {
	screen.innerHTML = '0'
	screen.setAttribute('value', '')
	existDot = false

	removeColorClass()
}

//To delete value attribute after a math function
function clearScreen() {
	screen.setAttribute('value', '')

}

//The arrow button
function delLast() {
	removeColorClass()

	var delLast = screen.getAttribute('value')
	var slice = delLast.slice(0, delLast.length-1)

	screen.setAttribute('value', slice)
	screen.innerHTML = slice
}

//Numbers function
function printNum(x) {
	var value = x
	exercise.push(value)

	var valueScreen = screen.getAttribute('value')

	valueScreen = valueScreen + value

	screen.innerHTML = valueScreen
	screen.setAttribute('value', valueScreen)
}

//Maths functions
function add() {
	firstVar = screen.getAttribute('value')

	addAndRemoveColor('a')


	operation = '+'

	clearScreen()
}

function sub() {
	firstVar = screen.getAttribute('value')

	addAndRemoveColor('s')


	operation = '-'

	clearScreen()
}

function mult() {
	firstVar = screen.getAttribute('value')

	addAndRemoveColor('m')


	operation = '*'

	clearScreen()
}

function div() {
	firstVar = screen.getAttribute('value')

	addAndRemoveColor('d')


	operation = '/'

	clearScreen()
}

function percentage() {
	firstVar = screen.getAttribute('value')

	res = firstVar / 100

	screen.setAttribute('value', res)
	screen.innerHTML = res

}

//Negative and positive numbers in the screen
function revert() {
	var revert = screen.getAttribute('value')

	var result = revert * -1

	screen.setAttribute('value', result)
	screen.innerHTML = result
}

//Dot button
function dot(e) {
	var e = '.'
	var lookForDot = screen.getAttribute('value')
	existDot = false

	var value = e

	//To check if any dot is in the array
	for (var i = 0; i <= lookForDot.length; i++) {
		if (lookForDot[i] == '.') {
			existDot = true
		}
	}

	//If doesn't exist, he can be added in the array
	if (existDot == false) {
		exercise.push(value)

		lookForDot = lookForDot + value

		screen.innerHTML = lookForDot
		screen.setAttribute('value', lookForDot)
	}
}

//Result function with the maths algorithms
function result() {
	secVar = screen.getAttribute('value')

	var res = 0

	switch (operation) {
		case '+':
		res = parseFloat(firstVar) + parseFloat(secVar)
		break

		case '-':
		res = parseFloat(firstVar) - parseFloat(secVar)
		break

		case '*':
		res = parseFloat(firstVar) * parseFloat(secVar)
		break

		case '/':
		res = parseFloat(firstVar) / parseFloat(secVar)
		break
	}

	//Print the result in the screen
	screen.setAttribute('value', res)
	var fiveDigit = screen.getAttribute('value')
	if (fiveDigit.length > 7) {
		fiveDigit = parseFloat(fiveDigit).toFixed(5)
		screen.setAttribute('value', fiveDigit)
		screen.innerHTML = fiveDigit
	} else { screen.innerHTML = res }
	

	removeColorClass()
}


//Here start the keyboards programation
function pressKey(event) {
	var x = event.key

	switch (x) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
		printNum(x)
		break

		case '.':
		dot(x)
		break

		case 'Backspace':
		delLast()
		break

		case '+':
		add()
		break
		case '-':
		sub()
		break
		case '*':
		mult()
		break
		case '/':
		div()
		break
		case '%':
		percentage()
		break

		case 'i':
		case 'I':
		revert()
		break

		case 'Enter':
		result()
		break

		case 'Delete':
		clearAll()
		break
	}
}