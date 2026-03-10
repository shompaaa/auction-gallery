import "./App.css";
import Auctions from "./components/Auctions/Auctions";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Auctions></Auctions>
    </>
  );
}

export default App;
