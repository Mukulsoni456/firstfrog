import React from 'react';
import './service.css'
import Section from "./Section";
import VideoSVG from "../assets/VideoSVG.png";
import MobileSVG from "../assets/MobileSVG.png";
import ContentSVG from "../assets/ContentSVG.png";
function Service() {
  return <div className='services_section'><Section
  title="Social Media Management"
  description="We would love to handle your social media and create specific content for your specific bussiness such as Small Businesses, Startups , Cafes & Restaurnats "
  image={MobileSVG}
></Section>
<Section
  title="Video Production"
  description="For a Brand, Connecting with people is the most important thing and Here video comes into the picture. We can create any type of videos from product commercial to engaging explainer video"
  image={VideoSVG}
  color="#f87d0a"
  btnBg="#10181C"
  btnTxt="white"
  paraColor="white"
></Section>
<Section
  title="Content on Demand"
  description="At Very Affordable prices. We would provide you any type of content, You want Like Social Media Post, Posters, Graphic templates, Custom Designs etc "
  image={ContentSVG}
></Section></div>;
}

export default Service;
