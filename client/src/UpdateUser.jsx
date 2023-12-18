import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form>
        <h2>Update Staff Member</h2>
        
  <div class="form-group row">
  <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    
    <div class="col-sm-10">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Department</legend>
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
      </div>
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