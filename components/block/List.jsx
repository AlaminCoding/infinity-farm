import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ListBox from "components/ui/ListBox";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const IdeaList = (props) => {
  const { dataArray, name } = props;
  useEffect(() => {
    gsap.from(`.${name}0`, {
      duration: 1,
      opacity: 0,
      x: -80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: `.${name}0`,
        start: "top 70%",
      },
    });
    gsap.from(`.${name}1`, {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: `.${name}1`,
        start: "top 70%",
      },
    });
    gsap.from(`.${name}2`, {
      duration: 1,
      opacity: 0,
      x: 80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: `.${name}2`,
        start: "top 70%",
      },
    });
  }, []);
  return (
    <Section>
      <Container>
        <Row>
          {dataArray.map((element, index) => (
            <Col lg={4} key={element.id} className={name + element.id}>
              <ListBox data={element} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default IdeaList;

const Section = styled.section`
  margin-top: 110px;
  padding-bottom: 50px;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    margin-top: 40px;
    padding-bottom: 20px;
  }
`;
