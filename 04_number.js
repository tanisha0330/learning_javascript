const score = 400
console.log(score)   


const balance = new Number(100)
console.log(balance)  
//properties also included 

console.log(balance.toString()); 
console.log(balance.toFixed(2)); 

const other= 23.445
console.log(other.toPrecision(9));

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
//pther methods too , can be explored in browser 



//m*********Math library ++++++++++++

console.log(Math)

console.log(Math.random()); 
console.log((Math.random()*10)+1); 
console.log(Math.floor((Math.random()*10)+1))



const min =10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)



