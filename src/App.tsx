import { useEffect } from "react";
import NavigationScroll from "./components/NavigationScroll";
import Routes from './Routes'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <NavigationScroll />
      <Routes />
    </div>
  );
};

export default App;
