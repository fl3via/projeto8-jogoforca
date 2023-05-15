import "./styles/reset.css"
import "./styles/style.css"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"
import alfabeto from "./alfabeto"
import { useState } from "react"

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function App() {
  const [erros, setErros] = useState(0)
  const [palavraSorteada, setPalavraSorteada] = useState([])
  const [palavraDoJogo, setPalavraDoJogo] = useState([])
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [jogoIniciado, setJogoIniciado] = useState(false);




  function iniciarJogo() {
    setErros(0)
    sortearPalavra()
    setJogoIniciado(true)
  

  }

  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    console.log(palavra);

    const letras = [];
    for (let i = 0; i < palavra.length; i++) {
      letras.push(palavra[i]);
    }
    console.log(letras);
    setPalavraSorteada(letras)

    let underlineDasLetras = [];
    for (let i = 0; i < letras.length; i++) {
      underlineDasLetras.push(" _");
    }
    setPalavraDoJogo(underlineDasLetras);
    console.log(underlineDasLetras);

  }


  function substituirUnderlinePorLetra(letra) {
    let novaPalavraDoJogo = [...palavraDoJogo];
  
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada[i] === letra ||
        palavraSorteada[i].toUpperCase() === letra ||
        palavraSorteada[i].toLowerCase() === letra) {
        novaPalavraDoJogo[i] = palavraSorteada[i];
      }
    }
  
    setPalavraDoJogo(novaPalavraDoJogo);
  
    if (novaPalavraDoJogo.join('') === palavraSorteada.join('')) {
      document.querySelector('[data-test="word"]').classList.add('acertou');
    }
  }
  

  function handleLetterClick(letra) {
  if (letrasClicadas.includes(letra)) {
    return;
  }

  if (palavraSorteada.join('') === palavraDoJogo.join('') + letra) {
    document.querySelector('[data-test="word"]').classList.add('errou');
  }

  setLetrasClicadas([...letrasClicadas, letra]);

  if (palavraSorteada.includes(letra)) {
    substituirUnderlinePorLetra(letra);
  } else {
    setErros(erros + 1);
  }
}


  return (
    <div className="container">
      <div className="tela">
        <img src={imagens[erros]} data-test="game-image" />
        <div className="button"> <button data-test="choose-word"
          onClick={iniciarJogo}
          className="escolher"
        >Escolher Palavra</button></div>
        <h1  data-test="word">{palavraDoJogo}</h1>
      </div>

      <div className="caixa-letras">
        {alfabeto.map((letra) => (
          <button className="caixa" key={letra} data-test="letter"
            onClick={() => handleLetterClick(letra)}

            disabled={!jogoIniciado || letrasClicadas.includes(letra)}


          >{letra}</button>))} </div>
    </div>)
}