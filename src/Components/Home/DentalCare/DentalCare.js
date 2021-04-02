import React from 'react';
import care from '../../../images/care.png';

const DentalCare = () => {
    return (
        <section className=" row  w-75 mt-5 pt-2">
        
        <div className="justify-content-center">
             
         <div className= "col-md-5 offset-md-3">
           <img style={{height:'400px', width:'400px'}} src={care} alt=""/>
           </div>
           <div className= "col-md-5 offset-md-8" style={{marginTop:'-320px'}}>
          <h2 style={{color:' #292e3a'}}>Exeptional Dental <br/>
              Care, on Your Terms</h2>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas, consequatur ratione tempore autem numquam, deserunt hic cum recusandae laudantium earum ab molestiae ex. Accusamus nihil, natus officiis ratione corporis consequatur sequi magni architecto quasi quas alias maxime ad assumenda, neque repudiandae velit a! Perspiciatis officia facere incidunt illo modi!</p>
           <button style={{background: 'linear-gradient(#19D3AE, #0FCFEC)'}} className="btn">Learn More</button>
           </div>
        </div>
         
         
            
            
        </section>
    );
};

export default DentalCare;