// Escala Salarial Oficial CCT 507/07 - CAESI / UPSRA (Julio - Diciembre 2026)
const escala2026 = {
    "Julio": {
        viatico: 505500,
        noRem: 20000,
        basicos: {
            vg: 1001300, vb: 1065500, adm: 1095000, vp: 1128000,
            ve: 1065500, op: 1065500, gt: 1095000, inst: 1128000, cap: 1001300
        }
    },
    "Agosto": {
        viatico: 514500,
        noRem: 30000,
        basicos: {
            vg: 1020300, vb: 1086200, adm: 1116600, vp: 1150500,
            ve: 1086200, op: 1086200, gt: 1116600, inst: 1150500, cap: 1020300
        }
    },
    "Septiembre": {
        viatico: 524000,
        noRem: 50000,
        basicos: {
            vg: 1037600, vb: 1105700, adm: 1137100, vp: 1172100,
            ve: 1105700, op: 1105700, gt: 1137100, inst: 1172100, cap: 1037600
        }
    },
    "Octubre": {
        viatico: 534000,
        noRem: 60000,
        basicos: {
            vg: 1053200, vb: 1123000, adm: 1155100, vp: 1191000,
            ve: 1123000, op: 1123000, gt: 1155100, inst: 1191000, cap: 1053200
        }
    },
    "Noviembre": {
        viatico: 545000,
        noRem: 70000,
        basicos: {
            vg: 1069000, vb: 1140500, adm: 1173400, vp: 1210200,
            ve: 1140500, op: 1140500, gt: 1173400, inst: 1210200, cap: 1069000
        }
    },
    "Diciembre": {
        viatico: 545000,
        noRem: 120000,
        basicos: {
            vg: 1085000, vb: 1159500, adm: 1194000, vp: 1232300,
            ve: 1159500, op: 1159500, gt: 1193900, inst: 1232300, cap: 1085000
        }
    }
};

// Presentismo fijo por categoría
const presentismoFijo = {
    vg: 180000,
    cap: 180000,
    vb: 195100,
    ve: 195100,
    op: 195100,
    adm: 203000,
    gt: 203000,
    vp: 210700,
    inst: 210700
};

// Mensajes del Asistente
const dialogosVigilador = {
    1: "¡Hola, compa! 👋 Elige el mes a liquidar y tu categoría laboral.",
    2: "Excelente. Indicame cuántos años de antigüedad tenés y tu opción de descuento.",
    3: "Entendido. ¿Hiciste horas nocturnas o feriados trabajados en este período?",
    4: "¡Casi listo! Si tenés horas extras al 50% o 100%, ingresalas a continuación.",
    5: "¡Aquí está tu cálculo de sueldo final!"
};

function nextStep(stepNumber) {
    document.querySelectorAll('.chat-step').forEach(step => step.classList.remove('active'));

    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) currentStep.classList.add('active');

    const speechBubble = document.getElementById('speechBubble');
    if (speechBubble) {
        speechBubble.style.opacity = '0';
        setTimeout(() => {
            speechBubble.innerText = dialogosVigilador[stepNumber];
            speechBubble.style.opacity = '1';
        }, 150);
    }

    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${(stepNumber / 5) * 100}%`;
    }
}

function procesarCalculo() {
    const mes = document.getElementById('mes').value;
    const catInput = document.getElementById('categoria').value;
    const antiguedadVal = parseFloat(document.getElementById('antiguedad').value) || 0;
    const sindicatoVal = document.getElementById('sindicato').value;
    const horasNocturnasVal = parseFloat(document.getElementById('horas_nocturnas').value) || 0;
    const horasFeriadoVal = parseFloat(document.getElementById('horas_feriado').value) || 0;
    const horasal50Val = parseFloat(document.getElementById('horas_al50').value) || 0;
    const horasal100Val = parseFloat(document.getElementById('horas_al100').value) || 0;

    const periodo = escala2026[mes];
    if (!periodo) return;

    // Mapeo de categorías a claves internas
    const catMap = {
        "vigilador_general": "vg",
        "control_admision": "cap",
        "vigilador_bombero": "vb",
        "verificacion_eventos": "ve",
        "operador_monitoreo": "op",
        "administrativo": "adm",
        "guia_tecnico": "gt",
        "vigilador_principal": "vp",
        "instalador_seguridad": "inst"
    };

    const key = catMap[catInput] || "vg";

    const sueldoBasico = periodo.basicos[key];
    const presentismo = presentismoFijo[key];
    const viatico = periodo.viatico;
    const sumaNoRemunerativa = periodo.noRem;

    // Cálculos variables
    const sueldoAntiguedad = sueldoBasico * (antiguedadVal / 100);
    const sueldoFeriado = ((sueldoBasico + presentismo) / 200) * horasFeriadoVal;
    const sueldoNocturno = ((sueldoBasico + sueldoAntiguedad) * 0.10 / 100) * horasNocturnasVal;

    const valorHoraNormal = (sueldoBasico + presentismo + sueldoAntiguedad) / 200;
    const sueldoal50 = (valorHoraNormal * 1.5) * horasal50Val;
    const sueldoal100 = (valorHoraNormal * 2.0) * horasal100Val;

    // Totales Brutos
    const sueldoBruto = sueldoBasico + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismo + viatico + sumaNoRemunerativa;
    const baseRemunerativa = sueldoBasico + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismo;

    // Descuentos:
    // 1. Aportes de Ley Obligatorios (17% sobre Base Remunerativa)
    const descuentoLey = baseRemunerativa * 0.17;
    let descuentoSindicatoOAporte = 0;

    if (sindicatoVal === "afiliado" || sindicatoVal === "si") {
        // 20% Total = 17% Ley + 3% Cuota Sindical
        descuentoSindicatoOAporte = baseRemunerativa * 0.03;
    } else if (sindicatoVal === "no_afiliado" || sindicatoVal === "no") {
        // 19% Aprox = 17% Ley + 2% Aporte Solidario sobre Sueldo Básico
        descuentoSindicatoOAporte = sueldoBasico * 0.02;
    } else if (sindicatoVal === "solo_ley") {
        // 17% Total = Solo Aportes de Ley
        descuentoSindicatoOAporte = 0;
    }

    const descuentoTotal = descuentoLey + descuentoSindicatoOAporte;
    const sueldoNeto = sueldoBruto - descuentoTotal;

    // Renderizar en Pantalla
    document.getElementById('res_bruto').innerText = formatCurrency(sueldoBruto);
    document.getElementById('res_descuento').innerText = "-" + formatCurrency(descuentoTotal);
    document.getElementById('res_neto').innerText = formatCurrency(sueldoNeto);

    document.getElementById('res_basico').innerText = formatCurrency(sueldoBasico);
    document.getElementById('res_presentismo').innerText = formatCurrency(presentismo);
    document.getElementById('res_viatico').innerText = formatCurrency(viatico);
    document.getElementById('res_norem').innerText = formatCurrency(sumaNoRemunerativa);

    nextStep(5);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(amount);
}

function reiniciar() {
    nextStep(1);
}
