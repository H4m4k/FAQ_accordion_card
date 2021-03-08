const faq = document.querySelector('.list');

faq.addEventListener('click', toggle);

function toggle (event) {
    event.target.nextElementSibling.classList.toggle('off');
}


