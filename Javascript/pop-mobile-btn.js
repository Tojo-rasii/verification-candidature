const popbtnic = document.getElementById('my-pop-btn-ic');
const popbtnicClose = document.querySelector('.close-ic-article');
const poparticleic = document.getElementById('my-pop-ic');

popbtnic.addEventListener('click', function () {
    // alert('red')

    poparticleic.style.display = 'block';
})
popbtnicClose.addEventListener('click', function () {
    // alert('red')

    poparticleic.style.display = 'none';
})