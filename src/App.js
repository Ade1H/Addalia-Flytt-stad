import React, { Suspense } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ErrorBoundary from './ErrorBoundary';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


// Lazy-loaded components
const Home = React.lazy(() => import('./components/Home'));
const OmOss = React.lazy(() => import('./components/OmOss'));
const KONTAKT = React.lazy(() => import('./components/Contact'));
const QuoteRequest = React.lazy(() => import('./components/offert'));
const Stadtjanster = React.lazy(() => import('./components/Stadtjanster'));
const Flyttjanster = React.lazy(() => import('./components/Flyttjanster'));

function App() {
  return (
    // Use HashRouter to handle routing for GitHub Pages
    <HashRouter>
      <div className="mt-5">
        <Navbar />
      </div>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stad" element={<Stadtjanster />} />
            <Route path="/flytt" element={<Flyttjanster />} />
            <Route path="/OmOss" element={<OmOss />} />
            <Route path="/Kontakt" element={<KONTAKT />} />
            <Route path="/offertforfragan" element={<QuoteRequest />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </HashRouter>
  );
}

export default App;
