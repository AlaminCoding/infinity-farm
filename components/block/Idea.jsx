import styled from "styled-components";
import ReactPlayer from "react-player";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Idea = () => {
  useEffect(() => {
    gsap.from("#video", {
      duration: 1,
      opacity: 0,
      x: -80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#video",
        start: "top 70%",
      },
    });
    gsap.from("#video-text", {
      duration: 1,
      opacity: 0,
      x: 100,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#video-text",
        start: "top 70%",
      },
    });
  }, []);
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={6}>
            <Video id="video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=nGWnU078zmg"
                width="100%"
              />
            </Video>
          </Col>
          <Col lg={6}>
            <VideoText id="video-text">
              <h2>Our idea of DeFi</h2>
              <p>
                With Perpetual Farming, we are geared to perpetually provide
                value to grow the ecosystem, with each farm level focusing on a
                new aspect of DeFi within the Infinite ecosystem. Unlike the
                prevalence of tokens with no real use case and utility in many
                DeFi protocols, $INFINITY will be anchored on everyday
                application and real-life use, giving it intrinsic value.
              </p>
              <div className="social-btn">
                <a
                  href="https://drive.google.com/file/d/1J5dDsadAeVMzYmU9bVgS8argBHndkCIM/view?usp=sharing"
                  className="outline-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepaper (EN)
                </a>
                <a
                  href="https://drive.google.com/file/d/1Ws2QIA-MbQMGsa74rCfk9P9s20pAEBWk/view?usp=sharing"
                  className="grad-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepaper (JN)
                </a>
              </div>
            </VideoText>
          </Col>
        </Row>
      </Container>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </Section>
  );
};

export default Idea;

const Section = styled.section`
  background-image: linear-gradient(to left, #6c46f1, #0b33a1);
  margin-top: 85px;
  padding: 110px 0px;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 992px) {
    padding: 30px 0px;
    margin-top: 30px;
  }
`;

const Video = styled.div`
  padding-right: 20px;
  @media screen and (max-width: 992px) {
    padding-right: 0px;
  }
`;

const VideoText = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  h2 {
    font-size: calc(28px + (40 - 28) * ((100vw - 360px) / (1920 - 360)));
    color: white;
    font-weight: 700;
  }
  p {
    font-size: calc(14px + (18 - 14) * ((100vw - 360px) / (1920 - 360)));
    color: white;
    margin: 30px 0px;
  }
  .social-btn {
    display: flex;
    width: 100%;
  }
  .outline-btn {
    background-color: white;
    margin-right: 10px;
  }
  .grad-btn {
    &:hover {
      background-image: none;
      background-color: white;
      background-clip: border-box;
      -webkit-text-fill-color: black;
    }
  }
  @media screen and (max-width: 992px) {
    margin-top: 20px;
    padding-left: 0;
    h2 {
      text-align: center;
      margin: 0 auto;
    }
    p {
      text-align: center;
      margin: 20px 0px;
    }
    .social-btn {
      justify-content: center;
    }
  }
`;
const Circle1 = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.04);
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  z-index: -1;
  @media screen and (max-width: 992px) {
    height: 150px;
    width: 150px;
    left: 0px;
  }
`;
const Circle2 = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.04);
  position: absolute;
  top: 50%;
  right: -250px;
  transform: translateY(-50%);
  z-index: -1;
  @media screen and (max-width: 992px) {
    height: 200px;
    width: 200px;
    right: -100px;
    top: 70%;
  }
`;
