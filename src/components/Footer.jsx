import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- ── FOOTER ── -->
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
       <div class="col-lg-3 col-md-6">
  <h4 class="mb-4">Contact Us</h4>

  <div class="contact-info">

    <div class="mb-4">
      <h6 class="fw-bold">Head Office</h6>
      <p class="mb-1">
        198, First Floor, Vasu Arcade,<br>
        Raja Annamalai Road,<br>
        Saibaba Colony, Coimbatore - 641011
      </p>
      <p class="mb-1">
        <i class="fas fa-phone-alt fa-flip-horizontal me-2"></i>
        <a href="tel:+919787700661">+91 97877 00661</a>
      </p>
      <p>
        <i class="fas fa-envelope me-2"></i>
        <a href="mailto:info@theglobalties.com">info@theglobalties.com</a>
      </p>
       <p>
        <i class="fas fa-envelope me-2"></i>
        <a href="mailto:tgthrs@gmail.com"> tgthrs@gmail.com</a>
      </p>
    </div>

   

    
  </div>

  <div class="social-links mt-4">
    <a href="https://www.facebook.com/theglobalties" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.instagram.com/theglobalties/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
    <a href="https://x.com/theglobalties" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
    <a href="https://www.youtube.com/theglobalties" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
  </div>
</div>
        <div class="col-lg-3 col-md-6">
         <div class="contact-info">
      <h6 class="fw-bold">Namakkal Office</h6>
      <p class="mb-1">
        Moorthy Arcade, 2nd Floor, Kottai,<br>
        E Coast Road, Near Navani Lab,<br>
        Namakkal, Tamil Nadu - 637001
      </p>
      <p class="mb-1">
        <strong>Branch Head:</strong> Mr.Deepak
      </p>
      <p class="mb-1">
        <i class="fas fa-phone-alt fa-flip-horizontal me-2"></i>
        <a href="tel:+918903509536">
+91 89035 09536</a>
      </p>
      <p>
        <i class="fas fa-envelope me-2"></i>
        <a href="mailto:tgtnamakkal@gmail.com">
          tgtnamakkal@gmail.com
        </a>
      </p>
    </div>

        </div>
       <div class="col-lg-3 col-md-6">
         <div class="contact-info" class="mb-4">
      <h6 class="fw-bold">Bangalore Office</h6>
      <p class="mb-1">
        The Global Ties, Bangalore, India
      </p>
      <p class="mb-1">
        <strong>Branch Head:</strong> Dharini Padhiar
      </p>
      <p class="mb-1">
        <i class="fas fa-phone-alt fa-flip-horizontal me-2"></i>
        <a href="tel:+919902417339">
+91 99024 17339</a>
      </p>
      <p>
        <i class="fas fa-envelope me-2"></i>
        <a href="mailto:tgtadmissionblr@gmail.com">
          tgtadmissionblr@gmail.com
        </a>
      </p>
    </div>
</div>

<div class="col-lg-3 col-md-6">
  
  <h4>Useful Links</h4>
  <ul class="footer-links">
    <li><a href="study-in-canada">Study in Canada</a></li>
    <li><a href="study-in-new-zealand">Study in New Zealand</a></li>
    <li><a href="study-in-australia">Study in Australia</a></li>
    <li><a href="study-in-germany">Study in Germany</a></li>
    <li><a href="study-in-uk">Study in UK</a></li>
    <li><a href="study-in-dubai">Study in Dubai</a></li>
    <li><a href="study-in-ireland">Study in Ireland</a></li>
  </ul>
  
</div>
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-12 ">
<p class="mb-0 text-white">
    Copyright © 2026 The Global Ties | Designed & Developed By
    <a href="https://mineusinfotech.com/" target="_blank" class="text-white hover-accent text-decoration-none">
       Mine Us Infotech
    </a>
</p>          </div>
          <!-- <div class="col-md-6 text-md-end mt-3 mt-md-0">
            <a href="#" class="text-white text-decoration-none me-3 hover-accent">Privacy Policy</a>
            <a href="#" class="text-white text-decoration-none hover-accent">Terms of Service</a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/919787700661" target="_blank" class="floating-whatsapp" title="Chat with us on WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Scroll to Top Button -->
  <a href="#" class="scroll-top-btn" id="scrollTopBtn" title="Go to top">
    <i class="fas fa-arrow-up"></i>
  </a>

  <!-- Bootstrap 5 JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- AOS Animation JS -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const coursesSwiper = new Swiper(".coursesSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
        }
      });
    });
  </script>
  <!-- Custom JS -->
  <script>
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
      }
    });

    // Counter Animation (Simple implementation)
    const counters = document.querySelectorAll('.counter-num');
    const speed = 200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.innerText.replace('+', '').replace('L', '00000');
        const count = +counter.innerText.replace('+', '').replace('L', '00000');
        // For simplicity in this demo, they are static text. 
        // A full JS implementation would increment them here.
      };
      updateCount();
    });

    // Reel Slider Logic
    document.addEventListener('DOMContentLoaded', function () {
        const reelTrack = document.getElementById('reel-track');
        const reelDots = document.querySelectorAll('#reel-pagination .dot');
        const totalReelSlides = document.querySelectorAll('.reel-slide').length;
        let currentReelSlide = 0;
        let reelSlideInterval;

        function updateReelSlider() {
            if (!reelTrack) return;
            const slideWidth = document.querySelector('.reel-slide').offsetWidth;
            const maxScroll = Math.max(0, reelTrack.scrollWidth - reelTrack.parentElement.offsetWidth);

            let translation = currentReelSlide * slideWidth;
            if (translation > maxScroll) {
                translation = maxScroll;
            }

            reelTrack.style.transform = \`translateX(-\${translation}px)\`;

            reelDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentReelSlide);
            });
        }

        window.moveReelSlide = function (direction) {
            if (!reelTrack) return;
            const slideWidth = document.querySelector('.reel-slide').offsetWidth;
            const maxScroll = Math.max(0, reelTrack.scrollWidth - reelTrack.parentElement.offsetWidth);

            if (direction > 0 && currentReelSlide * slideWidth >= maxScroll) {
                currentReelSlide = 0;
            } else if (direction < 0 && currentReelSlide === 0) {
                currentReelSlide = Math.ceil(maxScroll / slideWidth);
            } else {
                currentReelSlide += direction;
            }

            updateReelSlider();
            resetReelInterval();
        };

        window.goToReelSlide = function (index) {
            currentReelSlide = index;
            updateReelSlider();
            resetReelInterval();
        };

        function resetReelInterval() {
            clearInterval(reelSlideInterval);
            reelSlideInterval = setInterval(() => {
                if(document.querySelector('.reel-slide')) {
                    window.moveReelSlide(1);
                }
            }, 5000);
        }

        if (reelTrack) {
            window.addEventListener('resize', updateReelSlider);
            resetReelInterval();
        }

        // Scroll to Top Logic
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        if (scrollTopBtn) {
            window.addEventListener("scroll", function () {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add("show");
                } else {
                    scrollTopBtn.classList.remove("show");
                }
            });

            scrollTopBtn.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
  </script>
  <script src="mail.js"></script>
` }} />
  );
};

export default Footer;
