import logo from '../assets/img/icono.svg';
import '../styles/navbar.scss';

const NavBar = () => {
  return(
    <nav className="oscuro">
      <ul>
        <li className="icono">
          <a href="/">
            <img src={logo} alt="Home Rec7 Films"/>
          </a>
        </li>
        <li><a href="/portafolio">Trabajos</a></li>
        <li><a href="#contacto">Contacto</a> </li>
      </ul>
    </nav>
  );
}

export default NavBar;