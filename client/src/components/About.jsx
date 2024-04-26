import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ac from "../images/acimage.jpg";
import about from "../images/image 2.png";
import best from '../images/best-customer-experience.png';
import execution from '../images/execution.png';
import reputation from '../images/reputation.png';
import trust from '../images/trust.png';
import service from '../images/service.png';
import Footer from './Footer';
import Nav from './Nav'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
import image9 from '../images/image9.png'
import image10 from '../images/image10.png'





export default function About() {
  return (
    <div className="about" >
        <Nav />
    <div className="about">
    <div className="container">
    <h1 className='text-center mt-5'>About Us</h1>
  <div className="row">
  <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={about}  className='contactimg'/>
    </div>
    <div className="col-md-6 mt-5 mb-3 " id='text-justify'>
    <p>Welcome to Mukesh Aircons, your trusted partner for professional maintenance and repair services for air conditioners, refrigerators, and washing machines. Founded by Mukesh Aircons, our service center is dedicated to providing exceptional service to our valued customers.</p>
  <p>With Mukesh Aircons' passion for excellence and years of industry experience, we have built a reputation for reliability, quality, and customer satisfaction. Our team of skilled technicians is committed to diagnosing and resolving any issues with your appliances efficiently and effectively.</p>
  <p>At Mukesh Aircons, we prioritize transparency, integrity, and prompt service. We understand the importance of your appliances in your daily life, which is why we strive to deliver timely solutions that meet your needs and exceed your expectations.</p>
  <p>Whether you need routine maintenance, repairs, or installation services, you can trust Mukesh Aircons to deliver outstanding results every time. Thank you for choosing us as your service provider. We look forward to serving you!</p>

    </div>

  </div>

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
  
    <h1 className='text-center mt-3 mb-5'>Why Mukesh Aircons ?</h1>
   
    <div className="row m-3">
      <div className="col-md-4 mb-3">
      <div className="card" >
      <img className="card-img-top" src={image5} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>Lowest Inspection cost</p>
      </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
      <div className="card" >
      <img className="card-img-top" src={image6} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>Post - Service Payment</p>
      </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
      <div className="card" >
      <img className="card-img-top" src={image7} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>Trusted Professionals</p>
      </div>
        </div>
      </div>
    </div>

    <div className="row m-3">
      <div className="col-md-4 mb-3">
      <div className="card">
      <img className="card-img-top" src={image8} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>30 days waranty</p>
      </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
      <div className="card" >
      <img className="card-img-top" src={image10} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>Good Customer Support</p>
      </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
      <div className="card">
      <img className="card-img-top" src={image9} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text text-center" id='livelocation'>Clear Pricing</p>
      </div>
        </div>
      </div>
    </div>
    </div>
   
    </div>
    <Footer />
    </div>
  )
}
