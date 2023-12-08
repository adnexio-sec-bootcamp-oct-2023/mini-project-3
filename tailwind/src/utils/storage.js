// Function to fetch and display data
async function fetchData() {
    try {
        const response = await fetch('../src/data/data.json');
        const data = await response.json();

        // Get the recipes container
        const recipesContainer = document.getElementById('recipes');

        // Iterate through the recipes and create HTML elements
        data.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('mt-4');

            const title = document.createElement('h2');
            title.textContent = recipe.title;
            recipeDiv.appendChild(title);

            const ingredients = document.createElement('p');
            ingredients.textContent = 'Ingredients: ' + recipe.ingredients;
            recipeDiv.appendChild(ingredients);

            const instructions = document.createElement('p');
            instructions.textContent = 'Instructions: ' + recipe.instructions;
            recipeDiv.appendChild(instructions);

            const image = document.createElement('img');
            image.src = recipe.imageUrl;
            image.alt = recipe.title;
            recipeDiv.appendChild(image);

            recipesContainer.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function when the page loads
window.addEventListener('load', fetchData);
