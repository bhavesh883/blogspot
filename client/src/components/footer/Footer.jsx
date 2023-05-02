import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div> 
     <footer class="footer-sec">
    <div class="main">
      
      
      <div class="logo row lgoftr">
        <div class="footer-header">
          <img src="/logoftr.png" class="manik" alt=""/>
        </div>
        <div class="logo-des">
          <p>"To foster a culture of learning, growth, and creativity within our team and our community, and inspire others to do the same."</p>
          
          <Link to='/about' class="btn-know">Know More</Link>
        </div>
        
        
      </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Contact Us</h3>
        </div>
  
          <div class="office-des">
          
          
         <a href="#">abc@gmail.com</a>
          
          <p class = "num">+91999999999</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
        <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
        </div>
        
     
      </div>
      
      
    </div>
    <div class="copyright">
    <hr/>
    
    <p>© Copyright 2023 GLA BLOGSPOT</p>
    </div>
  </footer></div>
  )
}

export default Footer;