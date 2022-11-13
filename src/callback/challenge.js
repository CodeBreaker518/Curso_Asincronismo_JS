import { XMLHttpRequest } from "xmlhttprequest"
const API = 'https://api.escuelajs.co/api/v1'
const DONE = 4
const OK = 200

// main function which will get the information from the product as an object
const fetchData = (urlApi, callback) => {
  // initialize an XMLHttpRequest object 
  let xhttp = new XMLHttpRequest()
   //.open() method makes the request, it can be 'GET' o 'POST', 
   //then sends the url, if its async (true o false), user & password. in this case we only use the method, the url & async
  xhttp.open('GET', urlApi, true)

  //.onreadystatechange saves the function name which is going to be executed when the XMLHttpRequest object changes its state
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === DONE) {
      if ((xhttp.status === OK)) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`error ${urlApi}`)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

fetchData(`${API}/products`, (error1, data1)=> {
  if (error1) return console.error(error1)
  fetchData(`${API}/products/${data1[0].id}`, (error2, data2)=> {
    if (error2) return console.error(error2)
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3)
      console.log(data1[0])
      console.log(data2.title)
      console.log(data3.name)
      // WARNING: CALLBACK HELL
    })
  })
})
