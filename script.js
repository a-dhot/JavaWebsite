document.addEventListener('DOMContentLoaded', () => {
    const hardwareForm = document.getElementById('hardware-form');
    const totalCostElement = document.getElementById('total-cost');

    const updateTotalCost = () => {
        let totalCost = 0;
        const components = hardwareForm.elements;
        for (let i = 0; i < components.length; i++) {
            if (components[i].tagName === 'SELECT') {
                totalCost += parseInt(components[i].value);
            }
        }
        totalCostElement.textContent = totalCost;
    };

    hardwareForm.addEventListener('change', updateTotalCost);
});