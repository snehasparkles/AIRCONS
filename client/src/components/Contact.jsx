import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import formimg from '../images/contact.jpg'
import call from '../images/telephone_724664.png'
import whatsapp from '../images/whatsapp_5968841.png'
import location from '../images/location_847372.png'
import Contactus from './Contactus';
import Footer from './Footer';
import Nav from './Nav'
import { useState } from 'react';




export default function Contact() {
  const initialState = {
    name: '',
    num: '',
    service: '',
    city: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (formData.num.trim() === '') {
      alert('Please enter your contact number.');
      return;
    }
    if (formData.service === '') {
      alert('Please select a service.');
      return;
    }
    if (formData.city.trim() === '') {
      alert('Please enter your city.');
      return;
    }
    // Construct WhatsApp message
    const message = `Name: ${formData.name}%0AContact Number: ${formData.num}%0AService: ${formData.service}%0ACity: ${formData.city}`;

    // Open WhatsApp with prefilled message and recipient number
    const whatsappUrl = `whatsapp://send?text=${message}&phone=+919952002567`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form data to initial state
    setFormData(initialState);
  };
  return (
    <>
      <Nav />
    <div className="contact">
    <Contactus />
      <div className="container">
      {/* <h1 className='text-center m-5'>contact Us</h1> */}
      <div className="row mt-5 mb-5">
        <div className="col-md-6 d-flex justify-content-center lign-items-center mb-5">
          <img src={formimg} className='contactimg'/>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
        <form className='formspace' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" required onChange={handleChange} value={formData.name} />
      </div>
      <div className="mb-2">
        <label htmlFor="num" className="form-label">Contact Number</label>
        <input type="text" className="form-control" id="num" required onChange={handleChange} value={formData.num} />
      </div>
      <div className="mb-3">
        <label htmlFor="service" className="form-label">Service</label>
        <select className="form-select" id="service" required onChange={handleChange} value={formData.service}>
          <option disabled>Select Your Service</option>
          <option value="AC">AC</option>
          <option value="Fridge">Fridge</option>
          <option value="Washing Machine">Washing Machine</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" required onChange={handleChange} value={formData.city} />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button id='buttonservice' type="submit">Submit</button>
      </div>
    </form>
        </div>
      </div>
      <h4 className='text-center mt-4 mb-4' id='livelocation'>
        Live Location
      </h4>
      <div className="row mt-5 mb-5">
        
        <iframe className="col-md-12 d-flex justify-content-center align-items-center"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5603002110893!2d80.19886939999999!3d12.935957799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d268b4db6bf%3A0x2a8843b96c219234!2sMukesh%20Aircons!5e0!3m2!1sen!2sin!4v1713957100083!5m2!1sen!2sin"

          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      

      </div>
      <div className="row mt-5 mb-5">
      <div className = "col-md-4 mt-2 d-flex justify-content-center align-items-center">
        <div>
          <div className = "text-center">
            <img  src={call} width={45} height={45}/>
          </div>
        <h4 className="text-center" id='contacttitle'>Phone Call:</h4>
        <a href="tel: 9952002567" className=" text-center " id= "contact_details"> +91 9952002567 <br/> +91 8148070453</a>
          
        </div>
  
      </div>
      <div className = "col-md-4 mt-2 d-flex justify-content-center align-items-center">
        <div>
          <div className = "text-center">
            <img  src={whatsapp} width={50} height={50}/>
          </div>
        <h4 className="text-center" id='contacttitle'>WhatsApp:</h4>
        <a href="whatsapp://send?text=I need your Service&phone=+919952002567" target="_blank" rel="noopener noreferrer" className=" text-center " id= "contact_details"> +91 9952002567 </a><br/>
        <a href="whatsapp://send?text=I need your Service&phone=+918148070453" target="_blank" rel="noopener noreferrer" className=" text-center " id= "contact_details"> +91 8148070453 </a> 
        </div>
  
      </div>
      <div className = "col-md-4 mt-2 d-flex justify-content-center align-items-center">
        <div>
          <div className = "text-center">
            <img  src={location} width={45} height={45}/>
          </div>
        <h4 className="text-center" id='contacttitle'>Address:</h4>
        <address className=" text-center " id= "contact_details">
    No. 9, 1st Main Road, <br/>
    Prabu Nagar, Pallikaranai,<br/> Chennai-600100
  </address>
                  
        </div>
  
      </div>

     
 



      </div>
      </div>

    </div>
<Footer />
    </>
  )
}
