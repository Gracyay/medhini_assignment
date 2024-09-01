import React from 'react';
import './Header.css';
import logo from '../assets/image.png';
import centralImage from '../assets/centralimage.png';
import chakra1 from '../assets/chakra1.png';
import chakra2 from '../assets/chakra2.png';
import chakra3 from '../assets/chakra3.png';
import chakra4 from '../assets/chakra4.png';
import chakra5 from '../assets/chakra5.png';
import chakra6 from '../assets/chakra6.png';
import chakra7 from '../assets/chakra7.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Athah Logo" className="logo" />
        <nav>
          <a href="#">About us</a>
          <a href="#">Science</a>
          <a href="#">Sign Up</a>
        </nav>
      </header>

      <div className="imbalance-section">
        <div className="imbalance-text">
          Most of us are experiencing Mental and Physical imbalance
        </div>
      </div>
      
      
      <div className="calm-level-test">
            <h2>Calm Level Test</h2>
            <p className="description">
                <strong>Are you navigating through stressful times, unsure of its impact on your well-being?<br></br></strong>
             Take a pause and explore your stress levels with our stress quiz. Each question offers a window into your inner<br></br> state, guiding you towards a clearer understanding of your wellness journey.</p>
            <button className="unwind-btn">Unwind and Assess</button>
      </div>
      <div className="calm-lvl" >
      <p className="footer-note"><em>**Rest assured, your results are completely anonymous.**</em></p>
      </div>

      <div className="chakra-container">
        <h1 className="chakra-title">The 7 Chakras</h1>
        <p className="chakra-text">
          As you take a deep breath, feel the pure universal energy entering your body.
          It flows gently through your aligned chakras, from the crown at the top of your head to the root at the base of your spine.
          This serene flow creates a healthy aura around your mind, spirit, and body.
        </p>
        <p className="chakra-text">
          But the stress we encounter daily impacts all seven chakras.
          <span className="chakra-link">Click on each to explore and realign.</span>
        </p>
      </div>

      <div className="revolving-chakras-wrapper">
        <div className="side-section left">
          <h2 className="side-title">Root Chakra</h2>
          <p className="side-text">Unconscious tension and stress affect the Root Chakra, 
            leading to allergies, fatigue, and stiff joints. 
            Mentally, a blocked Root Chakra can cause depression, addiction, loneliness, and anxiety.</p>
        </div>
        <div className="revolving-chakras-container">
          <div className="rotation-wrapper">
            <div className="anima">
       
                <div class="chakra-image-wrapper"><img src={chakra1} alt="Chakra 1" className="chakra-image chakra1" /></div>
                <div class="chakra-image-wrapper"><img src={chakra2} alt="Chakra 2" className="chakra-image chakra2" /></div>
                <div class="chakra-image-wrapper"><img src={chakra3} alt="Chakra 3" className="chakra-image chakra3" /></div>
                <div class="chakra-image-wrapper"><img src={chakra4} alt="Chakra 4" className="chakra-image chakra4" /></div>
                <div class="chakra-image-wrapper"><img src={chakra5} alt="Chakra 5" className="chakra-image chakra5" /></div>
                <div class="chakra-image-wrapper"><img src={chakra6} alt="Chakra 6" className="chakra-image chakra6" /></div>
                <div class="chakra-image-wrapper"><img src={chakra7} alt="Chakra 7" className="chakra-image chakra7" /></div>

              <div className="ci">
                <img src={centralImage} alt="Central Image" className="central-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="side-section right">
          <h2 className="side-title">Crown Chakra</h2>
          <p className="side-text">Stress can block the Crown Chakra, manifesting as taking things personally, expressing negativity, experiencing headaches, adopting a victim mentality, feeling fearful, and overthinking</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
