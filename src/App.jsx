import "./App.css";
import Clients from "./components/clients";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Language from "./components/Language";
import Localization from "./components/Localization";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Patrons from "./components/Patrons";
import Separator from "./components/Separator";
import SubHero from "./components/Sub_Hero";
import Tele from "./components/Tele";
import Translation from "./components/Translation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
      <Translation />
      <Localization />
      <Language />
      <Tele />
      <Divider />
      <Metrics />
      <Patrons />
      <Clients />
      <Gallery />
      <Separator />
      <Footer />
    </>
  );
}

export default App;
