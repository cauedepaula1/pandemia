let disparo = window.document.getElementById("apresentacaoProjeto")
let alreadyTriggered = false; //variavel definindo que inicia sem a escrita
disparo.addEventListener("mouseenter", () => { //usar a seta e o paramentro vazio fez com que nao fosse necessario a funcao antiga de digito
    if (alreadyTriggered) return; //quando ja estiver escrito vau retornar 0/ faz com que o evento ocorra só uma vez

let res = window.document.getElementById("titulo2");
let text = "Quanto afeto cabe em uma janela?";
let interval = 65;

if (res.getAttribute("data-written") == "true") {
    return; // sai da função se já tiver sido escrito
}
// Função para digitar o texto
    function historia(element, text, interval) {
    let char = text.split("").reverse(); //split transforma em array de caracteres, (separou a palavra em letras) e o reverse, reverteu

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
// espera o carregamento da página - primeiro desenvolvi com scroll
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
    let char = text2.split("").reverse(); //transformou em array e reverteu
    let typer = setInterval(function (){ //set interval define o intervalo
        if(!char.length){
            return clearInterval(typer); //se char (as letras) ja forem impressas uma por uma (lenght) ele para o programa
        }
        let next = char.pop();
        element2.innerHTML += next; //adiciona letra por letra
    }, interval2) //executa o intervalo definido
}
window.addEventListener("load", function () {
    digito1(res2, text2, interval2);
});

let disparo2 = window.document.querySelector(".estilogrid")
let alreadyTriggered2 = false; //programa inicia sem a frase
disparo2.addEventListener("mouseenter", () => {
    if (alreadyTriggered2) return; //quando a frase for escrita ira parar, retornando 0

let res3 = window.document.getElementById("paragrafogrid");
let text3 = "Diferentes formas de cuidar e ser cuidado";
let interval3 = 60;

if(res3.getAttribute("data-written") == "true"){
    return; //aqui saimos da funcao, garantindo que a frase seja escrita só uma vez
}

function digito3(element3, text3, interval3){
    let char2 = text3.split("").reverse();
    let typer2 = setInterval(function (){
        if(!char2.length){
            element3.setAttribute("data-written", "true"); // Marca como escrito
            return clearInterval(typer2);
        }
        let next = char2.pop(); //.pop ele desenverte, pois ele pega um elemento de cada vez ao contrario
        element3.innerHTML += next; //aqui ele imprime letra por letra
    }, interval3);
}
    digito3(res3, text3, interval3) //chama variaveis para imprimir
    alreadyTriggered2 = true; //aqui informa que foi escrito/impresso
});

let res4 = window.document.getElementById("nome")
let digitoNome = "Rasta Fotos"
let interval4 = 150;

    function digitoRasta(element4,digitoNome, interval4){
        let char4 = digitoNome.split("").reverse();
        let typer = setInterval(function (){
            if(!char4.length){
                return clearInterval(typer);
            }
            let next2 = char4.pop();
            element4.innerHTML += next2;
        }, interval4)
    }
        window.addEventListener("load", function showSubmit(){
            setTimeout( function(){ //defini ointervalo
                digitoRasta(res4, digitoNome, interval4)
    }, 2008);
    });
let disparo8 = window.document.getElementById("")
let alreadyTriggered3 = false;
disparo8.addEventListener("mousenter", () => {
    if (alreadyTriggered3) return;
    
}) 


