import styled from "styled-components";
import Flex from "../../utils/utils";

export const MainWrapper = styled(Flex)`
width:100%;
/* TODO:: изменить высоту  */
height:calc(100vh - 66px);
padding:20px;
`
export const VerticalLine = styled.div`
min-height: 100%;
width: 3px;
/* TODO:: изменить цвет  */
background-color:black;
`