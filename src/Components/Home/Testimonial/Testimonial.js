import React from 'react';
import winson from '../../../images/winson.png';
import queenson from '../../../images/queenson.png';
import twinson from '../../../images/twinson.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const testimonialData= [
    {
        detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio rem praesentium facere temporibus, numquam excepturi sequi quod consectetur eos.',
        img: winson,
        name: 'Winson Harry',
        place: 'California'
    },
    {
        detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio rem praesentium facere temporibus, numquam excepturi sequi quod consectetur eos.',
        img: queenson ,
        name: 'Winson Harry',
        place: 'California'
    },
    {
        detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio rem praesentium facere temporibus, numquam excepturi sequi quod consectetur eos.',
        img: twinson,
        name: 'Winson Harry',
        place: 'California'
    }
]

const Testimonial = () => {
    return (
       <section style={{marginTop:'100px', padding: '40px'}}>
          <div>
          <h5 style={{color:'#1cc7c1'}}>TESTIMONIAL</h5>
          <br/>
           <h1>What's our Patients <br/> Says</h1>
          </div>
         <div className="card-deck row justify-content-center">
         {
               testimonialData.map(testimonial=><TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
           }
         </div>

       </section>
    );
};

export default Testimonial;