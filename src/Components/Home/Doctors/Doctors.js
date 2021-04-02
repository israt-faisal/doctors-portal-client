import React from 'react';
import doctor from '../../../images/doctor.png';

const Doctors = () => {
    return (
<div>
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
</div>
    );
};

export default Doctors;