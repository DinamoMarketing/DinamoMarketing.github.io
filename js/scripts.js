// Funciones para manejar el modal
function openModal() {
    document.getElementById('dataModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('dataModal').style.display = 'none';
    // No marcar automáticamente el checkbox al cerrar el modal
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = form.querySelector('input[type="submit"]');
    const checkbox = document.getElementById('aceptar');

    // Evento para manejar clic en el checkbox de aceptar
    checkbox.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir que el checkbox se marque automáticamente
        openModal();
    });

    // Agregar evento al botón de aceptar dentro del modal para marcar el checkbox
    document.querySelector('.modal-footer button').addEventListener('click', function() {
        checkbox.checked = true;
        closeModal(); // Cerrar el modal
        // Habilitar el botón de enviar si se acepta el checkbox
        submitButton.disabled = !checkbox.checked;
    });

    // Habilitar o deshabilitar el botón de enviar según el estado del checkbox
    checkbox.addEventListener('change', function() {
        submitButton.disabled = !checkbox.checked;
    });

    // Evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto

        if (checkbox.checked) {
            // Almacenar datos en localStorage y redirigir
            const userData = {
                nombres: document.getElementById('nombres').value,
                tipoId: document.getElementById('tipoId').value,
                numId: document.getElementById('numId').value,
                fechaNacimiento: document.getElementById('fechaNacimiento').value,
                telefono: document.getElementById('telefono').value,
                barrio: document.getElementById('barrio').value,
                email: document.getElementById('email').value,
                aceptar: checkbox.checked
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = 'calificaExperiencia.html';
        } else {
            // En caso de que el checkbox no esté marcado, prevenir el envío y abrir el modal
            openModal();
        }
    });
});
