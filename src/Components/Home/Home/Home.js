import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
          <Services></Services>
         <DentalCare></DentalCare>
         <Appointment></Appointment>
         <Testimonial></Testimonial>
         <Blogs></Blogs>
         <Doctors></Doctors>
         <ContactUs></ContactUs>
         <Footer></Footer>
        </div>
    );
};

export default Home;