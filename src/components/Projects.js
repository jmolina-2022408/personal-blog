import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCard2, ProjectCard3, ProjectCard4, ProjectCard5, ProjectCard6, ProjectCard7, ProjectCard8, ProjectCard9, ProjectCard10, ProjectCard11, ProjectCard12 } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = {
    title: "Infografía: Desarrollo Web y Procesadores",
    description: "En este apartado aprendí el uso y el que es: HTML5, CSS3, FlexBox, Bootstrap. Y de procesadores: LESS, SASS, PUG Y JADE.",
    imgUrl: projImg1
  };

  const project2 = {
    title: "Mapa Conceptual: Tecnologías Web",
    description: "En este apartado aprendí el uso y el que es: Javascript, AJAX, MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL, BackboneJs.",
    imgUrl: projImg2
  };

  const project3 = {
    title: "Mapa Mental: Desarrollo Web",
    description: "En este apartado aprendí el uso, ventajas y el que es: Hosting, Dominio, Cliente-Servidor, Web Semántica, WebM, Canvas, W3C.",
    imgUrl: projImg3
  };

  const project4 = {
    title: "Infografía: Beneficios React",
    description: "En este apartado aprendí todos los beneficios que me otorga el usar React, también el como usarlo correctamente y el como instalarlo.",
    imgUrl: projImg4
  };

  const project5 = {
    title: "Investigación: Propuesta de Proyecto",
    description: "En este apartado aprendí el como poder hacer una investigación exhaustiva para poder entregar y presentar una propuesta de proyecto hacia una empresa importante.",
    imgUrl: projImg5
  };

  const project6 = {
    title: "Investigación: Coding Styles",
    description: "En este apartado aprendí los diferentes tipos de estilos de codigo para el lenguaje de programación JavaScript, gracias a ellos pude determinar que estilo es más efectivo.",
    imgUrl: projImg6
  };

  const project7 = {
    title: "Laboratorio #1: Página Web",
    description: "En este apartado aprendí como hacer de una manera mucho más efectiva una página web, en la cual demostre y puse a pruebas todos mis conocimientos sobre HTML y CSS3.",
    imgUrl: projImg7
  };

  const project8 = {
    title: "Laboratorio #2: Sistema de Adopción de Mascotas",
    description: "En este apartado aprendí como poner a prueba mis conocimientos teóricos a prácticos con respecto a la utilización de NodeJS, aprendí el como hacer un CRUD completo.",
    imgUrl: projImg8
  };

  const project9 = {
    title: "Revisión de Avances: Proyecto Final de Bimestre I",
    description: "En este apartado aprendí de forma totalmente completa y de manera correcta, el uso de NodeJS, ya que aqui hice un proyecto grande y con bastantes validaciones.",
    imgUrl: projImg9
  };

  const project10 = {
    title: "Laboratorio #3: Proyecto Gestor de Empresas",
    description: "En este apartado aprendí diferentes formas de poder aplicar el backend con NodeJS, ya que aqui hice un proyecto sobre un gestor de empresas con diferentes validaciones.",
    imgUrl: projImg10
  };

  const project11 = {
    title: "Proyecto Final Bim. I",
    description: "En este apartado aprendí y complete todas las validaciones, entidades, cruds y el poder implementar de manera correcta el vincular un PDF con NodeJS y poder personalizarlo.",
    imgUrl: projImg11
  };

  const project12 = {
    title: "Ejercicio #1: Ahorcado con HTML, CSS y JavaScript",
    description: "En este apartado aprendí el como hacer un ahorcado puesto en una página web, en la cual logre aprender e implementar Canvas, los cuales me permiten dibujar figuras.",
    imgUrl: projImg12
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Descubre ejemplos destacados de mi trabajo en el desarrollo web.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>Tecnología III</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>Taller III</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>Práctica Supervisada</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard {...project1} />
                          <ProjectCard2 {...project2} />
                          <ProjectCard3 {...project3} />
                        </Row>
                        <Row>
                          <ProjectCard4 {...project4} />
                          <ProjectCard5 {...project5} />
                          <ProjectCard6 {...project6} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard7 {...project7} />
                          <ProjectCard8 {...project8} />
                          <ProjectCard9 {...project9} />
                        </Row>
                        <Row>
                          <ProjectCard10 {...project10} />
                          <ProjectCard11 {...project11} />
                          <ProjectCard12 {...project12} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}