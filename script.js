const bear = document.getElementById("bear");
const overlay = document.createElement('div');
const footer = document.querySelector('.footercontainer');
const logo = document.getElementById('logo');




overlay.classList.add('overlay');
document.body.appendChild(overlay);

bear.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Set the background color to black
    document.querySelectorAll('.container, .footercontainer').forEach(element => {
            element.style.opacity = '0';
    });
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    setTimeout(function() {
        window.location.href = 'site.html';
    }, 3000)

    })
     
bear.addEventListener('mouseover', function() {
    bear.style.transform = 'scale(1.05)'
    //logo.style.transform = 'scale(1.05)'
    bear.classList.toggle('glow')
    //logo.classList.toggle('glow')
})

bear.addEventListener('mouseout', () => {
    bear.style.transform = 'scale(1.0)'
    //logo.style.transform = 'scale(1.0)'
    bear.classList.toggle('glow')
    //logo.classList.toggle('glow')
})

overlay.addEventListener('click', () => {
    document.body.style.backgroundColor = ''; // Reset the background color
    document.querySelectorAll('.container, .footercontainer').forEach(element => {
        element.style.opacity = '1';
    })
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Reset the overlay
});