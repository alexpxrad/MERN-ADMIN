import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='bg-dark col-auto col-md-3 min-vh-100 '>
          <a className='text-decoration-none text-white d-flex align-item-center'>
            
            <span className='ms-1 fs-4'>Brand</span>
          </a>
          <ul
            class="nav nav-pills flex-column  "
          >
            <li class="nav-item text-white fs-4">
              <a href="/create" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-speedometer2 '></i>
                  {/* <Link to="/create" className="btn btn-success">Add +</Link> */}
                  <Link to="/create" className='ms-2 text-decoration-none text-white fs-5'>Add</Link>
                  </a>
            </li>
            <li class="nav-item text-white fs-4">
              <a href="/" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-house '></i>
                  <span className='ms-2'>Home</span>
                  </a>
            </li>
            <li class="nav-item text-white fs-4">
              <a href="'/update/:id'" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-table '></i>
                  <span className='ms-2'>Update</span>
                  </a>
            </li> 
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
