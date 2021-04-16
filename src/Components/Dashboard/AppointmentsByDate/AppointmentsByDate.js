
import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';



const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
  

    return (
        <div className="booking-card" style={{height:'100vh'}}>
          

<h3 style={{color:'#5FC7C7'}} className="text-brand text-center">Appointments</h3>


                   
  
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }

           
        </div>
    );
};

export default AppointmentByDate;