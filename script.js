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
    if (navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive"); // Remove the responsive class
    } else {
        navbar.classList.add("responsive"); // Add the responsive class
    }
}

// Document Ready
document.addEventListener("DOMContentLoaded", function() {
    // Select the stats section and statistic elements
    const statsSection = document.getElementById('stats');
    const aiStatElement = document.getElementById('ai-stat');
    const sweStatElement = document.getElementById('swe-stat');
    const devStatElement = document.getElementById('dev-stat');

    // Define your actual statistics here
    const aiStat = 105;
    const sweStat = 78;
    const devStat = 92;

    // Function to animate counting up to the actual statistics
    function countUpStatistics() {
        // Define the duration and interval for counting animation
        const duration = 500; // in milliseconds
        const interval = 10; // update interval in milliseconds

        // Function to update the text content with counting animation
        function animateValue(element, start, end, duration) {
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
                animateValue(aiStatElement, 0, aiStat, duration);
                animateValue(sweStatElement, 0, sweStat, duration);
                animateValue(devStatElement, 0, devStat, duration);
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    }

    // Helper function to check if an element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Start counting up statistics when the section is scrolled into view
    countUpStatistics();
});
