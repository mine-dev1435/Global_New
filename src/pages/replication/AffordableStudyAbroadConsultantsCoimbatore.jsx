import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../../components/InstagramStories';
import { handleFormSubmit } from '../../utils/emailService';
import PhoneInputWithCountry from '../../components/PhoneInputWithCountry';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AffordableStudyAbroadConsultantsCoimbatore = () => {
  useEffect(() => {
    if (window.Swiper) {
        new window.Swiper(".coursesSwiper", {
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
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }
        });
    }
  }, []);

    return (
    <>
      <Header />
      <Helmet>
        <title>Affordable Study Abroad Consultants in Coimbatore | The Global Ties</title>
        <meta name="description" content="Get affordable study abroad counseling in Coimbatore with guidance for courses, universities, applications, scholarships, and visa assistance." />
        <meta name="keywords" content="affordable study abroad consultants in Coimbatore" />
      </Helmet>
      <main>
        {/* Original HTML */}
{/*  ── HERO SECTION ──  */}
  <section className="hero-section d-flex align-items-center position-relative" style={{ background: `linear-gradient(135deg, #091e3e 0%, #174C82 100%)`, overflow: `hidden` }}>
    {/*  Decorative background elements  */}
    <div style={{ position: `absolute`, top: `-100px`, left: `-100px`, width: `400px`, height: `400px`, background: `radial-gradient(circle, rgba(3, 132, 202, 0.4) 0%, transparent 70%)`, borderRadius: `50%` }}></div>
    <div style={{ position: `absolute`, bottom: `-150px`, right: `-50px`, width: `500px`, height: `500px`, background: `radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)`, borderRadius: `50%` }}></div>

    <div className="container position-relative" style={{ zIndex: `2` }}>
      <div className="row align-items-center g-5">
        {/*  Left Content  */}
        <div className="col-lg-6" data-aos="fade-right">
          <div className="d-inline-block px-4 py-2 mb-4 rounded-pill" style={{ background: `rgba(255,255,255,0.1)`, border: `1px solid rgba(255,255,255,0.2)`, color: `var(--accent)`, fontWeight: `600`, fontSize: `14px`, letterSpacing: `1px` }}>
            <i className="fas fa-globe-americas me-2"></i> Your Trusted Global Education Partner
          </div>
          <h1 className="display-4 fw-bold text-white mb-4" style={{ lineHeight: `1.2` }}>
            <span className="accent-text" style={{ color: `var(--accent)` }}>Affordable Study Abroad Consultants</span> in Coimbatore
          </h1>
          <span className="text-white opacity-75 mb-5 fs-5" style={{ lineHeight: `1.6`, maxWidth: `90%` }}>
            Join a global community of learners and leaders. Experience world-class infrastructure and industry-aligned curriculum designed for your success.
          </span>
          <div className="d-flex flex-wrap gap-3">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-custom px-4 py-3 fw-bold shadow-lg" style={{ borderRadius: `50px`, fontSize: `16px` }}>
              Apply Now <i className="fas fa-arrow-right ms-2"></i>
            </a>
            <a href="#courses" className="btn btn-outline-light px-4 py-3 fw-bold" style={{ borderRadius: `50px`, fontSize: `16px`, borderWidth: `2px` }}>
              Explore Courses
            </a>
          </div>
          
          {/*  Quick Stats / Trust Indicators  */}
          <div className="d-flex align-items-center mt-5 pt-4 gap-4 border-top border-light border-opacity-25">
            <div>
              <h3 className="text-white fw-bold mb-0">10k+</h3>
              <span className="text-white opacity-75 small">Students Placed</span>
            </div>
            <div style={{ width: `1px`, height: `40px`, background: `rgba(255,255,255,0.2)` }}></div>
            <div>
              <h3 className="text-white fw-bold mb-0">50+</h3>
              <span className="text-white opacity-75 small">Global Universities</span>
            </div>
            <div style={{ width: `1px`, height: `40px`, background: `rgba(255,255,255,0.2)` }}></div>
            <div>
              <h3 className="text-white fw-bold mb-0">99%</h3>
              <span className="text-white opacity-75 small">Visa Success Rate</span>
            </div>
          </div>
        </div>

        {/*  Right Image/Visual  */}
        <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0" data-aos="fade-left">
          {/*  Glassmorphism floating card  */}
          <div className="position-absolute d-none d-md-flex align-items-center p-3 rounded-4 shadow-lg" style={{ background: `rgba(255, 255, 255, 0.15)`, backdropFilter: `blur(10px)`, border: `1px solid rgba(255,255,255,0.3)`, bottom: `10%`, left: `-5%`, zIndex: `3` }}>
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: `50px`, height: `50px`, color: `#091e3e` }}>
              <i className="fas fa-plane-departure fs-4"></i>
            </div>
            <div className="ms-3 text-start">
              <h6 className="text-white mb-0 fw-bold">Ready to Fly</h6>
              <span className="text-white opacity-75 small">Start your journey today</span>
            </div>
          </div>
          
          {/*  Main Hero Image  */}
          <div className="position-relative d-inline-block">
             <div className="position-absolute w-100 h-100 rounded-5" style={{ border: `3px solid var(--accent)`, top: `20px`, left: `20px`, zIndex: `1` }}></div>
             <img src="/img/hero_img.webp" alt="Global Education" className="img-fluid rounded-5 shadow-lg position-relative" style={{ zIndex: `2`, maxHeight: `550px`, objectFit: `cover` }} />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ── ABOUT INSTITUTION ──  */}
  <section id="about" className="section-padding">
    <div className="container">

      {/*  Top Row  */}
      <div className="row align-items-center g-5">

        <div className="col-lg-6" data-aos="fade-right">
          <div className="about-img">
            <img src="/img/ABOUT_HOME .png" alt="Global Ties" className="img-fluid rounded-4" />

            <div className="about-exp">
              <h3>10+</h3>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">

          <span className="section-subtitle">About Global Ties</span>

          <h2 className="section-title">
           The Global Ties - Coimbatore's 
            <span className="accent-text">Best Overseas Education Consultancy</span>
          </h2>

          <p>
          The Global Ties is a leading professionaly managed Overseas Education Consulting company. Our team of young professionals is lead by expert advisers. We assist Indian students seeking admissions in globaly recognized education programs offered by famous academic institutions a l over the world. We are a leading Overseas Education service provider with immense experience in guiding students to get admissions to their desired universities across the globe.</p>
          <p>  Our recruitment team works hand-in-hand with institutions to reach their goals. The Global Ties have a decade of experience in Career Guidance, Test Preparatory Classes, and Overseas Education Consulting.
          </p>

          {/*  <a href="#contact" className="btn-customs">
            Get Free Consultation
          </a>  */}

        </div>

      </div>

   

    </div>
  </section>
  <section className="section-padding" id="sec">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-subtitle">Our Core Values</span>
        <h2 className="section-title">
            The Principles That <span className="accent-text">Drive Us</span>
        </h2>
      </div>
      {/*  Features  */}
      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-handshake"></i>
            </div>
            <h5>Integrity</h5>
            <p>
              Maintaining complete honesty and transparency in every interaction and process.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h5>Innovation</h5>
            <p>
              Continuously embracing new ideas to simplify the overseas education journeys.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-heart"></i>
            </div>
            <h5>Empathy</h5>
            <p>
              Deeply understanding and prioritizing the dreams and concerns of every student.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-award"></i>
            </div>
            <h5>Excellence</h5>
            <p>
              Consistently driving for the best possible outcomes and continuous improvement.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ── PROGRAMS & COURSES ──  */}
  <section id="courses" className="section-padding">
    <div className="container">

      <div className="row align-items-end mb-5">
        <div className="col-lg-6" data-aos="fade-right">
          <span className="section-subtitle">Study abroad enhances employment opportunities</span>
          <h2 className="section-title mb-0">
            WHY STUDY
            <span className="accent-text">ABROAD?</span>
          </h2>
        </div>

        <div className="col-lg-6 text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
          <div className="d-flex justify-content-lg-end gap-3 align-items-center">
            <button
              className="swiper-btn-prev btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: `45px`, height: `45px` }}><i className="fas fa-arrow-left"></i></button>
            <button
              className="swiper-btn-next btn btn-primary rounded-circle d-flex align-items-center justify-content-center border-0"
              style={{ width: `45px`, height: `45px`, backgroundColor: `var(--accent)` }}><i
                className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="swiper coursesSwiper" data-aos="fade-up" data-aos-delay="100" >
        <div className="swiper-wrapper">

          {/*  MBBS Abroad  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/canada.jpg')` }}>
                <div className="course-badge">Medical Education</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Canada</h4>
                <p className="flex-grow-1">
                  Canada has one of the best and most respected education systems in the world.
                  Every year, thousands of students from other countries pursue their
                  educational
                  goals in Canada. </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          {/*  Study Abroad  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/new_zealand.jpg')` }}>
                <div className="course-badge">Zealand</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in New Zealand</h4>
                <p className="flex-grow-1">
                  New Zealand is around the same size as Japan or Great Britain. The
                  countryside is
                  unique and quite spectacular, from rolling green hills to golden sand
                  beaches
                  then lush rainforests. </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          {/*  IELTS Coaching  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/australia.jpg')` }}>
                <div className="course-badge">Language Training</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Australia</h4>
                <p className="flex-grow-1">
                  Australia is currently the third most popular destination for international
                  students in the English-speaking world, behind the United States and the UK.
                  Many international students. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>

          {/*  GRE / GMAT / SAT  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/germany.jpg')` }}>
                <div className="course-badge">Test Preparation</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Germany</h4>
                <p className="flex-grow-1">
                  Studying Abroad in Germany is a big chance not only for European people but
                  for
                  students from all over the world. They benefit from a high quality
                  educational
                  system, learn a new language and live in a different culture. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>

          {/*  Visa Assistance  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/uk.jpg')` }}>
                <div className="course-badge">Visa Support</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in UK</h4>
                <p className="flex-grow-1">
                  The UK education system is flexible, so you can study in a way that suits
                  your
                  lifestyle and career aspirations. When you study in the UK you meet people
                  from
                  ddifferent nationalities. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>

          {/*  Immigration & Work Permit  */}
          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/signgapore.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Singapore</h4>
                <p className="flex-grow-1">
                  Singapore is a premium education hub with top quality public and private
                  institutions catering to the academic needs of the students across various
                  countries and different backgrounds. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/usa.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in USA</h4>
                <p className="flex-grow-1">
                  As an investment in your future, a U.S. degree offers excellent value for
                  the
                  money. A wide range of tuition fees and living costs, plus some financial
                  help
                  from universities, make study in the United States. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/switzerland.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Switzerland</h4>
                <p className="flex-grow-1">
                  Switzerland has no natural resources, education and knowledge have become
                  very
                  important resources. Therefore Switzerland claims to have one of the world's
                  best education systems. </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card  d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/denmark.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Denmark</h4>
                <p className="flex-grow-1">
                  Why International Students want to study in Denmark.Denmark is a beautiful
                  country that not many international students have discovered yet. It is part
                  of
                  the Schengen countries that </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/spain.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in Spain</h4>
                <p className="flex-grow-1">
                  Every year thousands of students from across the world make their way to
                  Spain to
                  attend one of the 74 universities located in the country. They come to the
                  country for many reasons, </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/france.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in
                  France</h4>
                <p className="flex-grow-1">
                  If all of the things that we've already told you about France were not
                  enough,
                  what if we told you that the country has one of the most prestigious
                  education
                  systems in the world, as well? </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/sweden.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in
                  Sweden</h4>
                <p className="flex-grow-1">
                  Studying in Sweden is unique, and you will not find an experience like it
                  anywhere else in the world. Swedish educational institutions provide an
                  exciting
                  as well as open environment,</p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
          {/*  Immigration & Work Permit  */}


          <div className="swiper-slide ">
            <div className="course-card d-flex flex-column">
              <div className="course-img" style={{ backgroundImage: `url('/img/italy.jpg')` }}>
                <div className="course-badge">Migration</div>
              </div>

              <div className="course-content flex-grow-1 d-flex flex-column">
                <h4 className="course-title">Study in
                  Italy</h4>
                <p className="flex-grow-1">Italy is one of the Europe's most complex and alluring destinations. A modern
                  industrialized nation with an artistic and architectural legacy that few
                  other
                  countries can rival, </p>
                <a href="">Read More</a>

              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  </section>


 
  {/*  Partner Universities  */}
  <section className="university-showcase section-padding">
    <div className="showcase-bg-overlay"></div>
    <div className="container position-relative z-1">
      <div className="text-center text-white" data-aos="fade-up">
        <h3 className="display-4 font-h mb-3">Our Partners & Affiliations</h3>
        <p className="lead text-light opacity-75 mx-auto" >
          Proudly associated with globally recognized testing and educational bodies.
        </p>
      </div>
          <div className="row g-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <a href="#" className="university-card elegant-card">
              <img src="/img/university1.jpg" alt="St. George's University" />
              <div className="card-gradient"></div>
  
            </a>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <a href="#" className="university-card elegant-card">
              <img src="/img/university2.jpg" alt="University of Hull" />
              <div className="card-gradient"></div>
  
            </a>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <a href="#" className="university-card elegant-card">
              <img src="/img/university3.jpg" alt="Coventry University" />
              <div className="card-gradient"></div>
  
            </a>
          </div>
        </div>
    </div>
  </section>
 {/*  ── PLACEMENTS ──  */}
  <section className="section-padding bg-light-sec">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5" data-aos="fade-right">
          <span className="section-subtitle">Career Growth</span>
          <h2 className="section-title mb-4">Outstanding <span className="accent-text">Placements</span></h2>
          <p className="mb-4">Studying abroad opens doors to international careers. Many universities offer internships, 
