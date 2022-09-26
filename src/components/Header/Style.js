import styled from "styled-components";
import Flex from "../../utils/utils";

export const HeaderTag = styled(Flex)`
  position: relative;
  box-sizing: border-box;
  background-color: rgb(240,62,50);
  width: 100%;
  height: 100px;
  font-size: 22px;
  padding: 10px 20px;
  color: white;
`;
export const Logo = styled.img`
  width: 75px;
  height: 75px;
  filter: invert(100%);
`;
export const FlexDiv = styled(Flex)`
  width: 100%;
`;
export const AbsoluteDiv = styled(Flex)`
  position: absolute;
  width: 220px;
`;
export const ProjectName = styled.h1`
  font-size: 24px;
  letter-spacing: 2px;
`;
export const HeaderWrapper = styled(Flex)`
  width: 1440px;
  margin: 0 auto;
  /* height:100%; */
`
