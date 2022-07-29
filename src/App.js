import { AppWrapper } from "./AppStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    // <div>
    <AppWrapper align='center' direction='column'>
      <Header />
      <Main />
    </AppWrapper>

    // </div>
  );
}

export default App;
