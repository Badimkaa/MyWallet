import styled from "styled-components";
import Flex from "../../../utils/utils";

export const Item = styled(Flex)`
width:200px;
height:100px;
border-radius:12px;
background-color:rgba(12,12,12,.1);
color:green;
cursor:pointer;
transition:.2s;
box-shadow: 0px 0px 14px -10px rgba(34, 60, 80, 0.67);
&:hover{
    transform:scale(1.2);
    box-shadow: 0px 0px 14px -4px rgba(34, 60, 80, 1);
}
`
export const ItemName = styled.p`
word-break:break-all;
`
export const DelItem = styled(Flex)`
position: absolute;
width:180px;
height:100px;
border-radius:12px;
background-color:rgba(12,12,12,.1);
`
export const Image = styled.img`
width:40px;
height:40px;
border-radius:12px;
opacity:.2;
`