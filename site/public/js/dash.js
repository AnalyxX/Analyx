// mostrar o menu lateral
function showMenu() {
    left_menu.style.display = "block";
}

function hideMenu() {
    left_menu.style.display = "none";
}

// plotar dados dos graficos
 // test
 let p1 = 43;
 let p2 = 67;
 let p3 = 90;

 let rest1 = 100;
 let rest2 = 100;
 let rest3 = 100;

 rest1 -= p1;
 rest2 -= p2;
 rest3 -= p3;

 percentage1.innerHTML = p1 + "%";
 percentage2.innerHTML = p2 + "%";
 percentage3.innerHTML = p3 + "%";