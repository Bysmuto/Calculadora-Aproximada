let tela = document.getElementById("tela");

let botoes = Array.from(document.getElementsByClassName("botao"));

botoes.map((butao) =>
  butao.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        document.querySelector('h1').style.display = 'none'
        tela.innerText = " ";
        break;

      case "del":
        if (tela.innerText) {
          tela.innerText = tela.innerText.slice(0, -1);
        }
        break;

      case "=":
        if (eval(tela.innerText) === undefined) {
          tela.innerText = "";} 
        else {

          try {
            document.querySelector('#historico').innerHTML +=
            `${tela.innerText} = ${eval(tela.innerText)}  ( ${Math.round(eval(tela.innerText))} )<br>`

            tela.innerText = eval(tela.innerText);

            setTimeout(function () {
              document.querySelector('h1').style.display = 'block'
              tela.innerText = Math.round(eval(tela.innerText))
            }, 1000);
            
            



          } catch {
            tela.innerText = "erro!";
          }
        }
        break;

      default:
        tela.innerText += e.target.innerText;
    }
  })
);

