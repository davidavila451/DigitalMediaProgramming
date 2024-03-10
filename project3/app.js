const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
        circle.style.backgroundColor = "red";
        circle.innerText = "AAAHHHHH!"
    }
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
        circle.style.backgroundColor = "slateblue";
        circle.innerText = "oh..."
    }
});