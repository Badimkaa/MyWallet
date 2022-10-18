import styled from "styled-components";
import Flex from "../../../utils/utils";

export const FinanceWrapper = styled(Flex)`
  margin: 0 auto;
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  padding: 2% 0;
  grid-template-columns: repeat(5, 18%);
  justify-items: center;
  gap: 0 2%;
  padding: 10px;
  overflow: auto;
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
  @media (max-width: 1366px) {
    grid-template-columns: 2fr 2fr 5fr 1fr 1fr;
  }
`;

export const Info = styled(Flex)`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  font-weight: bold;
  font-size: ${(props) => props.fs || "28px"};
  letter-spacing: 2px;
`;
export const Value = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover::after {
    content: attr(data-value);
  }
`;
export const Div = styled(Flex)``;
export const ColumnTitle = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 17px -10px rgb(34 60 80 / 45%);
  text-align: center;
  font-weight: bold;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    white-space: normal;
  }
  @media (max-width: 1366px) {
    word-break: break-all;
  }
`;
