import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import "../../components/cards/certification.css";

const Container = styled.div`
  width: 44%;
  height: 100px;
  background-color: aqua;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CertificationCard = ({ certification }) => {
  return (
    <VerticalTimelineElement
      className="vtle"
      style={{
        display: "block",
        flexDirection: "column",
      }}
      icon={
        <img
          width="100%"
          height="100%"
          alt={certification?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={certification?.img}
        />
      }
      contentStyle={{
        display: "grid",
        // flexDirection: "column",
        gridTemplateRows: "1fr 5fr",
        gap: "12px",
        background: "#1c0a79",
        color: "#000000",
        //   boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        //   backgroundColor: "rgba(17, 25, 40, 0.83)",
        //   border: "1px solid rgba(255, 255, 255, 0.125)",
        //   borderRadius: "6px",
      }}
      //   contentStyle={{
      //     display: "flex",
      //     flexDirection: "column",
      //     gap: "12px",
      //     background: "#1d1836",
      //     color: "#fff",
      //     boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
      //     backgroundColor: "rgba(17, 25, 40, 0.83)",
      //     border: "1px solid rgba(255, 255, 255, 0.125)",
      //     borderRadius: "6px",
      //   }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={certification?.date}
    >
      <Top>
        {/* <Image src={certification?.img} /> */}
        <Body>
          <Role>{certification?.role}</Role>
          <Company>{certification?.company}</Company>
          <Date>{certification?.date}</Date>
        </Body>
      </Top>

      <Description>
        {certification?.desc && <Span>{certification.desc}</Span>}
        {certification?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {certification?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default CertificationCard;
