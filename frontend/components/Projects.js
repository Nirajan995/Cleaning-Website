import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectimg4.jpg";
import projImg2 from "../assets/img/projectimg4.jpg";
import projImg3 from "../assets/img/projectimg4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Projects = () => {

  const projects = [
    {
      title: "Office Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg1,
    },
    {
      title: "Retail Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg2,
    },
    {
      title: "Medical Center Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg3,
    },
    {
      title: "Educational Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg1,
    },
    {
      title: "Sports/Leisure Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg2,
    },
    {
      title: "Windows Service Cleaning",
      description: "Great Cleaning Services",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p className="text-xl">Services</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
