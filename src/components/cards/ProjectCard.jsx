import React from "react";
import styled from "styled-components";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */
`;
// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;
// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  text-align: end;
`;

const TagItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: 1px solid ${({ theme }) => theme.text_primary + 10};
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
    box-shadow: 2px 2px 4px #1f2634;
    filter: brightness(1.05);
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
      225deg,
      hsla(271, 5%, 5%, 1) 0%,
      hsla(294, 50%, 50%, 1) 100%
    );
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags>
        {project?.tags.map((tag) => (
          <TagItem key={project.id}>{tag}</TagItem>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {/* <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members> */}
      <Buttons>
        <Button href={project.github} target="_blank">
          Git Repo
        </Button>
        <Button href={project.live} target="_blank">
          {/* <Members> */}
          {project.live ? (
            <WifiIcon style={{ color: "green" }} />
          ) : (
            <WifiOffIcon style={{ color: "red" }} />
          )}
          {/* </Members> */}
        </Button>
      </Buttons>
    </Card>
  );
};

export default ProjectCard;
