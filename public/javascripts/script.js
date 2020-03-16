// Regex
const regexRut = /^(\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1})|(\d{7,8}-[0-9kK]{1})$/;
const regexNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const regexEdad = /^([0-1]?[0-9]?[0-9])$/;
const regexFecha = /^(?!3[0-1]-..-....)([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;

// Elementos a manipular
const rutElem = document.querySelector("#rut");
const nombresElem = document.querySelector("#nombres");
const apellidosElem = document.querySelector("#apellidos");
const emailElem = document.querySelector("#email");
const edadElem = document.querySelector("#edad");
const fechaElem = document.querySelector("#fecha");
const especialidadElem = document.querySelector("#especialidad");
const horaElem = document.querySelector("#hora");
const btnReservaElem = document.querySelector("#btn-reservar");

document.addEventListener("DOMContentLoaded", function() {
  // Inicializar Modales
  var modales = document.querySelectorAll(".modal");
  var instanciasModales = M.Modal.init(modales);
  // Inicializar Selectores
  var selectores = document.querySelectorAll("select");
  var instanciasSelectores = M.FormSelect.init(selectores);
});

function abrirModal() {
  let instance = M.Modal.getInstance(document.querySelector("#modal"));
  instance.open();
}

function reserva() {
  let nombres = nombresElem.value;
  let apellidos = apellidosElem.value;
  let especialidad = especialidadElem.value;
  let fecha = fechaElem.value;
  let hora = horaElem.value;
  let email = emailElem.value;
  let texto = `Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el
    día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita.
    Gracias por preferirnos.`;
  document.getElementById("texto-modal").innerHTML = texto;
  abrirModal();
}

function validarDatos() {
  let validacionEmail = validarRegex(regexEmail, emailElem);
  let validacionRut = validarRegex(regexRut, rutElem);
  let validacionNombre = validarRegex(regexNombre, nombresElem);
  let validacionApellidos = validarRegex(regexNombre, apellidosElem);
  let validacionEdad = validarRegex(regexEdad, edadElem);
  let validacionFecha = validarRegex(regexFecha, fechaElem);
  console.log("-------------------");

  if (validacionEmail && validacionRut && validacionNombre && validacionApellidos && validacionEdad && validacionFecha) {
    btnReservaElem.classList.remove("disabled");
    btnReservaElem.classList.add("pulse");
  } else {
    btnReservaElem.classList.add("disabled");
    btnReservaElem.classList.remove("pulse");
  }
}

function validarRegex(regex, elem) {
  let testResult = regex.test(elem.value);
  if (testResult) {
    console.log("Testing:", elem.value, "SI");
    elem.classList.remove("invalid");
  } else {
    console.log("Testing:", elem.value, "NO");
    elem.classList.add("invalid");
  }
  return testResult;
}

btnReservaElem.addEventListener("click", reserva);
rutElem.addEventListener("input", validarDatos);
nombresElem.addEventListener("input", validarDatos);
apellidosElem.addEventListener("input", validarDatos);
emailElem.addEventListener("input", validarDatos);
edadElem.addEventListener("input", validarDatos);
fechaElem.addEventListener("input", validarDatos);
