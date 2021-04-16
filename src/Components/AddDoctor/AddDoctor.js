import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>

            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4 style={{ color: '#5FC7C7' }}>Add a Doctor</h4>
                <br/>

                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />

                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload an Image</label>
                        <input onBlur={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;