document.querySelectorAll('.status-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const row = this.closest('.row-th'); // Trouve la ligne parente
        const statusText = row.querySelector('.status-text'); // Trouve le texte associé
        if (this.checked) {
            statusText.textContent = "Conforme";
            statusText.className = "status-text confirmer-true";
        } else {
            statusText.textContent = "Non conforme";
            statusText.className = "status-text confirmer-false";
        }
    });
});
