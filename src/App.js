import { AppWrapper } from "./AppStyle";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <AppWrapper align="center" direction="column">
      <HeaderContainer />
      <Main />
    </AppWrapper>
  );
};

export default App;
