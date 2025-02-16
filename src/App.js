import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import CertificationSection from "./components/sections/CertificationSection";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    // const fakeDataFetch = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    // }, 4000);
    // };

    // fakeDataFetch();
  }, []);
  return isLoading ? (
    <Body>
      <Loader />
    </Body>
  ) : (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <CertificationSection />
            </Wrapper>
            <Projects />
            <Wrapper>
              <div>
                <Education />
              </div>
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
