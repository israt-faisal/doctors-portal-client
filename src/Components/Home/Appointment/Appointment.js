import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
       <section className="appointment">
           <div className="container">
               <div className="row">
                   <div className="col-md-5 d-none d-md-block">
                       <img src={doctor} alt=""/>
                   </div>
                   <div className="col-md-7 text-color py-5">
                       <h5 style={{color:'#1cc7c1'}} className="text-uppercase"> Appointment</h5>
                       <h1 className="my-4">Make an Appointment <br/> Today</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa rem libero ratione quidem aut sunt iste facilis modi ea?</p>
                       <button style={{background: 'linear-gradient(#19D3AE, #0FCFEC)'}} className="btn"> Learn More</button>

                   </div>

               </div>

           </div>

       </section>
    );
};

export default Appointment;