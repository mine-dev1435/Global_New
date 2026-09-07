import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInNewzealand = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in New Zealand | Best New Zealand Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in New Zealand with expert education consultants in Coimbatore. Get trusted guidance on top university admissions, student visa assistance & post-study work pathways." />
        <meta name="keywords" content="Study in New Zealand" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



  

    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> New Zealand</span></h1>
      <p>Balance academic excellence with an incredible lifestyle. Enjoy safe, welcoming communities and breathtaking landscapes while you learn.</p>
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
                        Study in New Zealand
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/gril.jpg"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in New zealand  permanently | the global ties</span>

                    <h2 className="section-title">
                        Why Study in
                        <span className="accent-text">New zealand </span>
                    </h2>

                    <p className="hero-description">
                        New Zealand, famous for its amazing scenery, is a great country - a fun place to visit and a superb study destination.<br /><br />
                        New Zealand is around the same size as Japan or Great Britain. The countryside is unique and quite spectacular, from rolling green hills to golden sand beaches then lush rainforests, all within a few hours drive. New Zealand has just over four million people, know affectionately as 'Kiwis', who are easy going, warm and welcoming to their neighbours and to those who travel to experience all that is New Zealand. New Zealanders travel overseas a lot and this means they are well used to a range of cultures. New Zealand itself is a multi-cultural nation, with a fusion of Maori (the indigenous people), Pacific Island, European and Asian people combining to make a vibrant and colourful society.<br /><br />
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
            <span className="accent-text">New Zealand</span>
          </h2>
            <p className="hero-description">
              New Zealand offers world-class education, globally recognized qualifications, excellent career opportunities, and flexible study options. With innovative teaching methods, research-focused universities, and a safe, welcoming environment, it provides students with the knowledge, skills, and international exposure needed to build successful global careers.
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
                            <h4>Globally Recognized Qualifications</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>
                    <p className="card-text">
                        New Zealand qualifications are highly respected worldwide for being practical, modern, and
                        industry-focused. All courses and programs are quality assured by the New Zealand Government,
                        making graduates highly valued by employers globally.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 2  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Work Permit After Study</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Students who successfully complete their course can automatically receive a 12-month Work
                        Permit under New Zealand's student visa policy. This allows graduates to work full-time in
                        jobs of their choice and gain valuable international experience.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 3  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Permanent Residency Pathway</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>
                    <p className="card-text">
                        New Zealand provides excellent opportunities for students who wish to settle permanently.
                        With strong demand for skilled professionals and abundant job opportunities, graduates can
                        build successful careers and pursue long-term residency options.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 4  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Recover Your Investment</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Even if graduates do not immediately secure a job related to their field, they can continue
                        working for up to 12 months, helping recover a substantial portion of their education
                        investment while gaining international work exposure.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 5  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Study Loans After PR</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Once students obtain Permanent Residency, they become eligible for New Zealand Government
                        study loans. This allows them to continue higher education with financial support and repay
                        the loan after completing their studies.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 6  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Unlimited Work Opportunities</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        After acquiring Permanent Residency, students can work without the usual 20-hours-per-week
                        restriction while pursuing further studies. This offers greater financial independence and
                        enhanced career growth opportunities.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
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
                    <h2 className="destinations-titles">Why International Students Choose New Zealand</h2>
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
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Auckland</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Otago</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Victoria University of Wellington</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Canterbury</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Massey University</span></li>
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
                        <img src="/img/Newzeland-study.png" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
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
                Tuition fee comparison by programme level in New Zealand.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">

            <table className="table table-hover table-bordered"
                style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>

                <thead style={{ background: `var(--primary)`, color: `white` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>Programme Level</th>
                        <th style={{ padding: `15px` }}>Typical Annual Fee</th>
                        <th style={{ padding: `15px` }}>Notes</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Undergraduate (Bachelor's)</td>
                        <td style={{ padding: `15px` }}>NZD 22,000 – NZD 40,000 / year</td>
                        <td style={{ padding: `15px` }}>Engineering, Medicine and Veterinary courses generally cost more.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Postgraduate Master's</td>
                        <td style={{ padding: `15px` }}>NZD 26,000 – NZD 45,000 / year</td>
                        <td style={{ padding: `15px` }}>Research programmes may qualify for domestic tuition benefits.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>MBA</td>
                        <td style={{ padding: `15px` }}>NZD 35,000 – NZD 65,000+</td>
                        <td style={{ padding: `15px` }}>Executive and internationally ranked MBA programmes have higher fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>PhD / Doctoral</td>
                        <td style={{ padding: `15px` }}>NZD 7,000 – NZD 10,000 / year</td>
                        <td style={{ padding: `15px` }}>Many international PhD students pay domestic tuition rates.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Diploma / Graduate Diploma</td>
                        <td style={{ padding: `15px` }}>NZD 18,000 – NZD 30,000 / year</td>
                        <td style={{ padding: `15px` }}>Popular pathway for skill development and career advancement.</td>
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
            <h2 className="section-title">
                Cost of Living <span className="accent-text">by City</span>
            </h2>
            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Estimated monthly living expenses for international students in New Zealand.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">

            <table className="table table-hover table-bordered"
                style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>

                <thead style={{ background: `var(--primary)`, color: `white` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>City</th>
                        <th style={{ padding: `15px` }}>Monthly Living Cost</th>
                        <th style={{ padding: `15px` }}>Representative Universities</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Auckland</td>
                        <td style={{ padding: `15px` }}>NZD 1,600 – NZD 2,500</td>
                        <td style={{ padding: `15px` }}>University of Auckland, AUT</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Wellington</td>
                        <td style={{ padding: `15px` }}>NZD 1,500 – NZD 2,300</td>
                        <td style={{ padding: `15px` }}>Victoria University of Wellington, Massey University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Christchurch</td>
                        <td style={{ padding: `15px` }}>NZD 1,300 – NZD 2,000</td>
                        <td style={{ padding: `15px` }}>University of Canterbury, Lincoln University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Hamilton</td>
                        <td style={{ padding: `15px` }}>NZD 1,200 – NZD 1,900</td>
                        <td style={{ padding: `15px` }}>University of Waikato</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Dunedin</td>
                        <td style={{ padding: `15px` }}>NZD 1,100 – NZD 1,800</td>
                        <td style={{ padding: `15px` }}>University of Otago</td>
                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</section>
        {/*  Section 5: Instagram Reels  */}
       <InstagramStories country="New Zealand" />
        <section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in New Zealand
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in New Zealand
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    New Zealand offers international students excellent opportunities to gain practical work experience while completing their studies. Eligible students can work part-time during academic sessions and full-time during scheduled holidays, helping them earn additional income while developing valuable workplace skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can find part-time employment in retail, hospitality, customer service, tourism, supermarkets, restaurants, administration, agriculture, logistics, warehouses, healthcare support, and on-campus positions. These jobs provide real-world experience and help students understand New Zealand's professional work culture.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying enables students to become financially independent, improve communication skills, build confidence, expand professional networks, and strengthen their resumes for future career opportunities.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in New Zealand"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain valuable New Zealand work experience after graduation.
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
                        After successfully completing an eligible qualification, many international graduates may qualify for post-study work opportunities that allow them to gain valuable New Zealand work experience. This practical experience enhances employability, strengthens career prospects, and opens pathways to long-term professional growth.
                    </p>

                    <p className="text-muted mb-0">
                        New Zealand offers excellent employment opportunities across industries such as Information Technology, Engineering, Healthcare, Nursing, Business, Construction, Agriculture, Tourism, Hospitality, Education, Environmental Science, and Skilled Trades.
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
                            Gain valuable New Zealand work experience.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Earn income to support your living expenses.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop communication and professional workplace skills.
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
                            Improve career opportunities after graduation.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Experience New Zealand's friendly and multicultural work environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance employability with practical international work experience.
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

                        The Global Ties provides complete guidance for students planning to study in New Zealand. Our experienced counsellors assist with university selection, admissions, document verification, student visa applications, financial documentation, scholarship guidance, accommodation assistance, pre-departure orientation, and post-arrival support. We also help students understand work rights, post-study opportunities, and career planning to ensure a successful study abroad journey.

                    </p>

                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work rights, permitted working hours, and post-study work visa eligibility are governed by Immigration New Zealand and may change over time. Students should always check the latest immigration regulations before making employment or visa-related decisions.

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
                                 The Global Ties provides comprehensive end-to-end support for students planning to study in Canada, ensuring a smooth and stress-free journey from the initial consultation to successful settlement. Our experienced counsellors offer personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career aspirations, and budget. Our services include university and college admissions, profile evaluation, course selection, document verification, application preparation, Statement of Purpose (SOP) review, Letter of Recommendation (LOR) guidance, resume preparation, study permit application assistance, financial documentation support, education loan guidance, scholarship assistance, biometric appointment support, medical examination guidance, visa interview preparation, and continuous application tracking.   </p>                 

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
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>New Zealand Student Visa (Fee Paying Student Visa) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">New Zealand is a globally recognised study destination known for its world-class education, practical learning approach, excellent quality of life, and attractive post-study work opportunities. International students enrolling in full-time courses longer than three months generally require a Fee Paying Student Visa issued by Immigration New Zealand.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for at least 3 months beyond your intended departure from New Zealand.</li>
                            <li>Passport should have sufficient blank pages.</li>
                            <li>Previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Offer of Place</strong>
                        <p className="text-muted mt-2 mb-1">Official Offer of Place from a New Zealand Qualifications Authority (NZQA)-approved education provider.</p>
                        <p className="text-muted mt-2 mb-1">The offer should include:</p>
                        <ul className="text-muted">
                            <li>Course name</li>
                            <li>Duration</li>
                            <li>Tuition fees</li>
                            <li>Start and end dates.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Student Visa Application</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed online Fee Paying Student Visa application.</li>
                            <li>Visa application fee payment confirmation.</li>
                            <li>All information must match your passport and admission documents.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Proof of Tuition Fee Payment</strong>
                        <ul className="text-muted mt-2">
                            <li>Official tuition fee receipt.</li>
                            <li>Bank payment confirmation.</li>
                            <li>Scholarship confirmation (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Provide evidence that you have sufficient funds to cover:</p>
                        <ul className="text-muted">
                            <li>Tuition fees</li>
                            <li>Living expenses</li>
                            <li>Return travel costs</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent Bank Statements</li>
                            <li>Education Loan Sanction Letter</li>
                            <li>Fixed Deposit Certificates</li>
                            <li>Sponsor's Financial Documents</li>
                            <li>Scholarship Award Letter</li>
                        </ul>
                        <p className="text-muted mb-0">For most tertiary students, Immigration New Zealand generally requires evidence of NZD 20,000 per year (or NZD 1,667 per month for courses shorter than one year) towards living expenses.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for postgraduate applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Transfer Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. English Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">Provide valid English language test scores where required={true}:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Other accepted English language qualifications.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Statement of Purpose (SOP)</strong>
                        <p className="text-muted mt-2 mb-1">A well-written Statement of Purpose explaining:</p>
                        <ul className="text-muted">
                            <li>Why you chose New Zealand</li>
                            <li>Why you  your institution and programme</li>
                            <li>Your academic background</li>
                            <li>Career goals</li>
                            <li>Your genuine intention to study in New Zealand.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Medical Examination</strong>
                        <p className="text-muted mt-2 mb-1">Applicants may be required={true} to undergo:</p>
                        <ul className="text-muted">
                            <li>Medical Examination</li>
                            <li>Chest X-ray through an approved panel physician, depending on the duration of study and individual circumstances.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Police Clearance Certificate (If required={true})</strong>
                        <p className="text-muted mt-2 mb-0">Applicants may need to provide a Police Clearance Certificate to satisfy character requirements, depending on their circumstances and duration of stay.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent passport-size photographs meeting New Zealand visa specifications.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">12. Accommodation Details</strong>
                        <p className="text-muted mt-2 mb-1">Provide accommodation information, such as:</p>
                        <ul className="text-muted">
                            <li>University Hostel Confirmation</li>
                            <li>Rental Agreement</li>
                            <li>Homestay Confirmation</li>
                            <li>Temporary Accommodation Booking (if applicable)</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Resume / Curriculum Vitae (CV)</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Employment Experience Certificates</li>
                        <li>Internship Certificates</li>
                        <li>Previous Visa Copies</li>
                        <li>Marriage Certificate (if applicable)</li>
                        <li>Name Change Affidavit</li>
                        <li>Certified translations for documents not in English</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and Offer of Place.</li>
                        <li>Tuition fee receipts are attached.</li>
                        <li>Financial documents clearly demonstrate sufficient funds.</li>
                        <li>Your Statement of Purpose is original and professionally written.</li>
                        <li>Medical and police documents are valid (if required={true}).</li>
                        <li>All uploaded documents are clear and legible.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport with New Zealand Student Visa</li>
                        <li>Offer of Place</li>
                        <li>Tuition Fee Receipt</li>
                        <li>Financial Documents</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Medical Insurance Documents (if applicable)</li>
                        <li>Academic Certificates</li>
                        <li>Emergency Contact Details</li>
                        <li>Copies of all important documents.</li>
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

export default StudyInNewzealand;
