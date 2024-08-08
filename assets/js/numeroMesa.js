document.getElementById('user-input').addEventListener('input', function() {
    const userInput = this.value.trim().toLowerCase();

    // Check if userInput length is greater than 4
    if (userInput.length > 4) {
        fetch('/assets/js/listado.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Leer como texto en lugar de JSON
            })
            .then(text => {
                try {
                    const data = JSON.parse(text); // Intentar parsear el texto como JSON
                    const mesas = data;
                    const persona = mesas.find(persona => persona.nombre.toLowerCase() === userInput.toLowerCase());

                    if (persona) {
                        const mesa = persona.numero_de_mesa.toString();
                        document.querySelector('.numeroMesa').innerHTML = `<img class="mesa mt-5" src="../../assets/Img/mesa ${mesa}.png" alt="Mesa ${mesa}">`;
                    } else {
                        console.log('Persona not found');
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            })
            .catch(error => console.error('Error:', error));
    }
});
