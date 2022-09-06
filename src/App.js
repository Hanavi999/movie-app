import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Details from './routes/Details';
import CaInfo from "./routes/CaInfo";

function App() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  }

  return (
    //00;
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Details />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/mostDownload" element={<CaInfo />} />
        <Route path="/romance" element={<CaInfo />} />
        <Route path="/animation" element={<CaInfo />} />
        <Route path="/adventure" element={<CaInfo />} />
      </Routes>
      
    </Router>
  )
}

export default App;
