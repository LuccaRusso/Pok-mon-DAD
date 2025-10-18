import styles from "./Forms.module.css";
import { useState } from "react";
import List from "./List";

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
        <>
            <form className={styles.forms} onSubmit={handleSubmit} method="post">
                <label htmlFor="nome">Nome do Pokémon</label>
                <input id="nome" name="nome" />

                <label htmlFor="tipo">Tipo</label>
                <select id="tipo" name="tipo">
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="1">🔥 fogo</option>
                    <option value="2">💧 água</option>
                    <option value="3">🌱 grama</option>
                    <option value="4">⚡ elétrico</option>
                    <option value="5">🧠 psíquico</option>
                    <option value="6">🪨 pedra</option>
                </select>

                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao"></textarea>

                <label htmlFor="poder">Poder</label>
                <input type="number" name="poder" placeholder="8" min="0" max="100" />

                <button type="submit">Cadastrar Pokémon</button>
            </form>

            {mensagem && (
                <p className={tipoMensagem === "erro" ? styles.mensagemErro : styles.mensagemSucesso}>
                    {mensagem}
                </p>
            )}

            <List listPokemons={listPokemons} />
        </>
    );
}

export default Forms;
