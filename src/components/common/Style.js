import styled from "styled-components";
import Flex from "../../utils/utils";

export const Menu = styled(Flex)`
width: ${props => props.width || '300px'};
height: ${props => props.height || '150px'};
border: 2px solid rgb(240,62,50);
box-shadow: 0px 0px 34px -14px rgba(240, 62, 50, 1);
border-radius:10px;
background-color:white;
padding:10px;
`
export const Input = styled.input`
margin-top:10px;
outline:none;
height:30px;
border: 1px solid lightgray;
box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.27);
`
export const TextArea = styled.textarea`
height:100%;
margin-top:10px;
outline:none;
resize:none;
/* height:30px; */
border: 1px solid lightgray;
box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.27);
`
export const MenuWrapper = styled(Flex)`
position: absolute;
top:0;
z-index:3;
width:100vw;
height:100vh;
background-color:rgba(125,125,125,.7);
`
export const FlexDiv = styled(Flex)`
/* border: 1px solid gray; */
border-radius:15px;
/* padding-top: 20px; */
width:642px;
min-height:230px;
flex-wrap:wrap;
gap:20px;
`
export const Buttons = styled(Flex)`
`