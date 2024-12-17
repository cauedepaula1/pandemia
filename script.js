var res = window.document.getElementById("titulo2");
var text = "Quanto afeto cabe em uma janela?";
var interval = 120;

// Função para digitar o texto
function historia(element, text, interval) {
    var char = text.split("").reverse();

    var typer = setInterval(function () {
        if (!char.length) { // Corrigido: char.length
            return clearInterval(typer);
        }
        var next = char.pop();

        element.innerHTML += next;
    }, interval);
}

// Aguarda o carregamento da página
window.addEventListener("scroll", function () {
    if (res && !res.classList.contains("typed")) { 
        res.classList.add("typed"); // Adiciona uma classe para evitar múltiplas execuções
        historia(res, text, interval);
    }
});

//load !important
// setTimeout
var res2 = window.document.querySelector(".texto")
var text2 = "Pandemia e afeto";
var interval2 = 150;

//para digitar o texto
function digito1(element2, text2, interval2){
    var char = text2.split("").reverse();

    var typer = setInterval(function (){
        if(!char.length){
            return clearInterval(typer);
        }
        var next = char.pop();
        element2.innerHTML += next;
    }, interval2)
}
window.addEventListener("load", function () {
    digito1(res2, text2, interval2);
});
