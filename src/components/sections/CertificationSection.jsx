import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import "./CertificationSection.css";
import { allCertificationImages } from "../../data/constants";
import img1 from "../../images/certification/containers_v2_certificate.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -80px;
  padding-top: 80px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* max-width: 1100px; */
  gap: 12px;
  scroll-margin-top: 52rem;
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

const CertificationSection = () => {
  return (
    <Element name="Certifications">
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
          <div className="image-slider">
            <div className="image-slider-track">
              {allCertificationImages
                .concat(allCertificationImages)
                .map((item, index) => {
                  return (
                    <div key={index} className="slide">
                      <img src={item} alt="" />
                    </div>
                  );
                })}
            </div>
          </div>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default CertificationSection;
