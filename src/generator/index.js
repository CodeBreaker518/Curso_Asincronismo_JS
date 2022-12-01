function* gen() {
  yield 1
  yield 10
  yield 100
  yield 1000
  yield 10000
}
const serie = gen()
console.log(serie.next().value)
console.log(serie.next().value)


function* iterable(array) {
  for (let value of array) {
    yield value
  }
}

const iterate = iterable(['diego','oscar','omar','ana','lucia','juan'])

console.log((iterate.next().value))
console.log((iterate.next().value))
console.log((iterate.next().value))
console.log((iterate.next().value))
console.log((iterate.next().value))
console.log((iterate.next().value))