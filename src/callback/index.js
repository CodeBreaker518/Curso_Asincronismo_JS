// raw calculator example with callback
const addition = (num1, num2) =>{
  return num1 + num2
}
const subtraction = (num1, num2) =>{
  return num1 - num2
}
const multiplication = (num1, num2) => {
  return num1 * num2
}
const division = (num1, num2) => {
  return num1 / num2
}
// callback function which return the calc of the 2 numbers depending on which function it receives as a parameter
const calc = (num1,num2,operation) => {
  return operation(num1,num2)
}
console.log(calc(3,3, multiplication))
// => output
// 9


setTimeout(() => {
  console.log('Hello JS') // console logged after 5 seconds

  const greeting = (name) =>{
    console.log(`Hello ${name}, have a nice day!`)
  }
  setTimeout(greeting, 2000, 'Diego') // then greeting is executed after 2 seconds deploying the its logic 

}, 5000);
// => output
//Hello JS
//Hello Diego, have a nice day!
//[Done] exited with code=0 in 7.277 seconds