import React from 'react';
import './Blogs.css';
import winson from '../../../images/winson.png';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogData= [
    {
        title : 'Check atleast a doctor in a year for your teeth ',
        author: 'Rashed kabir',
        date: '23 August 2018',
        sign: '-->'

    },
     {
        title : '2 Times of Brush can Make Your Teeth Healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..',
        author: 'Dr. Caudi',
        date: '23 April 2019',
        authorImg: winson
     },
     
        {
            title : 'The Tooth Cancer is taking a Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ipsa.',
            author: 'Dr. John Michel',
            date: '23 April 2019',
            authorImg: winson
         }
]

const Blogs = () => {
    return (
        <div className="container mt-5">
            <div className="section-header text-center">
                <h4 style={{color:'#5FC7C7'}}><strong>Our Blog</strong></h4>
                <h1>From Our Blog News</h1>
            </div>
          <div className="row justify-content-center">
          {
                blogData.map(blog=> <BlogDetail blog={blog}></BlogDetail>)
            }
          </div>
        </div>
    );
};

export default Blogs;