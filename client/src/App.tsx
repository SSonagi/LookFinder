import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/home';
import Builder from './pages/builder';
import Outfits from './pages/outfits';
import Profile from './pages/profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="builder" element={<Builder />} />
          <Route path="outfits" element={<Outfits />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
