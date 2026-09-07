import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInCanada = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Canada | Best Canada Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Canada with expert education consultants in Coimbatore. The Global Ties offers complete guidance for top Canadian university admissions, student visa & scholarships." />
        <meta name="keywords" content="Study in Canada" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}
        <section className="about-hero">
            <div className="container aos-init aos-animate" data-aos="fade-up">
              <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Canada</span></h1>
              <p>Bridging the gap between your educational dreams and global realities. We are your trusted partners in international education and career advancement.</p>
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
                        Study in Canada
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
    <div className="layout-container intro-grid">
        <div className="intro-image">
            <img src="/img/STUDY.png"
                alt="Students in Canada" />
        </div>

        <div className="intro-content">
            <span className="gold-label">Staying in Canada permanently | the global ties</span>

            <h2 className="section-title">
                Why Study in
                <span className="accent-text">CANADA </span>
            </h2>

            <p className="hero-description">
                Canada has one of the best and most respected education systems in the world. Every year, thousands of students from other countries pursue their educational goals in Canada.
                <br /><br />
                With new ways to gain valuable Canadian work experience during and after your studies, the advantages of studying in Canada are great. There are also permanent immigration options for international students who have graduated from post-secondary programs in Canada.
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
 <h2 className="section-title">
           Why Choose{' '}
            <span className="accent-text">Canada</span>
          </h2>
                    <p className="hero-description">At The Global Ties, we provide end-to-end guidance throughout your study abroad journey from selecting the right university and program to application support, scholarship guidance, visa assistance, pre-departure preparation, and post-arrival support. Our experienced counsellors are dedicated to helping you make informed decisions and achieve your educational and career aspirations with confidence.</p>

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
                                            <h4>Working on campus</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">If you have a valid study permit, you may be able to work on
                                        the campus of the institution you attend without a work permit. You can work for
                                        the institution itself, or for a private business located on the campus.</p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                        &rarr;</a>
                                </div>
                            </div>
                            {/*  Card 2  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Working off campus</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">To work off campus, you must have a work permit. Through the
                                        Off-Campus Work Permit Program, you can work part-time during regular academic
                                        sessions (20 hours per week) and full-time during scheduled breaks, such as
                                        winter and summer holidays, and spring break. You can work in any occupation,
                                        and you can change employers whenever you like.</p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                        &rarr;</a>
                                </div>
                            </div>
                            {/*  Card 3  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Working after graduation</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">The Post-Graduation/Diploma Work Permit Program allows you to
                                        gain valuable Canadian work experience after you have completed your studies in
                                        Canada. This can help you apply to become a permanent resident of Canada.</p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                        &rarr;</a>
                                </div>
                            </div>
                            {/*  Card 4  */}
                            <div className="opp-slide">
                                <div className="opp-card luxury-card">
                                    <div className="card-author-area">
                                        <div className="author-info">
                                            <h4>Staying permanently</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">If you want to make Canada your permanent home, there are a
                                        number of ways to apply. In most cases, you will not need to leave Canada.</p>
                                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                        &rarr;</a>
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
                    <h2 className="destinations-titles">Why International Students Choose Canada</h2>
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
                    <p className="hero-description mx-auto text-center" style={{ maxWidth: `700px` }}>Discover globally recognized institutions offering world-class academic excellence and research opportunities.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Global Top 100 University</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li>
                                    <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Toronto</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>McGill University</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of British Columbia (UBC)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Alberta</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Waterloo</span></li>
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
                        <img src="/img/canada_study.jpeg" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
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
            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Tuition fee comparison by programme level in Canada.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
            <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden`, marginBottom: `0` }}>
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
                        <td style={{ padding: `20px` }}>CAD 18,000 – CAD 40,000 / year</td>
                        <td style={{ padding: `20px` }}>Fees vary depending on university and program.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `20px`, fontWeight: `bold` }}>Postgraduate Master's</td>
                        <td style={{ padding: `20px` }}>CAD 17,000 – CAD 35,000 / year</td>
                        <td style={{ padding: `20px` }}>MBA and professional programs generally cost more.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `20px`, fontWeight: `bold` }}>MBA</td>
                        <td style={{ padding: `20px` }}>CAD 30,000 – CAD 70,000+</td>
                        <td style={{ padding: `20px` }}>Top business schools charge premium tuition fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `20px`, fontWeight: `bold` }}>PhD / Doctoral</td>
                        <td style={{ padding: `20px` }}>CAD 7,000 – CAD 20,000 / year</td>
                        <td style={{ padding: `20px` }}>Many universities offer scholarships and research funding.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `20px`, fontWeight: `bold` }}>Diploma / Advanced Diploma</td>
                        <td style={{ padding: `20px` }}>CAD 14,000 – CAD 25,000 / year</td>
                        <td style={{ padding: `20px` }}>Popular option at public colleges with strong career outcomes.</td>
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
            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Estimated monthly living expenses for international students in Canada.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
            <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>
                <thead style={{ background: `var(--primary)`, color: `white` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>City / Province</th>
                        <th style={{ padding: `15px` }}>Monthly Living Cost</th>
                        <th style={{ padding: `15px` }}>Representative Universities</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Toronto, Ontario</td>
                        <td style={{ padding: `15px` }}>CAD 1,800 – CAD 2,800</td>
                        <td style={{ padding: `15px` }}>University of Toronto, Toronto Metropolitan University, York University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Vancouver, British Columbia</td>
                        <td style={{ padding: `15px` }}>CAD 1,700 – CAD 2,700</td>
                        <td style={{ padding: `15px` }}>University of British Columbia, Simon Fraser University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Montreal, Quebec</td>
                        <td style={{ padding: `15px` }}>CAD 1,200 – CAD 2,000</td>
                        <td style={{ padding: `15px` }}>McGill University, Concordia University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Calgary / Edmonton, Alberta</td>
                        <td style={{ padding: `15px` }}>CAD 1,200 – CAD 2,000</td>
                        <td style={{ padding: `15px` }}>University of Calgary, University of Alberta</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Ottawa / Winnipeg / Halifax</td>
                        <td style={{ padding: `15px` }}>CAD 1,100 – CAD 1,800</td>
                        <td style={{ padding: `15px` }}>University of Ottawa, University of Manitoba, Dalhousie University</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</section>
        {/*  Section 5: Instagram Reels  */}
      <InstagramStories country="Canada" />

        {/*  Work Opportunities Section  */}
        <section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
            <div className="layout-container">
                <div className="section-header text-center mb-5" data-aos="fade-up">
                    <span className="section-subtitle">CAREER & EARNINGS</span>
                    <h2 className="section-title">Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Canada</h2>
                </div>
                
                <div className="row g-5 align-items-center mb-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Part-Time Jobs in Canada</h4>
                        <p className="text-muted" style={{ lineHeight: `1.8` }}>Canada offers international students excellent opportunities to gain valuable work experience while pursuing their studies. Eligible students can work part-time during academic sessions and full-time during scheduled breaks, helping them develop professional skills, build industry connections, and contribute toward their living expenses.</p>
                        <p className="text-muted" style={{ lineHeight: `1.8` }}>Part-time jobs are available across a wide range of industries, including retail, hospitality, customer service, restaurants, warehouses, administration, healthcare support, and campus-based roles. These opportunities allow students to improve their communication skills, gain Canadian workplace experience, and enhance their resumes while balancing their academic commitments.</p>
                        <p className="text-muted" style={{ lineHeight: `1.8` }}>Working during your studies not only provides financial support but also helps you adapt to Canadian workplace culture, build confidence, and prepare for future career opportunities after graduation.</p>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="position-relative">
                            <img src="/img/part-time.webp" alt="Work in Canada" className="img-fluid rounded-4 shadow-lg w-100"  />
                            <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4" style={{ background: `linear-gradient(to top, rgba(9, 30, 62, 0.9), transparent)` }}>
                                <h5 className="text-white fw-bold mb-1">Post-Graduation Work Opportunities</h5>
                                <p className="text-white opacity-75 mb-0" style={{ fontSize: `0.9rem` }}>Establish yourself in Canada's competitive job market.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-5" data-aos="fade-up">
                    <div className="col-12">
                        <div className="bg-white p-5 rounded-4 shadow-sm" style={{ borderLeft: `5px solid var(--accent)` }}>
                            <h4 className="fw-bold mb-4" style={{ color: `var(--primary)` }}>Post-Graduation Work Opportunities</h4>
                            <p className="text-muted mb-4">After successfully completing an eligible program, many international graduates may qualify for post-graduation work opportunities, allowing them to gain valuable Canadian work experience. This experience can strengthen career prospects, improve employability, and help graduates establish themselves in Canada's competitive job market.</p>
                            <p className="text-muted mb-0">Canada's growing industries—including Information Technology, Engineering, Healthcare, Finance, Business, Construction, Hospitality, and Skilled Trades—offer excellent employment opportunities for qualified graduates.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <h4 className="fw-bold mb-4" style={{ color: `var(--primary)` }}>Benefits of Working While Studying</h4>
                        <div className="row g-3">
                            <div className="col-12">
                                <ul className="list-unstyled mb-0" style={{ lineHeight: `2` }}>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Gain valuable Canadian work experience.</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Earn income to help with living expenses.</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Develop communication and professional skills.</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Build a strong resume and professional network.</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Improve employment opportunities after graduation.</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-3">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Gain exposure to Canadian workplace culture.</span>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}><i className="fas fa-check-circle fs-5"></i></div>
                                        <span className="text-muted fw-bold">Enhance career prospects through practical experience.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden" style={{ background: `var(--primary) !important` }}>
                            <div className="position-absolute" style={{ top: `-20px`, right: `-20px`, opacity: `0.1`, fontSize: `150px` }}>
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h4 className="fw-bold mb-4 position-relative z-1 text-white">How The Global Ties Can Help</h4>
                            <p className="mb-4 position-relative z-1 text-light" style={{ lineHeight: `1.8`, opacity: `0.9` }}>At The Global Ties, we guide students throughout their Canadian education journey. Our experienced counsellors provide assistance with university selection, admissions, study permit applications, financial documentation, and pre-departure preparation. We also offer guidance on understanding student work eligibility, post-study work opportunities, and career planning, helping you make informed decisions and maximize your international education experience.</p>
                            <div className="p-3 rounded-3 position-relative z-1" style={{ background: `rgba(255,255,255,0.1)`, borderLeft: `3px solid var(--accent)` }}>
                                <p className="mb-0 small" style={{ opacity: `0.8` }}><strong>Note:</strong> Work eligibility, the number of hours students may work, and post-graduation work permit requirements are determined by the Canadian government and may change over time. Students should always ensure they meet the latest eligibility requirements and follow current immigration regulations.</p>
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
The Global Ties provides comprehensive end-to-end support for students planning to study in Canada, ensuring a smooth and stress-free journey from the initial consultation to successful settlement. Our experienced counsellors offer personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career aspirations, and budget.

Our services include university and college admissions, profile evaluation, course selection, document verification, application preparation, Statement of Purpose (SOP) review, Letter of Recommendation (LOR) guidance, resume preparation, study permit application assistance, financial documentation support, education loan guidance, scholarship assistance, biometric appointment support, medical examination guidance, visa interview preparation, and continuous application tracking.</p>                 

                    <div>
                        <a href="javascript:void(0);" className="cta-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                          Read More
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                 <div className="intro-image">
                    <img src="/img/img-for.jpg"
                        alt="Students in Canada" />
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

    {/*  Contact Modal  */}
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>Canada Student Visa (Study Permit) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Applying for a Canadian Study Permit requires accurate documentation and careful preparation. Missing or incomplete documents can lead to delays or refusal of your application. The Global Ties provides complete guidance to help students prepare a strong and successful visa application.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for the duration of your studies.</li>
                            <li>At least one blank page.</li>
                            <li>Copies of previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Letter of Acceptance (LOA)</strong>
                        <ul className="text-muted mt-2">
                            <li>Official Letter of Acceptance from a Canadian Designated Learning Institution (DLI).</li>
                            <li>The LOA must include your program details, start date, tuition fees, and DLI number.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Provincial Attestation Letter (PAL) / Territorial Attestation Letter (TAL)</strong>
                        <ul className="text-muted mt-2">
                            <li>required={true} for most international students applying for a Canadian Study Permit.</li>
                            <li>Students studying in Quebec may need a Quebec Acceptance Certificate (CAQ) instead.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Completed Study Permit Application</strong>
                        <ul className="text-muted mt-2">
                            <li>Complete the online Study Permit application through the IRCC portal.</li>
                            <li>Ensure all information matches your passport and Letter of Acceptance.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Provide evidence that you can cover:</p>
                        <ul className="text-muted">
                            <li>Tuition fees</li>
                            <li>Living expenses</li>
                            <li>Return transportation costs (if applicable)</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent bank statements</li>
                            <li>Education loan sanction letter</li>
                            <li>Guaranteed Investment Certificate (GIC), where applicable</li>
                            <li>Scholarship or sponsorship letter</li>
                            <li>Tuition fee payment receipt</li>
                            <li>Income documents of sponsor/parents</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for postgraduate applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Backlog Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. English Language Test Score</strong>
                        <p className="text-muted mt-2 mb-1">If required={true} by your institution:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Other accepted English language tests</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Letter of Explanation (Statement of Purpose)</strong>
                        <p className="text-muted mt-2 mb-1">A well-written Letter of Explanation should clearly explain:</p>
                        <ul className="text-muted">
                            <li>Why you chose Canada</li>
                            <li>Why you  the institution and program</li>
                            <li>Your academic and career goals</li>
                            <li>Your intention to comply with study permit conditions</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent photographs meeting IRCC photo specifications.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Medical Examination</strong>
                        <p className="text-muted mt-2 mb-1">If required={true}:</p>
                        <ul className="text-muted">
                            <li>Immigration Medical Examination (IME)</li>
                            <li>Conducted only by an IRCC-approved Panel Physician.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Biometrics</strong>
                        <p className="text-muted mt-2 mb-1">Most applicants are required={true} to provide:</p>
                        <ul className="text-muted">
                            <li>Fingerprints</li>
                            <li>Digital Photograph at an authorized Visa Application Centre (VAC).</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Police Clearance Certificate (if requested)</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Marriage Certificate</li>
                        <li>Name Change Affidavit</li>
                        <li>Previous Canadian Visa Copies</li>
                        <li>Employment Experience Letters</li>
                        <li>Resume/CV (for postgraduate applicants)</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and Letter of Acceptance.</li>
                        <li>Financial documents satisfy current IRCC requirements.</li>
                        <li>Documents not in English or French are translated by a certified translator.</li>
                        <li>All uploaded copies are clear and legible.</li>
                        <li>Original documents are available upon request.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Study Permit Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport</li>
                        <li>Port of Entry (POE) Letter of Introduction</li>
                        <li>Valid Temporary Resident Visa (TRV) or Electronic Travel Authorization (eTA), if applicable</li>
                        <li>Letter of Acceptance</li>
                        <li>Tuition Fee Receipt</li>
                        <li>Proof of Funds</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Medical Insurance (recommended)</li>
                        <li>Copies of all important documents</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </main>
      <Footer />
    </>
  );
};

export default StudyInCanada;
