// 1. JAVASCRIPT CONSOLE API
console.log('Hello World')
console.warn('This is a warning')
console.error('This is an error')

// 2. JAVASCRIPT VARIABLES
// What are Variables? -- Containers to store data values
var num1 = 12
var num2 = 13
console.log(num1+num2)

// 3. DATA TYPES IN JAVASCRIPT

/*
At a very high level, there are two types of data types in JAVASCRIPT
1. Primitive data types: undefined, null, number, strings, boolean, symbol
2. Reference data types: arrays & objects
*/

// Undefined is when you do not assigned any values 
var xyz

// Null is when you want any variable to be null
var abc = null

// Numbers
var number1 = 1156
var number2 = 45.40

// String
var str1 = 'This is a string'
var str2 = "This is also a string"

// Objects
var marks = {
	ravi: 54,
	ashish: 12,
	asha: 19
}

// Boolean
var a = true
var b = false


// Array
var arr = [1,2,3,4,5]


// Operators in Javascript
// Arithmetic Operators
console.log()
console.log('Arithmetic Operators:')

var x = 64;
var y = 92;

console.log('The value of x + y is', x+y + '.')
console.log('The value of x - y is', x-y + '.')
console.log('The value of x * y is', x*y + '.')
console.log('The value of x / y is', x/y + '.')
console.log('The value of x ** y is', x**y + '.')

// Assignment Operators
console.log()
console.log('Assignment Operators:')

var z = y
z += 5 	// z = z+5 = 92 + 5 = 97
// z -= 5 
// z *= 5 
// z /= 5 
console.log('The value of z is', z)

// Comparison Operators
console.log()
console.log('Comparison Operators:')

var m = 2
var n = 7

console.log(m == n)  	// is value of m is equal to n
console.log(m >= n)		// is value of m is greater than or equal to n
console.log(m <= n)		// is value of m is less than or equal to n
console.log(m > n)		// is value of m is greater than n
console.log(m < n)		// is value of m is less than n

// Logical Operators
console.log()
console.log('Logical Operators:')

console.log('And(&&) operator needs both true for the logic to be true')
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log()
console.log('Or(||) operator needs only one true for the logic to be true')
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log()
console.log('Not(!) operator reverse the values')
console.log(!true)
console.log(!false)

// FUNCTIONS IN JAVASCRIPT
console.log()
console.log('********** FUNCTIONS IN JAVASCRIPT ************')

// Conditionals in Javascript
console.log('Conditionals in Javascript')
// if else statement
console.log()
console.log('if else statement in Javascript')

var age = 24
if (age >= 18){
	console.log('You are eligible for voting.')
}else{
	console.log('You are not eligible for voting.')
}

// Loop in Javascript
console.log()
console.log('Loop in Javascript')

var arr = [1,2,3,4,5,6,7]
console.log(arr)

for (var i=0; i<arr.length; i++) {
	console.log(arr[i])
}

console.log()
console.log('Iterate array by using forEach method')

arr.forEach(function(element) {
	console.log(element)
})

console.log()
console.log('While Loop in Javascript')

let j = 0;
while(j<arr.length){
	console.log(arr[j])
	j++
}

console.log()
console.log(' Do While Loop in Javascript')

let r = 0;
do {
	console.log(arr[r])
	r++
} while(r<arr.length)

// While loop runs only if the contion is true whearas 
// Do while loop runs first and check the condition i.e. if will run at least once


// Break will stop the iteration of the loop after the condition

console.log()
console.log(' Break in Javascript')

var list = [1,2,3,4,5,6,7,8,9,10]

for (i=0; i<list.length; i++){
	if(i==4){
		break 		// the loop will break after value of i becomes 4
	}
	console.log(list[i])
}

// Continue will cancel the particular iteration of the condition and will iterate the rest
console.log()
console.log(' Continue in Javascript')

for (i=0; i<list.length; i++){
	if(i==4){
		continue 		// the loop will cancel the value of i = 4 and iterate the rest 
	}
	console.log(list[i])
}

console.log()
console.log(' Methods in Array')

let myArr = ['laptop', 'mobile', 27, null, true]

console.log(myArr.length)	// this method gives the length of the array

myArr.pop() 			// this method will remove the last item from the array
console.log(myArr)

myArr.push('arjun')		// this method will add the item in the array
console.log(myArr)

myArr.shift()		// this method will remove the first item in the array
console.log(myArr)

const newLen = myArr.unshift('atom') 		// this method gives the length of new array
console.log(newLen)
console.log(myArr) 		// unshift method will add the item in first of the array

console.log()
console.log('For all the Methods in Array')

// Javascript array Reference
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array')

console.log()
console.log('String Methods in Javascript')

let newString = "Coding is challenging"
console.log(newString.length)
console.log(newString.indexOf('challenging'))		// this method will give the index of starting letter of word
console.log(newString.slice(0,5))		// this method will give the word starting from 0 index to 5 index

console.log()
console.log('Date in Javascript')

let myDate = new Date()
console.log(myDate)
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())

console.log()
console.log('DOM Manipulation in Javascript')

let elem = document.getElementById('click')
console.log(elem)

let newElement = document.getElementsByClassName('container')
console.log(newElement)

newElement[0].style.background = 'purple'
newElement[0].style.textAlign = 'center'
newElement[1].classList.add('bg-primary')

let paraElement = document.getElementById('myParagraph').style.color='white'

console.log(newElement[0].innerHTML)
console.log(newElement[0].innerText)


let para = document.getElementById('secondParagraph').style.color='darkred'

// newElement[1].classList.add('hide')

