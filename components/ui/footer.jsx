import styled from "styled-components";
import footerImg from "public/img/logo-white.png";
import paper from "public/img/paper-white.png";
import twitter from "public/img/twitter-white.png";
import instagram from "public/img/instagram-white.png";
import discord from "public/img/discord-white.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import layer from "public/img/footer-layer.png";
const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <MainFooter>
          <FooterLogo>
            <Image src={footerImg} alt="footer img" />
          </FooterLogo>
          <FooterMenu>
            <Row>
              <Col xs={4}>
                <MenuBox>
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#">Our Idea</a>
                    </li>
                    <li>
                      <a href="#">Farming</a>
                    </li>
                    <li>
                      <a href="#">InfiniteLaunch</a>
                    </li>
                    <li>
                      <a href="#">$INFINITY</a>
                    </li>
                    <li>
                      <a href="#">WhitePaper</a>
                    </li>
                  </ul>
                </MenuBox>
              </Col>
              <Col xs={8}>
                <Row>
                  <Col xs={8}>
                    <MenuBox>
                      <h2>Contact Info</h2>
                      <p>
                        Email: <br />
                        infiniteecosystem@protonmail.com
                      </p>
                    </MenuBox>
                  </Col>
                  <Col md={4}>
                    <MenuBox>
                      <h2>Follow Us</h2>
                      <FooterIcon>
                        <a href="https://t.me/InfiniteTG">
                          <Image src={paper} alt="paper img" />
                        </a>
                        <a href="https://twitter.com/infinite_eco">
                          <Image src={twitter} alt="twitter img" />
                        </a>
                        <a href="https://www.instagram.com/ecosysteminfinite/">
                          <Image
                            src={instagram}
                            alt="insta img"
                            height={23}
                            width={23}
                          />
                        </a>
                        <a href="https://www.instagram.com/ecosysteminfinite/">
                          <Image
                            src={discord}
                            alt="discord img"
                            height={23}
                            width={23}
                          />
                        </a>
                      </FooterIcon>
                    </MenuBox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FooterMenu>
        </MainFooter>
        <Copy>Copyright 2021 © All Right Reserved.</Copy>
      </Container>
      <div className="layer-img">
        <Image src={layer} alt="layer" />
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  background-image: linear-gradient(to left, #245bc2, #7a0cbd);
  padding: 95px 0px 130px 0px;
  position: relative;
  overflow: hidden;
  .layer-img {
    position: absolute;
    bottom: -10px;
    right: 0;
    z-index: 0;
    @media screen and (max-width: 600px) {
      right: -50%;
    }
  }
`;

const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  width: 256px;
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const FooterIcon = styled.div`
  width: 155px;
  display: flex;
  justify-content: space-between;
`;

const FooterMenu = styled.div`
  flex-basis: 50%;
  z-index: 1;
  @media screen and (max-width: 1400px) {
    flex-basis: 65%;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 60px;
  }
`;

const MenuBox = styled.div`
  h2 {
    color: white;
    font-size: calc(14px + (18 - 14) * ((100vw - 360px) / (1920 - 360)));
    font-weight: 700;
    margin-bottom: 22px;
  }
  ul {
    li {
      margin-bottom: 5px;
      a {
        color: rgb(255, 255, 255, 0.64);
        text-decoration: none;
        font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1920 - 360)));
      }
    }
  }
  p {
    color: rgb(255, 255, 255, 0.64);
    font-size: calc(13px + (15 - 13) * ((100vw - 360px) / (1920 - 360)));
  }
  @media screen and (max-width: 765px) {
    margin-top: 26px;
  }
`;
const Copy = styled.p`
  color: white;
  font-size: 14px;
  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-top: 80px;
  }
`;
