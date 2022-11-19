import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'
const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    // config for the request to the API
    method: 'POST', // by default: 'GET'
    mode: 'cors', //by default
    credentials: 'same-origin', //by default
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data) // send the data to the API, from json, to string
  })
  return response
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))