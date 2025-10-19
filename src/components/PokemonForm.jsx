import styles from "./Forms.module.css";

function PokemonForm({ onCadastrar }) {
    const enviar = (e) => {
        e.preventDefault();
        const form = e.target;

        const novoPokemon = {
            nome: form.nome.value,
            tipo: form.tipo.value,
            descricao: form.descricao.value,
            poder: form.poder.value,
        };

        onCadastrar(novoPokemon);
        form.reset();
    };

    return (
        <form className={styles.forms} onSubmit={enviar} method="post">
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
    );
}

export default PokemonForm;
