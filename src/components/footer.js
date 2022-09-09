
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return(
    <footer id="contacto" className="oscuro">
      <div className='section-title-wrapper'>
        <span className='divider'></span>
          <h5>@rec7films</h5>
        <span className='divider'></span>
      </div>
      <div className='icons-wrapper'>
        <a href="https://www.instagram.com/rec7films/">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/watch/Rec7-Films-103539729079986/">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/channel/UCSh53fgA5zcGyagoI2XUjng/videos">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://web.whatsapp.com/">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <p>Contacto@rec7films.com</p>
    </footer>
  );
}

export default Footer;