import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";
import layer from "public/img/layer.gif";
import layer1 from "public/img/layer1.png";
import layer2 from "public/img/layer2.png";
import OutlineButton from "components/ui/outlineButton";
import GradButton from "components/ui/gradButton";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Layer = () => {
  useEffect(() => {
    let tl1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".level",
          start: "top 60%",
        },
      })
      .from(`.level-heading`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      })
      .from(`.level-content`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      })
      .from(`.layer-btn`, {
        duration: 0.3,
        opacity: 0,
        y: 80,
      });

    let tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ltext-wrapper",
          start: "top 60%",
        },
      })
      .from(`.ltext1`, {
        duration: 0.5,
        opacity: 0,
        y: 80,
      })
      .from(`.ltext2`, {
        duration: 0.5,
        opacity: 0,
        y: 80,
      });
  }, []);
  return (
    <Section>
      <Container>
        <Row className="flex-lg-row-reverse">
          <Col lg={6}>
            <LayerImage>
              <Image src={layer} alt="layer" />
            </LayerImage>
          </Col>
          <Col lg={6}>
            <LayerText className="level">
              <h2 className="level-heading">Level 1</h2>
              <p className="level-content">
                The very first Level will last 3 months and will launch
                $INFINITY, the ecosystem’s main token which has a max supply of
                only 15 000 tokens. It will ensure the takeoff of a Launchpad,
                InfiniteLaunch, the starting point of each IDO’s on the Infinite
                Ecosystem.
              </p>
              <div className="layer-btn">
                <OutlineButton />
                <GradButton />
              </div>
            </LayerText>
          </Col>
        </Row>
        <Row className="ltext-wrapper">
          <Col lg={6} className="ltext1">
            <LayerBox index={1}>
              <div className="ltext">
                <div className="text-img">
                  <h2>Yield Farming, Staking and Vaults</h2>
                  <div className="img">
                    <Image src={layer1} alt="layer1" />
                  </div>
                </div>
                <p>
                  Stake your favourite coins, or liquidity pairs and get
                  $INFINITY rewards. What we envisage goes beyond depositing
                  tokens and earning, we are implementing multiple actions that
                  will give the utmost value to the community.
                </p>
              </div>
              <div className="limg">
                <Image src={layer1} alt="layer1" />
              </div>
            </LayerBox>
          </Col>
          <Col lg={6} className="ltext2">
            <LayerBox index={2}>
              <div className="ltext">
                <div className="text-img">
                  <h2>InfiniteLaunch</h2>
                  <div className="img">
                    <Image src={layer2} alt="layer2" />
                  </div>
                </div>
                <p>
                  We will use our launchpad to introduce new projects for
                  take-off. It will give the opportunity for the $INFINITY token
                  holders to have a guaranteed allocation in exclusive pre-sales
                  and be early stage investors of upcoming mainstream projects.
                </p>
              </div>
              <div className="limg">
                <Image src={layer2} alt="layer2" />
              </div>
            </LayerBox>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Layer;

const Section = styled.div`
  overflow: hidden;
  margin-top: 150px;
  @media screen and (max-width: 992px) {
    margin-top: 55px;
  }
`;
const LayerImage = styled.div`
  width: calc(400px + (1050 - 400) * ((100vw - 360px) / (1920 - 360)));
`;
const LayerText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 40px;
    font-weight: 700;
    background-image: linear-gradient(to left, #d9413e, #9d17cd);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: var(--gray);
    line-height: 30px;
    font-size: calc(14px + (18 - 14) * ((100vw - 360px) / (1920 - 360)));
    margin: 30px 0px;
  }
  .layer-btn {
    display: flex;
    a {
      margin-right: 30px;
    }
    @media screen and (max-width: 992px) {
      justify-content: center;
      a {
        margin: 0px 10px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .layer-btn {
      a {
        margin-right: 12px;
      }
    }
  }
`;
const LayerBox = styled.div`
  background-image: linear-gradient(to left, #245bc2, #7a0cbd);
  border-radius: 10px;
  padding: 55px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 310px;
  margin-top: ${(props) => (props.index % 2 === 0 ? "100px" : 0)};
  .ltext {
    flex-basis: 72%;
    padding-right: 30px;
    .text-img {
      display: flex;
      h2 {
        color: white;
        font-size: calc(16px + (22 - 16) * ((100vw - 360px) / (1920 - 360)));
        font-weight: blod;
      }
      .img {
        display: none;
      }
    }

    p {
      color: white;
      font-size: calc(12px + (16 - 12) * ((100vw - 360px) / (1920 - 360)));
      line-height: calc(20px + (28 - 20) * ((100vw - 360px) / (1920 - 360)));
      margin-top: 20px;
    }
  }
  .limg {
    flex-basis: 28%;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 992px) {
    margin-top: 30px;
    padding: 15px;
    height: auto;
    .ltext {
      flex-basis: 100%;
      padding: 0;
      .text-img {
        align-items: flex-end;
        justify-content: space-between;
        .img {
          display: block;
        }
      }
    }
    .limg {
      display: none;
    }
  }
`;
