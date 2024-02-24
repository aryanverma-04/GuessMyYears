document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit');
    const nameInput = document.getElementById('fname');
    const resultContainer = document.querySelector('.result-container');

    submitButton.addEventListener('click', function(event) {
        const name = nameInput.value.trim(); // Get the input name value
        
        // Send a GET request to the Agify API
        fetch(`https://api.agify.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                // Update the result container with the name and guessed age
                resultContainer.innerHTML = `
                    <div class="bd">
                        <div id="name">Name: ${data.name}</div>
                        <div id="age">Guessed Age: ${data.age}</div>
                    </div>
                    
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resultContainer.innerHTML = `<div>Error fetching data. Please try again later.</div>`;
            });
    });
});
