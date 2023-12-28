import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users from './Users'
import Sidebar from '/src/components/Sidebar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div style={{ 
      backgroundImage: `url("Dentistry.png")` 
    }}>
  
    <BrowserRouter>
    <div class="d-flex">
      
    <Sidebar/>
    <h1 className="text-center ">Dentistry Dashboard</h1>
    <div class="center">
      

      <Routes>
      
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
      </div>
    </div>
      
    </BrowserRouter>
  </div>
  )
}

export default App
