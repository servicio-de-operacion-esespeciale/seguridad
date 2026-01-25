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

function calcularSueldo(mes) {
    const categoria = document.getElementById(`categoria${mes}`).value;
    const sueldoBasico = document.getElementById(`sueldo_basico${mes}`);
    const antiguedad = document.getElementById(`antiguedad${mes}`);
    const presentismo = document.getElementById(`presentismo${mes}`);
    const horasFeriado = document.getElementById(`horas_feriado${mes}`);
    const horasNocturnas = document.getElementById(`horas_nocturnas${mes}`);
    const viatico = document.getElementById(`viatico${mes}`);
    const horasal50 = document.getElementById(`horas_al50${mes}`);
    const horasal100 = document.getElementById(`horas_al100${mes}`);
    const sindicato = document.getElementById(`sindicato${mes}`).value;

    let sueldoCategoria, presentismoCategoria, viaticoCategoria;
    let sumaNoRemunerativaCategoria = 0;

    // Configuración de valores según la imagen (Enero a Junio 2026)
    const escala = {
        "Enero": { viatico: 473800, noRem: 10000, 
            vg: 867200, vb: 923700, adm: 949700, vp: 978900, cap: 867200, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 },
        "Febrero": { viatico: 473800, noRem: 25000, 
            vg: 876000, vb: 933600, adm: 960200, vp: 989900, cap: 876000, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 },
        "Marzo": { viatico: 473800, noRem: 25000, 
            vg: 884800, vb: 942900, adm: 969700, vp: 999800, cap: 884800, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 },
        "Abril": { viatico: 480500, noRem: 25000, 
            vg: 893650, vb: 952400, adm: 979500, vp: 1010300, cap: 893650, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 },
        "Mayo": { viatico: 487000, noRem: 30000, 
            vg: 902600, vb: 962300, adm: 989800, vp: 1020600, cap: 902600, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 },
        "Junio": { viatico: 498000, noRem: 70000, 
            vg: 911650, vb: 974100, adm: 1003000, vp: 1035200, cap: 911650, pres_vg: 165000, pres_alt: 178900, pres_adm: 186100, pres_vp: 193100 }
    };

    const data = escala[mes];
    if (!data) return;

    viaticoCategoria = data.viatico;
    sumaNoRemunerativaCategoria = data.noRem;

    switch (categoria) {
        case "vigilador_general":
        case "control_admision":
            sueldoCategoria = data.vg; presentismoCategoria = data.pres_vg; break;
        case "vigilador_bombero":
        case "verificacion_eventos":
        case "operador_monitoreo":
            sueldoCategoria = data.vb; presentismoCategoria = data.pres_alt; break;
        case "administrativo":
        case "guia_tecnico":
            sueldoCategoria = data.adm; presentismoCategoria = data.pres_adm; break;
        case "vigilador_principal":
        case "instalador_seguridad":
            sueldoCategoria = data.vp; presentismoCategoria = data.pres_vp; break;
        default:
            sueldoCategoria = 0; presentismoCategoria = 0; break;
    }

    // Mostrar valores base
    sueldoBasico.value = formatCurrency(sueldoCategoria);
    presentismo.value = formatCurrency(presentismoCategoria);
    viatico.value = formatCurrency(viaticoCategoria);
    
    const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${mes}`);
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

    // Sueldo bruto
    const sueldoBrutoValue = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria + viaticoCategoria + sumaNoRemunerativaCategoria;

    // Descuento sobre base remunerativa
    const baseDescuento = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria;
    const descuento = (sindicato === "si" ? 0.20 : 0.17) * baseDescuento;

    const sueldoNeto = sueldoBrutoValue - descuento;

    // Mostrar resultados
    document.getElementById(`sueldo_bruto${mes}`).value = formatCurrency(sueldoBrutoValue);
    document.getElementById(`descuento${mes}`).value = formatCurrency(descuento);
    document.getElementById(`sueldo_neto${mes}`).value = formatCurrency(sueldoNeto);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(amount);
}

// Event listeners para cálculo automático
['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].forEach(mes => {
    const container = document.getElementById(mes.toLowerCase());
    if (container) {
        const inputs = container.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (input.id.includes(mes)) {
                input.addEventListener(input.tagName === 'SELECT' ? "change" : "input", () => calcularSueldo(mes));
            }
        });
    }
});

