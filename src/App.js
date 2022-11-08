import './App.css';
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { data } from './data';

function App() {
  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <Home/>
      
      {/* <!--==================== FEATURED PROJECTS ====================--> */}
      <Featured
        data={data}
      />

      {/* <!--==================== PORTFOLIO ====================--> */}
      <Portfolio 
        data={data}
      />
    </main>
  );
}

export default App;
