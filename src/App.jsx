import WhyOrbitClasses from "./Components/About";
import AboutContactSection from "./Components/AboutContactSection";
import Allroute from "./Components/Allroute";
import Courses from "./Components/Courses";
import Faculty from "./Components/Faculty/Faculty";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import VideoGallery from "./Components/Videos/VideoGallery";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Allroute />
      <WhyOrbitClasses />
      <Courses />
      <Faculty/>
      <VideoGallery/>
      <AboutContactSection/>
      <Footer/>

    </>
  );
}

export default App;
