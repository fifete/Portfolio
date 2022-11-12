import './styles/button.css';
import './styles/scroll.css';
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { data } from './data';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { ScrollUp } from './components/ScrollUp';

function App() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <Header />

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        <Home />
        <Featured data={data.projects} />
        <Portfolio data={data} />
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <Footer />

      {/* <!--==================== SCROLL UP ARROW ====================--> */}
      <ScrollUp />
    </>
  );
}

export default App;
