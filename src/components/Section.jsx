import React from 'react';
import './section.css'
import {Link} from 'react-scroll'

function Section({title, description, image, color, btnTxt, btnBg, paraColor}) {


  return <div className='section' style={
      {backgroundColor: color}
  }>
            <div className='section_image'>
          <img src={image} alt="" />
      </div>
      <div className="section_form">
          <h1>{title}</h1>
          <p style={{color : paraColor}}>{description}</p>
          <Link to='Contact' smooth={true} duration={1000}><button className='section_button' style={ {backgroundColor : btnBg, color:btnTxt} }>Get a Quote</button></Link>
          
      </div>

  </div>;
}

export default Section;
