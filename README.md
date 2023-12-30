# ***Jogo da Forca***

## **Visão Geral**
Jogo da Forca Online! Nele, a pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha.

## **Deploy**
***Link:*** https://projeto8-jogoforca-fl3via.vercel.app/

## **Principais Funcionalidades**
`Ao apertar "Escolher Palavra"`
- O jogo se inicia com as letras desabilitadas, ao apertar o botão "Escolher Palavra" as letras passam a ficar habilitadas e a palavra é sorteada para que o usuário tente acertar. 
- A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada.
- Aparece a palavra a ser adivinhada na tela, com um underline ( _ ) para cada letra que a palavra possui.

`Ao pressionar uma letra`
- O botão de uma letra já clicada é desabilitado.
- Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
     - O underline da posição correspondente à letra é substituído pela letra em si.
- Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
     - Sua contagem de erros aumenta.
     - A imagem na forca muda (Cabeça > Corpo > Braço1 > Braço2 > Perna1 > Perna2).

`Fim do jogo`
- Botões de letras são desabilitados.
- Caso o usuário ganhe:
     - Quando o usuário ganha, a palavra completa fica em **verde**.
- Caso o usuário perca:
     - A imagem final que aparece é a do boneco enforcado.
     - A palavra é revelada.
- Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra” novamente e o jogo é reiniciado.

## **Tecnologias Utilizadas**
- React;
- JavaScript;
- Stlyd-componentes;
- React-dom.

## Como Executar o Projeto Localmente

### No Terminal 
1. **Clone o Repositório:** `git clone` https://github.com/fl3via/projeto8-jogoforca
2. **Entre na pasta:** `cd` projeto8-jogoforca
3. **Abra no Visual Estudio Code:** `code .`

### No Visual Estudio Code
4. **Instale as Dependências:** `npm install`
5. **Execute o Projeto:** `npm start`

  
 
