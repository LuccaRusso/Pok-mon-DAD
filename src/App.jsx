import Forms from './components/Forms';
import pikachu from './assets/pikachu.png';

function App() {
  return (
    <>
      <div className='title-container'>
        <img src={pikachu} alt="Pikachu" />

        <h1 className='titulo'>Cadastro de Pokémon</h1>
      </div>
      <Forms />
    </>
  )
}

export default App;
