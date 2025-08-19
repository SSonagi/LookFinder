
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Outfits from './pages/Outfits';
import Profile from './pages/Profile';
import About from './pages/About';
import Signin from './pages/Signin';
import Register from './pages/Register';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="builder/:outfitId" element={<Builder />} />
            <Route path="outfits/:userId" element={<Outfits />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
