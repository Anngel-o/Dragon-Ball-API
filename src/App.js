import logo from "./logo.svg";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import DragonPage from "./components/DragonPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Si la animación solo ocurre una vez
    });
  }, []);

  return (
    <div className="App">
      <DragonPage />
    </div>
  );
}

export default App;
