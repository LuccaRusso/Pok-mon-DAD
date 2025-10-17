import styles from "./Forms.module.css";

function Forms() {
    return (
        <>
            <form className={styles.forms} action={"/enviar"} method="post" >
                <label htmlFor="nome">Nome do Pokémon</label>
                <input id="nome" />
                <label htmlFor="tipo">Tipo</label>
                <select
                    id="tipo"
                    name="tipo"
                >
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="1">🔥 fogo</option>
                    <option value="2">💧 água</option>
                    <option value="3">🌱 grama</option>
                    <option value="4">⚡ elétrico</option>
                    <option value="5">🧠 psíquico</option>
                    <option value="6">🪨 pedra</option>
                </select>
                <label htmlFor="descricao">Descrição</label>
                <textarea></textarea>
                <label htmlFor="poder">Poder</label>
                <input type="number" placeholder="8" min="0" max="100" />
                <button type="submit">Cadastrar Pokémon</button>
            </form>
        </>
    )
}

export default Forms