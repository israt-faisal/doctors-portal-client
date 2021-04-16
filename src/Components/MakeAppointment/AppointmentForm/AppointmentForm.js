import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    width                 : '50%'
  }
};
Modal.setAppElement('#root')


const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch('http://localhost:5000/addAppointment',{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('appointment created successfully');
            }
        })
}

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 className="text-center" style={{color:'#1cc7c1'}}>{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
          <br/>

          <form  className="p-3" onSubmit={handleSubmit(onSubmit)}>

              <div className="form-group">
              <select className="form-control" {...register("time", {required: true})} placeholder="Select Time" >
                                <option disabled={true} value="Not set">Select Time</option>
                                <option value="8:00am">8:00am</option>
                                <option value="10:00am">10:00am</option>
                                <option value="1:00pm">1:00pm</option>
                                <option value="not set">Not Set</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
              </div>
              <br/>
    <div className="form-group">
        <input type="text" {...register("name", {required: true})} placeholder="Your Name" className="form-control" />
        {errors.name && <span className="text-danger"> This Field is required</span>}
    </div>
    <br/>
    <div className="form-group">
        <input type="text"  {...register("phone", {required: true})} placeholder="Your Phone Number" className="form-control" />
        {errors.phone && <span className="text-danger"> This Field is required</span>}

    </div>
    <br/>
    <div className="form-group">
        <input type="text"  {...register("email", {required: true})}  placeholder="Your Email" className="form-control" />
        {errors.email && <span className="text-danger"> This Field is required</span>}

    </div>
    <br/>
    <div className="form-group">
        <input type="date" {...register("date", { required: true})} placeholder="MM/DD/YYYY" className="form-control" />
        {errors.date && <span className="text-danger"> This Field is required</span>}

    </div>
    <br/>
    <div className="form-group" style={{marginLeft:'480px'}}>
                        <button type="submit" className="btn" style={{background: 'linear-gradient(#19D3AE, #0FCFEC)',width:'150px'}}>Send</button>
                    </div>
  
    </form>
        </Modal>
            
        </div>
    );
};

export default AppointmentForm;