import "./App.css";
import VideoBackground from "./components/VideoBackground";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <VideoBackground />
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
      <Login />
    </>
  );
}

export default App;
