import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <VideoBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
