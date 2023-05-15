import "./styles/reset.css"
import "./styles/style.css"
import palavras from "./palavras"

import { useState } from "react"
import Letras from "./componentes/Letras"
import Jogo from "./componentes/Jogo"



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
     <Jogo
     erros={erros}
     iniciarJogo={iniciarJogo}
     palavraDoJogo={palavraDoJogo}
      />
     <Letras 
      handleLetterClick={handleLetterClick}
      letrasClicadas={letrasClicadas}
      jogoIniciado={jogoIniciado}
      />
    </div>)
}