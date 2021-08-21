// Que es query selector consulta
let boton=document.getElementById("boton");
let boton2=document.getElementById("boton2");
let foto = document.getElementById("foto");
let audio = document.getElementById("audio");
let titulo = document.getElementById("titulo");
let foto2 = document.getElementById("foto2");
let audio2 = document.getElementById("audio2");
let titulo2 = document.getElementById("titulo2");
let foto3 = document.getElementById("foto3");
let audio3 = document.getElementById("audio3");
let titulo3 = document.getElementById("titulo3");
boton.addEventListener("click",perroGuardian);
boton2.addEventListener("click",deshacer);

function perroGuardian(){
    foto.src="img/otra.jpg";
    audio.src="audio/song2.mp3";
    titulo.textContent = "Bee Gees";
    foto2.src="img/ACDC.jpg";
    audio2.src="audio/acdc.mp3";
    titulo2.textContent = "AC/DC";
    foto3.src="img/martin-garrix.jpg";
    audio3.src="audio/martinGarrix.mp3";
    titulo3.textContent = "MartinGarrix";
    
}
function deshacer(){
    foto.src="img/metallica.jpg";
    audio.src="audio/song1.mp3";
    titulo.textContent = "Metalica";
    foto2.src="img/One Republic.jpeg";
    audio2.src="audio/oneRepublic.mp3";
    titulo2.textContent = "One Republic";
    foto3.src="img/Simple_plan.jpg";
    audio3.src="audio/simplePlan.mp3";
    titulo3.textContent = "SimplePlan";
}




