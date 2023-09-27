document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario-container")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const nombreEstudiante = document.getElementById("nombre").value;
      const apellidoEstudiante = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("fecha").value;

      let datos = {
        nombre: nombreEstudiante,
        apellido: apellidoEstudiante,
        fecha: fechaNacimiento,
      };

      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
          console.error("Error al enviar los datos:", error);
        });
    });
});
