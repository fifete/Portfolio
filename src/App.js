import './App.css';
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <Home/>
      
      {/* <!--==================== FEATURED PROJECTS ====================--> */}
      <Featured />

      {/* <!--==================== PORTFOLIO ====================--> */}
      <Portfolio />
    </main>
  );
}

export default App;
