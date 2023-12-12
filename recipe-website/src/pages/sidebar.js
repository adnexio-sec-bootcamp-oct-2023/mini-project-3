document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    //const recipeContainer = document.querySelector(".grid");
  
    // Toggle sidebar and overlay
    menuToggle.addEventListener('click', function(){
      sidebar.classList.toggle('-translate-x-full');
    });
  
    overlay.addEventListener('click', function(){
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });
})