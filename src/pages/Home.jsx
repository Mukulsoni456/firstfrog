import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import "./home.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import Projects from "../components/Projects";
import logo from "../assets/logo.png";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import Modal from "../components/Modal";
import Service from "../components/Service";
import Contact from "./Contact";

function Home() {
    const [Submitted , setSubmitted] = useState(false)
  return (
    <div className="home">
      {Submitted ? <Modal setSubmitted={setSubmitted}></Modal> : null}

      {/* ************************************This is Navbar **************************/}
      <Navbar></Navbar>

      {/* ******************************This is home section**************************** */}
      <section id="Home">
        <Banner></Banner>

        <section className="client_section">
          <div className="client_top">
            <h3>Clients</h3>
            <p>Don't Compete | Let's collab</p>
          </div>
          <div className="client_main">
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
          </div>
        </section>
      </section>

      {/* ************************************This is Services Section **************************/}
      <section className="services_section" id="Services">
          <Service></Service>
      </section>

      {/* ************************************This is Project Sectioh **************************/}
      <section id="Projects">
        <Projects></Projects>
      </section>
      {/* ************************************This is Contact section **************************/}
      <section className="contact_section" id="Contact">
          <Contact setSubmitted ={setSubmitted}></Contact>
      </section>

      {/* ************************************This is ABout Section **************************/}

      <footer id="About">
        <div className="left_footer">
          <div className="footer_logo">
            <img src={logo} alt="This is mediabudy logo" />
            <p>Media & Marketing Company</p>
          </div>
        </div>
        <div className="right_footer">
          <div className="footer_icons">
            <Facebook className="footer_icon"></Facebook>
            <LinkedIn className="footer_icon"></LinkedIn>
            <Instagram className="footer_icon"></Instagram>
          </div>
          <p className="email">Emial :- mediabudy@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
