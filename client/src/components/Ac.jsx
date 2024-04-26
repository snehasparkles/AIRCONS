import React from 'react'
import About from './About'
import Nav from './Nav'

export default function Ac() {
  return (
    <>
      <Nav />
    <div className='ac'></div>
    <div className='container mb-5'>
      <h1 className='text-center mt-5'>Expert AC Maintenance and Repair Services</h1>
      <p className='lead p-2' id='text-justify'>When your AC runs, it collects dust and dirt, which can mess with how well it works. That's why it's crucial to get regular AC service. If you don't, your AC might start acting up—like not cooling properly, leaking water, or making weird noises. But if you stay on top of maintenance, you can dodge these issues and keep your AC running smoothly.</p>
     <h1>Common Issues in AC</h1>
     <ul>
  <li>AC not switched on</li>
  <li>Not cooling properly</li>
  <li>AC not cooling at all</li>
  <li>Power supply not coming to AC</li>
  <li>Noise from air conditioner indoor unit</li>
  <li>Noise from air conditioner outdoor unit</li>
  <li>AC automatically turned off</li>
  <li>Coil issue</li>
  <li>Outdoor unit working but indoor unit not working</li>
  <li>Outdoor unit not working</li>
  <li>Fan Blade Issues</li>
  <li>Water leakage from AC indoor unit</li>
</ul>

<h2>Steps of AC General Service:</h2>
  <ol>
    <li>Air filter and fin cleaning.</li>
    <li>AC condenser and evaporator coil cleaning.</li>
    <li>AC condenser and evaporator fan cleaning.</li>
    <li>Drain cleaning and leakage check.</li>
    <li>Coolant level check in air conditioner.</li>
    <li>Overall inspection of the AC unit.</li>
  </ol>

<h2>AC Service Charges</h2>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Service</th>
        <th>Charges</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AC Uninstallation</td>
        <td>Rs. 750</td>
      </tr>
      <tr>
        <td>AC Uninstallation & Installation</td>
        <td>Rs. 2300</td>
      </tr>
      <tr>
        <td>Window AC Uninstallation</td>
        <td>Rs. 600</td>
      </tr>
      <tr>
        <td>AC Gas Filling/Refilling (Get quote)</td>
        <td>Rs. 0</td>
      </tr>
      <tr>
        <td>Duct AC and Cassette AC (Per visit Inspection charge)</td>
        <td>Rs. 499</td>
      </tr>
      <tr>
        <td>AC Deep Cleaning Service</td>
        <td>Rs. 1499</td>
      </tr>
      <tr>
        <td>Window AC Uninstallation and Installation</td>
        <td>Rs. 1500</td>
      </tr>
      <tr>
        <td>Window AC Installation</td>
        <td>Rs. 1200</td>
      </tr>
      <tr>
        <td>AC Installation</td>
        <td>Rs. 1800</td>
      </tr>
      <tr>
        <td>AC General Cleaning Service</td>
        <td>Rs. 499</td>
      </tr>
      <tr>
        <td>AC Repair & Service (Per visit Inspection charge)</td>
        <td>Rs. 149</td>
      </tr>
    </tbody>
  </table>
 
  </div>

  <About/>

  
  </>
  )
}
