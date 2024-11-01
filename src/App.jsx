import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Client from "./components/Client";
import UiDesigns from "./components/UiDesigns";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

function App() {
  return (
    // <div>
    <div className="bg-gradient-to-b from-teal-900 to-teal-800">
      <Header />
      <Hero />
      <Client />
      <UiDesigns />
      <Expertise />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
