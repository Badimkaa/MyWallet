import axios from "axios";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";
import { FlexDiv, HeaderTag, HeaderWrapper, Logo, ProjectName } from "./Style";
const getCurrency = (setCur) => {
  return axios
    .get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
    )
    .then((res) => setCur(res.data.usd.rub));
};
const Header = ({ totalSum }) => {
  const [usdToRUB, setUsdToRUB] = useState(null);
  useEffect(() => {
    getCurrency(setUsdToRUB);
  }, []);
  return (
    <HeaderTag as="header">
      <HeaderWrapper justify="space-between" align="center">
        <FlexDiv align="center">
          <Logo src={logo} />
          <ProjectName>MyWallet</ProjectName>
        </FlexDiv>
        <FlexDiv justify="center">Баланс: {totalSum}р</FlexDiv>
        {usdToRUB && (
          <FlexDiv justify="right">1USD = {usdToRUB.toFixed(3)}р</FlexDiv>
        )}
      </HeaderWrapper>
    </HeaderTag>
  );
};

export default Header;
