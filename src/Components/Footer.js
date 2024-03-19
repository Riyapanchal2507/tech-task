import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ftr'>
        <div className='row footer-content'>
          <div className='col-lg-6'>
            <h5>Tagline will go here. Lorem ipsum d oler sit amet…</h5>
            <h3 className='mt-4 head-color'>user@email.com</h3>
          </div>
          <div className='col-lg-6 d-flex'>
            <div>
              <p className='line'></p>
            </div>
            <div className='ftr2'>
              <h6>Adress</h6>
              <p>101 Office No,<br/>Road name,<br/>India</p>
            </div>
            
          </div>
        </div>
        <div className='ftr-content1'>
        <img className='logo-img' src={require("../assets/logo.jpg")} alt='logo'/>
          <ul>
            <Link to='/aboutus'><li>AboutUs</li></Link>
            <Link to='/blogs'><li>Blogs</li></Link>
            <Link to='/casestudies'><li>CaseStudies</li></Link>
            <Link to='/contact'><li>Conatct</li></Link>
          </ul>
          <p>© 2022. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
