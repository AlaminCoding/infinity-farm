import styled from "styled-components";

const ListBox = (props) => {
  const { image, title, content } = props.data;
  return (
    <Box index={props.index}>
      <InnerBox>
        <img src={image.src} alt="" />
        <h2>{title}</h2>
        <p>{content}</p>
      </InnerBox>
    </Box>
  );
};
export default ListBox;

const Box = styled.div`
  height: 100%;
  margin-top: 20px;
  padding: ${(props) => {
    switch (props.index) {
      case 0:
        return "0px 30px 0px 0px";
      case 1:
        return "0px 15px 0px 15px";
      case 2:
        return "0px 0px 0px 30px";
    }
  }};
  @media screen and (max-width: 1350px) {
    padding: 0;
    height: auto;
  }
`;

const InnerBox = styled.div`
  box-shadow: 0px 7px 42px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  text-align: center;
  padding: 28px 35px;
  height: 100%;
  background-image: linear-gradient(#ffffff, #ffffff);
  img {
    height: 190px;
  }
  h2 {
    color: var(--black);
    font-size: calc(19px + (25 - 19) * ((100vw - 360px) / (1920 - 360)));
    font-weight: 700;
    max-width: 220px;
    margin: 15px auto;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    color: var(--gray);
  }
  &:hover {
    background-image: linear-gradient(#8779f5, #d162f6);
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }
`;
