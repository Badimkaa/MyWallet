import axios from "axios";
import React from "react";
import logo from "../../assets/images/logo.png";
import {
  AbsoluteDiv,
  FlexDiv,
  HeaderTag,
  HeaderWrapper,
  Logo,
  ProjectName,
} from "./Style";
const Header = ({ totalSum }) => {
  // const getCurrency = () => {
  //   return axios
  //     .get(
  //       "https://api.currencyapi.com/v3/latest?apikey=OvzXyH9P2gajC111ZIRpYYOvfJSHZKbNEadjK1T5&currencies=USD,RUB"
  //     )
  //     .then((res) => res.data.data);
  // };
  // const tes = async () => {
  //   return await getCurrency();
  // };
  // let obj = tes();
  // console.log(obj);

  return (
    <HeaderTag as="header">
      <HeaderWrapper justify="flex-start" align="center">
        <AbsoluteDiv align="center" justify="space-between">
          <Logo src={logo} />
          <ProjectName>MyWallet</ProjectName>
        </AbsoluteDiv>
        <FlexDiv justify="center">Баланс: {totalSum} р</FlexDiv>
      </HeaderWrapper>
    </HeaderTag>
  );
};

export default Header;
