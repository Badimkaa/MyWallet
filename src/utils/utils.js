import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
`;
export default Flex;
export const FlexBox = styled(Flex)`
  width: ${(props) => props.width || "unset"};
`;
export const SectionWrapper = styled(Flex)`
  width: 48%;
  /* margin: 0 auto; */
`;

export const SectionTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
  @media (max-width: 1368px) {
    font-size: 23px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
export const Wrapper = styled(Flex)`
  height: 500px;
  /* border: 2px dotted blue; */
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: ${(props) => props.width || "110px"};
  background: rgb(240, 62, 50);
  background-image: ${(props) =>
    props.isDelOpen && "linear-gradient(to bottom, rgb(240, 62, 50), #c74a44)"};
  transition: 0.5s;
  border: none;
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  padding: 5px 10px;
  text-decoration: none;
  outline: none;
  margin: ${(props) => props.margin || "10px 5px 10px 5px"};
  animation: ${(props) => props.isDelOpen && "animate_grow 1.5s infinite"};
  @keyframes animate_grow {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  @media (max-width: 1366px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  &:hover {
    background: rgb(240, 62, 50);
    /* background-image: -webkit-linear-gradient(top, rgb(240, 62, 50), #c74a44);
    background-image: -moz-linear-gradient(top, rgb(240, 62, 50), #c74a44);
    background-image: -ms-linear-gradient(top, rgb(240, 62, 50), #c74a44);
    background-image: -o-linear-gradient(top, rgb(240, 62, 50), #c74a44); */
    background-image: linear-gradient(to bottom, rgb(240, 62, 50), #c74a44);
    text-decoration: none;
  }
`;
