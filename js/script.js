// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


// scroll section active link
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    //remove toggle icon  and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// scrool reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:1000,
    delay:200
 });

 ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-container,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });



 //typed js
 var typed = new Typed('.multiple-text',{
    strings: ['Web Devolper','Graphic Designer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
 })



        const imageContainer = document.getElementById('image-container');
        const imageElement = document.getElementById('images');

        // Array of image URLs to alternate
        const imageUrls = ['images/home.jpg', 'images/img2.jpg', 'images/img3.jpg','images/img5.jpg','images/img1.jpg'];

        // Initialize index to 0 (for the first image)
        let currentIndex = 0;

        // Function to toggle between images
        function toggleImages() {
            // Increment the index and wrap around to the beginning if necessary
            currentIndex = (currentIndex + 1) % imageUrls.length;

            // Set the src attribute of the image element to the next image URL
            imageElement.src = imageUrls[currentIndex];
        }

        setInterval(toggleImages, 1500);