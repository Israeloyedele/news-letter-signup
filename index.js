const form = document.querySelector('#form');
const errorText = document.querySelector('.error-text');
const input = document.querySelector('#email');


form.addEventListener('submit', (e) => {
   if (input.value.trim().match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/i)) {
        input.classList.remove('error');
         errorText.classList.remove('error');
         return true;
   } else {
        e.preventDefault();
        input.classList.add('error');
        errorText.classList.add('error');
   }
});