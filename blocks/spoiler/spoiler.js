let spoilerCheckbox = document.querySelector('.spoiler__checkbox');
let spoiler = document.querySelector('.spoiler__limiter');
spoilerCheckbox.addEventListener('change', function() {
    spoiler.classList.toggle('spoiler__limiter--open')
})