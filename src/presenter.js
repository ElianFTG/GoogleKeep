const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#Notaform");
const div = document.querySelector("#respuesta");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    div.innerHTML = "<p>" + titulo.value + " Contenido: " + contenido.value + "</p>";
  });
  
