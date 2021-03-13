import React, { useEffect, useState } from 'react';
// import Tilt from 'react-tilt';
// import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <div className="skills-wrapper">
          <p>
            Through my studies, I've gained a solid understanding of web development concepts, and
            have dedicated a lot of my free time to apply these concepts to real-world scenarios and
            applications.
          </p>

          <div className="skills-table">
            <table>
              <tr>
                <td>
                  <span>○</span>
                  JavaSript
                </td>
                <td>
                  <span>○</span>
                  React
                </td>
                <td>
                  <span>○</span>
                  Git & Github
                </td>
              </tr>
              <tr>
                <td>
                  <span>○</span>
                  HTML & CSS{' '}
                </td>
                <td>
                  <span>○</span>
                  Sass
                </td>
                <td>
                  <span>○</span>
                  Styled-Components
                </td>
                <td>
                  <span>○</span>
                  Node
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
