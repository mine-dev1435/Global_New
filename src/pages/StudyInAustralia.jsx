import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInAustralia = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Australia | Best Australia Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Australia with expert education consultants in Coimbatore. Get end-to-end support for university admissions, Subclass 500 student visas & post-study work opportunities." />
        <meta name="keywords" content="Study in Australia" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}



    


    <main>
        <section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Australia</span></h1>
      <p>Enjoy a high standard of living, beautiful beaches, and globally recognized institutions known for their innovative teaching and research.</p>
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
                        Study in Australia
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="canada-intro">
            <div className="layout-container intro-grid">
                <div className="intro-image">
                    <img src="/img/male.webp"
                        alt="Students in Canada" />
                </div>
                <div className="intro-content">
                    <span className="gold-label">Staying in Australia permanently | the global ties</span>

                    {/*  <h2 className="destinations-title">Why Study in Australia :</h2>  */}
<h2 className="section-title">
        Why Study in
 
            <span className="accent-text">Australia</span> 
          </h2>
                    <p className="hero-description">
                      Australia is currently the third most popular destination for international students in the English-speaking world, behind the United States and the UK. Many international students choose to study there because of the cultural diversity, friendly natives, and high quality of education.
                    <br /><strong>Global Recognition</strong>
                      <br />Schools and employers all over the world recognize degrees from Australian schools. Graduates from Australian schools are highly sought after due to the impressive international reputation of the Australian education system. This system is carefully regulated by the Australian government in order to maintain the high standards of education associated with the country.</p>
                
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
            <span className="accent-text">Australia</span>
          </h2>
                    <p className="hero-description">
                        Australia provides international students with world-class education, flexible work opportunities, advanced research facilities, and an exceptional quality of life, making it one of the world's leading study destinations. Home to globally ranked universities and internationally recognized qualifications, Australia offers innovative teaching methods, industry-focused programs, and practical learning experiences that prepare students for successful global careers.
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
                                            <h4>Growing Destination</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        Australia is currently the third most popular destination for international
                                        students in the English-speaking world, behind the United States and the UK.
                                        Many international students choose to study there because of the cultural
                                        diversity, friendly natives, and high quality of education.
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
                                            <h4>Global Recognition</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">
                                        Schools and employers around the world recognize Australian qualifications.
                                        Graduates from Australian institutions are highly sought after due to the strong
                                        international reputation and quality standards maintained by the Australian
                                        education system.
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
                                            <h4>Cost of Living</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>
                                    <p className="card-text">
                                        Australia offers a high standard of living while maintaining comparatively
                                        affordable tuition and living costs. International students can also work
                                        part-time during studies and may be eligible for scholarships that help reduce
                                        overall expenses.
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
                                            <h4>Diversity of Education</h4>
                                        </div>
                                    </div>
                                    <div className="card-divider"></div>

                                    <p className="card-text">
                                        Australian institutions offer a wide range of courses and qualifications across
                                        universities, vocational education, and English language programs, allowing
                                        students to choose pathways that best suit their goals.
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
                    <h2 className="destinations-titles">Why International Students Choose Australia</h2>
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
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Melbourne</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Sydney</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Australian National University (ANU)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Queensland (UQ)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Monash University</span></li>
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
                        <img src="/img/Australia_study_new.png" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100"  />
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
                Tuition fee comparison by programme level in Australia.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
            <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>
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
                        <td style={{ padding: `15px` }}>AUD 20,000 – AUD 45,000 / year</td>
                        <td style={{ padding: `15px` }}>Engineering, Medicine and Veterinary programs generally cost more.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Postgraduate (Master's)</td>
                        <td style={{ padding: `15px` }}>AUD 22,000 – AUD 50,000 / year</td>
                        <td style={{ padding: `15px` }}>Coursework and research programs vary by university.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>MBA</td>
                        <td style={{ padding: `15px` }}>AUD 35,000 – AUD 80,000+</td>
                        <td style={{ padding: `15px` }}>Leading business schools charge premium tuition fees.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>PhD / Doctoral</td>
                        <td style={{ padding: `15px` }}>AUD 20,000 – AUD 45,000 / year</td>
                        <td style={{ padding: `15px` }}>Many universities offer research scholarships and funding.</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Medicine & Dentistry</td>
                        <td style={{ padding: `15px` }}>AUD 50,000 – AUD 90,000+ / year</td>
                        <td style={{ padding: `15px` }}>Professional healthcare degrees have the highest tuition fees.</td>
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
                Estimated monthly living expenses for international students in Australia.
            </p>
        </div>

        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">
            <table className="table table-hover table-bordered" style={{ background: `white`, borderRadius: `10px`, overflow: `hidden` }}>
                <thead style={{ background: `var(--primary)`, color: `white` }}>
                    <tr>
                        <th style={{ padding: `15px` }}>City</th>
                        <th style={{ padding: `15px` }}>Monthly Living Cost</th>
                        <th style={{ padding: `15px` }}>Representative Universities</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Sydney</td>
                        <td style={{ padding: `15px` }}>AUD 2,000 – AUD 2,800</td>
                        <td style={{ padding: `15px` }}>University of Sydney, UNSW, UTS, Macquarie University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Melbourne</td>
                        <td style={{ padding: `15px` }}>AUD 1,800 – AUD 2,600</td>
                        <td style={{ padding: `15px` }}>University of Melbourne, Monash, RMIT, Deakin</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Brisbane</td>
                        <td style={{ padding: `15px` }}>AUD 1,600 – AUD 2,300</td>
                        <td style={{ padding: `15px` }}>University of Queensland, QUT, Griffith University</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Perth / Adelaide</td>
                        <td style={{ padding: `15px` }}>AUD 1,500 – AUD 2,200</td>
                        <td style={{ padding: `15px` }}>University of Western Australia, Curtin, University of Adelaide</td>
                    </tr>

                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>Canberra / Hobart</td>
                        <td style={{ padding: `15px` }}>AUD 1,500 – AUD 2,100</td>
                        <td style={{ padding: `15px` }}>Australian National University, University of Tasmania</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</section>
        {/*  Section 5: Instagram Reels  */}
        <InstagramStories country="Australia" />
           <section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Australia
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in Australia
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Australia offers international students excellent opportunities to gain valuable work experience while pursuing their studies. Eligible students can work during their studies and full-time during scheduled semester breaks, allowing them to earn additional income while developing practical workplace skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Part-time jobs are available across various industries including retail, hospitality, supermarkets, restaurants, customer service, healthcare support, administration, warehouses, tourism, and on-campus employment. These opportunities help students gain real-world experience, improve communication skills, and understand Australia's professional work culture.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying also enables students to build professional networks, strengthen their resumes, improve employability, and prepare for rewarding careers after graduation.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp" alt="Work in Australia"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Build valuable Australian work experience after graduation.
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
                        After successfully completing an eligible qualification, many international graduates may qualify for post-study work opportunities that allow them to gain valuable Australian work experience. This practical exposure enhances employability, strengthens career prospects, and prepares graduates for long-term success in a competitive global workforce.
                    </p>

                    <p className="text-muted mb-0">
                        Australia offers excellent employment opportunities across high-demand industries including Information Technology, Engineering, Healthcare, Nursing, Business, Accounting, Finance, Construction, Hospitality, Education, Agriculture, Mining, Cyber Security, and Data Science.
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
                            Gain valuable Australian work experience.
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
                            Improve communication and professional workplace skills.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Build a strong resume and expand your professional network.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Increase your employability after graduation.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Experience Australia's multicultural workplace environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Develop practical skills for long-term career success.
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

                        The Global Ties provides complete guidance for students planning to study in Australia. Our experienced counsellors assist with university selection, course counselling, admissions, document verification, Student Visa applications, financial documentation, scholarship guidance, Overseas Student Health Cover (OSHC), accommodation assistance, pre-departure orientation, and post-arrival support. We also help students understand work rights, career opportunities, and post-study pathways, ensuring a smooth and successful journey from admission to graduation.

                    </p>

                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work rights, permitted working hours, and post-study work visa eligibility are governed by the Australian Government and may change over time. Students should always refer to the latest immigration regulations before making employment or visa-related decisions.

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
                        The Global Ties provides comprehensive end-to-end guidance for students planning to study in Australia. Our experienced counsellors offer personalized support to help you choose the right university, course, and study destination based on your academic background, career goals, and budget.

Our services include university admissions, course selection, profile evaluation, document verification, Statement of Purpose (SOP) guidance, Student Visa application assistance, financial documentation support, scholarship and education loan guidance, Overseas Student Health Cover (OSHC) assistance, pre-departure orientation, accommodation guidance, airport assistance, and post-arrival support. We ensure a smooth, transparent, and hassle-free journey from your first consultation to your successful arrival in Australia, helping you achieve your study abroad goals with confidence.
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
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>Australia Student Visa (Subclass 500) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Australia is one of the world's most preferred study destinations, offering globally recognised qualifications, excellent research opportunities, high-quality education, and post-study work options. International students wishing to study in Australia must apply for a Student Visa (Subclass 500) and meet all eligibility and documentation requirements set by the Australian Government.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for the duration of your studies.</li>
                            <li>Passport should have sufficient blank pages.</li>
                            <li>Copies of previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Confirmation of Enrolment (CoE)</strong>
                        <ul className="text-muted mt-2">
                            <li>Electronic Confirmation of Enrolment (eCoE) issued by a CRICOS-registered Australian education provider.</li>
                            <li>The CoE is mandatory before lodging your Student Visa application.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Visa Application Form</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed online Student Visa (Subclass 500) application.</li>
                            <li>Visa application fee payment confirmation.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Genuine Student (GS) Requirement</strong>
                        <p className="text-muted mt-2 mb-1">Applicants must provide a Genuine Student (GS) statement explaining:</p>
                        <ul className="text-muted">
                            <li>Why you chose Australia.</li>
                            <li>Why you  the university and course.</li>
                            <li>Your educational background.</li>
                            <li>Future career goals.</li>
                            <li>Your intention to comply with Australian visa conditions.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Proof of Financial Capacity</strong>
                        <p className="text-muted mt-2 mb-1">Provide evidence that you can financially support:</p>
                        <ul className="text-muted">
                            <li>First-year tuition fees.</li>
                            <li>Living expenses.</li>
                            <li>Travel expenses.</li>
                            <li>Expenses for accompanying family members (if applicable).</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted documents include:</p>
                        <ul className="text-muted">
                            <li>Recent Bank Statements</li>
                            <li>Education Loan Sanction Letter</li>
                            <li>Scholarship Letter</li>
                            <li>Sponsor's Financial Documents</li>
                            <li>Fixed Deposit Certificates (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Overseas Student Health Cover (OSHC)</strong>
                        <ul className="text-muted mt-2">
                            <li>Valid Overseas Student Health Cover (OSHC) for the entire duration of your stay.</li>
                            <li>OSHC is compulsory for all international students.</li>
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
                            <li>Backlog Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. English Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">Provide valid test scores, if required={true}:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Cambridge English</li>
                            <li>Other approved English language tests</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent passport-size photographs as per Australian visa specifications.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Health Examination</strong>
                        <p className="text-muted mt-2 mb-0">Applicants may be required={true} to undergo a medical examination conducted by an approved panel physician. Medical requirements depend on your nationality, course, and duration of stay.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Character Requirements</strong>
                        <p className="text-muted mt-2 mb-1">If requested, applicants may need to provide:</p>
                        <ul className="text-muted">
                            <li>Police Clearance Certificate (PCC)</li>
                            <li>Character declaration</li>
                            <li>Any additional documents requested by the Department of Home Affairs.</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Resume / Curriculum Vitae (CV)</li>
                        <li>Statement of Purpose (SOP)</li>
                        <li>Employment Experience Letters</li>
                        <li>Internship Certificates</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Marriage Certificate</li>
                        <li>Birth Certificates (for dependants)</li>
                        <li>Name Change Affidavit</li>
                        <li>Previous Australian Visa Copies</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and Confirmation of Enrolment.</li>
                        <li>Financial documents are genuine and meet Australian Government requirements.</li>
                        <li>Your Genuine Student statement is clear and convincing.</li>
                        <li>OSHC is valid for your full course duration.</li>
                        <li>All uploaded documents are clear and legible.</li>
                        <li>Original documents are available if requested.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport with Australian Student Visa</li>
                        <li>Confirmation of Enrolment (CoE)</li>
                        <li>University Offer Letter</li>
                        <li>OSHC Certificate</li>
                        <li>Financial Documents</li>
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

export default StudyInAustralia;
