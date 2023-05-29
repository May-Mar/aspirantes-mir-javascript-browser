const formularioTarea = document.getElementById("formularioTarea");
const listaTareas = document.getElementById("listaTareas");

formularioTarea.addEventListener("submit", function(event) {
  event.preventDefault();
});

const botonAgregar = document.getElementById("ingresar");
botonAgregar.addEventListener("click", function() {
  const tareaInput = document.getElementById("tareaIngresar");
  const tarea = tareaInput.value;

  mostrarTarea(tarea);

  tareaInput.value = "";
});

function mostrarTarea(tarea) {
  const tareaElemento = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tareaElemento.appendChild(checkbox);

  const label = document.createElement("label");
  label.textContent = tarea;
  tareaElemento.appendChild(label);

  listaTareas.appendChild(tareaElemento);
}

const botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener("click", function() {
    const tareas = document.querySelectorAll('#listaTareas input[type="checkbox"]:checked');
  
    tareas.forEach(tarea => {
      tarea.parentNode.remove();
    });
});

actualizarListaTareas();

function actualizarListaTareas() {
  listaTareas.innerHTML = "";

  const tareas = document.querySelectorAll('#listaTareas div');

  tareas.forEach(tarea => {
    listaTareas.appendChild(tarea);
  });
}
