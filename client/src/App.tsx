import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Outfits from './pages/Outfits';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="builder" element={<Builder />} />
        <Route path="outfits" element={<Outfits />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
