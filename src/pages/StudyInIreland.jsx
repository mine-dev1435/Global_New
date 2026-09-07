import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInIreland = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Ireland | Best Ireland Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Ireland with expert education consultants in Coimbatore. Expert counseling for top Irish university admissions, stay-back work permits & student visa processing." />
        <meta name="keywords" content="Study in Ireland" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



  

    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Ireland</span></h1>
      <p>Join the tech hub of Europe. Experience a friendly, English-speaking environment with strong career prospects in multinational companies.</p>
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
                        Study in Ireland
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/Ireland_img.jpg"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in Ireland permanently | the global ties</span>

<h2 className="section-title">
          Why Study in
            <span className="accent-text">Ireland
</span>
          </h2>
                    <p className="hero-description">
                        Ireland has published a landmark International Education Strategy 2010-15. This is with a view to creating brand ambassadors for Ireland across countries. Ireland is fully aware that it makes sense to invest in international students.
                        <br /> 
                        In the next 4 years, Ireland wants to take in 25,500 international students on full-time courses.
 <br />A statutory Code of Practice and Quality Mark is awarded to educational institutions that meet laid down criteria.
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
            <span className="accent-text">Ireland</span>
          </h2>
            <p className="hero-description">
               Ireland offers world-class education, globally recognized degrees, excellent career opportunities, practical learning experiences, financial assistance, and flexible study options that help international students achieve their academic and professional goals. Known for its high-quality education system, welcoming environment, and strong industry connections, Ireland has become one of the most preferred study destinations for students worldwide.
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
                            <h4>International Education Strategy</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>
                    <p className="card-text">
                        Ireland has published a landmark International Education Strategy and aims to welcome over
                        25,500 international students on full-time courses. The country actively invests in global
                        education and encourages international student success.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 2  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Quality & Recognition</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        A statutory Code of Practice and Quality Mark is awarded to institutions that meet strict
                        educational standards. This quality mark is recognized for visas, immigration, labour market
                        access, and international promotions.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 3  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Jobs & Stay Back Options</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>
                    <p className="card-text">
                        Ireland offers fast-track degree programme visas. Students completing honours bachelor's
                        degrees and above can remain in Ireland for up to one year to gain work experience or develop
                        a business idea, creating strong career opportunities after graduation.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 4  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>English-Speaking EU Nation</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Ireland is an English-speaking country within the European Union, making it an attractive
                        destination for Indian students. It also offers short-duration Master's programs, usually
                        completed within one year.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 5  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Global Career Opportunities</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Ireland is home to more than 1,000 multinational companies and is a hub for science,
                        technology, research, and innovation. It provides a clear pathway toward employment and
                        eventual permanent residency for international graduates.
                    </p>
                    <a href="#" className="read-more-btn" onClick="toggleCard(event, this)">Read More &rarr;</a>
                </div>
            </div>

            {/*  Card 6  */}
            <div className="opp-slide">
                <div className="opp-card luxury-card">
                    <div className="card-author-area">
                        <div className="author-info">
                            <h4>Student-Friendly Environment</h4>
                        </div>
                    </div>
                    <div className="card-divider"></div>

                    <p className="card-text">
                        Known for its natural beauty, friendly people, and multicultural society, Ireland hosts
                        thousands of international students. Around 10% of the population are foreign nationals,
                        creating a welcoming and diverse environment for study and personal growth.
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
                    <h2 className="destinations-titles">Why International Students Choose Ireland</h2>
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
                <div className="section-header text-center " data-aos="fade-up">
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
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Trinity College Dublin (TCD)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University College Dublin (UCD)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University College Cork (UCC)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Galway</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Dublin City University (DCU)</span></li>
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
                        <img src="/img/Ireland_study.jpeg" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
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
                Estimated annual tuition fees for international students studying in Ireland.
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
                        <td style={{ padding: `15px` }}>€10,000 – €25,000 / year</td>
                        <td style={{ padding: `15px` }}>Arts programmes are generally lower, while Engineering and Health Sciences cost more.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Postgraduate (Master's)</td>
                        <td style={{ padding: `15px` }}>€10,000 – €30,000 / year</td>
                        <td style={{ padding: `15px` }}>Business, Computing, and Data Science programmes are among the most popular.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>MBA</td>
                        <td style={{ padding: `15px` }}>€20,000 – €40,000+ / year</td>
                        <td style={{ padding: `15px` }}>Leading Irish business schools charge premium tuition fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>PhD / Doctoral</td>
                        <td style={{ padding: `15px` }}>€6,000 – €20,000 / year</td>
                        <td style={{ padding: `15px` }}>Many research students receive scholarships or funded positions.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Medicine & Health Sciences</td>
                        <td style={{ padding: `15px` }}>€30,000 – €55,000+ / year</td>
                        <td style={{ padding: `15px` }}>Medical programmes have the highest tuition fees.</td>
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
                Estimated monthly living expenses for international students in Ireland.
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
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Dublin</td>
                        <td style={{ padding: `15px` }}>€1,200 – €1,800</td>
                        <td style={{ padding: `15px` }}>Trinity College Dublin, UCD, Dublin City University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Cork</td>
                        <td style={{ padding: `15px` }}>€900 – €1,400</td>
                        <td style={{ padding: `15px` }}>University College Cork, Munster Technological University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Galway</td>
                        <td style={{ padding: `15px` }}>€850 – €1,300</td>
                        <td style={{ padding: `15px` }}>University of Galway</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Limerick</td>
                        <td style={{ padding: `15px` }}>€800 – €1,200</td>
                        <td style={{ padding: `15px` }}>University of Limerick</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Waterford / Maynooth</td>
                        <td style={{ padding: `15px` }}>€750 – €1,150</td>
                        <td style={{ padding: `15px` }}>South East Technological University, Maynooth University</td>
                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</section>
  {/*  Section 5: Instagram Reels  */}
        <InstagramStories country="Ireland" />
<section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Ireland
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in Ireland
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Ireland provides international students with excellent opportunities to gain practical work experience while studying. Eligible students can work part-time during their academic term and increase their working hours during approved holiday periods, helping them manage living expenses while developing valuable professional skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can explore part-time employment opportunities in industries such as retail, hospitality, restaurants, customer service, supermarkets, administration, tourism, logistics, healthcare support, and campus-based roles. These jobs allow students to improve their communication abilities and gain exposure to Ireland’s professional work environment.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying helps students become financially independent, build confidence, develop workplace skills, create professional networks, and enhance their career opportunities after graduation.
                </p>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in Ireland"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain valuable Irish work experience after completing your studies.
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
                        After completing an eligible qualification, international graduates in Ireland may benefit from post-study work opportunities that allow them to gain professional experience in their chosen field. These opportunities help graduates improve employability, develop industry skills, and explore long-term career pathways in Ireland.
                    </p>

                    <p className="text-muted mb-0">
                        Ireland offers strong employment opportunities across industries such as Information Technology, Software Development, Engineering, Healthcare, Pharmaceutical Sciences, Finance, Business, Data Analytics, Biotechnology, Hospitality, Education, and Skilled Professions.
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
                            Gain valuable Irish work experience.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Earn income to support living and study expenses.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop professional communication skills.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Build professional networks and industry connections.
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
                            Experience Ireland's multicultural workplace environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance employability with international experience.
                        </span>
                    </li>

                </ul>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

                <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{ background: `var(--primary)!important` }}>

                    <div className="position-absolute"
                        style={{ top: `-20px`, right: `-20px`, opacity: `.1`, fontSize: `150px` }}>
                        <i className="fas fa-globe-europe"></i>
                    </div>


                    <h4 className="fw-bold mb-4 position-relative z-1 text-white">
                        How The Global Ties Can Help
                    </h4>

                    <p className="mb-4 position-relative z-1 text-light"
                        style={{ lineHeight: `1.8`, opacity: `.9` }}>

                        The Global Ties provides complete guidance for students planning to study in Ireland. Our experienced counsellors assist with university selection, admissions, document verification, student visa applications, financial documentation, scholarship guidance, accommodation assistance, pre-departure orientation, and post-arrival support. We also guide students regarding work opportunities, career planning, and post-study options to ensure a successful international education journey.

                    </p>


                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work permissions, permitted working hours, and post-study work eligibility are regulated by Irish immigration authorities and may change over time. Students should always verify the latest immigration guidelines before making employment or visa-related decisions.

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
The Global Ties offers comprehensive end-to-end support for students planning to study in Ireland. Our experienced counsellors provide personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career goals, interests, and financial plans.

