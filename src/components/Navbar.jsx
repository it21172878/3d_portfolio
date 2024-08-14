import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { Link as Scroll } from "react-scroll";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled(Scroll)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;

  &.active {
    font-weight: bold;
    color: blue;
    border-bottom: 20px solid blue;
  }
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  const [isopen, setIsOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSetActive = (to) => {
    navigate(`/${to}`);
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>DILANKA</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isopen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink
            activeClass="active"
            to="About"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "About"}
              onClick={() => setToggle("About")}
            >
              About
            </ToggleButton>
          </NavLink>

          {/* <NavLink href="#About">
            <ToggleButton
              active={toggle === "About"}
              onClick={() => setToggle("About")}
            >
              About
            </ToggleButton>
          </NavLink> */}

          <NavLink
            activeClass="active"
            to="Skills"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "Skills"}
              onClick={() => setToggle("Skills")}
            >
              Skills
            </ToggleButton>
          </NavLink>
          {/* <NavLink
            activeClass="active"
            to="Experience"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "Experience"}
              onClick={() => setToggle("Experience")}
            >
              Experience
            </ToggleButton>
          </NavLink> */}
          <NavLink
            activeClass="active"
            to="Projects"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "Projects"}
              onClick={() => setToggle("Projects")}
            >
              Projects
            </ToggleButton>
          </NavLink>
          <NavLink
            activeClass="active"
            to="Education"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "Education"}
              onClick={() => setToggle("Education")}
            >
              Education
            </ToggleButton>
          </NavLink>
          <NavLink
            activeClass="active"
            to="Contact"
            spy={true}
            // smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <ToggleButton
              active={toggle === "Contact"}
              onClick={() => setToggle("Contact")}
            >
              Contact
            </ToggleButton>
          </NavLink>
        </NavItems>

        {isopen && (
          <MobileMenu isOpen={isopen}>
            <NavLink onClick={() => setIsOpen(!isopen)} to="About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} to="Skills">
              Skills
            </NavLink>
            {/* <NavLink onClick={() => setIsOpen(!isopen)} to="Experience">
              Experience
            </NavLink> */}
            <NavLink onClick={() => setIsOpen(!isopen)} to="Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} to="Education">
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} to="Contact">
              Contact
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
