import CategoriesContainer from "./Categories/CategoriesContainer";
import FinanceContainer from "./Finance/FinanceContainer";
import { MainWrapper, VerticalLine } from "./Style";

const Main = () => {
  return (
    <MainWrapper as="main" justify="space-between">
      <CategoriesContainer />
      <VerticalLine />
      <FinanceContainer />
    </MainWrapper>
  );
};

export default Main;
