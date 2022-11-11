import './styles/button.css'
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { data } from './data';
import { Header } from './components/Header';
import { useEffect } from 'react';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
        const anchorEl = document.getElementById(anchor);
        if (anchorEl) {
            anchorEl.scrollIntoView({behavior: "smooth"});
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
        <Featured data={data} />
        <Portfolio data={data} />
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <Footer />

      {/* <!--==================== SCROLL UP ARROW ====================--> */}
      <a href="#about" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
