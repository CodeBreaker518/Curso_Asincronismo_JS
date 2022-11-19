import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

const deleteData = (urlApi) => {
 const response = fetch(urlApi, {
    // config for the request to the API
    method: 'DELETE', // by default: 'GET'
    mode: 'cors', //by default
    credentials: 'same-origin', //by default
    headers: {
      'Content-type': 'application/json'
    }
  })
  return response
}

deleteData(`${API}/products/222`)
  .then(response => response.json())
  .then(data => console.log(data))

// => output
//{ rta: true } (deleted successfully)