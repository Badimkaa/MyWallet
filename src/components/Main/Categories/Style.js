import styled, { css } from "styled-components";
import Flex from "../../../utils/utils";

export const Item = styled(Flex)`
  position: relative;
  width: 200px;
  height: 100px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isActive ? "rgb(240,62,50)" : "rgb(255,255,255)"};
  border: ${(props) => (props.isActive ? "none" : "2px solid rgb(240,62,50)")};
  color: ${(props) => (props.isActive ? "rgb(255,255,255)" : "rgb(0,0,0)")};
  cursor: pointer;
  transition: 0.3s;
  /* box-shadow: inset 0 -5px 5px -5px rgb(240,62,50); */
  /* box-shadow: 0px 0px 14px -10px rgba(34, 60, 80, 0.67); */
  &:hover {
    transform: scale(1.1);
    /* box-shadow: 0px 0px 14px -4px rgba(34, 60, 80, 1); */
    box-shadow: 0px 0px 24px -14px rgba(240, 62, 50, 1);
  }
`;

export const ItemName = styled.p`
  word-break: break-all;
`;
export const DelItem = styled(Flex)`
  position: absolute;
  transition:.1s;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(240,62,50, .05);
  /* border: 3px solid black; */
  /* border-radius: 50%; */
  filter: ${(props) => props.isActive && "invert(100%)"};
 
`;
export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-radius: 12px;
  /* transform: translate(50%, -50%); */
  opacity: 0.9;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
