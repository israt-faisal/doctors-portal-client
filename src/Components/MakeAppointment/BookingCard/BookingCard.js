import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }

   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 booking-card">
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color:' #1cc7c1'}}>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Spaces Available</p>
                    <button onClick={openModal} style={{background: 'linear-gradient(#19D3AE, #0FCFEC)'}} className="btn">BOOK APOINTMENT</button>
<AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} appointmentOn={booking.subject}></AppointmentForm>
                </div>

            </div>


            
        </div>
    );
};

export default BookingCard;