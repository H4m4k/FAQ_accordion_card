const faq = document.querySelectorAll('.list');

faq.forEach( list => list.addEventListener('click', toggle))

let rotate = 0;

function toggle (event) {
    event.target.classList.toggle('addWeight');
    event.target.nextElementSibling.classList.toggle('off');
    
    if(rotate === 0) {
        event.target.children[0].style.rotate = '180deg'; 
        return rotate = 180;
    } 

    event.target.children[0].style.rotate = '0deg'
    return rotate = 0;
}