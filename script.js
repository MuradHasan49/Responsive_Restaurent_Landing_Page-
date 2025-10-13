
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
  });

// number

document.addEventListener('DOMContentLoaded', function() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200; 
            
            function animateCounter(counter) {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(() => animateCounter(counter), 1);
                } else {

                    if (target >= 1000) {
                        counter.innerText = target.toLocaleString();
                    } else {
                        counter.innerText = target;
                    }
                }
            }
            

            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkScroll() {
                counters.forEach(counter => {
                    if (isInViewport(counter) && counter.innerText === '0') {
                        animateCounter(counter);
                    }
                });
            }
            
            checkScroll();
            
            window.addEventListener('scroll', checkScroll);
        });