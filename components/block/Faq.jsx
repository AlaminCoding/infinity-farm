import OutlineButton from "components/ui/outlineButton";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import faq from "public/img/faq.png";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Faq = () => {
  useEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".faq-heading",
          start: "top 70%",
        },
      })
      .from(`.faq-heading`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      })
      .from(`.faq-content`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      })
      .from(`.faq-btn`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      });

    gsap.from(".faq-img", {
      duration: 1,
      opacity: 0,
      x: 80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".faq-img",
        start: "top 70%",
      },
    });
  }, []);
  return (
    <Section>
      <Container>
        <Row className="flex-lg-row-reverse">
          <Col lg="6" className="faq-img">
            <FaqImg>
              <Image src={faq} alt="faq" />
            </FaqImg>
          </Col>
          <Col lg="6">
            <FaqText>
              <h2 className="faq-heading">
                How to participate in the Presale ?
              </h2>
              <p className="faq-content">
                To participate in our presale starting the third week of
                December 2021, you need to have BNB ready in your Web-3 wallet
                and follow our telegram and Twitter channels to get further
                instructions. Our presale will be held on a First Come First
                Serve Format.
              </p>
              <div className="faq-btn">
                <OutlineButton />
              </div>
            </FaqText>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Faq;

const Section = styled.section`
  padding: 100px 0px;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    padding: 50px 0px;
  }
`;
const FaqText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  h2 {
    color: var(--black);
    font-size: calc(28px + (40 - 28) * ((100vw - 360px) / (1920 - 360)));
    max-width: 410px;
    font-weight: 700;
  }
  p {
    color: var(--gray);
    font-size: calc(16px + (18 - 16) * ((100vw - 360px) / (1920 - 360)));
    margin: 20px 0px;
    max-width: 567px;
  }
  @media screen and (max-width: 992px) {
    h2 {
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
    }
    p {
      text-align: center;
      margin: 20px auto;
    }
    .faq-btn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    a {
      margin: 0 auto;
    }
  }
`;
const FaqImg = styled.div`
  @media screen and (max-width: 992px) {
    padding: 0px 30px;
  }
`;
