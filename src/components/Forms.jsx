import { useState } from "react";

function Forms() {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [poder, setPoder] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [pokemons, setPokemons] = useState([]);

    function enviar(event) {
        event.preventDefault();

        if (!nome || !tipo || !descricao || poder === "") {
            setMensagem("🚨 Preencha todos os campos!");
            return;
        }

        const novoPokemon = { nome, tipo, descricao, poder };
        setPokemons([...pokemons, novoPokemon]);
        setMensagem("✅ Pokémon cadastrado!");

        setNome("");
        setTipo("");
        setDescricao("");
        setPoder("");
    }

    return (
        <div className="container">
            <h1>Cadastro de Pokémons</h1>
            <form onSubmit={enviar} className="formulario">
                <label htmlFor="nome">📝 Nome do Pokémon</label>
                <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome do pokémon"
                />

                <label htmlFor="tipo">🎲 Tipo</label>
                <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="🔥 fogo">🔥 Fogo</option>
                    <option value="💧 água">💧 Água</option>
                    <option value="🌱 grama">🌱 Grama</option>
                    <option value="⚡ elétrico">⚡ Elétrico</option>
                    <option value="🧠 psíquico">🧠 Psíquico</option>
                    <option value="🪨 pedra">🪨 Pedra</option>
                </select>

                <label htmlFor="descricao">📄 Descrição</label>
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva o Pokémon"
                />

                <label htmlFor="poder">💪 Poder</label>
                <input
                    id="poder"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="(0-100)"
                    value={poder}
                    onChange={(e) => setPoder(e.target.value)}
                />

                <button type="submit">Cadastrar Pokémon</button>
            </form>

            {mensagem && <p className="mensagem">{mensagem}</p>}

            {pokemons.length > 0 && (
                <div className="lista-pokemons">
                    <h2>Pokémons Cadastrados</h2>
                    <ul>
                        {pokemons.map((p, index) => (
                            <li key={index}>
                                <strong>{p.nome}</strong> - {p.tipo} | 💪 {p.poder} | 📄 {p.descricao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Forms;
