import { Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "public/img/logo.png";
import twitter from "public/img/twitter.png";
import paper from "public/img/paper.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    openNav
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  });
  return (
    <Header className="header">
      <Container>
        <Nav>
          <Logo>
            <Image src={logo} alt="site logo" />
          </Logo>
          <Menu openNav={openNav}>
            <List>
              <a href="#">Our Idea</a>
            </List>
            <List>
              <a href="#">InfiniteLaunch</a>
            </List>
            <List>
              <a href="#">$Infinity</a>
            </List>
            <List>
              <a href="#">Audits</a>
            </List>
            <List>
              <a href="#">Whitepaper</a>
            </List>
            <List type={"social"}>
              <a href="#">
                <Image src={twitter} alt="twitter" />
              </a>
              <a href="#" className="ms-3">
                <Image src={paper} alt="Paper" />
              </a>
            </List>
            <List type="button">
              <a href="#" className="grad-btn">
                Launch Beta App
              </a>
            </List>
          </Menu>
          <Toggle>
            {openNav ? (
              <AiOutlineClose onClick={() => setOpenNav(false)} />
            ) : (
              <AiOutlineMenu onClick={() => setOpenNav(true)} />
            )}
          </Toggle>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  background-color: white;
`;

const Nav = styled.nav`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1400px) {
    height: 100px;
  }
`;

const Logo = styled.div`
  img {
    width: 300px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1400px) {
    position: fixed;
    width: 100%;
    height: 91vh;
    top: 100px;
    right: ${(props) => (props.openNav ? 0 : "-100%")};
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 999;
  }
`;
const List = styled.li`
  margin-left: ${(props) => {
    switch (props.type) {
      case "social":
        return "86px";
      case "bubtton":
        return "34.5px";
      default:
        return "50px";
    }
  }};
  a {
    color: var(--black);
    display: inline-block;
  }
  .grad-btn {
    color: white;
  }
  @media screen and (max-width: 1400px) {
    margin: 20px 0px;
  }
`;

const Toggle = styled.div`
  color: var(--black);
  font-size: 32px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1400px) {
    display: block;
  }
`;
