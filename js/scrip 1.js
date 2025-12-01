console.log("Hola Mundo");
alert("Hola Mundo, esto es un alerta") 

function triste(){
    document.getElementById('carita').src='images/sad.jpg';
    alert("Po que ta triste causa");
}
function feliz(){
    document.getElementById('carita').src='images/feliz.jpg';
    alert("que habras hecho");
}
function cambiarColor(){
    document.getElementById('men0').style.color='#dac23aff';
    document.getElementById('men1').style.color='#1ecc1eff';
    document.getElementById('men2').style.color='#1a179cff';
    document.getElementById('men3').style.color='#c21e34ff';
    document.getElementById('men4').style.color='#065879ff';
    document.getElementById('men5').style.color='#db39d3ff';
    alert("No te gusto el color :c");
}
function cambiarTaCo(){
    document.getElementById('header').style.color='#abc929ff';
    alert("Nada te gusta.");
}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo 2.jpg';
    alert("logo simple, te entiendo");
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#1a9c2bff';
     alert("Nada te gusta :/");
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="COMPLETADO";
    alert("felicidades");
}