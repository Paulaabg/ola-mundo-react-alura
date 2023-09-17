import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Paula!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Paula"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Sou estudante do curso de Análise e Desenvolvimento de Sistemas.
            </p>
            <p className={styles.paragrafo}>
                Estou em constante aprendizado, por isso busco alternativas de aprender sobre programação além da Faculdade.
            </p>
            <p className={styles.paragrafo}>
                Gostaria de compartilhar esse projeto que aprendi na Alura.
            </p>
           
           
        </PostModelo>
    )
}