import React, { useEffect, useState } from 'react';

import Doctor from '../Doctor/Doctor';

const Doctors = () => {

  const [doctors, setDoctors] = useState([])
  useEffect( () => {
      fetch('http://localhost:5000/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])

    return (
/* <div>
    <div className="text-center mt-5 ">
        <h1 style={{color:'#5FC7C7'}}>OUR DOCTORS</h1>
        <br/>
    </div>

            <div class="row row-cols-1 row-cols-md-3 g-4 px-5">
  <div class="col">
    <div class="card h-100 w-80 card-body">
      <img style={{height:'300px'}}src={doctor} alt="..."/>
      
      <div class="card-footer text-center">
      <h5>Dr. Caudi</h5>
        <small class="text-muted">+64 789 098 126</small>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card h-100 w-80 card-body">
      <img style={{height:'300px'}}src={doctor} alt="..."/>

      <div class="card-footer text-center">
      <h5>Dr. Caudi</h5>
        <small class="text-muted">+64 789 098 126</small>
      </div>
    </div>
  </div>
  <div class="col">
   <div class="card h-100 w-80 card-body">
      <img style={{height:'300px'}}src={doctor} alt="..."/>
        
      <div class="card-footer text-center">
          <h5>Dr. Caudi</h5>
        <small class="text-muted">+64 789 098 126</small>
      </div>
    </div>
  </div>
</div>
</div> */
<section >
<div className="container mt-5">
    <h3 className="text-center mb-5" style={{color:'#5FC7C7'}} >Our Doctors</h3>
    <br/>
    <div  className="row">
        {
         doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor}></Doctor>)
        }
        
    </div>
</div>
</section>
    );
};

export default Doctors;