import React from "react";
import './App.css';
import NotaCalculator from "./components/NotaCalculator";
import TimeDisplay from "./components/TimeDisplay";

import githubLogo from "./assets/logos/logo-github.png";
import behanceLogo from "./assets/logos/logo-behance.png";
import linkedinLogo from "./assets/logos/logo-linkedin.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <h4>Tarefas Vorotech</h4>
        </nav>
      </header>

      <main>
        <h1>Calculadora de Nota i3</h1>
        <NotaCalculator />

        <hr />
        <h2>Hora Atual (API Tarefa #2)</h2>
        <TimeDisplay />
      </main>
      <footer className="rodape">
        <div className='info-rodape'>
          <p>Codificado por Josué Santos Schmidt</p>
          <p>&copy; 2025 Todos os Direitos Reservados</p>
        </div>
        <div className="redes">
          <a href="https://github.com/josueschmidt24">
            <img src={githubLogo} alt="Logo Github"/>
          </a>
          <a href="https://www.behance.net/" title="Em Breve!">
            <img src={behanceLogo} alt="Logo Behance"/>
          </a>
          <a href="https://www.linkedin.com/in/josueschmidt">
            <img src={linkedinLogo} alt="Logo LinkedIn"/>
          </a>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;