import { useState } from "react";
import styles from "./Forms.module.css";
import PokemonForm from "./PokemonForm";
import Mensagem from "./Mensagem";
import PokemonList from "./PokemonList";

function Forms() {
    const [mensagem, setMensagem] = useState();
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [listPokemons, setListPokemons] = useState([]);

    const cadastrar = (novoPokemon) => {
        if (!novoPokemon.nome || !novoPokemon.tipo || !novoPokemon.descricao || novoPokemon.poder === "") {
            setTipoMensagem("erro");
            setMensagem("Preencha todos os campos!");
        } else {
            setListPokemons([...listPokemons, novoPokemon]);
            setTipoMensagem("sucesso");
            setMensagem("Pokémon cadastrado!");
        }
    };

    return (
        <div className={styles.container}>
            <PokemonForm onCadastrar={cadastrar} />
            {mensagem && <Mensagem tipo={tipoMensagem} texto={mensagem} />}
            <PokemonList pokemons={listPokemons} />
        </div>
    );
}

export default Forms;
