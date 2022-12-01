import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi) {
  const response = await fetch(urlApi)
  const data = await response.json()
  return data
}

async function* anotherFn (urlApi) {
  try {
    const products = await fetchData(`${API}/products`)
    const product = await fetchData(`${API}/products/${products[0].id}`)
    const category = await fetchData(`${API}/categories/${product?.category?.id}`)

    yield console.log(products)
    yield console.log(product.title)
    yield console.log(category.name)
    
  } catch (error) {
    console.error(error)
  }
}

const iterate = anotherFn(API)

iterate.next()
iterate.next()
iterate.next()
