import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';



const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body : JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })

        .then(res => res.json())
        .then(data => setAppointments(data))

    }, [selectedDate])

    return (
       <section>
           <div style={{height:"100vh"}} className="container-fluid row">
               <div className="col-md-2">
                   <Sidebar></Sidebar>
                   </div>

               <div className="col-md-5">
                   <h4 className="text-center" style={{color:'#5FC7C7'}}>Appointments</h4>
               <Calendar className="dashboard-calender"
        onChange={handleDateChange}
        value={new Date() }
      />

               </div>
               <div className="col-md-5">
                   <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
               </div>
           </div>
       </section>
    );
};

export default Dashboard;