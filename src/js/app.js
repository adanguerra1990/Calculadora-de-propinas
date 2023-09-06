window.onload = () => {
    const facturaInput = document.getElementById('factura');
    const porcentajeButtons = document.querySelector('.container-btn');
    const customPorcentajeInput = document.querySelector('.input-porcentaje');
    const personasInput = document.getElementById('personas');
    const propinaElement = document.getElementById('propina');
    const propinaTotalElement = document.getElementById('propina-total');
    const btnReset = document.getElementById('btn-reset')

    personasInput.addEventListener('input', campoCustomPoncentaje)
    customPorcentajeInput.addEventListener('input', campoCustomPoncentaje);
    btnReset.addEventListener('click', limpiarCampos);
    porcentajeButtons.addEventListener('click', btnCalculoPorncentaje)


    function campoCustomPoncentaje() {
        const montoFactura = parseFloat(facturaInput.value);
        const porcentaje = parseFloat(customPorcentajeInput.value);
        const personas = parseFloat(personasInput.value);

        if (isNaN(montoFactura) || isNaN(porcentaje) || isNaN(personas)) {
            btnReset.disabled = true;
            propinaElement.textContent = '0.00'
            propinaTotalElement.textContent = '0.00'
        } else {
            btnReset.disabled = false;
            const propinaPorPersona = (montoFactura / personas) * (porcentaje / 100);
            const propinaTotal = (montoFactura / personas) + propinaPorPersona;

            propinaElement.textContent = propinaPorPersona.toFixed(2);
            propinaTotalElement.textContent = propinaTotal.toFixed(2);
        }
    }

    function btnCalculoPorncentaje(event) {
        const clickBtn = event.target;
        if (clickBtn.classList.contains('btn-porcentaje')) {
            const valorPorcentaje = parseFloat(clickBtn.value);
            const montoFactura = parseFloat(facturaInput.value);
            const personas = parseInt(personasInput.value);

            if (!isNaN(montoFactura) && !isNaN(personas) && !isNaN(valorPorcentaje)) {
                btnReset.disabled = false;

                const propinaPorPersona = (montoFactura / personas) * (valorPorcentaje / 100);
                const propinaTotal = (montoFactura / personas) + propinaPorPersona;

                propinaElement.textContent = propinaPorPersona.toFixed(2);
                propinaTotalElement.textContent = propinaTotal.toFixed(2);

                const btnActive = document.querySelectorAll('.btn-porcentaje.active');
                btnActive.forEach(btn => btn.classList.remove('active'))

                clickBtn.classList.add('active')
            } else {
                btnReset.disabled = true
            }
        }
    }

    function limpiarCampos() {
        const activeButtons = document.querySelectorAll('.btn-porcentaje.active')

        activeButtons.forEach(btn => btn.classList.remove('active'));
        
        facturaInput.value = '';
        personasInput.value = '';
        customPorcentajeInput.value = '';
        propinaElement.textContent = '$0.00';
        propinaTotalElement.textContent = '$0.00';
        btnReset.disabled = true;
    }
}
