let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

let countAprobados = 0;
let countSupletorios = 0;
let countReprobados = 0;
let sumaNotas = 0;


notas.forEach(function(nota) {
    
    sumaNotas += nota;

    if (nota >= 7 && nota <= 10) {
        countAprobados++; 
    } else if (nota >= 5 && nota < 7) {
        countSupletorios++; 
    } else {
        countReprobados++; 
    }
});

let promedio = sumaNotas / notas.length;

let estadoTexto = "";
let claseEstado = "";

if (promedio >= 7) {
    estadoTexto = "APROBADO";
    claseEstado = "text-success"; 
} else {
    estadoTexto = "EN RIESGO";
    claseEstado = "text-danger"; 
}


document.getElementById("totalAprobados").innerText = countAprobados;

document.getElementById("totalSupletorios").innerText = countSupletorios;

document.getElementById("totalReprobados").innerText = countReprobados;

document.getElementById("promedioCurso").innerText = promedio.toFixed(2);

let elementoEstado = document.getElementById("estadoCurso");
elementoEstado.innerText = estadoTexto;
elementoEstado.className = "fw-bold " + claseEstado; 