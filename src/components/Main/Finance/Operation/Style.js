import styled from "styled-components";
import Flex from "../../../../utils/utils";

export const Wrapper = styled(Flex)`
  width: 100%;
`;
export const Button = styled.button`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: 0.3s;
  background-color: transparent;
  border: none;
  width: 20px;
  /* height:50px; */
  &:hover {
    transform: scale(1.2);
  }
`;
