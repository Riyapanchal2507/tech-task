import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-bg'>
      <div className='header'>
        <div className='header-nav'>
        <img className='logo-img' src={require("../assets/logo.jpg")} alt='logo'/>
          <ul>
            <Link to='/'><li>Services</li></Link>
            <Link to='/aboutus'><li>About Us</li></Link>
            <Link to='/blogs'><li>Blogs</li></Link>
            <Link to='/casestudies'><li>CaseStudies</li></Link>
            <Link to='/contact'><button>Contact Us</button></Link>
          </ul>
        </div>
        <div className='header-content'>
          <h2>HOW MUCH <br/> COULD YOU SAVE</h2>
          <p>Answer the questions below to get a fixed price <br/> quotation for us to take your accountancy hassles away
          <br/> from you.</p>
        </div><br/>
        <div className='header-badge'>
          <h3 style={{fontSize: "22px"}}>Is your turnover expected to be more<br/> than £85k?</h3>
          <button>Yes</button>
          <button style={{marginLeft:"5px"}}>No</button>
        </div>
        <p style={{width: "50%",position: "relative", bottom: "-170px"}}>Takes less than 30 seconds</p>
      </div>  
    </div>
    
  );
}

export default Header;
