import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        />
        
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        
        </button>
      </div>

      <main className="main">
        <h2>CEP: 00000000</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum Complemento</span>
        <span>Vila Rosa</span>
        <span>Recife - PE</span>
      </main>
    </div>
  );
}

export default App;
