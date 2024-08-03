// Variables for scroll position and elements
let prevScrollpos = window.pageYOffset;
let header = document.getElementById("navbar");
let footer = document.querySelector("footer");

// Scroll event handler
window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        header.style.top = "0";
        footer.style.bottom = "0"; // Adjust based on your footer height
    } else {
        header.style.top = "-60px"; // Adjust based on your header height
        footer.style.bottom = "-100px"; // Adjust based on your footer height
    }
    prevScrollpos = currentScrollpos;
};

// Toggle Navbar function
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("responsive"); // Toggle the responsive class
}

// Document Ready
document.addEventListener("DOMContentLoaded", function() {
    // Select the stats section and statistic elements
    const statsSection = document.getElementById('stats');
    const aiStatElement = document.getElementById('ai-stat');
    const sweStatElement = document.getElementById('swe-stat');
    const devStatElement = document.getElementById('dev-stat');

    // Define your actual statistics here
    const aiStat = 37;
    const sweStat = 25;
    const devStat = 12;

    // Function to animate counting up to the actual statistics
    function animateValue(element, start, end, duration) {
        const interval = 10; // update interval in milliseconds
        let current = start;
        const increment = (end - start) / (duration / interval);
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.round(current);
            if (current >= end) {
                element.textContent = end;
                clearInterval(timer);
            }
        }, interval);
    }

    // Trigger counting animation when section is scrolled into view
    function handleScroll() {
        if (isElementInViewport(statsSection)) {
            // Stop listening to scroll events after the animation has been triggered
            window.removeEventListener('scroll', handleScroll);
            animateValue(aiStatElement, 0, aiStat, 500);
            animateValue(sweStatElement, 0, sweStat, 500);
            animateValue(devStatElement, 0, devStat, 500);
        }
    }

    // Helper function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Start counting up statistics when the section is scrolled into view
    window.addEventListener('scroll', handleScroll);
});
