import styles from "./Forms.module.css";
import { useState } from "react";

function Forms() {
    const [mensagem, setMensagem] = useState(null);
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [listPokemons, setListPokemons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const nome = form.nome.value.trim();
        const tipo = form.tipo.value;
        const descricao = form.descricao.value.trim();
        const poder = form.poder.value;

        if (!nome || !tipo || !descricao || poder === "") {
            setTipoMensagem("erro");
            setMensagem("Preencha todos os campos!");
        } else {
            const novoPokemon = { nome, tipo, descricao, poder };
            setListPokemons([...listPokemons, novoPokemon]);

            setTipoMensagem("sucesso");
            setMensagem("Pokémon cadastrado!");
            form.reset();
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.forms} onSubmit={handleSubmit} method="post">
                <label htmlFor="nome">Nome do Pokémon</label>
                <input id="nome" name="nome" />

                <label htmlFor="tipo">Tipo</label>
                <select id="tipo" name="tipo">
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="🔥 Fogo">🔥 Fogo</option>
                    <option value="💧 Água">💧 Água</option>
                    <option value="🌱 Grama">🌱 Grama</option>
                    <option value="⚡ Elétrico">⚡ Elétrico</option>
                    <option value="🧠 Psíquico">🧠 Psíquico</option>
                    <option value="🪨 Pedra">🪨 Pedra</option>
                </select>

                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao"></textarea>

                <label htmlFor="poder">Poder</label>
                <input type="number" name="poder" placeholder="8" min="0" max="100" />

                <button type="submit">Cadastrar Pokémon</button>
            </form>

            {mensagem && (
                <p className={tipoMensagem === "erro" ? styles.mensagemErro : styles.mensagemSucesso}>
                    {mensagem}
                </p>
            )}

            {/* Lista de Pokémons cadastrados */}
            <div className={styles.lista}>
                <h2>Pokémons Cadastrados</h2>
                {listPokemons.length === 0 ? (
                    <p>Nenhum Pokémon cadastrado ainda.</p>
                ) : (
                    <ul>
                        {listPokemons.map((pokemon, index) => (
                            <li key={index} className={styles.item}>
                                <strong>{pokemon.nome}</strong> - {pokemon.tipo}
                                <br />
                                <em>Descrição:</em> {pokemon.descricao}
                                <br />
                                <em>Poder:</em> {pokemon.poder}/100
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Forms;