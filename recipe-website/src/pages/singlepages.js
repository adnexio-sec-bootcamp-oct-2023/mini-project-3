document.addEventListener("DOMContentLoaded", function () {
    // Get the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const recipeTitle = urlParams.get("id");
  
    // Check if the parameter exists
    if (recipeTitle) {
      // Fetch content based on the recipe title
      fetchRecipeDetails(recipeTitle);
    } else {
      // Handle the case when no parameter is provided
      console.error("Recipe title parameter is missing.");
    }
  });
  
  async function fetchRecipeDetails(recipeTitle) {
    try {
      // Fetch the recipe details from the data.json file
      const response = await fetch('data.json');
      const recipes = await response.json();
  
      // Find the selected recipe by title
      const selectedRecipe = recipes.find(recipe => recipe.title === recipeTitle);
  
      // Display the recipe details on the page
      displayRecipeDetails(selectedRecipe);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  }
  
  function displayRecipeDetails(recipe) {
    // Access the recipe details container in the HTML
    const recipeDetailsContainer = document.getElementById("recipe-details");
  
    // Clear any existing content in the container
    recipeDetailsContainer.innerHTML = "";
  
    // Create HTML elements to display recipe details
    const titleElement = document.createElement("h2");
    titleElement.classList.add("text-3xl", "font-semibold", "mb-4");
    titleElement.textContent = recipe.title;
  
    const imageElement = document.createElement("img");
    imageElement.classList.add("w-full", "object-cover", "mb-4");
    imageElement.src = recipe.image;
    imageElement.alt = recipe.title;
  
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = recipe.description;
  
    const categoryElement = document.createElement("p");
    categoryElement.textContent = `Category: ${recipe.category}`;
  
    // Append the elements to the container
    recipeDetailsContainer.appendChild(titleElement);
    recipeDetailsContainer.appendChild(imageElement);
    recipeDetailsContainer.appendChild(descriptionElement);
    recipeDetailsContainer.appendChild(categoryElement);
  }
  