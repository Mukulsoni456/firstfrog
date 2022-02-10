import React from 'react';
import { useState } from 'react';
import './contact.css'
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";


const q = query(collection(db, "client"));

function Contact({setSubmitted}) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Services, setServices] = useState("");
  const [Project, setProject] = useState("");

  const onSubmit= async (e) => {
    e.preventDefault();
    console.log("hi this is mukul");
    await addDoc(q, {
      name: Name,
      email: Email,
      contactNo: ContactNo,
      companyName: CompanyName,
      service: Services,
      project: Project,
    });

    setSubmitted(true);
  };

  return <div><form onSubmit={onSubmit} className="contact_form">
  <h1>Contact us</h1>
  <div className="input_container">

  <input
    type="text"
    value={Name}
    onChange={(e) => {
      setName(e.target.value);
    }}
    className="input_field"
    placeholder="Name"
    required
  />
  </div>
  <div className='input_row'>
    <div className="input_container"> 
      <label htmlFor="email"></label>
    <input
      type="email"
      value={Email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      className="input_field"
      placeholder="Email"
      required
    />
    </div>
    <div className="input_container">
      <label htmlFor="contactNo"></label>
    <input
      type="number"
      value={ContactNo}
      required
      onChange={(e) => {
        setContactNo(e.target.value);
      }}
      className="input_field"
      name="contact_number"
      id="contact_number"
      placeholder="Phn. no"
    />
    </div>

  </div>
  <div className='input_row'>
    <div className="input_container"> 
    <label htmlFor="CompanyName"></label>
      <input
      type="text"
      value={CompanyName}
      onChange={(e) => {
        setCompanyName(e.target.value);
      }}
      name="company_name"
      className="input_field"
      id="company_name"
      placeholder="Company Name"
    /></div>

    <div className="input_container">
    <label htmlFor="services"></label>
    <select
      value={Services}
      onChange={(e) => {
        setServices(e.target.value);
      }}
      required
      name="service"
      id="service"
    >
      <option value="">Select a service</option>
      <option value="Social Media Management">
        {" "}
        Social Media Management
      </option>
      <option value="Video Production">Video Production</option>
      <option value="Content on Demand"> Content on Demand</option>
    </select>
    </div>
  </div>
  <div className="input_container">
  <label htmlFor="projects"></label>
  <input
    type="text"
    value={Project}
    onChange={(e) => {
      setProject(e.target.value);
    }}
    name="project_info"
    className="input_field"
    id="project_info"
    placeholder="Project Description"
  />
  </div>

  <button type="submit"  required >
    Submit
  </button>
</form></div>;
}

export default Contact;
