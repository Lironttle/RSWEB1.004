import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimates from './pages/Estimates';
import Careers from './pages/Careers';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/new-build" element={<Placeholder />} />
          <Route path="services/plumbing" element={<Placeholder />} />
          <Route path="services/gas" element={<Placeholder />} />
          <Route path="services/groundworks" element={<Placeholder />} />
          <Route path="services/electrical" element={<Placeholder />} />
          <Route path="services/fire-stopping" element={<Placeholder />} />
          <Route path="services/steam-cleaning" element={<Placeholder />} />
          <Route path="estimates" element={<Estimates />} />
          <Route path="clients" element={<Placeholder />} />
          <Route path="about" element={<About />} />
          <Route path="accreditations" element={<Placeholder />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
