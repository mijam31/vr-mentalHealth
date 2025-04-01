import ExternalLinkCard from "../components/externalLinkCard/ExternalLinkCard";
import Facts from "../components/facts/Facts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Quotes from "../components/quotes/Quotes";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header
        title1="Fremtidens terapi:"
        title2="Virtual Reality og mental sunhed"
        text="Oplev, hvordan VR revolutionerer behandlingen af PTSD, angst, afhængighed og kognitive udfordringer – velkommen til en ny æra af terapi."
        button="Læs mere"
      />

      <Facts />
      <Quotes />
      <ExternalLinkCard />
      <Footer />
    </>
  );
};

export default Home;
