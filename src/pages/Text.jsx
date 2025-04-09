import ExternalLinkCard from "../components/externalLinkCard/ExternalLinkCard";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeavyText from "../components/heavyText/HeavyText";
import Navigation from "../components/navigation/Navigation";
import bggImg from "/public/bgg.avif";

const Text = () => {
  return (
    <>
      <Navigation />
      <Header
        headerImg={bggImg}
        title1="VR & Mental Sundhed -"
        title2="Fremtidens Behandling"
        text="Virtual Reality (VR) er ikke kun for gaming – det er et revolutionerende værktøj inden for psykologi og terapi.  Fra eksponeringsterapi til kognitiv træning. Udforsk, hvordan teknologien kan forbedre mental sundhed. "
      />
      <HeavyText />
      <ExternalLinkCard />
      <Footer />
    </>
  );
};

export default Text;