industry collaborations, placement support, and post-study work opportunities. 
Global Ties helps students choose universities that provide excellent employment prospects, 
ensuring they are well prepared for successful global careers.</p>
         <div className="row mt-4 mb-4 g-3">
  <div className="col-6">
    <div className="counter-box">
      <h3 className="counter-num mb-1">500+</h3>
      <span className="fw-semibold">Recruiters</span>
    </div>
  </div>

  <div className="col-6">
    <div className="counter-box">
      <h3 className="counter-num mb-1">24L</h3>
      <span className="fw-semibold">Highest Package</span>
    </div>
  </div>
</div>
</div>
        <div className="col-lg-7" data-aos="fade-left">
          <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
            
            {/*  IDP Card  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo1.jpeg" alt="IDP" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>IDP</h6>  */}
                {/*  <a href="#mock-test" style={{ color: `#0384ca`, fontWeight: `600`, textDecoration: `none`, fontSize: `0.85rem` }}>Free Mock Test &rarr;</a>  */}
              </div>
            </div>


            {/*  British Council Card  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo3.jpeg"  alt="British Council" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>British Council</h6>  */}
                {/*  <a href="#mock-test" style={{ color: `#0384ca`, fontWeight: `600`, textDecoration: `none`, fontSize: `0.85rem` }}>Free Mock Test &rarr;</a>  */}
              </div>
            </div>

            {/*  TOEFL Card  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo4.png" alt="TOEFL" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>TOEFL</h6>  */}
              </div>
            </div>

            {/*  ETS Card  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo5.jpeg" alt="ETS" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>ETS</h6>  */}
              </div>
            </div>

            {/*  Logo 6  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo6.png" alt="ETS" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>ETS</h6>  */}
              </div>
            </div>

            {/*  Logo 7  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo7.png" alt="ETS" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>ETS</h6>  */}
              </div>
            </div>

            {/*  Logo 8  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo8.png" alt="ETS" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>ETS</h6>  */}
              </div>
            </div>

            {/*  Logo 9  */}
            <div className="col">
              <div className="partner-card text-center p-3" style={{ background: `white`, borderRadius: `16px`, boxShadow: `0 4px 15px rgba(0,0,0,0.05)`, transition: `transform 0.3s` }}>
                <div className="partner-logo-box" style={{ border: `1px solid #e2e8f0`, borderRadius: `12px`, padding: `15px`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                  <img src="/img/test-logo9.png" alt="ETS" className="img-fluid" style={{ maxHeight: `70px`, objectFit: `contain` }} />
                </div>
                {/*  <h6 style={{ fontWeight: `700`, color: `var(--primary)`, marginBottom: `10px` }}>ETS</h6>  */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
{/*  Section 5: Instagram Reels  */}
        <InstagramStories country="Abroad" />
  {/*  ── ADMISSION CTA (LEAD GEN) ──  */}
    <section id="contact" className="admission-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 pr-lg-5" data-aos="fade-right">
            <div className="admission-content">
              <span className="text-uppercase tracking-wide section-subtitle fw-bold mb-2 d-block"
                style={{ letterSpacing: `2px` }}>Admissions Open 2026</span>
              <h2>Start Your Educational <span className="accent-text">Journey Today</span></h2>
              <p className="text-white opacity-75 mb-4">Your dream of studying abroad begins with the right guidance. At The Global Ties, we are committed to helping students achieve their international education goals through expert counselling, personalized support, and a transparent admission process. Whether you're planning to pursue an undergraduate degree, postgraduate program, diploma, or research course, our experienced team is here to guide you every step of the way.

Thousands of students have successfully started their global education journey with The Global Ties, gaining admission to leading universities across Canada, the UK, Australia, New Zealand, Ireland, Germany, France, Italy, Sweden, Spain, Dubai, Singapore, and other top study destinations.</p>

              <div className="d-flex flex-wrap gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: `40px`, height: `40px` }}>
                    <i className="fas fa-phone fa-flip-horizontal"></i>
                  </div>
                  <div>
                    <span className="d-block text-white opacity-75 small">Call us directly</span>
                    <span className="fw-bold fs-5 text-white"> <a href="tel:+919787700661" className="fw-bold fs-5 text-white text-decoration-none">
        +91 97877 00661
      </a></span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: `40px`, height: `40px` }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <span className="d-block text-white opacity-75 small">Email Admission Cell</span>
                    <span className="fw-bold fs-5 text-white"><a href="mailto:info@theglobalties.com" className="fw-bold fs-5 text-white text-decoration-none">
        info@theglobalties.com
      </a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="lead-form-card glass-form" style={{ maxWidth: `380px`, margin: `0 auto` }}>
              <h3 className="mb-4 fw-bold" >Request Information</h3>
              
              
              <div className="alert alert-success" role="alert" style={{ display: `none`, padding: `10px`, marginBottom: `15px`, borderRadius: `5px`, backgroundColor: `#d4edda`, color: `#155724`, border: `1px solid #c3e6cb` }}>
                Request submitted successfully! Our counselors will contact you soon.
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <input type="text" name="full_name" className="custom-input" placeholder="Full Name" required={true} />
                  <PhoneInputWithCountry className="custom-input" placeholder="Phone Number" required={true} />
                <input type="email" name="email" className="custom-input" placeholder="Email Address" required={true} />
                
                <input type="text" name="course" className="custom-input" required="" placeholder="Course/Destination Interested In" />
                <input type="text" name="city" className="custom-input" placeholder="City" />
                <textarea name="questions" className="custom-input" rows="3" placeholder="Any specific questions?"></textarea>
                        <button type="submit" className="submit-btn">Submit Application Form</button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  );
};

export default AffordableStudyAbroadConsultantsCoimbatore;
