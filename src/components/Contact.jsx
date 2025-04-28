import React from 'react'

const Contact = () => {
  return (
   <>
   <form>
  
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

 
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example34"/>
        <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>

   </>
  )
}

export default Contact