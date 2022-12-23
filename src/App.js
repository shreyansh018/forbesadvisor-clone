import "./App.css";
import Body from "./Components/body";
import Cards from "./Components/cards";
import Firstbottom from "./Components/firstbottom";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Secondbottom from "./Components/secondbottom";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Cards />
      <Firstbottom />
      <Secondbottom />
      <Footer />
    </div>
  );
}

export default App;
