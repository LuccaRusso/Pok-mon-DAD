import styles from "./Forms.module.css";

function Mensagem({ tipo, texto }) {
    return (
        <p className={tipo === "erro" ? styles.mensagemErro : styles.mensagemSucesso}>
            {texto}
        </p>
    );
}

export default Mensagem;
