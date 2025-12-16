
var notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

var txt_aprobados = document.getElementById('txt_aprobados');
var txt_supletorios = document.getElementById('txt_supletorios');
var txt_reprobados = document.getElementById('txt_reprobados');
var txt_promedio = document.getElementById('txt_promedio');
var txt_estado = document.getElementById('txt_estado');

calcularCurso();

function calcularCurso() {

    let aprobados = 0;
    let supletorios = 0;
    let reprobados = 0;
    let sumaTotal = 0;

    notas.forEach(function (nota) {
        sumaTotal = sumaTotal + nota;

        if (nota >= 7) {
            aprobados++;
        } else if (nota >= 5) {
            supletorios++;
        } else {
            reprobados++;
        }
    });

    let promedio = sumaTotal / notas.length;

    txt_aprobados.textContent = aprobados;
    txt_supletorios.textContent = supletorios;
    txt_reprobados.textContent = reprobados;
    txt_promedio.textContent = promedio.toFixed(2);

    if (promedio >= 7) {
        txt_estado.textContent = "CURSO APROBADO";
        txt_estado.className = "text-success fw-bold";
    } else {
        txt_estado.textContent = "CURSO EN RIESGO";
        txt_estado.className = "text-danger fw-bold";
    }
}