import { Container, Row, Col } from "react-bootstrap";
import teamList from "assets/data/teamData";
import styled from "styled-components";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    gsap.from(".t-heading", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".t-heading",
        start: "top 70%",
      },
    });

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".team",
          start: "top 70%",
        },
      })
      .from(".team", {
        duration: 1,
        opacity: 0,
        y: 80,
        stagger: 0.25,
      });
  }, []);
  return (
    <Section>
      <Container>
        <Heading className="t-heading">Meet Our Team</Heading>
        <Row className="team-row">
          {teamList.map((element) => (
            <Col md={4} className="team" key={element.id}>
              <TeamBox>
                <img src={element.image.src} alt="" />
                <h2>{element.name}</h2>
                <p>{element.desg}</p>
              </TeamBox>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Team;

const Section = styled.section`
  overflow: hidden;
  padding: 100px 0px;
  .team-row {
    padding: 0px 100px;
  }
  @media screen and (max-width: 992px) {
    padding: 50px 0px;
    .team-row {
      padding: 0px 0px;
    }
  }
`;
const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  background-image: linear-gradient(to left, #d9413e, #9d17cd);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 80px;
  @media screen and (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

const TeamBox = styled.div`
  text-align: center;
  margin-top: 20px;
  img {
    width: 100%;
  }
  h2 {
    margin: 30px 0px 15px 0px;
    font-size: 24px;
    color: var(--black);
  }
  p {
    font-size: 16px;
    color: var(--gray);
  }
`;
