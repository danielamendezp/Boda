document.getElementById('user-input').addEventListener('input', function() {
    const userInput = this.value.trim().toLowerCase();
    const numeroMesaDiv = document.querySelector('.numeroMesa');

    // Clear the numeroMesaDiv on every input
    numeroMesaDiv.innerHTML = '';

    // Check if userInput length is greater than 4
    if (userInput.length > 4) {
        fetch('../listado.json')
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
                    const persona = mesas.find(persona => persona.nombre.toLowerCase() === userInput);

                    if (persona) {
                        const img = document.createElement('img');
                        img.src = `../Img/imagenes/mesa${persona.numero_de_mesa}.png`; // Ajusta la ruta según corresponda
                        numeroMesaDiv.appendChild(img);
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
