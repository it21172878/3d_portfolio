import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/avatar.jpg";
import HeroBgAnimation from "./../HeroBgAnimation/index";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "./../../utils/motion";
import { Element } from "react-scroll";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  /* margin-top: -80px; */
  padding-top: 80px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  margin-top: -80px;
  padding-top: 80px;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
    width: 100%;
    margin-top: -90px;
    padding-top: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 16px;
    text-align: center;
    justify-content: center;
  }
`;

const Span = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 960px) {
    text-align: center;
    margin-top: -30px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    margin-top: 2px;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const Texts = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const SubText = styled.div`
  font-size: 32px;
  @media (max-width: 960px) {
    /* order: 2; */
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;

  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 10px 10px 30px #1f2634, -10px -10px 30px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
    margin-bottom: 40px;
  }
  color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-contnet: center; */
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -80px;
  padding-top: 15px;
  @media (max-width: 640px) {
    margin-top: -80px;
    padding-top: 80px;
  }
`;

const Hero = () => {
  return (
    <Element name="About">
      {/* <div id="About"> */}
      <Container id="About">
        <HeroContainer>
          <HeroBg>
            <HeroBgAnimation />
          </HeroBg>

          <motion.div {...headContainerAnimation}>
            <HeroInnerContainer>
              <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                  <Title>
                    Hi, I'm <br /> {Bio.name}
                  </Title>
                  <Texts>
                    <SubText>I am a</SubText>
                    <TextLoop>
                      <Span>
                        <Typewriter
                          options={{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </Span>
                    </TextLoop>
                  </Texts>
                </motion.div>

                <motion.div {...headContentAnimation}>
                  <SubTitle>{Bio.description}</SubTitle>
                </motion.div>

                <ResumeButton
                  href="/Dilanka_Liyanagama-Resume.pdf"
                  download="Dilanka_Liyanagama-Resume.pdf"
                >
                  Check Resume
                </ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                  <Tilt>
                    <Img src={HeroImg} alt="Dilanka Liyanagama" />
                  </Tilt>
                </motion.div>
              </HeroRightContainer>
            </HeroInnerContainer>
          </motion.div>
        </HeroContainer>
      </Container>
    </Element>
  );
};

export default Hero;
