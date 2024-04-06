import React from 'react'
import Navbar from './Navbar'

const Login = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-12">
              <div className="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                      <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                      <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label"><b>USERNAME</b></label>
                <input type="text" className="form-control" />
                <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                <input type="password" className="form-control" />
                <p></p>
                <button className="btn btn-primary">LOG IN</button>
              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Login