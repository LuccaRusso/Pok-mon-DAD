import styles from "./Forms.module.css";

function PokemonList({ pokemons }) {
    return (
        <div className={styles.lista}>
            <h2>Pokémons Cadastrados</h2>
            {pokemons.length === 0 ? (
                <p>Nenhum Pokémon cadastrado ainda.</p>
            ) : (
                <ul>
                    {pokemons.map((pokemon, index) => (
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
    );
}

export default PokemonList;
