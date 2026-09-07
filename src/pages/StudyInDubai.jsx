import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInDubai = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Dubai | Best Dubai Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Dubai with expert education consultants in Coimbatore. Explore world-class international branch campuses, streamlined admissions & rapid visa processing." />
        <meta name="keywords" content="Study in Dubai" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



    

    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Dubai</span></h1>
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
                        Study in Dubai
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/Dubai_img.webp"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in Dubai permanently | the global ties</span>

                    {/*  <h2 className="destinations-title">Why Study in Dubai :</h2>  */}
<h2 className="section-title">
           Study Abroad in{' '}
            <span className="accent-text">Dubai</span>
          </h2>
                    <p className="hero-description">
                     Dubai is a true cosmopolitan and the fastest growing economy in the world. You would undoubtedly pay double the amount of what you are paying here in Dubai. With ample employment opportunities, there are innumerable possibilities to explore your career. International students are attracted towards work opportunities in Dubai.<br />Students desire to complete their academic education in an international destination like Dubai. The Global Ties provide expert advice to students from Coimbatore, Tiruppur, Erode and Ooty in choosing their right career and academic destination. Get in touch with us to know the details regarding courses offered and the admission details along with the fee structure. We also communicate clearly regarding the visa and the work permit requirements that are vital for International students to pursue their education.
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
            <span className="accent-text">Dubai</span>
          </h2>
                    <p className="hero-description">
                       Dubai offers internationally recognized education, world-class research opportunities, flexible study options, English language-based learning, and excellent career prospects that help students build successful global careers. With its modern infrastructure, diverse multicultural environment, and strong connection with global industries, Dubai has become one of the most attractive study destinations for international students.

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
                                        Dubai institutions consistently rank among the best in the world and
                                        qualifications are internationally valued and recognised.
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
                                        The Dubai undertakes 5% of the world's scientific research and produces
                                        14% of the world's most frequently cited academic papers.
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
                                        Dubai institutions offer flexibility of choice, allowing students to
                                        combine academic and vocational courses while tailoring degrees to
                                        their interests through specialized modules.
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
                                        The Dubai teaching methodology encourages creativity, confidence,
                                        independent thinking, and the development of valuable professional
                                        skill sets.
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
                                        Students have the opportunity to learn from world-leading academics
                                        and subject experts while benefiting from continuous academic support.
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
                                            <h4>English Language Advantage</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">
                                        As the home of the English language, Dubai is an ideal destination
                                        for improving communication skills and enhancing global employment
                                        prospects.
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
                                            <h4>Part-Time Work</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">
                                        Students can work part-time during regular academic sessions
                                        (20 hours per week) and full-time during scheduled breaks,
                                        gaining valuable experience while helping cover living expenses.
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
                    <h2 className="destinations-titles">Why International Students Choose Dubai</h2>
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
        <section className="top-universities-section" style={{ padding: `60px 0`, backgroundColor: `#f8f9fa` }}>
            <div className="layout-container">
                <div className="section-header text-center" data-aos="fade-up">
                    <span className="section-subtitle">EXCELLENCE IN EDUCATION</span>
                    <h2 className="section-title">Top Universities <span className="accent-text">& Rankings</span></h2>
                    <p className="hero-description mx-auto text-center " style={{ maxWidth: `700px` }}>Discover globally recognized institutions offering world-class academic excellence and research opportunities.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Global Top 100 University</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li>
                                    <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Birmingham Dubai</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Heriot-Watt University Dubai</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Wollongong in Dubai (UOWD)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Middlesex University Dubai</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Canadian University Dubai (CUD)</span></li>
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
                        <img src="/img/hero_education.webp" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
                    </div>
                </div>
            </div>
        </section>
{/*  Cost of Study Section  */}
<section className="cost-study-section" style={{ padding: `60px 0`, backgroundColor: `#fff` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">FINANCIAL PLANNING</span>
            <h2 className="section-title">
                Cost of Study & <span className="accent-text">Tuition Fees</span>
            </h2>
            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Estimated annual tuition fees for international students studying in Dubai.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">

            <table className="table table-hover table-bordered"
                style={{ background: `#fff`, borderRadius: `10px`, overflow: `hidden` }}>

                <thead style={{ background: `var(--primary)`, color: `#fff` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>Programme Level</th>
                        <th style={{ padding: `15px` }}>Typical Annual Fee</th>
                        <th style={{ padding: `15px` }}>Notes</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Undergraduate (Bachelor's)</td>
                        <td style={{ padding: `15px` }}>AED 35,000 – AED 80,000 / year</td>
                        <td style={{ padding: `15px` }}>Fees depend on university, campus location, and programme.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Postgraduate (Master's)</td>
                        <td style={{ padding: `15px` }}>AED 45,000 – AED 100,000 / year</td>
                        <td style={{ padding: `15px` }}>Business, Engineering, IT, and Management programmes are popular choices.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>MBA</td>
                        <td style={{ padding: `15px` }}>AED 60,000 – AED 150,000+</td>
                        <td style={{ padding: `15px` }}>Premium business schools may charge higher tuition fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>PhD / Doctoral Programmes</td>
                        <td style={{ padding: `15px` }}>AED 50,000 – AED 120,000 / year</td>
                        <td style={{ padding: `15px` }}>Research-based programmes may offer scholarships or funding options.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Medicine & Healthcare Programmes</td>
                        <td style={{ padding: `15px` }}>AED 100,000 – AED 180,000+ / year</td>
                        <td style={{ padding: `15px` }}>Medical programmes have higher tuition and laboratory costs.</td>
                    </tr>

                </tbody>

            </table>

        </div>

    </div>
</section>


{/*  Cost of Living Section  */}
<section className="cost-living-section" style={{ padding: `30px 0`, background: `#f8f9fa` }}>

    <div className="layout-container">

        <div className="section-header text-center mb-2" data-aos="fade-up">

            <span className="section-subtitle">STUDENT EXPENSES</span>

            <h2 className="section-title">
                Cost of Living <span className="accent-text">by City</span>
            </h2>

            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Estimated monthly living expenses for international students in Dubai.
            </p>

        </div>


        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">

            <table className="table table-hover table-bordered"
                style={{ background: `#fff`, borderRadius: `10px`, overflow: `hidden` }}>

                <thead style={{ background: `var(--primary)`, color: `#fff` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>City / Region</th>
                        <th style={{ padding: `15px` }}>Monthly Living Cost</th>
                        <th style={{ padding: `15px` }}>Representative Universities</th>
                    </tr>
                </thead>


                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Dubai City</td>
                        <td style={{ padding: `15px` }}>AED 3,500 – AED 7,000</td>
                        <td style={{ padding: `15px` }}>University of Dubai, Heriot-Watt University Dubai, Middlesex University Dubai</td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Dubai Marina / JBR</td>
                        <td style={{ padding: `15px` }}>AED 5,000 – AED 9,000</td>
                        <td style={{ padding: `15px` }}>American University Dubai, Dubai Knowledge Park Institutions</td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Sharjah</td>
                        <td style={{ padding: `15px` }}>AED 2,500 – AED 5,000</td>
                        <td style={{ padding: `15px` }}>University of Sharjah, American University of Sharjah</td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Abu Dhabi</td>
                        <td style={{ padding: `15px` }}>AED 3,500 – AED 7,000</td>
                        <td style={{ padding: `15px` }}>Khalifa University, Abu Dhabi University</td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Ajman / Northern Emirates</td>
                        <td style={{ padding: `15px` }}>AED 2,000 – AED 4,500</td>
                        <td style={{ padding: `15px` }}>Ajman University, City University Ajman</td>
                    </tr>


                </tbody>

            </table>

        </div>

    </div>

</section>
       {/*  Section 5: Instagram Reels  */}
        <InstagramStories country="Dubai" />
        <section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Dubai
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in Dubai
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Dubai provides international students with opportunities to gain practical work experience while pursuing their studies. Eligible students can explore part-time employment options that help them develop professional skills, earn additional income, and gain exposure to Dubai’s dynamic business environment.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can find part-time job opportunities in sectors such as retail, hospitality, tourism, customer service, administration, marketing, events, restaurants, sales, digital services, and campus-related positions. These opportunities allow students to improve their communication skills and understand international workplace practices.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying helps students become more independent, build professional networks, gain confidence, enhance their resumes, and prepare for future career opportunities in Dubai and across global markets.
                </p>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in Dubai"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Career Opportunities After Graduation
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Build international work experience in Dubai's growing industries.
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
                        Post-Study Work Opportunities
                    </h4>

                    <p className="text-muted mb-4">
                        After completing their qualifications, international graduates in Dubai can explore various career opportunities across multiple industries. Dubai’s strong economy, global companies, and growing business sectors provide excellent platforms for graduates to gain professional experience and develop successful careers.
                    </p>

                    <p className="text-muted mb-0">
                        Dubai offers employment opportunities in industries such as Information Technology, Engineering, Healthcare, Finance, Business Management, Hospitality, Tourism, Real Estate, Marketing, Logistics, Artificial Intelligence, and Digital Innovation.
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
                            Gain valuable international work experience.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Earn additional income to support living expenses.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop communication and workplace skills.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Build professional connections in a global market.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Improve career opportunities after graduation.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Experience Dubai's multicultural professional environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance employability with practical global experience.
                        </span>
                    </li>

                </ul>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

                <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{ background: `var(--primary)!important` }}>

                    <div className="position-absolute"
                        style={{ top: `-20px`, right: `-20px`, opacity: `.1`, fontSize: `150px` }}>
                        <i className="fas fa-globe-asia"></i>
                    </div>


                    <h4 className="fw-bold mb-4 position-relative z-1 text-white">
                        How The Global Ties Can Help
                    </h4>

                    <p className="mb-4 position-relative z-1 text-light"
                        style={{ lineHeight: `1.8`, opacity: `.9` }}>

                        The Global Ties provides complete guidance for students planning to study in Dubai. Our experienced counsellors assist with university selection, admissions, document verification, student visa applications, financial documentation, accommodation guidance, pre-departure orientation, and post-arrival support. We also guide students regarding career opportunities, work options, and professional development to ensure a successful study abroad journey.

                    </p>


                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work permissions, permitted working hours, and employment regulations in Dubai are subject to UAE immigration and labour laws, which may change over time. Students should always verify the latest regulations before accepting employment opportunities.

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
                        The Global Ties provides comprehensive end-to-end support for students planning to study in Dubai. Our experienced counsellors offer personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career goals, interests, and budget.

Our services include university selection, course and program guidance, profile evaluation, admission application assistance, document verification, Statement of Purpose (SOP) guidance, financial documentation support, Student Visa application assistance, visa process guidance, scholarship information, accommodation assistance, pre-departure orientation, travel guidance, and post-arrival support.
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
                        alt="Students in Dubai" />
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
  

    

    {/*  Dubai Details Modal  */}
    <div className="modal fade" id="dubaiModal" tabIndex="-1" aria-labelledby="dubaiModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="dubaiModalLabel" style={{ color: `var(--primary)` }}>Why Study in Dubai?</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <p className="text-muted mb-4">Dubai (UAE) is a fast-rising study destination offering world-class education, branch campuses of leading UK, US and Australian universities, tax-free income, and a safe, modern, multicultural lifestyle just a short flight from India.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Key Benefits</h5>
                    <ul className="text-muted">
                        <li>Branch campuses of top global universities</li>
                        <li>Tax-free salaries and a strong job market</li>
                        <li>Safe, modern and multicultural</li>
                        <li>Close to India — short, affordable flights</li>
                        <li>Large Indian community</li>
                        <li>Gateway to Middle East & global careers</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Intakes in Dubai</h5>
                    <p className="text-muted mb-1">Dubai universities have two main intakes: September and January, with some offering additional start dates. Apply 3–6 months in advance.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Tuition Fees in Dubai</h5>
                    <p className="text-muted mb-1">Tuition typically ranges from AED 35,000–AED 70,000 per year (about ₹8–16 lakh), depending on the university and program.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Cost of Living in Dubai</h5>
                    <p className="text-muted mb-1">Living costs are around AED 30,000–AED 45,000 per year, with Dubai offering modern accommodation, transport and amenities. Sharing helps reduce costs.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Work & Job Opportunities</h5>
                    <p className="text-muted mb-1">Students can work part-time with the required={true} permits. The UAE offers strong post-study work and residency options, including the long-term Green Visa for skilled graduates — plus a tax-free salary.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Student Visa Requirements</h5>
                    <ul className="text-muted mt-2">
                        <li>Admission offer from a licensed university</li>
                        <li>Student residence visa (sponsored by the university)</li>
                        <li>Proof of funds & tuition payment</li>
                        <li>IELTS / approved English test</li>
                        <li>Valid passport & photos</li>
                        <li>Medical fitness test</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Accommodation in Dubai</h5>
                    <p className="text-muted mb-1">Options include university housing and shared private apartments — modern, well-connected and safe. The Global Ties helps you find suitable accommodation before arrival.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Student Life & Lifestyle</h5>
                    <p className="text-muted mb-1">Dubai offers a safe, modern, multicultural lifestyle with world-class facilities, beaches, malls and a huge Indian community — Indian food, festivals and culture are everywhere.</p>
                </div>
            </div>
        </div>
    </div>

    {/*  Contact / Visa Checklist Modal  */}
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>UAE Student Visa Checklist for International Students</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Studying in the United Arab Emirates (UAE) offers access to globally recognised universities, modern campuses, and excellent career opportunities. To obtain a UAE Student Visa (Student Residence Visa), students must receive admission from a recognised UAE institution and submit the required={true} documents. Most universities sponsor the student visa application on behalf of the student.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport with a minimum of 6 months validity.</li>
                            <li>Passport should have sufficient blank pages for visa stamping.</li>
                            <li>Copies of previous UAE visas (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. University Admission Letter</strong>
                        <ul className="text-muted mt-2">
                            <li>Official Admission/Offer Letter issued by a recognised UAE university or college.</li>
                            <li>The letter should mention the programme, duration, and admission confirmation.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Student Visa Application Form</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed visa application form provided by the university.</li>
                            <li>Ensure all details match your passport and admission records.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Passport-Size Photographs</strong>
                        <ul className="text-muted mt-2">
                            <li>Recent passport-size photographs with a white background.</li>
                            <li>As per UAE immigration specifications.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Tuition Fee Payment Receipt</strong>
                        <ul className="text-muted mt-2">
                            <li>Receipt or proof of payment of tuition fees (if required={true} by the institution).</li>
                            <li>Some universities may request confirmation of the initial tuition payment.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Students should provide evidence demonstrating sufficient financial resources to cover Tuition fees, Accommodation, and Living expenses.</p>
                        <p className="text-muted mt-2 mb-1">Accepted documents include:</p>
                        <ul className="text-muted">
                            <li>Recent bank statements</li>
                            <li>Sponsor's bank statements</li>
                            <li>Education loan sanction letter</li>
                            <li>Scholarship or sponsorship letter (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for postgraduate applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Transfer Certificate (if required={true})</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. English Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">If required={true} by the university:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>TOEFL iBT</li>
                            <li>PTE Academic</li>
                            <li>Other accepted English language qualifications</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Medical Fitness Test</strong>
                        <p className="text-muted mt-2 mb-0">Students aged 18 years and above must undergo a medical fitness examination after arrival in the UAE, as part of the residence visa process.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Health Insurance</strong>
                        <p className="text-muted mt-2 mb-0">Valid health insurance is generally mandatory for international students. In many cases, the university arranges or facilitates the insurance.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Emirates ID Application</strong>
                        <p className="text-muted mt-2 mb-0">Students must complete the Emirates ID registration process after arrival, including biometrics where required={true}, as part of the residence visa procedure.</p>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Previous UAE Visa Copies</li>
                        <li>Sponsor/Guardian Passport Copy</li>
                        <li>No Objection Certificate (NOC) from Parent or Sponsor (for eligible cases)</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Marriage Certificate (if applicable)</li>
                        <li>Name Change Affidavit</li>
                        <li>Police Clearance Certificate (if requested)</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and admission letter.</li>
                        <li>Academic documents are complete and accurate.</li>
                        <li>Financial documents clearly demonstrate your ability to fund your education.</li>
                        <li>All scanned copies are clear and legible.</li>
                        <li>Original documents are available if requested by the university or immigration authorities.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport with UAE Student Visa/Entry Permit</li>
                        <li>University Admission Letter</li>
                        <li>Tuition Fee Receipt</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Health Insurance Documents</li>
                        <li>Copies of Academic Certificates</li>
                        <li>Financial Documents</li>
                        <li>Emergency Contact Details</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Why Choose The Global Ties?</h5>
                    <p className="text-muted mt-3 mb-0">The Global Ties provides complete assistance for students planning to study in the UAE. Our expert counsellors support you through university selection, admission processing, document verification, student visa application, financial documentation, travel planning, pre-departure guidance, and post-arrival support, ensuring a smooth transition to your academic journey in the United Arab Emirates.</p>
                </div>
            </div>
        </div>
    </div>
      </main>
      <Footer />
    </>
  );
};

export default StudyInDubai;
