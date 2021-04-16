import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {

    return (
        <div className="col-md-4 text-center">
       <img style={{height:'150px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
       <h4>{doctor.name}</h4>
            
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;