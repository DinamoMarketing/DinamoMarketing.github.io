document.addEventListener('DOMContentLoaded', function() {
    const additionalForm = document.getElementById('additionalForm');

    additionalForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto

        // Recuperar los datos del usuario de localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Obtener los valores del formulario adicional
        const juego = additionalForm.querySelector('input[name="juego"]:checked').value;
        const vr = additionalForm.querySelector('input[name="vr"]:checked').value;
        const camara = additionalForm.querySelector('input[name="camara"]:checked').value;
        const experiencia = additionalForm['experiencia'].value;
        const stand = additionalForm.querySelector('input[name="stand"]:checked').value;

        // Combinar datos del usuario y del formulario adicional
        const completeData = {
            ...userData,
            Expjuego: juego,
            ExpGafasVR: vr,
            ExpCamara: camara,
            ExpFarmacenter: experiencia,
            ExpFarmacenterOpciones: stand
        };

        // Guardar los datos combinados en Realtime Database
        const newExtraRef = database.ref('Usuarios').push();
        newExtraRef.set(completeData).then(() => {
            // Redirigir a la página de agradecimiento
            window.location.href = 'agradecimiento.html';
        }).catch(error => {
            console.error('Error al guardar en Realtime Database: ', error);
            alert('Error al guardar los datos');
        });
    });
});

function confirmExperience() {
    const experienciaInput = document.getElementById('experiencia');
    if (experienciaInput.value.trim() !== '') {
        alert('Experiencia confirmada: ' + experienciaInput.value);
    } else {
        alert('Por favor ingrese una experiencia.');
    }
}
