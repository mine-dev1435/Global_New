import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInUsa = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in USA | Best USA Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in USA with expert education consultants in Coimbatore. Comprehensive assistance for university shortlisting, I-20 documentation, F-1 visa interview prep & scholarships." />
        <meta name="keywords" content="Study in USA" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



  

    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> the USA</span></h1>
      <p>Unlock your potential with access to cutting-edge research, diverse programs, and some of the world's highest-ranked universities.</p>
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
                        Study in USA
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/day-time.webp"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in USA permanently | the global ties</span>

<h2 className="section-title">
Why Study in
            <span className="accent-text">USA</span>
          </h2>
                    <p className="hero-description">
                        The United States has established itself as one of the world’s most preferred study destinations, offering a globally recognized education system, innovative learning methods, and excellent career opportunities. American universities are known for their academic excellence, advanced research facilities, diverse programs, and strong connections with global industries.

Some of the key advantages of choosing the USA for higher education include:

Globally Recognized Education System

A degree from a US university is highly valued and respected worldwide. American institutions maintain high academic standards and provide students with internationally recognized qualifications that enhance career opportunities across the globe.
</p>   

                    
                    <div>
                        <a href="javascript:void(0);" className="cta-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                           Read more
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
            <span className="accent-text">the USA</span>
          </h2>
            <p className="hero-description">
               The USA offers world-class education, globally recognized degrees, outstanding career opportunities, cutting-edge research facilities, practical training programs, financial assistance, and flexible study options that help students build successful international careers. Home to many of the world's top-ranked universities, the USA is one of the most preferred destinations for international students.
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
                                    <h4>Global Recognition</h4>
                                </div>
                            </div>
                            <div className="card-divider"></div>
                            <p className="card-text">
                                U.S. degrees enjoy the highest international acceptability and reputation. As an
                                investment in your future, a U.S. education offers excellent value, with a wide range
                                of tuition options, living costs, and financial support available through universities.
                            </p>
                            <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                &rarr;</a>
                        </div>
                    </div>

                    {/*  Card 2  */}
                    <div className="opp-slide">
                        <div className="opp-card luxury-card">
                            <div className="card-author-area">
                                <div className="author-info">
                                    <h4>Flexible Learning</h4>
                                </div>
                            </div>
                            <div className="card-divider"></div>

                            <p className="card-text">
                                Students have the freedom to choose from various courses and even transfer between
                                institutions. Beyond academics, universities encourage leadership, creativity, and
                                personal growth through social, cultural, and sports activities.
                            </p>
                            <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                &rarr;</a>
                        </div>
                    </div>

                    {/*  Card 3  */}
                    <div className="opp-slide">
                        <div className="opp-card luxury-card">
                            <div className="card-author-area">
                                <div className="author-info">
                                    <h4>Top Universities & Training</h4>
                                </div>
                            </div>
                            <div className="card-divider"></div>
                            <p className="card-text">
                                Nearly half of the world's top 100 universities are located in the USA. Students also
                                benefit from practical training opportunities during or after their studies, gaining
                                valuable industry experience and improving career prospects.
                            </p>
                            <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More
                                &rarr;</a>
                        </div>
                    </div>

                    {/*  Card 4  */}
                    <div className="opp-slide">
                        <div className="opp-card luxury-card">
                            <div className="card-author-area">
                                <div className="author-info">
                                    <h4>Work & Stay Back Options</h4>
                                </div>
                            </div>
                            <div className="card-divider"></div>

                            <p className="card-text">
                                International students can work up to 20 hours per week during studies and 40 hours
                                during vacations, earning approximately \$9–15 per hour. F-1 students may also qualify
                                for up to 12 months of post-completion practical training after graduation.
                            </p>
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
                    <h2 className="destinations-titles">Why International Students Choose the USA</h2>
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
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Massachusetts Institute of Technology (MIT)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Stanford University</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Harvard University</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>California Institute of Technology (Caltech)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Princeton University</span></li>
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
                        <img src="/img/university-usa.jpeg" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
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
                Estimated annual tuition fees for international students studying in the United States.
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
                        <td style={{ padding: `15px` }}>USD 20,000 – USD 45,000 / year</td>
                        <td style={{ padding: `15px` }}>Fees vary by public and private universities.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Postgraduate (Master's)</td>
                        <td style={{ padding: `15px` }}>USD 20,000 – USD 50,000 / year</td>
                        <td style={{ padding: `15px` }}>STEM, Business, and Engineering programmes generally cost more.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>MBA</td>
                        <td style={{ padding: `15px` }}>USD 35,000 – USD 80,000+ / year</td>
                        <td style={{ padding: `15px` }}>Top business schools have significantly higher tuition fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>PhD / Doctoral</td>
                        <td style={{ padding: `15px` }}>USD 20,000 – USD 50,000 / year</td>
                        <td style={{ padding: `15px` }}>Many students receive research assistantships or scholarships.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Medicine / Clinical Programs</td>
                        <td style={{ padding: `15px` }}>USD 40,000 – USD 70,000+ / year</td>
                        <td style={{ padding: `15px` }}>Professional medical programmes are among the most expensive.</td>
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
                Estimated monthly living expenses for international students in the USA.
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
                        <td style={{ padding: `15px`, fontWeight: `500` }}>New York City</td>
                        <td style={{ padding: `15px` }}>USD 1,800 – USD 2,800</td>
                        <td style={{ padding: `15px` }}>Columbia University, NYU, CUNY</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Boston</td>
                        <td style={{ padding: `15px` }}>USD 1,600 – USD 2,500</td>
                        <td style={{ padding: `15px` }}>Harvard, MIT, Boston University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>California (Los Angeles / San Francisco)</td>
                        <td style={{ padding: `15px` }}>USD 1,700 – USD 2,700</td>
                        <td style={{ padding: `15px` }}>UCLA, Stanford, UC Berkeley, USC</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Chicago / Dallas</td>
                        <td style={{ padding: `15px` }}>USD 1,200 – USD 2,000</td>
                        <td style={{ padding: `15px` }}>University of Chicago, Northwestern, UT Dallas</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Midwest & Southern States</td>
                        <td style={{ padding: `15px` }}>USD 900 – USD 1,500</td>
                        <td style={{ padding: `15px` }}>Purdue, Iowa State, Kansas State, University of Alabama</td>
                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</section>

        {/*  Section 5: Instagram Reels  */}
         {/*  Section 5: Instagram Reels  */}
        <InstagramStories country="USA" />
<section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in USA
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in USA
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    The United States provides international students with opportunities to gain valuable work experience while pursuing their academic studies. Students holding an F-1 visa can work on-campus during their studies and may be eligible for practical training opportunities related to their field of study.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    International students can explore on-campus employment opportunities such as library assistants, research assistants, teaching assistants, administrative roles, campus service jobs, computer lab assistants, and student support positions. These opportunities help students develop professional skills while adapting to the American work environment.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying helps students gain practical exposure, improve communication skills, build professional networks, manage living expenses, and enhance their career prospects after graduation.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in USA"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain professional experience through OPT and career opportunities in the USA.
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
                        After completing their studies, international graduates in the USA may be eligible for Optional Practical Training (OPT), which allows them to gain practical work experience related to their academic field. Students in eligible STEM programs may qualify for an extended STEM OPT period, providing additional opportunities to build professional expertise.
                    </p>

                    <p className="text-muted mb-0">
                        The USA offers excellent career opportunities across industries including Information Technology, Engineering, Healthcare, Biotechnology, Finance, Business Management, Data Science, Artificial Intelligence, Research, Education, and many other professional fields.
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
                            Earn income to support personal expenses.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Improve communication and workplace skills.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Build professional connections and networks.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop skills valued by global employers.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Increase career opportunities after graduation.
                        </span>
                    </li>

                </ul>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

                <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{ background: `var(--primary)!important` }}>

                    <div className="position-absolute"
                        style={{ top: `-20px`, right: `-20px`, opacity: `.1`, fontSize: `150px` }}>
                        <i className="fas fa-globe-americas"></i>
                    </div>

                    <h4 className="fw-bold mb-4 position-relative z-1 text-white">
                        How The Global Ties Can Help
                    </h4>

                    <p className="mb-4 position-relative z-1 text-light"
                        style={{ lineHeight: `1.8`, opacity: `.9` }}>

                        The Global Ties provides complete guidance for students planning to study in the USA. Our experienced counsellors assist with university selection, admission applications, document verification, F-1 visa guidance, financial documentation, scholarship support, accommodation assistance, pre-departure orientation, and post-arrival support. We also help students understand work regulations, OPT opportunities, and career pathways to achieve their professional goals.

                    </p>


                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> International students must follow F-1 visa employment regulations. Work authorization requirements, permitted working hours, OPT eligibility, and other immigration rules are governed by U.S. immigration authorities and may change over time.

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
                    <p className="hero-description">The Global Ties provides comprehensive end-to-end support for students planning to study in the United States. Our experienced counsellors offer personalized guidance to help you select the right university, program, and study destination based on your academic background, career aspirations, financial plans, and future goals.

