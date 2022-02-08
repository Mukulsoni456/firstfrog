import React, { useRef } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import './home.css'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import Section from '../components/Section';
import VideoSVG from '../assets/VideoSVG.png'
import MobileSVG from '../assets/MobileSVG.png'
import ContentSVG from '../assets/ContentSVG.png'
import Projects from '../components/Projects';
import logo from '../assets/logo.png'
import {Facebook,LinkedIn,Instagram}from '@mui/icons-material';
import db from '../features/firebase';
import {addDoc, query, collection} from 'firebase/firestore'

const q = query(collection(db, "client"))

function Home() {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const contactNoRef = useRef('')
    const companyNameRef = useRef('')
    const serviceRef = useRef('')
    const projectRef = useRef('')

    const handleSubmit =  async (e)=>{
        e.preventDefault()
        console.log('hi this is mukul')
        await addDoc(q, {
            name : nameRef.current.value,
            email: emailRef.current.value,
            contactNo: contactNoRef.current.value,
            companyName: companyNameRef.current.value,
            service: serviceRef.current.value,
            project: projectRef.current.value,
        })
    }

  return <div className='home'>

      {/* ************************************This is Navbar **************************/}
      <Navbar></Navbar>

      {/* ******************************This is home section**************************** */}
      <section id='Home'>
      <Banner></Banner>

      <section className='client_section'>
          <div className='client_top'>
              <h3>Clients</h3>
              <p>Don't Compete | Let's collab</p>
          </div>
          <div className='client_main'>
              <img src={client1} alt="" />
              <img src={client2} alt="" />
              <img src={client3} alt="" />
          </div>
      </section>
      </section>

      {/* ************************************This is Services Section **************************/}
      <section className='services_section' id='Services'>
      <Section title='Social Media Management' description="We would love to handle your social media and create specific content for your specific bussiness such as Small Businesses, Startups , Cafes & Restaurnats " image={MobileSVG} ></Section>
      <Section title='Video Production' description="For a Brand, Connecting with people is the most important thing and Here video comes into the picture. We can create any type of videos from product commercial to engaging explainer video" image={VideoSVG} color='#f87d0a' btnBg = "#10181C" btnTxt="white" paraColor='white'></Section>
      <Section title='Content on Demand' description="At Very Affordable prices. We would provide you any type of content, You want Like Social Media Post, Posters, Graphic templates, Custom Designs etc " image={ContentSVG} ></Section>

      </section>

    {/* ************************************This is Project Sectioh **************************/}
      <section id='Projects'><Projects></Projects></section>
      {/* ************************************This is Contact section **************************/}
      <section className='contact_section' id='Contact' >
          <form className='contact_form'>
          <h1>Contact us</h1>
              <input type="text" required ref={nameRef} className='input_field' placeholder='Name' />
              <div>
                  <input type="email" required ref={emailRef} className='input_field' placeholder='Email' />
                  <input type="number" required ref={contactNoRef} className='input_field' name="contact_number" id="contact_number"  placeholder='Phn. no'/>
              </div>
              <div>
                  <input type="text" required ref={companyNameRef} name="company_name" className='input_field' id="company_name" placeholder='Company Name'/>
                  <select ref={serviceRef} required name="service" id="service">
                      <option value="">Select a service</option>
                      <option value="Social Media Management"> Social Media Management</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Content on Demand"> Content on Demand</option>
                  </select>
              </div>
              <input type="text" required ref={projectRef}  name="project_info" className='input_field' id="project_info" placeholder='Project Description' />
              <button type='submit' required onClick={handleSubmit}>Submit</button>
          </form>
      </section>

            {/* ************************************This is ABout Section **************************/}

      <footer id='About'>
          <div className="left_footer">
              <div className="footer_logo">
              <img src={logo} alt="This is mediabudy logo" />
              <p>Media & Marketing Company</p>
              </div>

          </div>
          <div className="right_footer">
              <div className="footer_icons">
                  <Facebook className='footer_icon'></Facebook>
                  <LinkedIn className='footer_icon'></LinkedIn>
                  <Instagram className='footer_icon'></Instagram>
              </div>
              <p className='email'>Emial :- mediabudy@gmail.com</p>
          </div>
      </footer>
  </div>;
}

export default Home;
