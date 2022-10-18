import styled from "styled-components";
import Flex from "../../utils/utils";

export const MainWrapper = styled(Flex)`
  width: 100%;
  /* TODO:: изменить высоту  */
  height: calc(100vh - 80px);
  padding: 1%;
`;
export const VerticalLine = styled.div`
  min-height: 100%;
  width: 2px;
  margin: 1%;
  background-color: rgba(240, 62, 50, 0.1);
`;
