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
    
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    
    const cursor = document.querySelector(".cursor");
    
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });
    
    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
    
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
    
      cursor.style.top = x;
      cursor.style.left = y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
    
        circle.style.scale = (circles.length - index) / circles.length;
    
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
    
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    
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
        strings: ["Software Engineer", "Web Developer", "Web Designer" , "Digital Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Web Developer", "Web Designer" , "Digital Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
// Theme Switcher (Light/Dark Mode)
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher (Light/Dark Mode)
    const themeSwitch = document.getElementById('theme-switcher');

    // Load theme from localStorage if set
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    // Toggle theme on button click
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Save theme preference to localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
