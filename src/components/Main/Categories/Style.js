import styled from "styled-components";
import Flex from "../../../utils/utils";

export const Item = styled(Flex)`
  padding: 10px;
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
  box-shadow: 0px 17px 15px -12px rgba(139, 76, 71, 0.2);
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(139, 76, 71, 0.2) -4px 9px 25px -6px;
  }
  @media (max-width: 1366px) {
    width: 160px;
    height: 80px;
  }
`;
export const Label = styled.div`
  font-weight: bold;
`;
export const ItemName = styled.p`
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ItemContent = styled(Flex)`
  height: 100%;
`;
export const DelItem = styled(Flex)`
  position: absolute;
  transition: 0.1s;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 62, 50, 0.05);
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
  opacity: 0.9;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
