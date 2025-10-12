
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
  });

// number

document.addEventListener('DOMContentLoaded', function() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200; // The lower the slower
            
            function animateCounter(counter) {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(() => animateCounter(counter), 1);
                } else {
                    // Format numbers with commas for large values
                    if (target >= 1000) {
                        counter.innerText = target.toLocaleString();
                    } else {
                        counter.innerText = target;
                    }
                }
            }
            
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Start animation when element comes into view
            function checkScroll() {
                counters.forEach(counter => {
                    if (isInViewport(counter) && counter.innerText === '0') {
                        animateCounter(counter);
                    }
                });
            }
            
            // Initial check
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
        });