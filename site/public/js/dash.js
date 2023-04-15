// mostrar o menu lateral
function showMenu() {
    left_menu.style.display = "block";
}

function hideMenu() {
    left_menu.style.display = "none";
}

// plotar dados dos graficos

let discData = 43;
discValue.innerHTML = `${discData}%`

let cpuData = [40, 20, 78, 65, 56, 90]
let ramData = [40, 20, 90, 65, 63, 45]

let latency = 90;
latencyValue.innerHTML = `${latency}ms`

// cpu_alert.style.display = "block"

function checkCPU() {
    contYellow = 0;
    contRed = 0;
    check = true;

    for (i = 0; i < cpuData.length; i++){
        if (cpuData[i] > 75) {
            contRed++;
            if (contRed >= 2) {
                cpu_alert.style.display = "block";
                cpu_alert.style.color = "red";
                check = false;
            }

        } else if (cpuData[i] > 50) {
            contYellow++;
            if (contYellow >= 2) {
                cpu_alert.style.display = "block";
                cpu_alert.style.color = "yellow";
                check = false;
            }
        } 
    }

    if(check) {
        cpu_check.style.display = "block";
        cpu_check.style.color = "green";
    }
}

function checkDisc() {
    check = true;

    if (discData > 50) {
        disc_check.style.display = "block";
        disc_check.style.color = "yellow";
        check = false
    } else if (discData > 75){
        disc_check.style.display = "block";
        disc_check.style.color = "red";
        check = false
    }

    if(check) {
        disc_check.style.display = "block";
        disc_check.style.color = "green";
    }
}

function checkRam() {
    contYellow = 0;
    contRed = 0;
    check = true;

    for (i = 0; i < ramData.length; i++){
        if (ramData[i] > 75) {
            contRed++;
            if (contRed >= 2) {
                ram_alert.style.display = "block";
                ram_alert.style.color = "red";
                check = false;
            }

        } else if (ramData[i] > 50) {
            contYellow++;
            if (contYellow >= 2) {
                ram_alert.style.display = "block";
                ram_alert.style.color = "yellow";
                check = false;
            }
        } 
    }

    if(check) {
        ram_check.style.display = "block";
        ram_check.style.color = "green";
    }
}



