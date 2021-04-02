import React from 'react';

const BlogDetail = ({blog}) => {
    return (
        <div className="card-deck col-md-3 mt-5 h-100">
             <div className="card card-blog " style={{height:'300px', padding:'10px'}}>
            <div className="card-body" style={{display: 'flex'}}>
            <img style={{height:'60px', margin: '20px'}} src={blog.authorImg} alt=""/>
                <h6 className="card-text" style={{ marginRight:'20px', marginTop: '20px'}}>{blog.author}</h6>
                </div>
                <div>
                <p className="text-secondary" style={{marginLeft:'100px', marginTop:'-20%'}}>{blog.date}</p>
                </div>
                <div>
                    <h5>{blog.title}</h5>
                    <h1>{blog.sign}</h1>
                    <p className="text-secondary">{blog.description}</p>
                </div>
               
            
        </div>
        </div>
       
    );
};

export default BlogDetail;