console.log()
console.log('Getting Element by Tag Name')
tn = document.getElementsByTagName('p')
console.log(tn)

console.log()
console.log('To creates HTML Element by Javascript use "document.createElement" method')
console.log('To add HTML Element by Javascript use appendChild')
console.log('To replace HTML Element by Javascript use replaceChild')

createdElement = document.createElement('h3')
createdElement.innerText = 'This is a headline added from javascript'
tn[1].appendChild(createdElement)

tn[1].style.textAlign='center'


createdElement2 = document.createElement('i')		// Italic
createdElement2.innerHTML = '<h2>This is an italic statement</h2>'

tn[1].replaceChild(createdElement2, createdElement)

console.log()
console.log(document.location)	// will give the location of file
console.log(document.title)		// will give the title of web page
console.log(document.URL)		// will give the current url
console.log(document.scripts)	// will give all the scripts running on the page
console.log(document.links)		// will give all the links 
console.log(document.domain)	// will give domain without port
console.log(document.images)	// extracts all the images
console.log(document.forms)		// will give all the forms 

console.log()
console.log('Selecting using query')

sel = document.querySelector('.container')	// will return the first query
console.log(sel)

sel = document.querySelectorAll('.container')	// will return the All matching query
console.log(sel)

console.log()
console.log('Events in Javascript')

function clicked() {
	console.log('The button was clicked')
	// alert('The button was clicked')
}
/*
window.onload = function(){
	console.log('The page was loaded')
}

firstContainer.addEventListener('click', function() {  
	// click is the name of javascript event
	console.log('Clicked on the container')
})

firstContainer.addEventListener('mouseover', function() {	
	// mouseover event will be triggered when we hover over the container
	console.log('Mouse on container')
})

firstContainer.addEventListener('mouseout', function() {	
	// when we will hover outside the container
	console.log('Mouse out of container')
})

firstContainer.addEventListener('mouseup', function() {	
	// mouseup event will be triggered when we relese the mouse hold inside the container
	console.log('Mouse Up when Clicked on the container')
})

firstContainer.addEventListener('mousedown', function() {	
	// mouseout event will be triggered when we hold mouse inside the container
	console.log('Mouse down when Clicked on the container')
})
*/

console.log()
console.log('Javascript events Reference')
console.log('https://www.javatpoint.com/javascript-events')

console.log()
console.log('Javascript addeventlistener Reference')
console.log('https://www.javatpoint.com/javascript-addeventlistener')


firstContainer.addEventListener('click', function() {
	document.querySelectorAll('.container')[1].innerHTML = '<u>The text is changed after clicked</u>'
	document.querySelectorAll('.container')[1].style.textAlign='center'
	console.log('Clicked on the container')
})


let preHTML = document.querySelectorAll('.container')[2].innerHTML

lastContainer.addEventListener('mouseup', function() {	
	document.querySelectorAll('.container')[2].innerHTML = preHTML
	// console.log('Mouse Up when Clicked on the container')
})

lastContainer.addEventListener('mousedown', function() {	
	document.querySelectorAll('.container')[2].innerHTML = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
	// console.log('Mouse down when Clicked on the container')
})

console.log()

// Normal Function
function sum(a, b) {
	return a+b
}

// Arrow Function
sum1 = (a, b) =>{		// sum and sum1 are function name
	return a + b
}

console.log('Normal Function')
console.log(`function sum(a, b) {
	return a+b
}`)

console.log()
console.log('Arrow Function')
console.log(`sum1 = (a, b) =>{
	return a+b
}`)

console.log()
console.log('setTimeout & setInterval')
// setTimeout allows us to run a function once after the interval of time. 
// setInterval allows us to run a function repeatedly, 
// starting after the interval of time, then repeating continuously at that interval.

myapp = () => {
	document.querySelectorAll('.container')[1].innerHTML = 'setTimeout fire'
	// console.log('Welcome to the application')
}

setTimeout(myapp, 2000)		
// 2000 is 2 seconds

myid = setInterval(myapp, 2000)
clearInterval(myid)
// To stop setInterval we can use clearInterval(myid) function
// If not stop setInterval will run endlessly

// To cancel setInterval/setTimeout use clearTimeout(myid)

console.log()
console.log('Localstorage in Javascript')

 // localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. 
 // This means the data stored in the browser will persist even after the browser window is closed.

console.log(`LocalStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. 
This means the data stored in the browser will persist even after the browser window is closed.`)

localStorage.setItem('name', 'dell laptop')
// This will make a key called 'name' and store value 'dell laptop' in the local storage of browser

// To clear localstorage use localStorage.clear()

// To retrieve data from localstorage use localStorage.getItem('name of key')

console.log(localStorage.getItem('name'))
// To remove item from localstorage use localStorage.removeItem('name of key')

console.log()
console.log('JSON')

// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
// It is commonly used for transmitting data in web applications 
// (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)

obj = {name: 'Arjun', length: 1, a: {'this':'that'}}	// this is an object in javascript

// with the help of 'json stringify' we can change the type from object to strings

jso = JSON.stringify(obj)	// this is now a string in JSON

console.log('Obj', obj)
console.log('converted obj to strings:', jso)

// The JSON standard requires double quotes and will not accept single quotes

parsed = JSON.parse(`{"name":"Arjun","length":1,"a":{"this":"that"}}`)

// parsing is the process of taking data in one format and transforming it to another format
console.log('json parse:', parsed)

arjun = 111
banana = 123

console.log(`\nThe value of arjun is ${arjun} and Banana is ${banana}`)
