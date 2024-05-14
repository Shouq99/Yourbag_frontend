import { useEffect } from "react"
import api from "./api"

import "./App.css"

function App() {
  const getProducts = async () => {
    try {
      console.log("I am run");
      const res = await api.get("/products")
      console.log(res.data);
      // return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }


    useEffect(() => {
      getProducts()
    }, [])
 

  return (
    <div className="App">
      <h1 className="text-2xl uppercase mb-10">Products</h1>
      <h1>Welcome to ecommerce. </h1>
      
     
    </div>
  )
}

export default App
