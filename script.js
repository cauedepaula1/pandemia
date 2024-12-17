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
var interval2 = 130;

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
var res3 = window.document.getElementById("paragrafogrid")
var text3 = "Diferentes formas de cuidar";
var interval3 = 430;

function digito3(element3, text3, interval3){
    var char = text3.split("").reverse();
    var typer = setInterval(function (){
        if(!char.length){
            return clearInterval(typer);
        }
        var next = char.pop();
        element3.innerHTML += next;
    }, interval3)
}
window.addEventListener("scroll", function(){
    if(res3 && !res3.classList.contains("typed")){
        res3.classList.add("typed"); // Adiciona uma classe para evitar múltiplas execuções
        digito3(res3, text3, interval3) //chama variaveis
    }
});



