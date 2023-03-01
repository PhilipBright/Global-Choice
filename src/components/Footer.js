
import Image from 'react-bootstrap/Image'
import React from 'react';
import Facebook from '../assets/facebook.png';
import Viber from '../assets/viber.png';
import Whatsapp from '../assets/whatsapp.png';
import background from '../assets/GCBG.avif'

export default function Footer() 

{
  return (
    

      <div className=' text-center p-3' style={{ backgroundImage: `url(${background})` }}>
       
        <h2 className='fw-bold'>Contact us</h2>
        <div  className='d-flex w-100 justify-content-center mb-2'>
         <a href='https://www.facebook.com/profile.php?id=100083239991574' className='me-4 ms-4'><Image src={Facebook} width={30} /></a>
         <a href='' className='me-4'><Image src={Viber} width={30} /></a>
         <a href='' className='me-4'><Image src={Whatsapp} width={30} /></a>
        
        </div>
       <span> Copyright © 2023  {' '}</span> 
        <span className=''>
          Global Choice. All rights reserved.
        </span>
      </div>
    
   
  );
}