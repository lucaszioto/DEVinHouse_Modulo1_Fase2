import './App.css';
import { Header } from './components/Header/Header';
import { AutenticacaoProvider } from './context/autenticacao/AutenticacaoProvider';

function App() {
  return (
    <div className='App'>
      <AutenticacaoProvider>
        <Header />
      </AutenticacaoProvider>
    </div>
  );
}

export default App;
