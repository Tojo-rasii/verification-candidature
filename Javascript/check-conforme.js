document.querySelectorAll('.status-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        // Trouve la ligne parente `.tr` de la checkbox modifiée
        const parentRow = this.closest('.tr');

        if (parentRow) {
            // Synchronise uniquement les checkbox enfants de cette ligne
            const checkboxesInRow = parentRow.querySelectorAll('.status-checkbox');
            checkboxesInRow.forEach(cb => {
                cb.checked = this.checked;
            });

            // Met à jour le texte associé dans cette ligne
            const statusText = parentRow.querySelector('.status-text');
            if (statusText) {
                if (this.checked) {
                    statusText.textContent = "Conforme";
                    statusText.className = "status-text confirmer-true";
                } else {
                    statusText.textContent = "Non conforme";
                    statusText.className = "status-text confirmer-false";
                }
            }
        }
    });
});

document.querySelectorAll('.i-click-slide-mobile').forEach((toggle) => {
    toggle.addEventListener('click', function () {
        // Trouver tous les éléments avec la classe "hidden-slide-mobile"
        const hiddenElements = this.closest('.tr').querySelectorAll('.hidden-slide-mobile');

        // Basculer la classe active sur l'icône
        this.classList.toggle('active');

        // Basculer l'affichage des éléments "hidden-slide-mobile"
        hiddenElements.forEach((element) => {
            element.classList.toggle('show'); // Ajoute ou enlève une classe pour contrôler l'affichage
        });
    });
});
