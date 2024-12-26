let disparo = window.document.getElementById("apresentacaoProjeto")
let alreadyTriggered = false;
disparo.addEventListener("mouseenter", () => {
    if (alreadyTriggered) return;


let res = window.document.getElementById("titulo2");
let text = "Quanto afeto cabe em uma janela?";
let interval = 65;

if (res.getAttribute("data-written") == "true") {
    return; // Sai da função se já tiver sido escrito
}
// Função para digitar o texto
    function historia(element, text, interval) {
    let char = text.split("").reverse();

        let typer = setInterval(function () {
            if (!char.length) { // Corrigido: char.length
                element.setAttribute("data-written", "true"); // Marca como escrito
                return clearInterval(typer);
            }
            let next = char.pop();

            element.innerHTML += next;
        }, interval);
    }
        historia(res, text, interval);
        alreadyTriggered = true;
 });
// espera o carregamento da página
/*window.addEventListener("scroll", function () {
    if (res && !res.classList.contains("typed")) { 
        res.classList.add("typed"); // Adiciona uma classe para evitar múltiplas execuções
        historia(res, text, interval);
    }
});
}*/
//load !important
// setTimeout
let res2 = window.document.querySelector(".texto")
let text2 = "Pandemia e afeto";
let interval2 = 130;

//para digitar o texto
function digito1(element2, text2, interval2){
    let char = text2.split("").reverse();
    let typer = setInterval(function (){
        if(!char.length){
            return clearInterval(typer);
        }
        let next = char.pop();
        element2.innerHTML += next;
    }, interval2)
}
window.addEventListener("load", function () {
    digito1(res2, text2, interval2);
});

let disparo2 = window.document.querySelector(".estilogrid")
disparo2.addEventListener("mouseenter", entrou)

function entrou(){
let res3 = window.document.getElementById("paragrafogrid")
let text3 = "Diferentes formas de cuidar";
let interval3 = 60;


if (res3.getAttribute("data-written") == "true") {
    return; // se for verdade que ja foi escrito, o retorno Sai da função, retornando 0(nada)/acaba
}

function digito3(element3, text3, interval3){
    let char = text3.split("").reverse();
    let typer = setInterval(function (){
        if(!char.length){
            element3.setAttribute("data-written", "true"); // Marca como escrito
            return clearInterval(typer);
        }
        let next = char.pop();
        element3.innerHTML += next;
    }, interval3);
}
    digito3(res3, text3, interval3) //chama variaveis
};



