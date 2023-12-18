import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState([{
        Name: "Alex" , Surname: "P", Email: "alex@gmail.com", Department: "General"
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                
                                <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Surname}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Department}</td>
                                    <td>
                                    <Link to="/update" className="btn btn-success">Update</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users