var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() => {
            console.log(this.id)
        }, 100 )
    }
} 

obj.foo()

function bar () {
    return [1,2,3]
}

var [a,b,c] = bar()
console.log(b)

function arrz () {
    return { a: 20, b: 6, c: 6}
}

var {a:newA, b: newB, c: newC} = arrz()
console.log(`newA is ${newA}`)

var arr = ['ade', 'bola', 'fatai'] 
arr.splice(1, 'muiz', 'mubarak')
var newArr = arr.slice(1,3)
console.log(newArr)

console.log(new Date().toLocaleTimeString())

var name = "oLaNrewAju"
var first = name.slice(0,1).toUpperCase()
var rem = name.slice(1).toLowerCase()
console.log(first+rem)

var day = 'mon'
switch (day) {
    case 'sun':
        console.log('correct')
        break;
    case 'Mon':
        console.log('wrong')
        break;
    default:
        console.log('error')
}

console.log(Math.floor(Math.random() * (20 -9))+10)

function factorial (n) {
    if (n === 0) {
        return 1
    }
    else {
        return n * factorial (n-1)
    }
}

console.log(`The value of the factorial is ${factorial(0)}`)

var myNew = ['ade', 'zainab', 'fawaz', 'cad', 'bola']
var asd = [...myNew]
myNew.sort(function (a,b) {
    return a<b
})
console.log(myNew)

console.log(asd)

function argss (...args) {
    var sum = 0
    for (i of args) {
        sum += i
    }
    console.log('sum is ' + sum)
}

argss(1,2,3,4,5)

class Vehicle {
    constructor(vType) {
        this.ype = vType
    }
    hello () {
        return `I typed ${this.ype}`
    }
}

class Car extends Vehicle {
    wer () {
        return super.hello() + 'yes'
    }
}

//function Vehicle (vType) {
//    this.ype = vType
//}

const car = new Car('carssssoooo')
console.log(car.wer())

const makeRequest = new Promise((resolve, reject) => {
    let makeServerRequest = false
    if (makeServerRequest) {
        resolve ('Success')
    }
    else {
        reject ('error')
    }
}).then(result => console.log(result)).catch(error => console.error(error))

var str = 'I am a boy'
console.log(str.split(' '))

var asd = [1,2,3,4,5]
asd.splice(2,2, 6,6,7)
console.log(asd)

function frankenSplice(arr1, arr2, n) {
    for (var i = 0; i < arr1; i++) {
      arr2.splice(n, 0, arr[i])
    }
    return arr2
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

  console.log(['a', 'c', 'z', 'b', 'g', 'e'].sort(function(a,b){
      return a - b
  }))

let arrza = [1,2,3,4,5,6]
let sum = arrza.reduce((a, b) => {
    a += b
    return a
})
console.log(sum)

const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(resolve('do something'), 100)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

doSomething()
console.log('Before')
console.log('After')

import fetch from 'node-fetch'
const fetch = 'node-fetch'
const getUserData = () => {
    return fetch('./sample.json')
    .then(response => response.json())
    .then(user => user[0])

}

getUserData()