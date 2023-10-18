import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Nextjs Todo App",
      description: "Next-js",
      imgUrl: projImg1,
    },
    {
      title: "Facebook Clone",
      description: "Reactjs",
      imgUrl: projImg2,
    },
    {
      title: "Chatbot",
      description: "Html-Css-JavaScript",
      imgUrl: projImg3,
    },
    {
      title: "Video Calling App",
      description: "Reactjs-Firebase-TypeScript",
      imgUrl: projImg1,
    },
    {
      title: "Digital Clock",
      description: "Html-Css-Javascript",
      imgUrl: projImg2,
    },
    {
      title: "DailyNews Update",
      description: "Nextjs",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Glimpse Of Me</h2>
                <p>Hey there, I'm Omer, a creative tech geek with a passion for transforming ideas into digital marvels. By day, I'm a university student and passionate web developer, known for crafting seamless digital experiences. By night, I'm a part-time meme expert and full-time web wizard!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>

                      <Nav.Link eventKey="second">Contact Me</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>

                      <Nav.Link eventKey="third">Why Me </Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>🌟Imagine a world where challenges are like puzzles waiting to be solved and creativity knows no bounds.🌟
                        <br></br>
                      That's the world I want to dive into as your intern. I'm not just another applicant; I'm a under-graduate student bursting with excitement and curiosity! I love challenges because they push me to think differently and find cool solutions. I'm not just good with tech stuff; I live and breathe it! Web development is my jam, and I'm eager to learn more. 
                      <br></br>
                      I’m not here just to tick boxes; I’m here to infuse your projects with fresh ideas and energy. I’m like a sponge, soaking up knowledge and always hungry for more. I’m not just going to be an intern. I’m going to be the intern who brings a spark of innovation to your team. Together, we can create digital wonders that will make everyone say, "Wow, how did they do that?"
                      <br></br>
                      So, are you ready to embark on this awesome journey with a under-graduate tech enthusiast?
                      <br></br> 
                      <h4>Let's make some magic happen! ✨ </h4> ✨
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3 className="aboutHeading">🌟Just imagine a world where challenges are like puzzles <br></br>waiting to be solved and creativity knows no bounds.🌟</h3>
                      <p>
                        <br></br>
                      That's the world I want to dive into as your intern. I'm not just another applicant; I'm a under-graduate student bursting with excitement and curiosity! I love challenges because they push me to think differently and find cool solutions. I'm not just good with tech stuff; I live and breathe it! Web development is my jam, and I'm eager to learn more. 
                      <br></br><br></br>
                      I’m not here just to tick boxes; I’m here to infuse your projects with fresh ideas and energy. I’m like a sponge, soaking up knowledge and always hungry for more. I’m not just going to be an intern. I’m going to be the intern who brings a spark of innovation to your team. Together, we can create digital wonders that will make everyone say, "Wow, how did they do that?"
                      <br></br><br></br>
                      So, are you ready to embark on this awesome journey with a under-graduate tech enthusiast?
                      <br></br> 
                      <h2 className="tagline">Let's make some magic happen! ✨ </h2>





</p>
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
