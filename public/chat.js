var socket = io.connect("http://localhost:8080");

var mensaje = document.querySelector("#mensaje");
var nombre = document.querySelector("#nombre");
var btn = document.querySelector("#enviar");
var pantalla = document.querySelector("#pantalla");
var aviso = document.querySelector("#aviso");


//EMITTERS
btn.addEventListener("click", function () {
    socket.emit('chat', {
        nombre: nombre.value,
        mensaje: mensaje.value
    });
    mensaje.value = "";
});

mensaje.addEventListener("keypress", function () {
    socket.emit("escribiendo", nombre.value);
});

//LISTENERS
socket.on("chat", function (data) {
    pantalla.innerHTML += "<p><strong>" + data.nombre + ":</strong>" + data.mensaje + "</p>";
    aviso.innerHTML = "";
});

socket.on("escribiendo", function (data) {
    aviso.innerHTML = "<p> <em>" + data + " está escribiendo... </em> </p>";
});