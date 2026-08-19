import { handleFormSubmit } from '../utils/emailService';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Service = () => {
    return (
        <>
            <Header />
            <Helmet>
                <title>Service - GlobalEdu</title>
            </Helmet>
            <main>
                {/* Original HTML */}
{/*  Custom CSS  */}
    <link />
        <link />




  

    <section className="about-hero">
        <div className="container" data-aos="fade-up">
            <h1>Our <span className="accent-text" style={{ color: `var(--accent)` }}>Services</span></h1>
            <p>We provide comprehensive guidance and support to make your global education dreams a reality.</p>
        </div>
    </section>

    {/*  Core Services Section  */}
    <section className="section-padding" style={{ paddingTop: `80px`, paddingBottom: `40px` }}>
        <div className="layout-container">
            <div className="text-center mb-5" data-aos="fade-up">
                <span className="section-subtitle">What We Offer</span>
                <h2 className="section-title" style={{color: "#007bff"}}>
                    Our Core <span className="accent-text">Services</span>
                </h2>
                <p className="mt-3 text-muted mx-auto" style={{ maxWidth: `700px` }}>
                    We provide end-to-end support for your overseas education journey. From counseling to post-landing, we are with you every step of the way.
                </p>
            </div>
            
            <div className="row g-4">
                {/*  Service 1  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-comments"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Career Counselling</h5>
                        <p className="text-muted flex-grow-1 mb-0">We Know Seeking Clarity On Streams, College Selection, Overseas Education, And Career Planning Is Extremely Hard! Career Counseling For Students From The Right Place At The Right Time Is The Need Of The Hour.</p>
                    </div>
                </div>

                {/*  Service 2  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-book-open"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Test Preparatory Classes</h5>
                        <p className="text-muted flex-grow-1 mb-0">Our Test Preparatory Courses Will Help You to Earn A Top Score On IELTS, PTE, TOEFL, SAT, GRE, GMAT And Other Standardized Exams.</p>
                    </div>
                </div>

                {/*  Service 3  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-globe"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Overseas Education Consulting</h5>
                        <p className="text-muted flex-grow-1 mb-0">Unbiased Admission Support For All The Countries Across The Globe. We Are One of The Best Overseas Education Consulting Firm in South India.</p>
                    </div>
                </div>

                {/*  Service 4  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Education Loan Assistance</h5>
                        <p className="text-muted flex-grow-1 mb-0">An Education Loan Can Assist You In Gaining Admission To The University Of Your Interest.</p>
                    </div>
                </div>

                {/*  Service 5  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-passport"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Visa Assistance & Forex</h5>
                        <p className="text-muted flex-grow-1 mb-0">We Help in End to End Visa Process with The Requisite Assessment required={true} for All The Countries Around The World.</p>
                    </div>
                </div>

                {/*  Service 6  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card text-center h-100 p-4" style={{ borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, transition: `transform 0.3s`, background: `#fff`, display: `flex`, flexDirection: `column` }}>
                        <div className="feature-icon mx-auto mb-3" style={{ width: `70px`, height: `70px`, background: `rgba(245, 158, 11, 0.1)`, color: `var(--accent)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: `28px` }}>
                            <i className="fas fa-plane-arrival"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Post-Landing Services</h5>
                        <p className="text-muted flex-grow-1 mb-0">We Assist For Accommodation and Part-Time Jobs for The Students in The Respective Countries Once They Reach.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Premium Hero Section  */}
    <section className="premium-hero">
        {/*  Floating abstract blobs  */}
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>

        <div className="hero-container">
            <div className="hero-content-left">
                <div className="hero-label-wrap">
                    <span className="hero-gold-line"></span>
                    <span className="hero-label">WHY STUDY ABROAD?</span>
                </div>
                {/*  <h2 className="hero-heading">The Global Ties – Coimbatore's Best Overseas Education Consultancy</h2>  */}
<h2 className="section-title" style={{color: "#007bff"}}>
           The Global Ties - Coimbatore's 
            <span className="accent-text">Best Overseas Education Consultancy</span>
          </h2>
                <p className="hero-description">
                    More than just earning a degree, studying abroad is a transformative experience that broadens
                    perspectives, enhances career prospects, strengthens independence, and prepares students to succeed
                    on a global stage.
                </p>
                <div className="hero-buttons">
                    <a href="#" className="btn-custom">Explore Destinations</a>
                    <a href="#" className="btn-secondary">Book Free Consultation</a>
                </div>
            </div>
            <div className="hero-content-right">
                <div className="hero-image-wrapper">
                    <img src="/assets/img/crop.avif"
                        alt="International Students" className="hero-illustration" />

                </div>
            </div>
        </div>
    </section>

    {/*  Premium Destinations Section  */}
    <section className="premium-destinations">
        <div className="destinations-container">
            {/*  <span className="destinations-label">TOP STUDY DESTINATIONS</span>  */}
             <h2 className="section-title-dream" style={{color: "#007bff"}}>
           Choose Your Dream 
            <span className="accent-text">Study Destination</span>
          </h2>
            <p className="destinations-desc">Explore world-class universities and career opportunities across leading
                international education destinations.</p>

            <div className="destinations-grid">
                {/*  Card 1: Canada  */}
                <a href="/study_in_canada" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/ca.png" alt="Canada Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In Canada</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 2: Australia  */}
                <a href="/study_in_australia" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/au.png" alt="Australia Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In Australia</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 3: UK  */}
                <a href="/study_in_uk" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In UK</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 4: USA  */}
                <a href="/study_in_usa" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/us.png" alt="USA Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In USA</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 5: Germany  */}
                <a href="/study_in_germany" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/de.png" alt="Germany Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In Germany</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 6: Ireland  */}
                <a href="/study_in_ireland" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/ie.png" alt="Ireland Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In Ireland</h3>   
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 7: New Zealand  */}
                <a href="/study_in_newzealand" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/nz.png" alt="New Zealand Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In New Zealand</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>

                {/*  Card 8: Singapore  */}
                <a href="/study_in_singapore" className="destination-card">
                    <div className="dest-card-top">
                        <div className="dest-icon-wrap">
                            <img src="https://flagcdn.com/w80/sg.png" alt="Singapore Flag" />
                        </div>
                    </div>
                    <div className="dest-card-middle">
                        <h3>Study In Singapore</h3>
                    </div>
                    <div className="dest-card-bottom">
                    </div>
                    <div className="explore-more">Explore More &rarr;</div>
                </a>
            </div>
        </div>
    </section>

    {/*  Main Content Area  */}
   


            {/*  Premium Auto-Changing Image Section  */}
            <section className="premium-image-slider">
                <div className="pis-container">
                    {/*  Left Content  */}
                    <div className="pis-content-area">
                        <span className="pis-gold-label">WHY STUDY ABROAD?</span>
                       <h2 className="section-title" style={{color: "#007bff"}}>
           Transform Your Future With
            <span className="accent-text">Global Education</span>
          </h2>
                        <p className="hero-description">Studying abroad is more than just an education. It is a
                            life-changing
                            journey that helps students grow academically, professionally, and personally. Immerse
                            yourself in new cultures, build a global network, and stand out in the international job
                            market.</p>
                        <a href="#" className="btn-custom" style={{ marginTop: `24px`, display: `inline-block` }}>Get
                            Free Consultation</a>
                    </div>

                    {/*  Right Image Area  */}
                    <div className="pis-image-area">
                        <div className="pis-image-container" id="pis-slider-container">
                            <img src="/assets/img/crop.avif"
                                id="pis-main-image" alt="Study Abroad Benefits" />
                            {/*  Progress Bar  */}
                            <div className="pis-progress-bar">
                                <div className="pis-progress" id="pis-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
    <main>
       
     <section className="request-info-section" style={{ padding: `80px 0` }}>
      <div className="layout-container">
          <div className="row align-items-center g-5">
              {/*  Left Side Image  */}
              <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right">
                  <div className="position-relative">
                      <img src="/img/form_img.jpg" alt="Request Information" className="img-fluid rounded-4 shadow-lg w-100" style={{ maxHeight: `450px`, objectFit: `cover` }} />
                      <div className="position-absolute bottom-0 start-0 bg-white p-4 shadow-lg d-flex align-items-center gap-3" style={{ transform: `translateY(20px)`, borderRadius: `0 20px 20px 0`, borderLeft: `5px solid var(--accent, #F59E0B)`, zIndex: `2` }}>
                          <div style={{ width: `55px`, height: `55px`, background: `rgba(245, 158, 11, 0.1)`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, color: `var(--accent, #F59E0B)`, fontSize: `24px` }}>
                              <i className="fas fa-headset"></i>
                          </div>
                          <div>
                              <h5 className="fw-bold mb-1" style={{ color: `var(--primary, #091E3E)`, fontSize: `1.25rem` }}>Need Expert Advice?</h5>
                              <p className="text-muted mb-0" style={{ fontSize: `0.9rem`, fontWeight: `500` }}>Talk to our senior counselors today</p>
                          </div>
                      </div>
                  </div>
              </div>
  
              {/*  Right Side Form  */}
             <div className="col-lg-5" data-aos="fade-left">
           <div className="lead-form-card glass-form" style={{ maxWidth: `380px`, margin: `0 auto` }}>
                <h3 className="mb-4 fw-bold">Request Information</h3>
                
              
              <div className="alert alert-success" role="alert" style={{ display: `none`, padding: `10px`, marginBottom: `15px`, borderRadius: `5px`, backgroundColor: `#d4edda`, color: `#155724`, border: `1px solid #c3e6cb` }}>
                Request submitted successfully! Our counselors will contact you soon.
              </div>
              
              <form onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <input type="text" name="full_name" className="custom-input" placeholder="Full Name" required="" />
                    <input type="tel" name="phone" className="custom-input" placeholder="Phone Number" required="" />
                  </div>
                  <input type="email" name="email" className="custom-input" placeholder="Email Address" required="" />
                  
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
  

    
      </main>
            <Footer />
        </>
    );
};

export default Service;
