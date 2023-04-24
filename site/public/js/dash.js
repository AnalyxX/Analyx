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

let latency = 20;
latencyValue.innerHTML = `${latency}ms`

let download = [20, 60, 55, 43, 60, 80]
let upload = [78, 44, 43, 22, 37, 5]

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
        cpu_check.style.color = "rgb(0, 172, 0)";
    }
}

function checkDisc() {
    check = true;

    if (discData > 50) {
        disc_alert.style.display = "block";
        disc_alert.style.color = "yellow";
        check = false
    } else if (discData > 75){
        disc_alert.style.display = "block";
        disc_alert.style.color = "red";
        check = false
    }

    if(check) {
        disc_check.style.display = "block";
        disc_check.style.color = "rgb(0, 172, 0)";
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
        ram_check.style.color = "rgb(0, 172, 0)";
    }
}

function checkNet() {
    check = true;

    if (latency > 50) {
        net_alert.style.display = "block";
        net_alert.style.color = "yellow";
        check = false
    } else if (latency > 75){
        net_alert.style.display = "block";
        net_alert.style.color = "red";
        check = false
    }

    if(check) {
        net_check.style.display = "block";
        net_check.style.color = "rgb(0, 172, 0)";
    }
}

function back(){
    window.location = "dashboardInit.html"
}

