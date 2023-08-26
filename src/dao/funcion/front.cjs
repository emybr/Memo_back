function getDiaSemanaActual() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const diaActual = new Date().getDay();
    return diasSemana[diaActual];
}

module.exports = { getDiaSemanaActual };