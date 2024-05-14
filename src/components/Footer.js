import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jos%C3%A9-molina-657604303/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=61559755525347" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/andres.mh_/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
