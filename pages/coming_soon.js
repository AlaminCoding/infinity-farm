import styled from "styled-components";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { useEffect } from "react";
import Layer from "public/img/banner-layer.png";
import Image from "next/image";
const ComingSoon = () => {
  useEffect(() => {
    gsap.from(".coming-text", {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });
  }, []);
  return (
    <Section>
      <Heading>
        <h2 className="coming-text">Coming Soon</h2>
        <div className="coming-text">
          <Link href="/">
            <a className="grad-btn">Go Back To Homepage</a>
          </Link>
        </div>
      </Heading>
      <ImgLayer>
        <Image src={Layer} alt="Layer Banner" />
      </ImgLayer>
    </Section>
  );
};

export default ComingSoon;

const Section = styled.section`
  height: 41.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 1400px) {
    height: 47.2vh;
  }
`;

const Heading = styled.div`
  h2 {
    font-size: 80px;
    text-transform: uppercase;
    background-image: linear-gradient(to left, #d9413e, #9c17cf);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 50px;
    @media screen and (max-width: 450px) {
      font-size: 50px;
    }
  }
  text-align: center;
`;
const ImgLayer = styled.div`
  width: 1000px;
  position: absolute;
  top: -140px;
  left: -300px;
  z-index: -1;
  img {
    width: 100%;
  }
`;
