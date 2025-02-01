$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["სახლი", "რემონტი", "დიზაინი", "ავეჯი", "სამზარეულო"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["აგიშენებს სახლს", "გაგირემონტებს სახლს", "დაგილაგებს სახლს", "დაგეხმარება დიზაინის შექმნაში", "დაგიმზადებს ავეჯს", "დაგილაგებს სახლს"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {      
            items: 3,
                nav: false
            }
        }
    });
});
/* es zeda racaa igivea rac amis qvevit, ubralod mianc ar mushaobs da ar vici ratom ver vipove amitomac meore unda eweros teams sectioni amis gareshe ver mmushaobs */
$(document).ready(function(){
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});




/* essaa about sectionis scroll downis dros rom gamochneba imis codi, hide and disapear*/
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.servicee, .about ');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.75
        );
    }

    function showSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showSections);
    showSections();
});

/* esaa dassasruli*/

/* about sectionis, fotoesslidis efeqti rom qondes magisaa, yvelass da ara 2s es ki queryselectorAll ze rom davayenet*/
/*const imageContainers = document.querySelectorAll('.image');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    imageContainers.forEach(imageContainer => {
        imageContainer.style.backgroundPositionY = -scrollPosition * 0.1 + 'px'; // Adjust the multiplier for a slower effect
    });
});*/

/* es mainc igivea rac zevit ubralod es daiwera adgan yvela fotoze gavrceldes da ra pirvel or section-ze da imainc iyos henaxuli ase*/
const leftImageContainer = document.querySelector('.column.left .image');
const rightImageContainer = document.querySelector('.column.right .image');

let lastScrollY = 0;
let ticking = false;

function updateBackgroundPosition() {
    if (leftImageContainer) {
        leftImageContainer.style.backgroundPositionY = -lastScrollY * 0.1 + 'px';
    }
    if (rightImageContainer) {
        rightImageContainer.style.backgroundPositionY = -lastScrollY * 0.1 + 'px';
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(updateBackgroundPosition);
        ticking = true;
    }
});

/* es dasasruli*/


/* esaaa page baris project pagze, rom gadavides 1,2,3,4 da ase shedeg */

document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('.page-link');
    let currentPage = 1;

    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page === 'next') {
                showPage(currentPage + 1);
            } else {
                showPage(parseInt(page));
            }
        });
    });

    function showPage(page) {
        const allPages = document.querySelectorAll('.photo-page');
        const totalPages = allPages.length;
        const photoGallery = document.querySelector('.photo-gallery');

        if (page > totalPages) {
            page = 1; // Wrap around to the first page
        }

        allPages.forEach(pageDiv => {
            pageDiv.classList.remove('slide-up', 'visible');
            pageDiv.style.display = 'none';
        });

        const nextPage = document.querySelector(`.page${page}`);
        if (nextPage) {
            nextPage.classList.add('slide-up');
            photoGallery.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to top of the gallery
            setTimeout(() => {
                nextPage.classList.add('visible');
                nextPage.style.display = 'block';
                currentPage = page;
            }, 300); // This timeout should match the CSS transition duration
        }
    }

    // Show the first page by default
    showPage(1);
});

/* dasasruli*/

/* esaa isev project sectionshi, rom is fotoebi gamqrali iyos da nel-nela gamoCndnen */
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');

    const revealItems = (items) => {
        let delay = 500; // Initial delay before starting the reveal (in milliseconds)
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, delay);
            delay += 250; // Delay in milliseconds (0.25 seconds between each item)
        });
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const firstItemTop = photoItems[0].getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > firstItemTop) {
            revealItems(photoItems);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const paginationLinks = document.querySelectorAll('.page-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            const currentPage = document.querySelector('.photo-page.visible');
            const newPage = document.querySelector(`.photo-page.page${page}`);

            if (currentPage) {
                currentPage.classList.remove('visible');
                setTimeout(() => {
                    currentPage.style.display = 'none';
                }, 300);
            }

            if (newPage) {
                newPage.style.display = 'block';
                setTimeout(() => {
                    newPage.classList.add('visible');
                    const newPhotoItems = newPage.querySelectorAll('.photo-item');
                    newPhotoItems.forEach(item => item.classList.remove('visible')); // Reset visibility
                    revealItems(newPhotoItems);
                }, 10); // Allow the browser to process the display change before adding the class
            }
        });
    });

    // Initial reveal for the first page on load
    revealItems(document.querySelectorAll('.photo-page.page1 .photo-item'));
});



/* dasasruli*/


document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add("active");
            }
        });
    };

    // Trigger on scroll
    window.addEventListener("scroll", revealOnScroll);

    // Initial trigger
    revealOnScroll();
});



       



