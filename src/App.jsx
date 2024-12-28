import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page1.jsx';
import GameIntroPage from './page2.jsx';
import CHARECTER from './page3.jsx';
import Download from './page4.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gameintro" element={<GameIntroPage />} />
        <Route path="/page3" element={<CHARECTER />} />
        <Route path="/DownLoad" element={<Download />} />
    </Routes>
    </Router>

  );
}

export default App;