import React from 'react'
import About from './About'
import Nav from './Nav'

export default function Wm() {
  return (
    <>
      <Nav />
    <div className='wm'></div>
    <div className='container mb-5'>
      <h1 className='text-center mt-5'>Reliable Washing Machine Repair and Maintenance</h1>
      <p className='lead p-2' id='text-justify'>When it comes to servicing your washing machine, you want only the best technician who can handle your washing machine model. However, even a well-experienced washing machine technician may not be equipped to service all kinds of washing machine models due to lacking the necessary skills for certain brands or models. In their attempt to repair your washing machine, they might inadvertently cause further damage. That's why booking a washing machine technician via Mukesh Aircons is essential. Based on your washing machine brand and model, we will arrange an experienced technician to service it.

We have technicians capable of servicing all kinds of washing machines, including front-load, top-load, automatic, and semi-automatic models.</p>
<h2>Common Issues in Washing Machines:</h2>
  <ul>
    <li>Washing machine not turning on</li>
    <li>Water not dispensed</li>
    <li>Noise while washing</li>
    <li>More vibration while washing</li>
    <li>Error showing in washing machine display</li>
    <li>Water overflow issue</li>
    <li>Drum not functioning</li>
    <li>Water leakage issue</li>
    <li>Buttons/keyboard not working in washing machine</li>
    <li>Washing machine not spinning</li>
    <li>Washing machine not draining properly/completely not draining</li>
    <li>Continuous beep sound from washer</li>
    <li>Unable to close the washing machine door</li>
    <li>Unable to open the washing machine door</li>
    <li>Washing machine is in dead condition or not working properly</li>
  </ul>

  <h2>Steps of Washing Machine Service:</h2>
  <ol>
    <li>Clean the exterior of the washing machine.</li>
    <li>Check and adjust the washing machine settings.</li>
    <li>Inspect and clean the detergent dispenser.</li>
    <li>Check and clean the lint filter.</li>
    <li>Inspect and clean the drain pump filter.</li>
    <li>Check for any leaks in hoses and connections.</li>
    <li>Inspect and clean the door seal.</li>
    <li>Test the washing machine's spin cycle.</li>
    <li>Check for any unusual noises during operation.</li>
    <li>Provide maintenance tips for optimal washing machine performance.</li>
  </ol>

  <h2>We service all types of Washing Machines:</h2>
  <ul>
    <li>Fully-automatic</li>
    <li>Semi-automatic</li>
    <li>Front-load</li>
    <li>Top-load</li>
 
  </ul>

  <h2>Washing Machine Service Charges</h2>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Washing machine service</th>
          <th>Charges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Semi-Automatic (Per visit Inspection charge)</td>
          <td>₹149</td>
        </tr>
        <tr>
          <td>Automatic (Per visit Inspection charge)</td>
          <td>₹149</td>
        </tr>
        <tr>
          <td>Front-load (Per visit Inspection charge)</td>
          <td>₹149</td>
        </tr>
      </tbody>
    </table>
 
  </div>
  <About />
  
  
  </>
  )
}
