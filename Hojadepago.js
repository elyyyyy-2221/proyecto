function calcularPago() {
            var nombre = document.getElementById("nombre").value;
            var salarioBase = parseFloat(document.getElementById("salarioBase").value);
            var horasExtras = parseInt(document.getElementById("horasExtras").value);
            var antiguedadEmpleado = parseInt(document.getElementById("antiguedadEmpleado").value);

            var precioHoraExtra = 15; 
            var pagoAntiMenor = 50;
            var pagoAntiMayor = 100;
            
            var totalHorasExtras = horasExtras * precioHoraExtra;
            
            var pagoAntiguedad;
            if (antiguedadEmpleado < 12) {
                pagoAntiguedad = antiguedadEmpleado * pagoAntiMenor;
            } else {
                pagoAntiguedad = antiguedadEmpleado * pagoAntiMayor;
            }
            
           var diasVacaciones
           if(salarioBase<1000){
            diasVacaciones=5;
           }else {
            diasVacaciones=10;
           }
        
        var pagoVacaciones=(salarioBase/30) * diasVacaciones
        var porcentajeRenta 
        if (antiguedadEmpleado<5) {
            porcentajeRenta=0.20
        }
        var descuentoRenta=(salarioBase + totalHorasExtras + pagoAntiguedad + pagoVacaciones)* porcentajeRenta;

            var totalAPagar = salarioBase + totalHorasExtras + pagoAntiguedad + pagoVacaciones - descuentoRenta;


// Mostrar resultados
document.getElementById("resultados").innerHTML = 
    '<div class="resultados">' +
    '<h2>____________BOLETA DE PAGO EMPRESA LOS TRES PAJARITOS__________________</h2>' +
    '<p>Nombre empleado: ' + nombre + '</p>' +
    '<p>Salario base: $' + salarioBase.toFixed(2) + '</p>' +
    '<p>Antigüedad: ' + antiguedadEmpleado + ' años</p>' +
    '<p>Cantidad de horas extras reportadas: ' + horasExtras + '</p>' +
    '<p>Porcentaje de renta aplicado: ' + (porcentajeRenta * 100).toFixed(0) + '%</p>' +
    '<p>Precio por cada hora extra: $' + precioHoraExtra + '</p>' +
    '<p>Pago por cada año laborado: $' + pagoAntiguedad.toFixed(2) + '</p>' +
    '<p>Cantidad de días considerados para el pago de vacaciones: ' + diasVacaciones + '</p>' +
    '<hr>' +
    '<h3>DETALLE DE PAGO</h3>' +
    '<p>Total a pagar en concepto de horas extras: $' + totalHorasExtras.toFixed(2) + '</p>' +
    '<p>Total a pagar en concepto de antigüedad: $' + pagoAntiguedad.toFixed(2) + '</p>' +
    '<p>Total a pagar en concepto de vacaciones: $' + pagoVacaciones.toFixed(2) + '</p>' +
    '<hr>' +
    '<p>Total a recibir antes de renta: $' + (salarioBase + totalHorasExtras + pagoAntiguedad + pagoVacaciones).toFixed(2) + '</p>' +
    '<p>Descuento en concepto de renta: $' + descuentoRenta.toFixed(2) + '</p>' +
    '<hr>' +
    '<p>Total final a cobrar: $' + totalAPagar.toFixed(2) + '</p>' +
    '</div>';

}