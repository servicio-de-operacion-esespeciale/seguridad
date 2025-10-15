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
            event.target.classList.add('active');
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

            let sueldoCategoria, presentismoCategoria, viaticoCategoria, adicionalNoRemunerativoCategoria = 0;

            // Valores según cada anexo corregidos según la tabla
            if (anexo === '24') { // Jul-25
                const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 745030; presentismoCategoria = 153600; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 795690; presentismoCategoria = 166210; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "administrativo":
                        sueldoCategoria = 820120; presentismoCategoria = 172250; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "vigilador_principal":
                        sueldoCategoria = 846230; presentismoCategoria = 178280; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 795690; presentismoCategoria = 166210; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 795690; presentismoCategoria = 166210; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "guia_tecnico":
                        sueldoCategoria = 820120; presentismoCategoria = 172250; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 846230; presentismoCategoria = 178280; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    case "control_admision":
                        sueldoCategoria = 745030; presentismoCategoria = 153600; viaticoCategoria = 435580; adicionalNoRemunerativoCategoria = 25000; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; adicionalNoRemunerativoCategoria = 0; break;
                }
                adicionalNoRemunerativo.value = formatCurrency(adicionalNoRemunerativoCategoria);
            } else if (anexo === '25') { // Ago-25
                const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 751735; presentismoCategoria = 153600; viaticoCategoria = 443215; adicionalNoRemunerativoCategoria = 50000; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 804220; presentismoCategoria = 166210; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "administrativo":
                        sueldoCategoria = 829500; presentismoCategoria = 172250; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "vigilador_principal":
                        sueldoCategoria = 856570; presentismoCategoria = 178280; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 804220; presentismoCategoria = 166210; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 804220; presentismoCategoria = 166210; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "guia_tecnico":
                        sueldoCategoria = 829500; presentismoCategoria = 172250; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 856570; presentismoCategoria = 178280; viaticoCategoria = 443216; adicionalNoRemunerativoCategoria = 50000; break;
                    case "control_admision":
                        sueldoCategoria = 751735; presentismoCategoria = 153600; viaticoCategoria = 443215; adicionalNoRemunerativoCategoria = 50000; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; adicionalNoRemunerativoCategoria = 0; break;
                }
                adicionalNoRemunerativo.value = formatCurrency(adicionalNoRemunerativoCategoria);
            } else if (anexo === '26') { // Sept-25
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 808600; presentismoCategoria = 153600; viaticoCategoria = 448800; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 861600; presentismoCategoria = 166210; viaticoCategoria = 448800; break;
                    case "administrativo":
                        sueldoCategoria = 886500; presentismoCategoria = 172250; viaticoCategoria = 448800; break;
                    case "vigilador_principal":
                        sueldoCategoria = 914100; presentismoCategoria = 178280; viaticoCategoria = 448800; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 861600; presentismoCategoria = 166210; viaticoCategoria = 448800; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 861600; presentismoCategoria = 166210; viaticoCategoria = 448800; break;
                    case "guia_tecnico":
                        sueldoCategoria = 886500; presentismoCategoria = 172250; viaticoCategoria = 448800; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 914100; presentismoCategoria = 178280; viaticoCategoria = 448800; break;
                    case "control_admision":
                        sueldoCategoria = 808600; presentismoCategoria = 153600; viaticoCategoria = 448800; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; break;
                }
            }

            // Mostrar valores base
            sueldoBasico.value = formatCurrency(sueldoCategoria);
            presentismo.value = formatCurrency(presentismoCategoria);
            viatico.value = formatCurrency(viaticoCategoria);

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

            // Sueldo bruto (CORREGIDO: incluye adicional no remunerativo)
            let sueldoBrutoValue;
            if (anexo === '26') {
                // Sept-25: sin adicional no remunerativo
                sueldoBrutoValue = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria + viaticoCategoria;
            } else {
                // Jul-25 y Ago-25: con adicional no remunerativo incluido en bruto
                sueldoBrutoValue = sueldoCategoria + sueldoAntiguedad + sueldoFeriado + sueldoNocturno + sueldoal50 + sueldoal100 + presentismoCategoria + viaticoCategoria + adicionalNoRemunerativoCategoria;
            }

            // Descuento sobre sueldo bruto (sin viático y sin adicional no remunerativo)
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

        // Event listeners para cálculo automático
        ['24', '25', '26'].forEach(anexo => {
            document.getElementById(`categoria${anexo}`).addEventListener("change", () => calcularSueldo(anexo));
        });
        
        // Calcular inicialmente para el anexo 24
        calcularSueldo('24');
// Valores según cada anexo corregidos según la tabla
            if (anexo === '24') { // Oct-25
                const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 817500; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "administrativo":
                        sueldoCategoria = 896300; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "vigilador_principal":
                        sueldoCategoria = 924100; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 871600; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "guia_tecnico":
                        sueldoCategoria = 896300; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 924100; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "control_admision":
                        sueldoCategoria = 817500; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; adicionalNoRemunerativoCategoria = 0; break;
                }
                adicionalNoRemunerativo.value = formatCurrency(adicionalNoRemunerativoCategoria);
            } else if (anexo === '25') { // Nov-25
                const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 825600; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "administrativo":
                        sueldoCategoria = 905000; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "vigilador_principal":
                        sueldoCategoria = 933000; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 880000; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "guia_tecnico":
                        sueldoCategoria = 905000; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 933000; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    case "control_admision":
                        sueldoCategoria = 825600; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 0; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; adicionalNoRemunerativoCategoria = 0; break;
                }
                adicionalNoRemunerativo.value = formatCurrency(adicionalNoRemunerativoCategoria);
            } else if (anexo === '26') { // Dic-25
                const adicionalNoRemunerativo = document.getElementById(`adicional_no_remunerativo${anexo}`);
                switch (categoria) {
                    case "vigilador_general":
                        sueldoCategoria = 833600; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "vigilador_bombero":
                        sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "administrativo":
                        sueldoCategoria = 915200; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "vigilador_principal":
                        sueldoCategoria = 944000; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "verificacion_eventos":
                        sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "operador_monitoreo":
                        sueldoCategoria = 889500; presentismoCategoria = 173000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "guia_tecnico":
                        sueldoCategoria = 915200; presentismoCategoria = 180000; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "instalador_seguridad":
                        sueldoCategoria = 944000; presentismoCategoria = 186800; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    case "control_admision":
                        sueldoCategoria = 833600; presentismoCategoria = 159600; viaticoCategoria = 473800; adicionalNoRemunerativoCategoria = 25000; break;
                    default:
                        sueldoCategoria = 0; presentismoCategoria = 0; viaticoCategoria = 0; adicionalNoRemunerativoCategoria = 0; break;
                }
                adicionalNoRemunerativo.value = formatCurrency(adicionalNoRemunerativoCategoria);
            }
