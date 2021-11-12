import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import { useLocation } from 'react-router-dom';

function Header() {

  const {pathname} = useLocation();

  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center">
  
        {pathname === '/' ?
          <h1 className="logo me-auto">
            <LinkScroll to="hero">Dev Rise</LinkScroll></h1> :
          <h1 className="logo me-auto">
            <Link to="/">Dev Rise</Link></h1>}
  
        {pathname === '/' && <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><LinkScroll 
              className="nav-link scrollto" to="hero">Home</LinkScroll></li>
            <li><LinkScroll 
              className="nav-link scrollto" to="team">Professores</LinkScroll></li>
            <li><LinkScroll 
              className="nav-link scrollto" to="portfolio">Tutoriais</LinkScroll></li>
            
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>}
  
        <div className="social-links">
          <a 
            href="https://github.com/leandrocl2005" 
            target="_blank" rel="noreferrer"
            className="github"
          ><i className="bi bi-github"></i></a>
          <a 
            href="https://www.linkedin.com/in/leandrolemes/" 
            target="_blank"
            rel="noreferrer"
            className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a 
            href="https://www.instagram.com/leandro.cruvinel/"
            target="_blank"
            rel="noreferrer"
            className="instagram"><i className="bi bi-instagram"></i></a>
        </div>
  
      </div>
    </header>
  );
}

export default Header;