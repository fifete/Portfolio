import './styles/button.css';
import './styles/scroll.css';
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { data } from './data';
import { Header } from './components/Header';
import { useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'
import { Footer } from './components/Footer';
import { ScrollUp } from './components/ScrollUp';
import { Technologies } from './components/Technologies';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const[theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

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
    <div data-theme={theme} className='app'>
      {/* <!--==================== HEADER ====================--> */}
      <Header switchTheme={switchTheme} theme={theme}/>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        <Home />
        <Featured data={data.projects} />
        <Portfolio data={data} />
        <Technologies technologies={data.technologies} />
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <Footer />

      {/* <!--==================== SCROLL UP ARROW ====================--> */}
      <ScrollUp />
    </div>
  );
}

export default App;
