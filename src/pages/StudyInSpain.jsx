import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInSpain = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Spain | Best Spain Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Spain with expert education consultants in Coimbatore. Gain admission to top European business schools, English-medium programs & student visa guidance." />
        <meta name="keywords" content="Study in Spain" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}
    {/*  Font Awesome  */}



   

    <main>
<section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Spain</span></h1>
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
                        Study in Spain
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="spain-intro">
    <div className="layout-container intro-grid">
        <div className="intro-image">
            <img src="/img/spain_img.jpg"
                alt="Students in Spain" />
        </div>

        <div className="intro-content">
            <span className="gold-label">Staying in Spain permanently | the global ties</span>

            <h2 className="section-title">
           Study Abroad in{' '}
            <span className="accent-text">Spain</span>
          </h2>

            <p className="hero-description">
             Spain has a lot to offer the intriguing student traveler, no matter his or her area of interest. Do you, as a student, also want to learn Spanish and enhance fluency in the real world? Study abroad in Spain is a great place for immersive experience to build your fluency. Why wait when you can bring your language skill practice from the classroom to the real world?
            <br />Spain can bring your studies to ‘life’ in a unique way. If you are already a student of arts and willing to explore your study experience abroad, Spain is the destination.  </p>

           

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
            <span className="accent-text">Spain</span>
          </h2>
                    <p className="hero-description">Explore the excellent opportunities Spain offers international students to gain valuable work experience during their studies, after graduation, and build a strong foundation for long-term career growth. With its globally recognized universities, growing economy, vibrant culture, and high quality of life, Spain provides an ideal environment for students to develop academically and professionally.</p>

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
                                        Spain. This can help you apply to become a permanent resident of Spain.</p>
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

                                    <p className="card-text">If you want to make Spain your permanent home, there are a
                                        number of ways to apply. In most cases, you will not need to leave Spain.</p>
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

       

        {/*  Section 4: Spain Advantage Banner  */}
        <section className="advantage-banner">
            <div className="layout-container advantage-grid">
                <div>
                    <h2 className="destinations-titles">Why International Students Choose Spain</h2>
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
                <div className="section-header text-center " data-aos="fade-up">
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
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Barcelona (UB)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Autonomous University of Barcelona (UAB)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Complutense University of Madrid (UCM)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>Autonomous University of Madrid (UAM)</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Navarra</span></li>
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
                        <img src="/img/spain-study.png" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100" />
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
                Estimated tuition fees for international students studying in Spain.
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
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Undergraduate (Bachelor's)
                        </td>

                        <td style={{ padding: `15px` }}>
                            €750 – €3,500 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Public universities offer affordable tuition fees; private universities may charge higher fees.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Postgraduate (Master's)
                        </td>

                        <td style={{ padding: `15px` }}>
                            €1,000 – €4,500 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Fees depend on university, programme type, and specialisation.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            MBA Programmes
                        </td>

                        <td style={{ padding: `15px` }}>
                            €10,000 – €40,000+
                        </td>

                        <td style={{ padding: `15px` }}>
                            Business schools and internationally ranked institutions charge higher fees.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            PhD / Doctoral Programmes
                        </td>

                        <td style={{ padding: `15px` }}>
                            €1,500 – €4,000 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Many research programmes offer scholarships and funding opportunities.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Medicine & Healthcare Programmes
                        </td>

                        <td style={{ padding: `15px` }}>
                            €1,000 – €15,000+ / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Medical programme fees vary significantly between public and private universities.
                        </td>
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

            <span className="section-subtitle">
                STUDENT EXPENSES
            </span>

            <h2 className="section-title">
                Cost of Living <span className="accent-text">by City</span>
            </h2>


            <p className="hero-description mx-auto" style={{ maxWidth: `700px` }}>
                Estimated monthly living expenses for international students in Spain.
            </p>

        </div>



        <div className="table-responsive" data-aos="fade-up" data-aos-delay="100">


            <table className="table table-hover table-bordered"
                style={{ background: `#fff`, borderRadius: `10px`, overflow: `hidden` }}>


                <thead style={{ background: `var(--primary)`, color: `#fff` }}>


                    <tr>

                        <th style={{ padding: `15px` }}>
                            City / Region
                        </th>

                        <th style={{ padding: `15px` }}>
                            Monthly Living Cost
                        </th>

                        <th style={{ padding: `15px` }}>
                            Representative Universities
                        </th>

                    </tr>


                </thead>



                <tbody>


                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Madrid
                        </td>

                        <td style={{ padding: `15px` }}>
                            €900 – €1,300
                        </td>

                        <td style={{ padding: `15px` }}>
                            Complutense University of Madrid, Autonomous University of Madrid
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Barcelona
                        </td>

                        <td style={{ padding: `15px` }}>
                            €900 – €1,400
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Barcelona, Pompeu Fabra University
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Valencia
                        </td>

                        <td style={{ padding: `15px` }}>
                            €700 – €1,000
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Valencia, Polytechnic University of Valencia
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Seville / Granada
                        </td>

                        <td style={{ padding: `15px` }}>
                            €600 – €900
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Seville, University of Granada
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Salamanca
                        </td>

                        <td style={{ padding: `15px` }}>
                            €600 – €850
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Salamanca
                        </td>

                    </tr>


                </tbody>


            </table>


        </div>


    </div>

</section>
        {/*  Section 5: Instagram Reels  */}
          <InstagramStories country="Spain" />
        <section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Spain
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in Spain
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Spain offers international students valuable opportunities to gain practical work experience while pursuing their studies. Eligible students may work part-time in accordance with Spanish immigration regulations, allowing them to earn additional income while developing professional skills and adapting to an international work environment.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can find part-time employment in hospitality, tourism, retail, customer service, restaurants, administration, education, logistics, digital marketing, IT support, research projects, and on-campus positions. These opportunities help students build industry experience while enhancing their language and communication skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying helps students become financially independent, gain international work experience, expand professional networks, strengthen their resumes, and prepare for successful global careers.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in Spain"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain valuable international work experience after graduation.
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
                        After completing an eligible qualification, international graduates can explore post-study employment opportunities in Spain. The country's expanding economy, thriving business sectors, and international companies provide graduates with excellent opportunities to gain valuable professional experience and build successful careers.
                    </p>

                    <p className="text-muted mb-0">
                        Spain offers career opportunities across industries such as Information Technology, Engineering, Healthcare, Tourism, Hospitality, Business Management, Finance, Renewable Energy, Construction, Logistics, Digital Marketing, Education, and Creative Industries.
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
                            Build a strong international professional network.
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
                            Experience Spain's vibrant and multicultural work environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance employability with globally recognized work experience.
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

                        The Global Ties provides complete guidance for students planning to study in Spain. Our experienced counsellors assist with university selection, admissions, document verification, student visa applications, financial documentation, accommodation guidance, pre-departure orientation, and post-arrival support. We also help students understand work opportunities, career pathways, and post-study employment options to ensure a successful study abroad journey.

                    </p>

                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work permissions, permitted working hours, and post-study employment regulations in Spain are governed by Spanish immigration authorities and may change over time. Students should always verify the latest regulations before making employment or visa-related decisions.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>
 {/*  Why Choose The Global Ties Section  */}
        <section className="why-choose-us-section" style={{ padding: `30px 0`, backgroundColor: `#f8f9fa` }}>
            <div className="layout-container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7" data-aos="fade-right">
                        <span className="section-subtitle">YOUR TRUSTED PARTNER</span>
                        <h2 className="section-title mb-4">Why Choose <span className="accent-text">The Global Ties?</span></h2>
                        <p className="hero-description mb-4" style={{ fontSize: `1.05rem`, lineHeight: `1.8` }}>
                            The Global Ties provides comprehensive end-to-end support for students planning to study in <strong>Spain</strong>, ensuring a smooth and stress-free journey from the initial consultation to successful settlement. Our experienced counsellors offer personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career aspirations, and budget.
                        </p>
                        <p className="hero-description mb-4" style={{ fontSize: `1rem`, lineHeight: `1.8` }}>
                            Our services include university and college admissions, profile evaluation, course selection, document verification, application preparation, Statement of Purpose (SOP) review, Letter of Recommendation (LOR) guidance, resume preparation, study permit application assistance, financial documentation support, education loan guidance, scholarship assistance, biometric appointment support, medical examination guidance, visa interview preparation, and continuous application tracking.
                        </p>
                        <div>
                            <a href="javascript:void(0);" className="cta-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                                Read More <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5" data-aos="fade-left">
                        <div className="position-relative">
                            <img src="/img/img-for.jpg" alt="Students in Spain" className="img-fluid rounded-4 shadow-lg w-100"  />
                            {/*  Decorative element  */}
                            <div className="position-absolute" style={{ bottom: `-20px`, right: `-20px`, width: `100px`, height: `100px`, background: `radial-gradient(circle, var(--accent) 10%, transparent 10%)`, backgroundSize: `20px 20px`, zIndex: `-1` }}></div>
                        </div>
                    </div>
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
  

    

    {/*  Contact / Visa Checklist Modal  */}
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>Spain Student Visa (Long-Stay) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Applying for a Spain Long-Stay Student Visa requires accurate documentation and careful preparation. Missing or incomplete documents can result in processing delays or visa refusal. The Global Ties provides complete guidance to help students prepare a strong and successful student visa application.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for the entire duration of your studies.</li>
                            <li>At least two blank pages.</li>
                            <li>Copies of previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. Letter of Acceptance</strong>
                        <ul className="text-muted mt-2">
                            <li>Official Letter of Acceptance from a recognized Spanish university or educational institution.</li>
                            <li>The admission letter should include: Course name, Duration of study, Start and end dates, Full-time enrollment confirmation.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. Completed Student Visa Application</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed and signed Spain National Student Visa Application Form.</li>
                            <li>Ensure all details match your passport and admission letter.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">You must demonstrate that you have sufficient financial resources to cover your stay in Spain. Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent bank statements</li>
                            <li>Education loan sanction letter</li>
                            <li>Scholarship award letter</li>
                            <li>Sponsorship letter</li>
                            <li>Sponsor's income documents</li>
                            <li>Tuition fee payment receipt (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Academic Documents</strong>
                        <p className="text-muted mt-2 mb-1">Submit copies of:</p>
                        <ul className="text-muted">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for postgraduate applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Backlog Certificate (if applicable)</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. English or Spanish Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">If required={true} by your institution, provide:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>PTE Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Cambridge English Qualifications</li>
                            <li>DELE or SIELE (for Spanish-taught programs)</li>
                            <li>Other accepted language certificates</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. Statement of Purpose (SOP)</strong>
                        <p className="text-muted mt-2 mb-1">A well-written Statement of Purpose should explain:</p>
                        <ul className="text-muted">
                            <li>Why you chose Spain</li>
                            <li>Why you  your university and program</li>
                            <li>Your academic background</li>
                            <li>Career objectives</li>
                            <li>Your intention to comply with Spanish immigration regulations</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. Passport-Size Photographs</strong>
                        <p className="text-muted mt-2 mb-0">Recent passport-size photographs meeting Spanish visa specifications.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Medical Certificate</strong>
                        <p className="text-muted mt-2 mb-0">Applicants staying for more than six months must provide a medical certificate issued by a registered medical practitioner stating that the applicant does not suffer from any disease that could have serious public health implications under the International Health Regulations.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Police Clearance Certificate (PCC)</strong>
                        <p className="text-muted mt-2 mb-1">If your course duration exceeds six months: Police Clearance Certificate from your country of residence.</p>
                        <p className="text-muted mt-1 mb-0">The certificate should be recent and, where required={true}, legalized or apostilled.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Health Insurance</strong>
                        <p className="text-muted mt-2 mb-1">Provide proof of:</p>
                        <ul className="text-muted">
                            <li>Valid health insurance accepted in Spain.</li>
                            <li>Coverage for the entire duration of your stay.</li>
                            <li>Comprehensive medical coverage without significant exclusions.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">12. Proof of Accommodation</strong>
                        <p className="text-muted mt-2 mb-1">Provide one of the following:</p>
                        <ul className="text-muted">
                            <li>University accommodation confirmation</li>
                            <li>Rental agreement</li>
                            <li>Student residence booking</li>
                            <li>Invitation letter (if staying with family or friends)</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Employment Experience Letters</li>
                        <li>Resume/CV (for postgraduate applicants)</li>
                        <li>Marriage Certificate</li>
                        <li>Birth Certificate (if required={true})</li>
                        <li>Name Change Affidavit</li>
                        <li>Previous Schengen Visa Copies</li>
                        <li>Travel Itinerary (if requested)</li>
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

export default StudyInSpain;
