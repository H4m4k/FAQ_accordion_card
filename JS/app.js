const faq = document.querySelectorAll('.list');

faq.forEach( list => list.addEventListener('click', toggle))

function toggle (event) {
    let rotate = event.target.children[0].style.rotate || '0deg';

    event.target.classList.toggle('addWeight');
    // event.target.nextElementSibling.classList.toggle('off');
    
    if(rotate === '0deg') return event.target.children[0].style.rotate = '180deg'; 
    return event.target.children[0].style.rotate = '0deg'
}