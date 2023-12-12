document.addEventListener("DOMContentLoaded", async function () {
  // Fetch existing recipes
  const recipes = await fetchData();

  // Function to fetch data from 'data.json'
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

  // Function to handle adding a new recipe
  window.addRecipe = async function () {
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    // Validate that all fields are filled
    if (!title || !image || !description || !category) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      "title": title,
      "image": image,
      "description": description,
      "category": category
    };

    // Add the new recipe to the recipes array
    recipes.push(newRecipe);

    // Log the updated recipes array
    console.log(recipes);
  };

  // Function to write the updated recipes array back to 'data.json'
  function writeNewRecipe(fileName, data, callback) {
    fetch(fileName, {
      method: 'PUT',  // Use 'PUT' to update the file
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(callback)
      .catch(error => console.error('Error writing data:', error));
  }
});
