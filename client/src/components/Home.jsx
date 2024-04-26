import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';
import banner from "../images/banner.jpg"
import Services from './Services';
import About from './About';
import Contact from './Contact'
import call from '../images/telephone_724664.png'
import whatsapp from '../images/whatsapp_5968841.png'
import location from '../images/location_847372.png'
import best from '../images/best-customer-experience.png';
import execution from '../images/execution.png';
import reputation from '../images/reputation.png';
import trust from '../images/trust.png';
import service from '../images/service.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ac from "../images/acimage.jpg";
import wm from "../images/wmimage.jpg";
import rf from "../images/rfimage.jpg"
import term from "../images/terms.png"



export default function Home() {

  return (
    <>
     <Nav />
<div className='home' >
  <div className="container">
    <div className="row mt-1" id='row' >
      <div className="col-md-6 d-flex  align-items-center mb-5 mt-5 ">
        <div>
          <h1 className='mb-3'>Welcome to <br/><span className='name'>Mukesh Aircons</span></h1>
          <p className='lead mb-3'>
            Your Trusted Destination for AC, Fridge, and Washing Machine Services! <br /> Fixes stuff fast, making your home cooler, fresher, and cleaner!
          </p>
          <p className='lead' id='livelocation'>Give missed call to book</p>
          
          <button id='buttoncall'><a href="tel: 9952002567">Call</a></button>
          <button id='buttonwhats'><a href="whatsapp://send?text=I need your Service&phone=+919952002567" target="_blank" rel="noopener noreferrer">Whatsapp</a></button>
        </div>
      </div>
      <div className="col-md-6 mb-1" id='banimg'>
      <img src={banner} alt="Banner Image"  style={{ objectFit: 'cover' }} />
      </div>
    </div>
  </div>
</div>
<section id='services'>
<h1 className='text-center mt-3'>services</h1>
    <div className="container">
      <div className="row m-4" id='rowimg'>
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mt-3">
        <img src={ac} className='contactimg'/>
        </div>
        <div className="col-md-6 col-md-5 d-flex justify-content-center align-items-center mb-3 mt-3" >
          <div className='text-center'>
          <h1>AC Service</h1>
          <p className='lead'>Professional AC servicing to ensure optimal cooling performance.From regular maintenance to emergency repairs, we've got you covered.</p>
          <button id='buttonservice'><Link to="/ac">Know More</Link></button>
          </div>
          </div>
      </div>
      <div className="row m-4" id='rowimg'>

        <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mt-3">
        <img src={rf} className='contactimg'/>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mt-3 " >
        <div className='text-center'>
          <h1>Refrigerator Service</h1>
          <p className='lead'>Keep your refrigerator in top condition with our skilled repair services.Our technicians provide fast and effective repairs to keep your fridge running smoothly.</p>
          <button id='buttonservice'><Link to="/fridge">Know More</Link></button>
          </div>
        </div>
      </div>
      <div className="row m-4" id='rowimg'>
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mt-3">
        <img src={wm} className='contactimg'/>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mt-3" >
        <div className='text-center'>
          <h1>Washing Machine Service</h1>
          <p className='lead'>Get your washing machine up and running efficiently with our expert repairs.We offer prompt and reliable solutions to all your washing machine woes.</p>
          <button id='buttonservice'><Link to="/washingmachine">Know More</Link></button>
          </div>
          </div>
      </div>
    </div>
    <h1 className='text-center mt-3'>Terms and conditions</h1>
    <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center mb-3">
        <img src={term} className='contactimg'/>
      </div>
      <div className="col-md-6   d-flex justify-content-center align-items-center mb-3">
      <div className="terms">
          <ul>
            <li> We offer a 30-day warranty on our services .</li>
            <li>Best price guarantee</li>
            <li>There's no inspection fee; you only pay for the service itself. However, if you decide not to use the service, then you'll need to pay the inspection fee.</li>
            <li>The service charge includes labor and any parts or materials used. So, when we provide the service, you'll be charged for labor and any parts used.</li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
</section>
<section className='container'>
<div className="row">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="content">
        <div className = "text-center">
            <img  src={best} width={45} height={45}/>
          </div>
          <h4 id='contacttitle'>Our Commitment to Excellence</h4>
          <p id='text-justify'> At Mukesh Aircons, we're dedicated to providing top-notch service for all your appliance needs. With years of experience in the industry, our team of expert technicians is committed to delivering reliable and efficient solutions.</p>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
      <div className="content">
      <div className = "text-center">
            <img  src={trust} width={45} height={45}/>
          </div>
          <h4 id='contacttitle'>Trusted Professionals</h4>
          <p id='text-justify'>When you choose Mukesh Aircons, you're choosing professionalism and expertise. Our technicians are highly trained and certified to handle a wide range of appliance repair and maintenance tasks. You can trust us to get the job done right the first time, every time.</p>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
      <div className="content">
      <div className = "text-center">
            <img  src={reputation} width={45} height={45}/>
          </div>
          <h4 id='contacttitle'>Customer Satisfaction Guaranteed</h4>
          <p id='text-justify'>Your satisfaction is our priority. We strive to exceed your expectations with every service call. From prompt responses to courteous service, we go above and beyond to ensure that your experience with us is seamless and stress-free.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="content">
      <div className = "text-center">
            <img  src={execution} width={45} height={45}/>
          </div>
          <h4 id='contacttitle'>Comprehensive Services</h4>
          <p id='text-justify'>Whether it's repairing a malfunctioning AC unit, fixing a fridge that's not cooling properly, or troubleshooting issues with your washing machine, we've got you covered. Our comprehensive range of services is designed to meet all your appliance repair and maintenance needs.</p>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="content">
      <div className = "text-center">
            <img  src={service} width={45} height={45}/>
          </div>
          <h4 id='contacttitle'>Local and Reliable</h4>
          <p id='text-justify'>As a local business, we take pride in serving our community. We understand the importance of having functioning appliances, which is why we offer fast and reliable service to keep your home running smoothly. When you choose Mukesh Aircons, you're choosing a trusted partner for all your appliance service needs.</p>
        </div>
      </div>
    </div>
</section>
<section className='container'>
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
    No. 9, 1st Main Road,<br/>
    Prabu Nagar, Pallikaranai,<br/> Chennai-600100
  </address>
                  
        </div>
  
      </div>

     
 



      </div>

</section>
<Footer />
</>


  )
}
