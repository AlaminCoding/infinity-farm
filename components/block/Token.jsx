import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import token from "public/img/token.png";
import Image from "next/image";
import circle2 from "public/img/circle2.png";
import circle1 from "public/img/circle1.png";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Token = () => {
  useEffect(() => {
    gsap.from(".token-img", {
      duration: 1,
      opacity: 0,
      x: -80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".token-img",
        start: "top 70%",
      },
    });
    gsap.from(".token-text", {
      duration: 1,
      opacity: 0,
      x: 100,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".token-text",
        start: "top 70%",
      },
    });
  }, []);
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={5}>
            <TokenImg className="token-img">
              <Image src={token} alt="token" />
            </TokenImg>
          </Col>
          <Col lg={7}>
            <TokenText className="token-text">
              <h2>$INFINITY token</h2>
              <p>
                $INFINITY is the first and main token of the Infinite Ecosystem.
                It will be powering all the Subunits of the ecosystem, which
                will introduce several mechanisms to increase the buying
                pressure of $INFINITY. By bringing a use case to the $INFINITY
                token in every Levels of our ecosystem, we perpetually create
                natural value for the holders.
              </p>
            </TokenText>
          </Col>
        </Row>
      </Container>
      <div className="circle2">
        <Image src={circle2} alt="back circcle" />
      </div>
      <div className="circle1">
        <Image src={circle1} alt="back circcle" />
      </div>
    </Section>
  );
};

export default Token;

const Section = styled.section`
  background-image: linear-gradient(to left, #6c46f1, #0b33a1);
  margin-top: 85px;
  padding: 110px 0px 100px 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  .circle2 {
    position: absolute;
    top: -210px;
    left: -210px;
    z-index: -1;
    @media screen and (max-width: 600px) {
      top: -280px;
      left: -280px;
    }
  }
  .circle1 {
    position: absolute;
    bottom: -210px;
    right: -210px;
    z-index: -1;
  }
  @media screen and (max-width: 992px) {
    margin-top: 70px;
    padding: 70px 0px;
  }
`;
const TokenImg = styled.div`
  padding-right: 10px;
  @media screen and (max-width: 992px) {
    padding: 0px 25px;
  }
`;

const TokenText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: white;
    font-size: calc(28px + (40 - 28) * ((100vw - 360px) / (1920 - 360)));
    font-weight: 700;
  }
  p {
    color: white;
    font-size: calc(14px + (18 - 14) * ((100vw - 360px) / (1920 - 360)));
    margin-top: 20px;
    line-height: 30px;
  }
`;
