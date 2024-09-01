import React from 'react';
import './Footer.css' ;
import logo from '../assets/image.png';

const FooterComponent = () => {
  return (
    <div className="container">
            <upperPart className = "upperPart">
                <h1>Join the WaitList</h1>
                <form className = "formWaitList">
                    <input type ="email" placeholder="Enter your email" required />
                    <button type = "submit">Sign Up</button>
                </form>
                <p>That means if you order now.</p>
            </upperPart>
    
            <hr className="divider" /> {/* First horizontal line */}

    <footer className="footer">   
    <div className="middlePart">
        <div className = "footer-partone brand-section">
            <img src = {logo} alt="3that - Be Athah" className="logo" />
        </div>
        <div className="footer-partone">
            <h4> Why Be Athat </h4>
            <p> About Us </p>
        </div> 
        <div className="footer-partone">
            <h4> Resources </h4>
            <p> Blogs </p>
        </div>
        <div className="footer-partone">
            <h4> Company </h4>
            <p> Your Privacy </p>
            <p> Terms & Conditions </p>
            <p> Get in touch with us </p>
        </div>
        <div>
            <h4>Follow Us: Be_Athah</h4>
            <div className= "social-icons">
                <i className= "fa fa-facebook"></i>
                <i className= "fa fa-twitter"></i>
                <i className= "fa fa-youtube"></i>
                <i className= "fa fa-linkedin"></i>
                <i className= "fa fa-instagram"></i>
            </div>
        </div>  
    </div>

    <hr className="dividertwo" /> {/* Second horizontal line */}

    <div className="bottomPart">
        <p>Made with ❤️ in India</p>
        <p>© Yauvanchakra Pvt. Ltd. All right reserved.</p>
    
    </div>
    
    </footer> 

    </div>

  )
}

export default FooterComponent