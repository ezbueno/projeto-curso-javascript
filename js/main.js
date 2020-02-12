/*var nome = "Ezandro Bueno";
var n1 = 1;
var n2 = 1;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.replace("Japão", "Brasil").toUpperCase());
console.log(frase.replace("Japão", "Brasil").toLowerCase());
alert(frase.replace("Japão", "Brasil"));*/

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));*/

/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome: "maçã", cor: "vermelha"} , {nome: "uva", cor: "roxa"}];
console.log(frutas[0].nome);
alert(frutas[1].cor);*/

/*var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}*/

/*var count = 0;
while (count <= 5) {
    alert(count);
    console.log(count);
    count++;
}*/

/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}*/

/*var d = new Date();
console.log(d.getDate());
console.log(d.getMonth() + 1);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());*/

/*function soma(n1, n2) {
    return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}*/

/*function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        return validar = true;
    } else {
        return validar = false;
    }
}*/

//alert(soma(2, 2));
//var idade = prompt("Qual é a sua idade?");
//alert(validarIdade(idade));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

function clicou() {
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>");
}

function redirecionar() {
    //abre uma nova página
    window.open("https://digitalinnovation.one/");

    //abre na mesma página
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";   
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}