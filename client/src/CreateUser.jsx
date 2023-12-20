import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [department, setDepartment] = useState()
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, surname, email, department})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form  onSubmit={Submit}>
        <h2>Add Staff Member</h2>
        
  <div class="form-group row">
  <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name"  onChange={(e) => setName(e.target.value)} />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name"  onChange={(e) => setSurname(e.target.value)} />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
    <div class="col-sm-10">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
    </div>
  </div>
  <fieldset class="form-group">
  
    <div class="row" > 
      <legend class="col-form-label col-sm-2 pt-0">Department</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="general" onChange={(e) => setDepartment(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            General Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="pediatric" onChange={(e) => setDepartment(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            Pediatric Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="restorative" onChange={(e) => setDepartment(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            Restorative Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="surgery" onChange={(e) => setDepartment(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            Surgery
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="orthodontic" onChange={(e) => setDepartment(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            Orthodontics
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
    </div>
    </div>
  )
}

export default CreateUser;