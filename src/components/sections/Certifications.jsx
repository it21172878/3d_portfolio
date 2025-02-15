import "./Timeline.css";
import { Element } from "react-scroll";
import styled from "styled-components";
import { certifications } from "../../data/constants";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-contnet: center; */
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -0px;
  padding-top: 80px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Certifications = () => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <Element name="Certifications" style={{ scrollMarginBottom: "25px" }}>
      <Container id="Certifications">
        <Wrapper>
          <Title>Certifications</Title>
          <Desc
            style={{
              marginBottom: "40px",
            }}
          >
            Here are some of the Courses on which I have followed
          </Desc>

          <div className="timeline-row">
            <div className="timeline-column">
              <div className="education-box">
                {certifications
                  .filter((certification) => certification.id % 2 !== 1)
                  .map((certification) => (
                    <div
                      className="education-content"
                      onMouseEnter={() => setHoveredId(certification.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="content">
                        <div
                          className="content-top"
                          style={{
                            backgroundImage: `url(${
                              hoveredId === certification.id
                                ? certification.img2 // Change image on hover
                                : certification.img1
                            })`,
                            width: "100%",
                            height: "100px",
                            borderStartEndRadius: "8px",
                            borderStartStartRadius: "8px",
                            backgroundSize: "cover",
                            transition: "background-image 0.3s ease-in-out",
                          }}
                        >
                          <div>
                            <div className="certificationButton">
                              <a
                                href={certification.link}
                                className="certificationButton"
                                rel="noreferrer"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <div key={certification.id} className="timeline-item"> */}
                        <div key={certification.id} className="content-bottom">
                          <div className="certificationImage">
                            <div className="certificationDetails">
                              <h3>{certification.title}</h3>
                              <div className="skillsTags">
                                {certification.skills.map((skill) => (
                                  <span className="skillsTag">{skill}</span>
                                  // {certification.skills}
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <span className="animate " style={{ "--i": 3 }}></span>

            <div className="timeline-column">
              <div className="education-box">
                {certifications
                  .filter((certification) => certification.id % 2 !== 0)
                  .map((certification) => (
                    <div
                      className="education-content"
                      onMouseEnter={() => setHoveredId(certification.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="content">
                        <div
                          className="content-top"
                          style={{
                            backgroundImage: `url(${
                              hoveredId === certification.id
                                ? certification.img2 // Change image on hover
                                : certification.img1
                            })`,
                            width: "100%",
                            height: "100px",
                            backgroundSize: "cover",
                            borderStartEndRadius: "8px",
                            borderStartStartRadius: "8px",
                            transition: "background-image 0.3s ease-in-out",
                          }}
                        >
                          <div>
                            <div className="certificationButton">
                              <a
                                href={certification.link}
                                className="certificationButton"
                                rel="noreferrer"
                                target="_blank"
                              >
                                View Certificate
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <div key={certification.id} className="timeline-item"> */}
                        <div key={certification.id} className="content-bottom">
                          <div className="certificationImage">
                            <div className="certificationDetails">
                              <h3>{certification.title}</h3>
                              <div className="skillsTags">
                                {certification.skills.map((skill) => (
                                  <span className="skillsTag">{skill}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default Certifications;
