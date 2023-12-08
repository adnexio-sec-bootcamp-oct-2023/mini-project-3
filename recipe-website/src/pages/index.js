const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

      menuToggle.addEventListener('click', function(){
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
      });

      overlay.addEventListener('click', function(){
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
      });