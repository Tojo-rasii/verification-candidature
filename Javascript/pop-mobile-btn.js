const popbtnic = document.getElementById('my-pop-btn-ic');
const popbtnicClose = document.querySelector('.close-ic-article');
const poparticleic = document.getElementById('my-pop-ic');

popbtnic.addEventListener('click', function () {
    poparticleic.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Désactiver le scroll du body
});

popbtnicClose.addEventListener('click', function () {
    poparticleic.style.display = 'none';
    document.body.style.overflow = ''; // Réactiver le scroll du body
});
