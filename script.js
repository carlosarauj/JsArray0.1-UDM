//arrayfilter
let num = [12,3,4,5,1,97,96 ]

function callbackFilter(val){
    return val > 10
}
let numFilt = num.filter(callbackFilter)
console.log(numFilt)


//outra maneira de fazer com função anonima
let num2 = [12,3,4,5,1,97,96 ]

let numFilt2 = num2.filter(function(val2){
    return val2 > 10
})
console.log(numFilt2)

//com arrow function
let num3 = [12,3,4,5,1,97,96 ]

let numFilt3 = num3.filter(val3 => val3 > 10)
console.log(numFilt3)