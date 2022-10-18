import styled from "styled-components";
import Flex from "../../../../utils/utils";

export const Wrapper = styled(Flex)`
  width: 100%;
`;
export const Img = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: 0.3s;
  background-color: transparent;
  border: none;
  width: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Cell = styled(Flex)`
  width: 100%;
  padding: 10px 0;
  box-shadow: 0px 0px 17px -10px rgb(34 60 80 / 35%);
  height: 100%;
  border-radius: 10px;
  cursor: ${(props) => props.primary && "pointer"};
  &:hover ${Img} {
    transform: ${(props) => props.primary && "scale(1.2)"};
  }
  @media (max-width: 1366px) {
    word-break: break-all;
  }
`;
export const Pre = styled.pre`
  width: 100%;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 17px -10px rgb(34 60 80 / 35%);
  height: 100%;
  white-space: pre-wrap;
  justify-self: left;
  word-break: break-word;
`;
