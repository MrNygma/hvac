
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function () {
        sidebar.classList.add('active');
        hamburger.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
    });


    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactButtons = document.querySelectorAll('.botonContactanos, .botonContacto');

    contactButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#contactanos').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});