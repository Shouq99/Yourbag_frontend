import api from "./api"
import "./App.css"
import Index from "./routes"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer />

      <Index />
    </div>
  
  )
}

export default App


