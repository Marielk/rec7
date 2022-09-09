
import iconRect7 from '../assets/img/Logo_rec.png';
import '../styles/header.scss';

const Header = () => {

  return(
    <>
    <header id="inicio" className="hero-section"></header>

    <div id="logo-wrapper">
      <img src={iconRect7} alt="Rec7 Films"/>
      <div className='logotext-wrapper'>
        <div className='logoName-wrapper'>
          <h1>Rec7</h1><h3>Films</h3>
        </div>
        <div>
          <h4>“Beyond images, Stories”</h4>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;