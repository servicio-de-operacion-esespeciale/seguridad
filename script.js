function showTab(tabName) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Quitar clase active de todas las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Mostrar el contenido seleccionado
    document.getElementById(tabName).classList.add('active');

    // Activar la pestaña correspondiente
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function calcularSueldo(anexo) {
    const categoria = document.getElementById(`categoria${anexo}`).value;
    const sueldoBasico = document.getElementById(`sueldo_basico${anexo}`);
    const antiguedad = document.getElementById(`antiguedad${anexo}`);
    const presentismo = document.getElementById(`presentismo${anexo}`);
    const horasFeriado = document.getElementById(`horas_feriado${anexo}`);
    const horasNocturnas = document.getElementById(`horas_nocturnas${anexo}`);
    const viatico = document.getElementById(`viatico${anexo}`);
    const horasal50 = document.getElementById(`horas_al50${anexo}`);
    const horasal100 = document.getElementById(`horas_al100${anexo}`);
    const sindicato = document.getElementById(`sindicato${anexo}`).value;

    let sueldoCategoria, presentismoCategoria, viaticoCategoria;
    let sumaNoRemunerativaCategoria = 0; // Solo Diciembre

    // Valores según cada anexo (solo Octubre, Noviembre, Diciembre)
    if (anexo === '27') { // Oct-25 (Valores actualizados)
        switch (categoria) {
            case "vigilador_general":
                sueldoCategoria = 817500; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            case "vigilador_bombero":
                sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "administrativo":
                sueldoCategoria = 896300; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "vigilador_principal":
                sueldoCategoria = 924100; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "verificacion_eventos":
                sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "operador_monitoreo":
                sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "guia_tecnico":
                sueldoCategoria = 896300; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "instalador_seguridad":
                sueldoCategoria = 924100; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "control_admision":
                sueldoCategoria = 817500; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            default:
                sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; break;
        }
        // Suma No Remunerativa es 0 en Octubre.
        sumaNoRemunerativaCategoria = 0;

    } else if (anexo === '28') { // Nov-25 (Valores actualizados)
        switch (categoria) {
            case "vigilador_general":
                sueldoCategoria = 825600; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            case "vigilador_bombero":
                sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "administrativo":
                sueldoCategoria = 905000; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "vigilador_principal":
                sueldoCategoria = 933000; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "verificacion_eventos":
                sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "operador_monitoreo":
                sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "guia_tecnico":
                sueldoCategoria = 905000; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "instalador_seguridad":
                sueldoCategoria = 933000; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "control_admision":
                sueldoCategoria = 825600; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            default:
                sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; break;
        }
        // Suma No Remunerativa es 0 en Noviembre.
        sumaNoRemunerativaCategoria = 0;

    } else if (anexo === '29') { // Dic-25 (Valores actualizados) - Incluye Suma No Remunerativa $25.000
        sumaNoRemunerativaCategoria = 25000; // Suma No Remunerativa
        switch (categoria) {
            case "vigilador_general":
                sueldoCategoria = 833600; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            case "vigilador_bombero":
                sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "administrativo":
                sueldoCategoria = 915200; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "vigilador_principal":
                sueldoCategoria = 944000; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "verificacion_eventos":
                sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "operador_monitoreo":
                sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; break;
            case "guia_tecnico":
                sueldoCategoria = 915200; presentismoCategoria = 180000; viaticoCategoria = 473800; break;
            case "instalador_seguridad":
                sueldoCategoria = 944000; presentismoCategoria = 186800; viaticoCategoria = 473800; break;
            case "control_admision":
                sueldoCategoria = 833600; presentismoCategoria = 159600; viaticoCategoria = 473800; break;
            default:
                sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; sumaNoRemunerativaCategoria = 0; break;
        }
    } else {
        // Anexo no reconocido
        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; sumaNoRemunerativaCategoria = 0;
        return;
    }

    // Mostrar valores base
    sueldoBasico.value = formatCurrency(sueldoCategoria);
    presentismo.value = formatCurrency(presentismoCategoria);
    viatico.value = formatCurrency(viaticoCategoria);
    
    // Muestra la suma no remunerativa (0 en Oct/Nov, 25000 en Dic)
    const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
    if (adicionalNoRemunerativo) adicionalNoRemunerativo.value = formatCurrency(sumaNoRemunerativaCategoria);


    // Cálculos
    const antiguedadValue = parseFloat(antiguedad.value) || 0;
    const sueldoAntiguedad = sueldoCategoria * (antiguedadValue / 100);

    const horasFeriadoValue = parseFloat(horasFeriado.value) || 0;
    const sueldoFeriado = ((sueldoCategoria + presentismoCategoria) / 200) * horasFeriadoValue;

    const horasNocturnasValue = parseFloat(horasNocturnas.value) || 0;
    const sueldoNocturno = ((sueldoCategoria + sueldoAntiguedad) * 0.1 / 100) * horasNocturnasValue;

    const horasal50Value = parseFloat(horasal50.value) || 0;
    const valorHoraNormal = (sueldoCategoria + presentismoCategoria + sueldoAntiguedad) / 200;
    const sueldoal50 = (valorHoraNormal * 1.5) * horasal50Value;

    const horasal100Value = parseFloat(horasal100.value) || 0;
    const sueldoal100 = (valorHoraNormal * 2) * horasal100Value;

    // Sueldo bruto (Siempre incluye la suma no remunerativa, que es 0 en Oct/Nov)
    const sueldoBrutoValue = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria + viaticoCategoria + sumaNoRemunerativaCategoria;

    // Descuento sobre la base remunerativa (sin viático y sin suma no remunerativa)
    const baseDescuento = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria;
    const descuento = (sindicato === "si" ? 0.20 : 0.17) * baseDescuento;

    // Sueldo neto (bruto - descuento)
    const sueldoNeto = sueldoBrutoValue - descuento;

    // Mostrar resultados
    document.getElementById(`sueldo_bruto${anexo}`).value = formatCurrency(sueldoBrutoValue);
    document.getElementById(`descuento${anexo}`).value = formatCurrency(descuento);
    document.getElementById(`sueldo_neto${anexo}`).value = formatCurrency(sueldoNeto);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(amount);
}

// Event listeners para cálculo automático (solo '27', '28', '29')
['27', '28', '29'].forEach(anexo => {
    const categoriaSelect = document.getElementById(`categoria${anexo}`);
    if (categoriaSelect) {
        categoriaSelect.addEventListener("change", () => calcularSueldo(anexo));
        // Recalcular cuando se modifican los inputs que afectan el cálculo
        const inputsToRecalculate = [
            `antiguedad${anexo}`, `horas_feriado${anexo}`, `horas_nocturnas${anexo}`,
            `horas_al50${anexo}`, `horas_al100${anexo}`, `sindicato${anexo}`
        ];
        inputsToRecalculate.forEach(id => {
            const inputElement = document.getElementById(id);
            if (inputElement) {
                inputElement.addEventListener("change", () => calcularSueldo(anexo));
                // Para inputs numéricos, se usa el evento 'input' para cálculos en tiempo real
                if (inputElement.type === 'number') {
                    inputElement.addEventListener("input", () => calcularSueldo(anexo));
                }
            }
        });
    }
});

// Calcular inicialmente para el anexo 27 (Octubre)
calcularSueldo('27');
