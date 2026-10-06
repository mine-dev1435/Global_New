import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
import PhoneInputWithCountry from '../components/PhoneInputWithCountry';
const StudyInUk = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in UK | Best UK Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in UK with expert education consultants in Coimbatore. Get expert guidance on top British universities, CAS letter processing, scholarships & graduate route visas." />
        <meta name="keywords" content="Study in UK" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



    

    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> the UK</span></h1>
      <p>Immerse yourself in centuries of academic excellence. Earn globally recognized degrees from prestigious universities in a vibrant, diverse culture.</p>
    </div>
  </section>

        {/*  Floating Breadcrumb Section  */}
        <div className="layout-container" style={{ position: `relative`, zIndex: `5` }}>
            <div className="floating-breadcrumb-card">
                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <a href="index"><i className="fas fa-home"></i></a>
                    <span className="separator"><i className="fas fa-chevron-right"></i></span>
                    <a href="index" style={{ display: `flex`, alignItems: `center`, gap: `5px` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                    </a>
                    <span className="separator"><i className="fas fa-chevron-right"></i></span>
                    <span className="current-page" style={{ display: `flex`, alignItems: `center`, gap: `5px`, color: `var(--accent-color, #b8860b)`, fontWeight: `500` }}>
                        Study in UK
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/uk-img.jpg"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in UK permanently | the global ties</span>

                    {/*  <h2 className="destinations-title">Why Study in UK :</h2>  */}
<h2 className="section-title">
           Why Study in

            <span className="accent-text">UK</span>
          </h2>
                    <p className="hero-description">
                        The United Kingdom offers a world-class education system that is flexible, innovative, and designed to suit your academic interests, lifestyle, and long-term career aspirations. Home to some of the world's most prestigious universities, the UK provides internationally recognized qualifications that are highly valued by employers across the globe.

Studying in the UK gives you the opportunity to learn alongside students from diverse cultural and national backgrounds, helping you build lifelong friendships, develop global perspectives, and enhance your communication and interpersonal skills. The multicultural environment creates an enriching educational experience both inside and outside the classroom.
                    </p>


                    <div>
                        <a href="javascript:void(0);" className="cta-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                          Read More
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        {/*  Section 3: Work Opportunities  */}
        <section className="opportunities-section luxury-testimonial-layout">
            <div className="layout-container opp-luxury-split">
                {/*  Left Content Area  */}
                <div className="opp-left-luxury">
                    {/*  <h2 className="destinations-title">Study & Work Benefits</h2>  */}
<h2 className="section-title">
           Why Choose{' '}
            <span className="accent-text">the UK</span>
          </h2>
                    <p className="hero-description">
                      The United Kingdom provides world-class education, globally recognized qualifications, advanced research facilities, flexible study options, and excellent career opportunities for international students. Combined with English-language immersion, multicultural campuses, and part-time work opportunities, studying in the UK equips students with the skills and experience needed to thrive in today's global job market.
                    </p>

                </div>

                {/*  Right Content Area (Slider)  */}
                <div className="opp-slider-wrapper">
                    <div className="opp-slider-container" id="opp-slider">
                        <div className="opp-slider-track" id="opp-track">

                            {/*  Card 1  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>World-Class Education</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        The UK institutions consistently rank among the best in the world and qualifications are internationally valued and recognised.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 2  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Research Excellence</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        The UK undertakes 5 per cent of the world's scientific research and produces 14 per cent of the world's most frequently cited papers.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 3  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Flexible Learning</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        UK institutions offer flexibility of choice and enable you to blend academic and vocational courses of your choice.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 4  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Creative Development</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        The teaching and study methodology used in the UK give you the freedom to be creative and develop skills sets and confidence.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 5  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Expert Academics</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        As a student you get the opportunity to be taught by the world's leading academics and experts; you also benefit from their constant academic support.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 6  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Specialised Modules</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        UK degrees can be tailored to your interests and often include specialised modules.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 7  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>English Language Advantage</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        The UK is the home of English hence an ideal place to develop language skills and enhance employment prospects.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                            {/*  Card 8  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Part-Time Work</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        Students can work part-time during regular academic sessions (20 hours per week) and full-time during scheduled breaks, gaining valuable experience while helping cover living expenses.
                                    </p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*  Slider Controls  */}
                    <div className="opp-slider-controls image-exact-controls">
                        <button className="arrow-btn prev-btn" onClick="moveSlide(-1)">&#8249;</button>

                        <div className="opp-pagination image-exact-pagination" id="opp-pagination">
                            <span className="dot active" onClick="goToSlide(0)"></span>
                            <span className="dot" onClick="goToSlide(1)"></span>
                            <span className="dot" onClick="goToSlide(2)"></span>
                            <span className="dot" onClick="goToSlide(3)"></span>
                            <span className="dot" onClick="goToSlide(4)"></span>
                            <span className="dot" onClick="goToSlide(5)"></span>
                            <span className="dot" onClick="goToSlide(6)"></span>
                        </div>

                        <button className="arrow-btn next-btn" onClick="moveSlide(1)">&#8250;</button>
                    </div>
                </div>
            </div>
        </section>

        {/*  Section 4: Canada Advantage Banner  */}
        <section className="advantage-banner">
            <div className="layout-container advantage-grid">
                <div>
                    <h2 className="destinations-titles">Why International Students Choose UK</h2>
                </div>
                <div className="features-wrapper">
                    <div className="feature-glass-card">
                        <h4>Quality Education</h4>
                    </div>
                    <div className="feature-glass-card">
                        <h4>Work Opportunities</h4>
                    </div>
                    <div className="feature-glass-card">
                        <h4>Global Recognition</h4>
                    </div>
                    <div className="feature-glass-card">
                        <h4>Stay & Settle</h4>
                    </div>
                    <div className="feature-glass-card">
                        <h4>Safe Environment</h4>
                    </div>
                    <div className="feature-glass-card">
                        <h4>High Quality of Life</h4>
                    </div>
                </div>
            </div>
        </section>


{/*  Top Universities Section  */}
        <section className="top-universities-section" style={{ padding: `30px 0`, backgroundColor: `#f8f9fa` }}>
            <div className="layout-container">
                <div className="section-header text-center" data-aos="fade-up">
                    <span className="section-subtitle">EXCELLENCE IN EDUCATION</span>
                    <h2 className="section-title">Top Universities <span className="accent-text">& Rankings</span></h2>
                    <p className="hero-description mx-auto text-center" style={{ maxWidth: `700px` }}>Discover globally recognized institutions offering world-class academic excellence and research opportunities.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Global Top 100 University</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li>
                                    <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Oxford</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Cambridge</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Imperial College London</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University College London (UCL)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>London School of Economics and Political Science (LSE)</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Premier Institute of Technology</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li style={{ marginBottom: `10px`, display: `flex`, alignItems: `flex-start`, gap: `10px` }}><i className="fas fa-check-circle" style={{ color: `var(--accent)`, marginTop: `5px` }}></i> <span><strong>Ranking:</strong> Highly Ranked in Tech</span></li>
                                <li style={{ marginBottom: `10px`, display: `flex`, alignItems: `flex-start`, gap: `10px` }}><i className="fas fa-check-circle" style={{ color: `var(--accent)`, marginTop: `5px` }}></i> <span><strong>Specialisations:</strong> Computer Science, Data Science</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Leading Business School</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li style={{ marginBottom: `10px`, display: `flex`, alignItems: `flex-start`, gap: `10px` }}><i className="fas fa-check-circle" style={{ color: `var(--accent)`, marginTop: `5px` }}></i> <span><strong>Ranking:</strong> Triple Crown Accredited</span></li>
                                <li style={{ marginBottom: `10px`, display: `flex`, alignItems: `flex-start`, gap: `10px` }}><i className="fas fa-check-circle" style={{ color: `var(--accent)`, marginTop: `5px` }}></i> <span><strong>Specialisations:</strong> MBA, Finance, Marketing</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Popular Programs Section  */}
        <section className="popular-programs-section" style={{ padding: `60px 0` }}>
            <div className="layout-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                        <span className="section-subtitle">YOUR FUTURE CAREER</span>
                        <h2 className="section-title mb-4">Popular Programs & <span className="accent-text">Specialisations</span></h2>
                        <p className="hero-description mb-4">Choose from a wide variety of globally recognized courses tailored to industry demands and emerging technologies.</p>
                        
                        <div className="programs-list">
                            <div className="program-item" style={{ background: `var(--light-bg)`, padding: `20px`, borderRadius: `10px`, marginBottom: `15px`, borderLeft: `4px solid var(--primary)` }}>
                                <h5 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `5px` }}>STEM Programs</h5>
                                <p style={{ margin: `0`, fontSize: `0.95rem`, color: `#555` }}>Computer Science, Artificial Intelligence, Engineering, Data Analytics.</p>
                            </div>
                            <div className="program-item" style={{ background: `var(--light-bg)`, padding: `20px`, borderRadius: `10px`, marginBottom: `15px`, borderLeft: `4px solid var(--accent)` }}>
                                <h5 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `5px` }}>Business & Management</h5>
                                <p style={{ margin: `0`, fontSize: `0.95rem`, color: `#555` }}>MBA, International Business, Supply Chain Management, Finance.</p>
                            </div>
                            <div className="program-item" style={{ background: `var(--light-bg)`, padding: `20px`, borderRadius: `10px`, borderLeft: `4px solid var(--primary)` }}>
                                <h5 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `5px` }}>Healthcare & Medicine</h5>
                                <p style={{ margin: `0`, fontSize: `0.95rem`, color: `#555` }}>Nursing, Public Health, Pharmacy, Biotechnology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <img src="/img/Uk_study_new.jpeg" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
                    </div>
                </div>
            </div>
        </section>

        {/*  Cost of Study Section  */}
        <section className="cost-study-section" style={{ padding: `60px 0`, backgroundColor: `#fff` }}>
            <div className="layout-container">
                <div className="section-header text-center mb-5" data-aos="fade-up">
                    <span className="section-subtitle">FINANCIAL PLANNING</span>
                    <h2 className="section-title">Cost of Study & <span className="accent-text">Tuition Fees</span></h2>
                    <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>Tuition fee comparison by programme level in the UK.</p>
                </div>
                <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
                    <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>
                        <thead style={{ background: `#fff`, color: `#000` }}>
                            <tr>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>Programme Level</th>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>Typical Annual Fee</th>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Undergraduate (Bachelor's)</td>
                                <td style={{ padding: `20px` }}>&pound;11,400 - &pound;38,000 / year</td>
                                <td style={{ padding: `20px` }}>Arts & Humanities lowest; Medicine and Engineering highest</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Postgraduate Taught Master's</td>
                                <td style={{ padding: `20px` }}>&pound;9,000 - &pound;30,000 / year</td>
                                <td style={{ padding: `20px` }}>Most popular 1-year route for Indian students</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>MBA</td>
                                <td style={{ padding: `20px` }}>&pound;20,000 - &pound;75,000+</td>
                                <td style={{ padding: `20px` }}>Elite schools (LBS, Oxford, Cambridge Judge) command the top end</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>PhD / Doctoral</td>
                                <td style={{ padding: `20px` }}>&pound;18,000 - &pound;40,000 / year</td>
                                <td style={{ padding: `20px` }}>Many PhD candidates receive research council or university funding</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Medicine (Undergraduate, Clinical Years)</td>
                                <td style={{ padding: `20px` }}>Up to &pound;50,000+ / year</td>
                                <td style={{ padding: `20px` }}>Total programme cost can exceed &pound;200,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/*  Cost of Living Section  */}
        <section className="cost-living-section" style={{ padding: `30px 0`, backgroundColor: `#f8f9fa` }}>
            <div className="layout-container">
                <div className="section-header text-center mb-2" data-aos="fade-up">
                    <span className="section-subtitle">STUDENT EXPENSES</span>
                    <h2 className="section-title">Cost of Living <span className="accent-text">by City</span></h2>
                    <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>City-wise monthly breakdown for international students in the UK.</p>
                </div>
                <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
                    <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>
                        <thead style={{ background: `#fff`, color: `#000` }}>
                            <tr>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>City / Region</th>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>Monthly Living Cost</th>
                                <th style={{ padding: `20px`, fontWeight: `bold` }}>Representative Universities</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>London</td>
                                <td style={{ padding: `20px` }}>&pound;1,300 - &pound;1,800</td>
                                <td style={{ padding: `20px` }}>UCL, Imperial, LSE, Kings College London, Queen Mary</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Edinburgh / Glasgow</td>
                                <td style={{ padding: `20px` }}>&pound;900 - &pound;1,600</td>
                                <td style={{ padding: `20px` }}>University of Edinburgh, Glasgow, Heriot-Watt</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Manchester / Birmingham</td>
                                <td style={{ padding: `20px` }}>&pound;900 - &pound;1,200</td>
                                <td style={{ padding: `20px` }}>Manchester, Birmingham, Aston</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Leeds / Sheffield / Nottingham</td>
                                <td style={{ padding: `20px` }}>&pound;850 - &pound;1,100</td>
                                <td style={{ padding: `20px` }}>Leeds, Sheffield, Nottingham</td>
                            </tr>
                            <tr>
                                <td style={{ padding: `20px`, fontWeight: `bold` }}>Cardiff / Belfast</td>
                                <td style={{ padding: `20px` }}>&pound;800 -  &pound;1,000</td>
                                <td style={{ padding: `20px` }}>Cardiff University, Queen&pound;s University Belfast</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/*  Section 5: Instagram Reels  */}
       <InstagramStories country="UK" />
{/*  Work Opportunities Section  */}
<section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in the UK
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in the UK
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    The United Kingdom offers international students excellent opportunities to gain valuable work experience while pursuing their studies. Eligible students can work part-time during academic sessions and full-time during scheduled vacations, allowing them to earn additional income while developing practical workplace skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can find part-time employment in retail, hospitality, restaurants, supermarkets, customer service, administration, warehouses, healthcare support, tourism, delivery services, and university campuses. These roles help students gain valuable UK work experience while improving communication, teamwork, and professional skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying enables students to become financially independent, build professional networks, strengthen their resumes, and prepare for rewarding career opportunities after graduation.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in the UK"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Graduate Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain valuable UK work experience after completing your studies.
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div className="row g-4 mb-5" data-aos="fade-up">

            <div className="col-12">

                <div className="bg-white p-5 rounded-4 shadow-sm"
                    style={{ borderLeft: `5px solid var(--accent)` }}>

                    <h4 className="fw-bold mb-4" style={{ color: `var(--primary)` }}>
                        Graduate Work Opportunities
                    </h4>

                    <p className="text-muted mb-4">
                        After successfully completing an eligible qualification, international graduates may be eligible to stay and work in the UK through available graduate work routes. This allows students to gain valuable professional experience, improve employability, and build successful careers in one of the world's leading economies.
                    </p>

                    <p className="text-muted mb-0">
                        The UK offers excellent career opportunities across Information Technology, Engineering, Healthcare, Business, Finance, Artificial Intelligence, Data Science, Cyber Security, Education, Hospitality, Construction, and Creative Industries.
                    </p>

                </div>

            </div>

        </div>

        <div className="row g-5 mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-4" style={{ color: `var(--primary)` }}>
                    Benefits of Working While Studying
                </h4>

                <ul className="list-unstyled mb-0" style={{ lineHeight: `2` }}>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Gain valuable UK work experience.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Earn additional income to support your living expenses.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Improve communication, teamwork, and professional skills.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Build a strong resume and professional network.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance career prospects after graduation.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Experience the UK's multicultural workplace environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop practical skills for long-term international career success.
                        </span>
                    </li>

                </ul>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{ background: `var(--primary) !important` }}>

                    <div className="position-absolute"
                        style={{ top: `-20px`, right: `-20px`, opacity: `.1`, fontSize: `150px` }}>
                        <i className="fas fa-globe-europe"></i>
                    </div>

                    <h4 className="fw-bold mb-4 position-relative z-1 text-white">
                        How The Global Ties Can Help
                    </h4>

                    <p className="mb-4 position-relative z-1 text-light"
                        style={{ lineHeight: `1.8`, opacity: `.9` }}>

                        The Global Ties provides complete guidance for students planning to study in the United Kingdom. Our experienced counsellors assist with university selection, admissions, profile evaluation, document verification, Student Visa applications, financial documentation, scholarship guidance, accommodation assistance, pre-departure orientation, and post-arrival support. We also provide guidance on student work rights, graduate work opportunities, and career planning to help you maximize your international education experience.

                    </p>

                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>
                            <strong>Note:</strong> Student work rights, permitted working hours, and graduate work visa eligibility are governed by the UK Government and may change over time. Students should always refer to the latest official immigration guidelines before making employment or visa-related decisions.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>
