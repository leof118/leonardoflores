console.log("Hola Mundo");
alert("Hola Mundo, esto es un alerta") 

function triste(){
    document.getElementById('carita').src='images/sad.jpg';
    alert("Po que ta triste causa");
}
function feliz(){
    document.getElementById('carita').src='images/feliz.jpg';
}
function cambiarColor(){
    document.getElementById('men').style.color='#dac23aff';

}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo 2.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#1a9c2bff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}