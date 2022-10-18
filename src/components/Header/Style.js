import styled from "styled-components";
import Flex from "../../utils/utils";

export const HeaderTag = styled(Flex)`
  background-color: rgb(240, 62, 50);
  height: 80px;
  font-size: 22px;
  color: white;
  width: 100%;
  margin: 0 auto;
  padding: 0 9%;
  @media (max-width: 1366px) {
    height: 60px;
  }
`;
export const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding: 0 5px 5px 0;
  filter: invert(100%);
  @media (max-width: 1366px) {
    width: 55px;
    height: 60px;
  }
`;
// export const FlexDiv = styled(Flex)``;
export const FlexDiv = styled(Flex)`
  width: 100%;
`;
export const ProjectName = styled.h1`
  padding-left: 5px;
  font-size: 28px;
  letter-spacing: 2px;
`;
export const HeaderWrapper = styled(Flex)`
  width: 1600px;
  margin: 0 auto;
`;
