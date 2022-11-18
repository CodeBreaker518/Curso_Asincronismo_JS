// promise layout
const promise = new Promise((resolve, reject) => {
  resolve('hey')
})

const cows = 9

const countCows = new Promise((resolve, reject) => {
  if (cows >= 10){
    resolve(`The amount of cows '${cows}' can meet the demand `)
  } else {
    reject(`The amount of cows '${cows}' can not meet the demand`)
  }
})

countCows
  .then((result) =>{console.log(result)})
  .catch((error) => {console.log(error)})
  .finally( () => {console.log('Finally')})

  setTimeout(() => {
    
  }, timeout);