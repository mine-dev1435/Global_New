import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
    
    const handleToggleClick = function(e) {
      const toggler = document.querySelector('.navbar-toggler');
      // Only apply custom click behavior if we are in mobile view (toggler is visible)
      if (toggler && window.getComputedStyle(toggler).display !== 'none') {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other open dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== this) {
            const otherMenu = otherToggle.nextElementSibling;
            if (otherMenu && otherMenu.classList.contains('dropdown-menu')) {
              otherMenu.classList.remove('show');
            }
          }
        });

        // Toggle this dropdown
        const menu = this.nextElementSibling;
        if (menu && menu.classList.contains('dropdown-menu')) {
          menu.classList.toggle('show');
        }
      }
    };

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleToggleClick);
    });

    // Handle Header Apply Now button click
    const applyBtns = document.querySelectorAll('.custom-navbar .apply-btn, .apply-btn');
    const handleApplyClick = (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const navbarHeight = 70;
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        sessionStorage.setItem('scrollToContact', 'true');
        navigate('/');
      }
    };

    applyBtns.forEach(btn => {
      btn.addEventListener('click', handleApplyClick);
    });

    // Cleanup
    return () => {
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleToggleClick);
      });
      applyBtns.forEach(btn => {
        btn.removeEventListener('click', handleApplyClick);
      });
    };
  }, [navigate]);

  return (
    <div dangerouslySetInnerHTML={{ __html: `    
    
    <!-- ── HEADER ── -->
    <!-- Header -->
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">

            <a class="navbar-brand" href="/">
                <!-- <img src="/img/logo_img.png" alt="Logo" class="logo-img"> -->
            <img src="/img/logo_img.png" alt="Logo" class="logo-img">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

        <div class="menu-box d-flex align-items-center">

            <ul class="navbar-nav">

                <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/">HOME</a>
                    <!-- <span class="sub-link">OUR WORLD</span> -->
                </li>

                <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/about">ABOUT</a>
                    <!-- <span class="sub-link">GLOBAL TIES</span> -->
                </li>

                <li class="nav-item dropdown text-center position-relative">
        <a class="nav-link main-link dropdown-toggle" href="#" id="studyAbroadDropdown" role="button" aria-expanded="false">
            STUDY ABROAD
        </a>
        <!-- <span class="sub-link d-block">GLOBAL EDUCATION</span> -->

        <div class="dropdown-menu mega-dropdown" aria-labelledby="studyAbroadDropdown">
            <div class="row">
                <div class="col-md-6">
                    <a class="dropdown-item" href="/study-in-canada">Study in Canada</a>
                    <a class="dropdown-item" href="/study-in-new-zealand">Study in New Zealand</a>
                    <a class="dropdown-item" href="/study-in-australia">Study in Australia</a>
                    <a class="dropdown-item" href="/study-in-germany">Study in Germany</a>
                    <a class="dropdown-item" href="/study-in-uk">Study in UK</a>
                    <a class="dropdown-item" href="/study-in-singapore">Study in Singapore</a>
                    <a class="dropdown-item" href="/study-in-usa">Study in USA</a>
                    <a class="dropdown-item" href="/study-in-ireland">Study in Ireland</a>
                </div>
                <div class="col-md-6">
                    <a class="dropdown-item" href="/study-in-dubai">Study in Dubai</a>
                    <a class="dropdown-item" href="/study-in-switzerland">Study in Switzerland</a>
                    <a class="dropdown-item" href="/study-in-denmark">Study in Denmark</a>
                    <a class="dropdown-item" href="/study-in-spain">Study in Spain</a>
                    <a class="dropdown-item" href="/study-in-france">Study in France</a>
                    <a class="dropdown-item" href="/study-in-sweden">Study in Sweden</a>
                    <a class="dropdown-item" href="/study-in-italy">Study in Italy</a>
                </div>
            </div>
        </div>
    </li>

                <!-- <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/courses">COURSES</a>
                    <span class="sub-link">WHAT WE OFFER</span>
                </li> -->

   <li class="nav-item dropdown text-center position-relative">

    <a class="nav-link main-link dropdown-toggle" href="#" id="mbbsDropdown" role="button" aria-expanded="false">
        MBBS ABROAD
    </a>

    <!-- <span class="sub-link d-block">ALL COUNTRIES</span> -->

    <div class="dropdown-menu mega-dropdown" aria-labelledby="mbbsDropdown">
        <div class="row">
            <div class="col-md-6">
                <a class="dropdown-item" href="/study-mbbs-in-russia">MBBS in Russia</a>
                <a class="dropdown-item" href="/study-mbbs-in-caribbean-islands">MBBS in Caribbean Islands</a>
                <a class="dropdown-item" href="/study-mbbs-in-malaysia">MBBS in Malaysia</a>
                <a class="dropdown-item" href="/study-mbbs-in-tajikistan">MBBS in Tajikistan</a>
                <a class="dropdown-item" href="/study-mbbs-in-kyrgyzstan">MBBS in Kyrgyzstan</a>
                <a class="dropdown-item" href="/study-mbbs-in-georgia">MBBS in Georgia</a>
            </div>
            <div class="col-md-6">
                <a class="dropdown-item" href="/study-mbbs-in-kazakhstan">MBBS in Kazakhstan</a>
                <a class="dropdown-item" href="/study-mbbs-in-latvia">MBBS in Latvia</a>
                <a class="dropdown-item" href="/study-mbbs-in-uzbekistan">MBBS in Uzbekistan</a>
                <a class="dropdown-item" href="/study-mbbs-in-poland">MBBS in Poland</a>
                <a class="dropdown-item" href="/study-mbbs-in-bangladesh">MBBS in Bangladesh</a>
            </div>
        </div>
    </div>
</li>
   <li class="nav-item dropdown text-center position-relative">
    <a class="nav-link main-link dropdown-toggle" href="#" id="testPrepDropdown" role="button" aria-expanded="false">
        TEST PREPARATION
    </a>
    <!-- <span class="sub-link d-block">EXAM PREP</span> -->

    <div class="dropdown-menu mega-dropdown" aria-labelledby="testPrepDropdown">
        <div class="row">
            <div class="col-md-6">
                <a class="dropdown-item" href="/ielts">IELTS</a>
                <a class="dropdown-item" href="/sat">SAT</a>
                <a class="dropdown-item" href="/toefl">TOEFL</a>
                <!-- <a class="dropdown-item" href="/oet">OET</a> -->
                <a class="dropdown-item" href="/pte">PTE</a>
                                <a class="dropdown-item" href="/duolingo">Duolingo</a>

            </div>
            <div class="col-md-6">
                <a class="dropdown-item" href="/gre">GRE</a>
                <a class="dropdown-item" href="/french">French</a>
                <a class="dropdown-item" href="/gmat">GMAT</a>
                <a class="dropdown-item" href="/german">German</a>
            </div>
        </div>
    </div>
</li>
   <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/services">SERVICES</a>
                    <!-- <span class="sub-link">WHAT WE DO</span> -->
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/blogs">BLOGS</a>
                    <!-- <span class="sub-link">LATEST NEWS</span> -->
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link main-link" href="/contact">CONTACT</a>
                    <!-- <span class="sub-link">SAY US HI</span> -->
                </li>

            </ul>

            <a href="#contact" class="btn-custom apply-btn">
                Apply Now
            </a>

        </div>

    </div>
        </div>
    </nav>
` }} />
  );
};

export default Header;
