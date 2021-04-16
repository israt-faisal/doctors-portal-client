import React from 'react';
import chair from '../../../images/chair.png';
import {Link} from "react-router-dom";

const HeaderMain = () => {
    return (
       <main style={{height: '600px'}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:'#292e3a'}}>Your New Smile <br/> Starts Here</h1>
               <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor voluptatum enim impedit tenetur cumque.</p>
               <Link to="/makeAppointment"><button className="btn" style={{ background: 'linear-gradient(#19D3AE, #0FCFEC)'}}>Get Appointment
               </button></Link> 

           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid"/>
           </div>

       </main>
    );
};

export default HeaderMain;