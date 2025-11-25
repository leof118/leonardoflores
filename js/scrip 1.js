console.log("Hola Mundo");
alert("Hola Mundo, esto es un alerta") 

function triste(){
    document.getElementById('carita').src='images/sad.jpg';
    alert("Po que ta triste causa");
}
function feliz(){
    document.getElementById('carita').src='images/feliz.jpg';
    alert("que habras hecho")
}
function cambiarColor(){
    document.getElementById('men').style.color='#dac23aff';
    alert("No te gusto el color :c")
}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo 2.jpg';
    alert("logo simple, te entiendo")
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#1a9c2bff';
     alert("Nada te gusta :/")
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="COMPLETADO";
    alert("felicidades")
}