<section className="canada-intro">
            <div className="layout-container intro-grid">
               
                <div className="intro-content">

<h2 className="section-title">
         Why Choose The Global Ties?
        
          </h2>
                    <p className="hero-description">
                        The Global Ties provides comprehensive end-to-end support for students planning to study in the United Kingdom. Our experienced counsellors offer personalized guidance to help you choose the right university, course, and study destination based on your academic qualifications, career aspirations, and budget.

Our services include university selection, profile evaluation, course counselling, admissions, document verification, Statement of Purpose (SOP) guidance, Student Visa application assistance, financial documentation support, scholarship and education loan guidance, accommodation assistance, pre-departure orientation, travel guidance, and post-arrival support. We ensure a smooth, transparent, and hassle-free process from your initial consultation to your successful arrival in the UK, helping you achieve your study abroad goals with confidence.
</p>                 

                    <div>
                        <a href="javascript:void(0);" className="cta-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                          Read More
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                 <div className="intro-image">
                    <img src="/img/img-for.jpg"
                        alt="Students in the UK" />
                </div>

            </div>
        </section>
 <section className="request-info-section">
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
           <div className="col-lg-5 aos-init aos-animate" data-aos="fade-left">
         <div className="lead-form-card glass-form" style={{ maxWidth: `380px`, margin: `0 auto` }}>
              <h3 className="mb-4 fw-bold">Request Information</h3>
              
              
              <div className="alert alert-success" role="alert" style={{ display: `none`, padding: `10px`, marginBottom: `15px`, borderRadius: `5px`, backgroundColor: `#d4edda`, color: `#155724`, border: `1px solid #c3e6cb` }}>
                Request submitted successfully! Our counselors will contact you soon.
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <input type="text" name="full_name" className="custom-input" placeholder="Full Name" required="" />
                  <PhoneInputWithCountry className="custom-input" placeholder="Phone Number" required={true} />
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

    {/*  Contact Modal  */}
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>UK Student Visa Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Applying for a UK Student Visa requires careful preparation and accurate documentation. Missing or incorrect documents may result in processing delays or visa refusal. The Global Ties guides students through every stage of the application process to ensure a smooth and successful visa journey.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport with at least one blank visa page.</li>
                            <li>Passport should be valid for the duration of travel.</li>
                            <li>Previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Confirmation of Acceptance for Studies (CAS)</strong>
                        <ul className="text-muted mt-2">
                            <li>CAS issued by your UK university.</li>
                            <li>Ensure all details are correct before submitting your visa application.</li>
                            <li>The CAS reference number is required={true} while completing the online visa application.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Visa Application Form</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed online UK Student Visa application.</li>
                            <li>Print and retain the confirmation page for your records.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Proof of Financial Funds</strong>
                        <p className="text-muted mt-2 mb-1">Evidence showing sufficient funds to cover:</p>
                        <ul className="text-muted">
                            <li>First-year tuition fees (or remaining tuition fees stated on the CAS).</li>
                            <li>Living expenses as required={true} under current UK immigration rules.</li>
                            <li>Funds should be maintained for the required={true} period before applying.</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Bank statements</li>
                            <li>Education loan sanction letter</li>
                            <li>Official financial sponsorship letter (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Tuberculosis (TB) Test Certificate</strong>
                        <p className="text-muted mt-2 mb-0">Students applying from eligible countries must submit a valid TB test certificate from an approved clinic.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (if applying for postgraduate studies)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Provisional/Degree Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. English Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">If required={true} by your university:</p>
                        <ul className="text-muted">
                            <li>IELTS</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Other accepted Secure English Language Tests (SELT), where applicable.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Passport-Size Photograph</strong>
                        <p className="text-muted mt-2 mb-0">Recent photograph meeting UK visa specifications (if requested during the application process).</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. ATAS Certificate (If Applicable)</strong>
                        <p className="text-muted mt-2 mb-0">Students enrolling in certain postgraduate science, engineering, or technology courses may require an Academic Technology Approval Scheme (ATAS) certificate before applying for the visa.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Parental Consent (For Students Under 18)</strong>
                        <ul className="text-muted mt-2">
                            <li>Consent letter from parents or legal guardians.</li>
                            <li>Birth certificate or proof of relationship.</li>
                            <li>Supporting documents if accommodation arrangements require parental approval.</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Previous UK visa copies</li>
                        <li>Immigration history documents</li>
                        <li>Sponsorship letter</li>
                        <li>Scholarship award letter</li>
                        <li>Employment documents (if relevant)</li>
                        <li>Marriage certificate (if applicable)</li>
                        <li>Name change affidavit (if applicable)</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Apply</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and CAS.</li>
                        <li>Financial documents meet UK immigration requirements.</li>
                        <li>Documents not in English are accompanied by certified translations.</li>
                        <li>All scanned copies are clear and legible.</li>
                        <li>Original documents are available if requested.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Before travelling to the UK, keep the following ready:</p>
                    <ul className="text-muted">
                        <li>Passport with UK Student Visa</li>
                        <li>CAS Letter</li>
                        <li>University Offer Letter</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Proof of Funds</li>
                        <li>Travel Insurance (recommended)</li>
                        <li>Emergency Contact Details</li>
                        <li>Copies of all important documents</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </main>
  

    
      </main>
      <Footer />
    </>
  );
};

export default StudyInUk;
