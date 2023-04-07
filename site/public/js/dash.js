// function openMenu(){
//     let leftMenu = document.getElementsByClassName("left_menu") 
//     let bars = document.getElementById("bars")

//     leftMenu.style.display = "flex";
//     leftMenu.style.transition = "10s";
//     bars.style.display = "none";

// }

function showMenu() {
    let element = document.getElementById("left_menu");
    element.classList.add("show");
    bars.style.display = "#274360";
}

function hideMenu() {
    let element = document.getElementById("left_menu");
    element.classList.remove("show");
    bars.style.display = "block";
}
