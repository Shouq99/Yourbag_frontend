import axios from 'axios'
//import { config } from 'process'

const isDevelopment = import.meta.env.MODE === 'development'
let baseURL = 'https://sda-online-2-csharp-backend-teamwork-1-4id7.onrender.com/'

if (!isDevelopment) {
  // Update this later when you have a working backend server
  baseURL = 'http://localhost:5125/'
}

const api = axios.create({
  baseURL
})

// api.interceptors.request.use((config)=>{
//   const token = localStorage.getItem("token");
//   if(token){
//     config.headers["Authorization"] = `Bearer ${token}`;

//   }
//   return config;
// })
// use this to handle errors gracefully
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 500) {
//       throw new Error(error.response.data)
//     }
//   }
// )

export default api
