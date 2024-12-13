
import React, { Suspense } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ErrorBoundary from './ErrorBoundary';
const Home = React.lazy(() => import('./components/Home'));
const OmOss = React.lazy(() => import('./components/OmOss'));
const KONTAKT = React.lazy(() => import('./components/Contact'));
const QuoteRequest= React.lazy(() => import('./components/offert'));
const Stadtjanster = React.lazy(() => import('./components/Stadtjanster'));
const Flyttjanster = React.lazy(() => import('./components/Flyttjanster'));



function App() {
  return (
    <Router>
      <div class="mt-5">
      <Navbar />
</div>


      <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stad" element={<Stadtjanster />} /> {/* Route för Städtjänster */}
        <Route path="/flytt" element={<Flyttjanster />} /> {/* Route för Flyttjänster */}
        <Route path="/OmOss" element={<OmOss />} />
        <Route path="/Kontakt" element={<KONTAKT />} />
        <Route path="/offertforfragan" element={<QuoteRequest />} />
      </Routes>
      <Footer />
    </Suspense>
    </ErrorBoundary>
  </Router>

  );
}

export default App;
