import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ConvixPage from './pages/ConvixPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/convix" element={<ConvixPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
