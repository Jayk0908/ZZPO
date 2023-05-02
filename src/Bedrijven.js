import React from 'react';
import Button from './button copy';
import Background from './images/path1.png';
import HeroPicture from './images/favpngvectorGraphicsStockIllustrationSelfEmploymentStockPhotography.png'
import HeroBubble from './images/path4.png'
import Bubble1 from './images/ellipse3.png'
import Bubble2 from './images/ellipse5.png'
import Bubble3 from './images/ellipse6.png'
import Logo from './images/logo_transparent.png'
import './App.css';
import CookieConsent from 'react-cookie-consent';
import { Outlet, Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './socials';

const Bedrijven = () => {
    return (
    <div className="App">
        <nav>
        <ul>
          <li className="nav-item-1">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <div className='cookie-consent'>
    <CookieConsent
        location="bottom"
        buttonText="Ik ga akkoord"
        cookieName="cookie-consent"
      >
        Wij gebruiken cookies om de website te verbeteren.{" "}
        <a href="/privacybeleid">Meer informatie</a>
      </CookieConsent>
      </div>
      <div className='Hero-sector'>
        <div className='Hero-image'>
          <img src={Background} alt='background' /> {/* Updated */}
          <div className='main-logo'>
            <img src={Logo} alt='Main logo ZZPJ.nl' width="500" height='500'></img>
          </div>
          <div className='text-container-2'>
            <h1> De eerste drie vacatures <br/> helemaal gratis!</h1>
          </div>
          <div className='secondary-text-container'>
            <h2>Door onze nieuwe en efficientere manier van <br/> opdrachten aanbieden aan ZZP'ers krijgt jouw bedrijf <br/> zo snel mogelijk de juiste ZZP'er voor de taak!</h2>
          </div>
          <div className='Button-container'>
            <Button />
          </div>
          <div className='person-image'>
            <img src={HeroPicture} alt='HeroPicture' width="653" height='654' />
          </div>
          <div className='person-bubble'>
            <img src={HeroBubble} alt='HeroBubble' width="653" height='654' />
          </div>
        </div>
        <div className='bubble-1'>
          <img src={Bubble1} alt='Bubble1' width="304" height='305' />
        </div>
        <div className='bubble-2'>
          <img src={Bubble2} alt='Bubble2' width="188" height='191' />
        </div>
        <div className='bubble-3'>
          <img src={Bubble3} alt='Bubble3' width="188" height='191' />
        </div>
      </div>
      <div className='HDIW-sector'>
      <div className='HDIW-text'>
          <h1>Hoe werkt ons platform</h1>
        </div>
        <div className='lottie-ani-1' >
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AmDz0QET05.json"  background="transparent"  speed="1.2"  loop  autoplay></lottie-player>
        </div>
        <div className='stap-1'>
          <h2>Stap 1: <br/>Maak je account aan</h2>
        </div>
        <div className='lottie-ani-2' >
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_zfszhesy.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
        </div>
        <div className='stap-2'>
          <h2>Stap 2: <br/>Vul je profiel in</h2>
        </div>
        <div className='lottie-ani-3' >
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_mf5j5kua.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
        </div>
        <div className='stap-3'>
          <h2>Stap 3: <br/>Wij laten jou de beste <br/> opdrachten zien!</h2>
        </div>
        </div>
        <div className="facebook-button">
          <FacebookIcon/>
        </div>
        <div className="instagram-button">
          <InstagramIcon/>
        </div>
        <div className="linkedIn-button">
          <LinkedInIcon/>
      </div>
    </div>
    
    
    
    
    
    
    
    ) ;
  };
  
  export default Bedrijven;