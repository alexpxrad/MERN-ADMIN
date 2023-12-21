import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' +id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setSurname(result.data.surname)
      setEmail(result.data.email)
      setDepartment(result.data.department)
    })
    .catch(err => console.log(err))
}, [])


const Update = (e) => {
  e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, surname, email, department})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
}


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
        <h2>Update Staff Member</h2>
        
  <div class="form-group row">
  <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required 
      value={name} onChange={(e) => setName(e.target.value)}/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
    <div class="col-sm-10">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
    <div class="col-md-4 mb-3">
                <select
                  type="text"
                  id="department"
                  class="custom-select"
                  value={department}
                  onChange={e => setDepartment(e.target.value)}
                >
                  <option selected>Department</option>
                  <option value="general">General</option>
                  <option value="pediatric">Pediatric</option>
                  <option value="restorative">Restorative</option>
                  <option value="surgery">Surgery</option>
                  <option value="orthodontic">Orthodontic</option>
                </select>
  </div>

      {/* <legend class="col-form-label col-sm-2 pt-0">Department</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label class="form-check-label" for="gridRadios1">
            General Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label class="form-check-label" for="gridRadios2">
            Pediatric Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label class="form-check-label" for="gridRadios2">
            Restorative Dentistry
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label class="form-check-label" for="gridRadios2">
            Surgery
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label class="form-check-label" for="gridRadios2">
            Orthodontics
          </label>
        </div>
      </div>*/}
    </div> 
  </fieldset>

  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Update</button>
    </div>
  </div>
</form>
</div>
    </div>
  )
}

export default UpdateUser