import alfabeto from "../alfabeto"

export default function Letras({handleLetterClick, letrasClicadas, jogoIniciado}) {
    return (
        <>
        <div className="caixa-letras">
        {alfabeto.map((letra) => (
          <button className="caixa" key={letra} data-test="letter"
            onClick={() => handleLetterClick(letra)}

            disabled={!jogoIniciado || letrasClicadas.includes(letra)}
          >{letra}</button>))} </div>
          </>
    )
}