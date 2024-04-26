import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';
import ac from "../images/acimage.jpg";
import wm from "../images/wmimage.jpg";
import rf from "../images/rfimage.jpg"
import term from "../images/terms.png"
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Services() {
  return (
    <>
  
  <Nav />
    <div className="container">
   
      <div className="row mt-5 m-4" id='rowimg'>
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
      <div className="col-md-6 d-flex justify-content-center align-items-center mb-3">
      <div className="terms" id='text-justify'>
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
    <Footer />

    </>
  )
}
