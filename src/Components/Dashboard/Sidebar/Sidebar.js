import React, { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCog, faFileMedicalAlt, faUserFriends, faCalendar, faSignOutAlt, faHome, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})

        })
        .then(res => res.json())
        .then(data => setIsDoctor(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
           
           <ul className="list-unstyled" style={{textDecoration:"none"}}>
               <li>
                   <Link to="/dashboard"className="text-white">
                       <FontAwesomeIcon icon={faTh}/> <span>Dashboard</span> 

                   </Link>
               </li>

               <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

 {isDoctor && <div>
               <li>
                   <Link to="/allPatients" className="text-white">
                       <FontAwesomeIcon icon={faCalendar}/> <span>Appointments</span> 

                   </Link>
               </li>
               <li>
                   <Link to="/patients" className="text-white">
                       <FontAwesomeIcon icon={faUserFriends}/> <span>Patients</span> 

                   </Link>
               </li>
               <li>
                   <Link to="/prescription" className="text-white">
                       <FontAwesomeIcon icon={faFileMedicalAlt}/> <span>Prescription</span> 

                   </Link>
               </li>
               <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
               <li>
                   <Link to="doctor/settings" className="text-white">
                       <FontAwesomeIcon icon={faCog}/> <span>Settings</span> 

                   </Link>
               </li>
               </div>}
 
           </ul>

           <div className="text-white">
           <Link to="/" className="text-white">
               <FontAwesomeIcon icon={faSignOutAlt}> </FontAwesomeIcon> <span>Logout</span></Link>
                
            </div>

        </div>
    );
};

export default Sidebar;