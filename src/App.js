import Header from "./Components/Header"
import SectionAboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import ButtonWhatsapp from './Components/ButtonWhatsapp';
import Queries from './Pages/Queries';
import Contact from './Pages/Contact';
import GooglePlacesReviews from './Components/GooglePlacesReviews';

function App() {
  return (
    <div>
      <Header />
      <ButtonWhatsapp />
      <Home />
      <Carousel />
      <Queries />
      <Contact />
      <SectionAboutUs />
      <GooglePlacesReviews />
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;
