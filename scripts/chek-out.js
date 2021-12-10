const form = document.getElementById('check-form');

form.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid #229A87';
}, true);

form.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);