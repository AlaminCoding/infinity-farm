import iconList from "assets/data/iconList";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Partners = () => {
  useEffect(() => {
    gsap.from(".p-heading", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".r-heading",
        start: "top 70%",
      },
    });

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".partner-img",
          start: "top 70%",
        },
      })
      .from(".partner-img", {
        duration: 1,
        opacity: 0,
        y: 80,
        stagger: 0.15,
      });
  }, []);
  return (
    <Section>
      <Container>
        <Heading className="p-heading">Partners</Heading>
        <Icons className="p-img">
          {iconList.map((element) => (
            <img
              src={element.img.src}
              alt="icons"
              key={element.id}
              className="partner-img"
            />
          ))}
        </Icons>
      </Container>
    </Section>
  );
};

export default Partners;

const Section = styled.section`
  padding-bottom: 100px;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    padding-bottom: 50px;
  }
`;

const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  color: var(--black);
  font-weight: 700;
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
  img {
    margin-top: 20px;
    margin-left: 27px;
    margin-right: 27px;
    @media screen and (max-width: 600px) {
      width: 45px;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 992px) {
    margin-top: 25px;
  }
`;
