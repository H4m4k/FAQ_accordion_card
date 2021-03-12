const faq_List = document.querySelectorAll('.list');

faq_List.forEach( list => list.addEventListener('click', toggle))

function toggle (event) {
    let rotate = event.target.children[0].style.transform || 'rotate(0deg)';

    event.target.classList.toggle('addWeight');
    // event.target.nextElementSibling.classList.toggle('off');
    
    if(rotate === 'rotate(0deg)') return event.target.children[0].style.transform = 'rotate(180deg)'; 
    return event.target.children[0].style.transform = 'rotate(0deg)'
}