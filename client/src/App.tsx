import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Builder from './pages/builder';
import Outfits from './pages/outfits';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="builder" element={<Builder />} />
          <Route path="outfits" element={<Outfits />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
	</BrowserRouter>
  );
}

export default App;