Our services include university selection, course and program guidance, profile evaluation, admission application assistance, document verification, Statement of Purpose (SOP) review, recommendation letter guidance, scholarship assistance, financial documentation support, student visa application guidance, visa interview preparation, accommodation assistance, pre-departure orientation, travel guidance, and post-arrival support.</p>
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
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>Ireland Student Visa (D Study Visa) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Ireland is one of Europe's fastest-growing study destinations, offering globally recognised qualifications, excellent career opportunities, and post-study work options. International students enrolling in programmes longer than 90 days must apply for a Long Stay 'D' Study Visa before travelling to Ireland.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for at least 12 months after your intended arrival in Ireland.</li>
                            <li>Previous passports (if applicable).</li>
                            <li>Copies of all relevant passport pages.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Letter of Acceptance</strong>
                        <p className="text-muted mt-2 mb-1">Official Letter of Acceptance from an approved Irish educational institution.</p>
                        <p className="text-muted mt-2 mb-1">The letter should include:</p>
                        <ul className="text-muted">
                            <li>Course name</li>
                            <li>Course duration</li>
                            <li>Confirmation of full-time enrolment (minimum 15 hours of daytime study per week)</li>
                            <li>Tuition fee details</li>
                            <li>Amount of fees already paid.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Online Visa Application</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed online visa application (AVATS).</li>
                            <li>Printed and signed application summary.</li>
                            <li>Visa fee payment receipt.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Proof of Tuition Fee Payment</strong>
                        <ul className="text-muted mt-2">
                            <li>Official receipt issued by the institution.</li>
                            <li>Where applicable, evidence that the required={true} tuition fee payment has been made before submitting the visa application.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Provide evidence that you have sufficient funds to cover:</p>
                        <ul className="text-muted">
                            <li>Tuition fees</li>
                            <li>Living expenses</li>
                            <li>Other study-related costs</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent Bank Statements</li>
                            <li>Education Loan Sanction Letter</li>
                            <li>Scholarship Award Letter</li>
                            <li>Sponsor's Financial Documents</li>
                            <li>Affidavit of Financial Support (if sponsored)</li>
                        </ul>
                        <p className="text-muted mb-0">Applicants generally need to demonstrate access to the required={true} living expenses in accordance with current Irish immigration requirements.</p>
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
                        <p className="text-muted mt-2 mb-1">Provide valid English language test results if required={true}:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Other accepted English language qualifications.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Statement of Purpose / Visa Application Letter</strong>
                        <p className="text-muted mt-2 mb-1">A detailed statement explaining:</p>
                        <ul className="text-muted">
                            <li>Why you chose Ireland.</li>
                            <li>Why you  your university and course.</li>
                            <li>Your academic and career goals.</li>
                            <li>Your intention to return home after completing your studies.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Private Medical Insurance</strong>
                        <ul className="text-muted mt-2">
                            <li>Valid private medical insurance covering your stay in Ireland.</li>
                            <li>If arranged by the institution, this should be mentioned in the Letter of Acceptance.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent passport-size colour photographs as per Irish visa specifications.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Curriculum Vitae (CV)</strong>
                        <ul className="text-muted mt-2">
                            <li>Updated CV detailing your academic qualifications and employment history.</li>
                            <li>Explain any gaps in education or employment where applicable.</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Police Clearance Certificate (if requested)</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Employment Experience Certificates</li>
                        <li>Internship Certificates</li>
                        <li>Previous Visa Copies</li>
                        <li>Marriage Certificate (if applicable)</li>
                        <li>Name Change Affidavit</li>
                        <li>Certified translations for documents not in English or Irish.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and Letter of Acceptance.</li>
                        <li>Financial documents satisfy Irish Immigration requirements.</li>
                        <li>Tuition fee receipts are attached.</li>
                        <li>Educational and employment gaps are clearly explained.</li>
                        <li>Documents not in English or Irish are translated by a certified translator.</li>
                        <li>All scanned documents are clear and legible.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport with Ireland D Study Visa</li>
                        <li>Letter of Acceptance</li>
                        <li>Tuition Fee Receipt</li>
                        <li>Financial Documents</li>
                        <li>Medical Insurance Certificate</li>
                        <li>Accommodation Details</li>
                        <li>Flight Ticket</li>
                        <li>Academic Documents</li>
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

export default StudyInIreland;
