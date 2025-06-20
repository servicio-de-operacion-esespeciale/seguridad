function calcularSueldo()
{
   const categoria = document.getElementById("categoria").value;
   const sueldoBasico = document.getElementById("sueldo_basico");
   const antiguedad = document.getElementById("antiguedad");
   const presentismo = document.getElementById("presentismo");
   const adicionalremunerativo = document.getElementById("adicional_remunerativo");
   const horasFeriado = document.getElementById("horas_feriado");
   const horasNocturnas = document.getElementById("horas_nocturnas");
   const viatico = document.getElementById("viatico"); // Asumiendo que el input 'viatico' existe en el HTML ahora
   const horasal50 = document.getElementById("horas_al50");
   const horasal100 = document.getElementById("horas_al100");
   const sindicato = document.getElementById("sindicato").value;
   // Asegúrate de declarar 'viaticoCategoria' y 'adicionalremunerativoCategoria' aquí:
   let sueldoCategoria, presentismoCategoria, viaticoCategoria, adicionalremunerativoCategoria; 

   switch (categoria) { // Added opening brace for switch statement
        case "vigilador_general":
            sueldoCategoria = 711370;
            presentismoCategoria = 153600;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "vigilador_bombero":
            sueldoCategoria = 760240;
            presentismoCategoria = 166210;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "administrativo":
          sueldoCategoria = 783870;
            presentismoCategoria = 172250;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "vigilador_principal":
            sueldoCategoria = 809050;
            presentismoCategoria = 178280;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "verificacion_eventos":
             sueldoCategoria = 760240;
            presentismoCategoria = 166210;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "operador_monitoreo":
            sueldoCategoria = 760240;
            presentismoCategoria = 166210;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "guia_tecnico":
          sueldoCategoria = 783870;
            presentismoCategoria = 172250;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "instalador_seguridad":
            sueldoCategoria = 809050;
            presentismoCategoria = 178280;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
          case "control_admision":
            sueldoCategoria = 711370;
            presentismoCategoria = 153600;
            viaticoCategoria = 429750;
            adicionalremunerativoCategoria = 26280;
            break;
       default:
           sueldoCategoria = 0;
           presentismoCategoria = 0;
           viaticoCategoria = 0;
           adicionalremunerativoCategoria = 0;
           break;
   } // Closed the switch statement properly

   sueldoBasico.value = sueldoCategoria.toFixed(2);
   const antiguedadValue = parseFloat(antiguedad.value) || 0;
   const sueldoAntiguedad = (sueldoCategoria * 1 / 100 * antiguedadValue).toFixed(2);

   const horasFeriadoValue = parseFloat(horasFeriado.value) || 0;
   const sueldoFeriado = ((sueldoCategoria + presentismoCategoria + adicionalremunerativoCategoria) / 200 * horasFeriadoValue).toFixed(2);

   const horasal50Value = parseFloat(horasal50.value) || 0;
   const sueldoal50 = (((sueldoCategoria + presentismoCategoria + parseFloat(sueldoAntiguedad) + adicionalremunerativoCategoria) / 200 / 2 + (sueldoCategoria + presentismoCategoria + parseFloat(sueldoAntiguedad) + adicionalremunerativoCategoria) / 200) * horasal50Value).toFixed(2);

   const horasal100Value = parseFloat(horasal100.value) || 0;
   const sueldoal100 = (((sueldoCategoria + presentismoCategoria + parseFloat(sueldoAntiguedad) + adicionalremunerativoCategoria) / 200 * 2) * horasal100Value).toFixed(2);

   presentismo.value = presentismoCategoria.toFixed(2);

   // It's important to check that the 'viatico' element exists before trying to assign a value to it
   if (viatico) {
       viatico.value = viaticoCategoria.toFixed(2);
   }

   adicionalremunerativo.value = adicionalremunerativoCategoria.toFixed(2);

   const sueldoBrutoValue = (sueldoCategoria + parseFloat(sueldoAntiguedad) + parseFloat(sueldoFeriado) + parseFloat(sueldoal50) + parseFloat(sueldoal100) + presentismoCategoria + viaticoCategoria + adicionalremunerativoCategoria + (sueldoCategoria + parseFloat(sueldoAntiguedad)) * 0.1 / 100 * parseFloat(horasNocturnas.value || 0)).toFixed(2);
   document.getElementById("sueldo_bruto").value = sueldoBrutoValue;

   const descuento = (sindicato === "si" ? 0.20 : 0.17) * (parseFloat(sueldoBrutoValue) - viaticoCategoria);
   document.getElementById("descuento").value = descuento.toFixed(2);

   const sueldoNeto = (parseFloat(sueldoBrutoValue) - descuento).toFixed(2);
   document.getElementById("sueldo_neto").value = sueldoNeto;

   // Calculate net aguinaldo (50% of gross salary minus discount)
   // Calculate aguinaldo based on remunerative components only (excluding viatico)
   const aguinaldoBase = (sueldoCategoria + parseFloat(sueldoAntiguedad) + parseFloat(sueldoFeriado) + parseFloat(sueldoal50) + parseFloat(sueldoal100) + presentismoCategoria + adicionalremunerativoCategoria + (sueldoCategoria + parseFloat(sueldoAntiguedad)) * 0.1 / 100 * parseFloat(horasNocturnas.value || 0));
   const aguinaldoBruto = aguinaldoBase / 2;
   const descuentoAguinaldo = (sindicato === "si" ? 0.20 : 0.17) * aguinaldoBruto;
   const aguinaldoNeto = (aguinaldoBruto - descuentoAguinaldo).toFixed(2);

   document.getElementById("aguinaldo").value = aguinaldoNeto;
}
