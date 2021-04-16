import React from 'react';

const TestimonialDetail = ({testimonial}) => {
    return (
       <div className="card-deck col-md-3 mt-5">
            <div className="card testi" style={{height:'300px'}}>
            <div className="card-body">
                <p className="card-text">{testimonial.detail}</p>
                <div style={{display: 'flex'}}>
                <img style={{height:'60px', margin: '20px'}} src={testimonial.img} alt=""/>
                <h5 style={{color:'#1cc7c1', marginRight:'20px', marginTop: '20px'}}>{testimonial.name}</h5>
              
                </div>
                <p className="text-secondary" style={{marginLeft:'100px', marginTop:'-40px'}}>{testimonial.place}</p>

            </div>

        </div>
        
       </div>

        
    );
};

export default TestimonialDetail;