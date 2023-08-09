function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icon = document.getElementById("dark-toggle");
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("dark-toggle").className="fa-solid fa-sun";
    }else{
        document.getElementById("dark-toggle").className="fa-solid fa-moon";
    }
}