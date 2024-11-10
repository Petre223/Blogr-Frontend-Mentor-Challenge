import { Showcase } from "../src/Components/Showcase";
import { Header } from "../src/Components/Header";
import { Design } from "../src/Components/Design";
import { State } from "./Components/State";
import { Free } from "./Components/Free";
import { Footer } from "./Components/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Design />
      <State />
      <Free />
      <Footer />
    </>
  );
}

export default App;