Our services include university selection, course and program guidance, profile evaluation, admission application assistance, document verification, Statement of Purpose (SOP) guidance, recommendation letter support, scholarship guidance, education loan assistance, financial documentation support, F-1 student visa application assistance, visa interview preparation, and complete application management.
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
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>USA Student Visa (F-1 Visa) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">The United States is one of the world's leading destinations for higher education, offering internationally recognised degrees, cutting-edge research opportunities, and outstanding career prospects. To study in the USA, international students must obtain an F-1 Student Visa. Careful preparation of all required={true} documents is essential for a successful visa application and interview.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for at least six months beyond your intended stay in the USA.</li>
                            <li>Previous passports (if applicable).</li>
                            <li>Ensure your passport details match all visa application documents.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Form I-20 (Certificate of Eligibility)</strong>
                        <ul className="text-muted mt-2">
                            <li>Original Form I-20 issued by your SEVP-approved U.S. institution.</li>
                            <li>Student must sign the I-20 before attending the visa interview.</li>
                            <li>Verify that your personal details and course information are correct.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. SEVIS Fee Payment Receipt (Form I-901)</strong>
                        <ul className="text-muted mt-2">
                            <li>Proof of payment of the SEVIS I-901 Fee.</li>
                            <li>Carry the printed payment confirmation during your visa interview.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. DS-160 Confirmation Page</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed online DS-160 Non-Immigrant Visa Application.</li>
                            <li>Printed confirmation page with barcode.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Visa Appointment Confirmation</strong>
                        <ul className="text-muted mt-2">
                            <li>Visa interview appointment confirmation letter.</li>
                            <li>MRV fee payment receipt (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. University Admission Letter</strong>
                        <ul className="text-muted mt-2">
                            <li>Official admission or acceptance letter from your U.S. university.</li>
                            <li>Keep both printed and digital copies available.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Provide documents demonstrating sufficient funds to cover:</p>
                        <ul className="text-muted">
                            <li>Tuition Fees</li>
                            <li>Living Expenses</li>
                            <li>Health Insurance</li>
                            <li>Other educational expenses</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent Bank Statements</li>
                            <li>Education Loan Sanction Letter</li>
                            <li>Scholarship Award Letter</li>
                            <li>Affidavit of Financial Support (Sponsor)</li>
                            <li>Income Tax Returns (if applicable)</li>
                            <li>Salary Slips of Sponsor</li>
                            <li>Fixed Deposit Certificates (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for Master's applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Transfer Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Standardised Test Scores</strong>
                        <p className="text-muted mt-2 mb-1">Carry original score reports if applicable:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>TOEFL iBT</li>
                            <li>PTE Academic</li>
                            <li>SAT</li>
                            <li>ACT</li>
                            <li>GRE</li>
                            <li>GMAT</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent photographs meeting U.S. visa photo specifications.</p>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Resume / Curriculum Vitae (CV)</li>
                        <li>Statement of Purpose (SOP)</li>
                        <li>Research Proposal (for research programmes)</li>
                        <li>Employment Experience Letters</li>
                        <li>Internship Certificates</li>
                        <li>Previous U.S. Visa Copies</li>
                        <li>Scholarship Letters</li>
                        <li>Assistantship Letters</li>
                        <li>Property Documents (if supporting financial or home ties)</li>
                        <li>Family Relationship Documents</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before Your Visa Interview</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and Form I-20.</li>
                        <li>Financial documents clearly demonstrate your ability to fund your education.</li>
                        <li>Academic records are complete and organised.</li>
                        <li>You are familiar with your chosen university, course, and career plans.</li>
                        <li>You are prepared to explain your intention to return to your home country after completing your studies.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents in your hand luggage:</p>
                    <ul className="text-muted">
                        <li>Passport with F-1 Visa</li>
                        <li>Original Form I-20</li>
                        <li>University Admission Letter</li>
                        <li>SEVIS Fee Receipt</li>
                        <li>Financial Documents</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Health Insurance Documents (if available)</li>
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

export default StudyInUsa;
