const recipeContainer = document.querySelector(".grid");
  async function fetchData() {
    try {
      const response = await fetch('data.json');
      const recipes = await response.json();
      return recipes;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async function generateRecipeCards() {
    const recipes = await fetchData();

    // Ensure recipeContainer exists before manipulating its content
    if (!recipeContainer) {
      console.error("Recipe container not found.");
      return;
    }
    
    recipeContainer.innerHTML = ""; // Clear existing content

    recipes.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("bg-white", "rounded-lg", "shadow", "overflow-hidden", "h-auto");

      const image = document.createElement("img");
      image.classList.add("w-full", "object-cover");
      image.src = recipe.image;
      image.alt = recipe.title;
      image.style.height = "300px";

      // Add click event listener to each image
      image.addEventListener("click", () => {
        // Navigate to another page
        window.location.href = `singlepages.html?id=${recipe.title}`;
      });

      const cardContent = document.createElement("div");
      cardContent.classList.add("p-4");

      const title = document.createElement("h3");
      title.classList.add("font-bold", "text-lg", "mb-2");
      title.textContent = recipe.title;

      const description = document.createElement("p");
      description.classList.add("text-gray-600", "text-sm");
      description.textContent = recipe.description;

      const category = document.createElement("span");
      category.classList.add("inline-block", "bg-blue-200", "text-blue-800", "px-3", "py-1", "mt-4", "rounded-full");
      category.textContent = "Category: " + recipe.category;

      cardContent.appendChild(title);
      cardContent.appendChild(description);
      cardContent.appendChild(category);

      card.appendChild(image);
      card.appendChild(cardContent);
      
      recipeContainer.appendChild(card);
    });
  }

  // Call the function to generate recipe cards on page load
  generateRecipeCards();


