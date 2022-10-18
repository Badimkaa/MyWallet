import styled from "styled-components";
import Flex from "../../utils/utils";

export const Menu = styled(Flex)`
  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "150px"};
  border: 2px solid rgb(240, 62, 50);
  box-shadow: 0px 0px 34px -14px rgba(240, 62, 50, 1);
  border-radius: 10px;
  background-color: white;
  padding: 10px;
`;
export const Input = styled.input`
  font-size: 16px;
  outline: none;
  width: ${(props) => props.width || "235px"};
  padding: 5px;
  height: 30px;
  border: ${(props) =>
    props.isFieldEmpty ? "2px solid red" : "1px solid rgba(240, 62, 50, 0.2)"};
  box-shadow: 0px 0px 23px -9px rgba(34, 60, 80, 0.22);
`;
export const TextArea = styled.textarea`
  height: 100%;
  margin-top: 10px;
  outline: none;
  resize: none;
  border: none;
  border: 1px solid rgba(240, 62, 50, 0.2);
  padding: 5px;
  box-shadow: 0px 0px 31px -15px rgba(34, 60, 80, 0.22);
`;
export const MenuWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: rgba(125, 125, 125, 0.7);
`;
export const FlexDiv = styled(Flex)`
  min-height: ${(props) => (props.minHeight ? "330px" : "230px")};
  border-radius: 15px;
  max-width: 630px;
  align-content: baseline;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 1366px) {
    justify-content: center;
    max-width: 530px;
    gap: 10px;
    overflow: auto;
    padding: 10px;
    height: ${(props) => (props.minHeight ? "190px" : "100px")};
    min-height: ${(props) => (props.minHeight ? "190px" : "100px")};
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(240, 62, 50, 01);
      border-radius: 5px;
      border: 2px solid rgba(240, 62, 50, 0.1);
    }
  }
`;
export const Buttons = styled(Flex)``;
