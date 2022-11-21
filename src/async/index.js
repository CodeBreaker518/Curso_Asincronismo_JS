const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!'), 2000)
      : reject(new Error('Error!'))
  })
}

const anotherFn = async () => {
  const response = await fnAsync()
  console.log(response)
  console.log('hello')
}

console.log('before')
anotherFn()
console.log('after')

// => output
// before
// after
// Async!
// hello