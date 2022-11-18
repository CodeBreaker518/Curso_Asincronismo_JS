import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1"

const request = (urlApi) => {
  return fetch(urlApi)
}

// request(`${API}/products`) 
//   .then(response => response.json())
//   .then(products => {
//     console.log(products)
//   })
//   .then(() => {console.log('hello')})
//   .catch(error => console.log(error))


// using fetch for multiple calls

request(`${API}/products`) // making the request to the API with custom url
  .then(response => response.json()) // making the return of the API into a json object
  .then(products => {
    console.log(products) // print all the products as json object
    return request(`${API}/products/${products[0].id}`) // new request which is going to return the product on position 0 on the array and its id
  })
  .then(response => response.json()) // make the return above into a json object
  .then(product => {
    console.log(product.title) // print the title of that product we returned
    return request(`${API}/categories/${product.category.id}`) // new request which will return the category of the product with its id
  })
  .then(response => response.json()) // make the return above into a json object
  .then(category => {
    console.log(category.name) // print the name of the category we returned
  })
  .catch(error => console.log(error)) //catch errors
  .finally( () => {console.log('Finally')}) // finally!



