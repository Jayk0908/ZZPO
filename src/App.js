import Button from './button';
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

window.addEventListener("resize", function() {
  var container = document.getElementById("animation-container");
  if (container) {
    var windowWidth = window.innerWidth;
    var containerWidth = windowWidth * 0.5; // Change this value as needed
    container.style.width = containerWidth + "px";
  }
});

function App() {
  return (
    <div className="App">
        <nav>
        <ul>
          <li className="nav-item-1">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item-2">
            <Link to="/Bedrijven">Bedrijven</Link>
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
          <div className='text-container'>
            <h1>In drie stappen de perfecte <br/> opdracht voor jou</h1>
          </div>
          <div className='secondary-text-container'>
            <h2>Wij willen de opdrachtenmarkt voor ZZP'ers <br/> naar de ZZP'er toebrengen, zodat jij lekker door kan <br/> werken en wij de beste opdrachten vinden voor jou!</h2>
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
    </div>
  );
}

export default App;
