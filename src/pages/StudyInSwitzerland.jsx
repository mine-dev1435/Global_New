import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import InstagramStories from '../components/InstagramStories';
import { handleFormSubmit } from '../utils/emailService';
const StudyInSwitzerland = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Study in Switzerland | Best Switzerland Education Consultants in Coimbatore</title>
        <meta name="description" content="Study in Switzerland with expert education consultants in Coimbatore. Premier counseling for world-renowned hospitality, business & technology universities." />
        <meta name="keywords" content="Study in Switzerland" />
        <link rel="stylesheet" href="/study_in_canada.css" />
      </Helmet>
      <main>
        {/* Original HTML */}
    {/*  Font Awesome  */}



   

    <main>
<section className="about-hero">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <h1>Study in<span className="accent-text" style={{ color: `var(--accent)` }}> Switzerland</span></h1>
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
                        Study in Switzerland
                    </span>
                </nav>
            </div>
        </div>

        {/*  Section 2: Introduction  */}
        <section className="switzerland-intro">
    <div className="layout-container intro-grid">
        <div className="intro-image">
            <img src="/img/switzerland_img.jpg"
                alt="Students in Switzerland" />
        </div>

        <div className="intro-content">
            <span className="gold-label">Staying in Switzerland permanently | the global ties</span>

            <h2 className="section-title">
Why Study in
 
            <span className="accent-text">Switzerland</span>
          </h2>

            <p className="hero-description">
           Switzerland has no natural resources, education and knowledge have become very important resources. Therefore Switzerland claims to have one of the world's best education systems. The most popular of the educational facilities for foreign students, are the Swiss Hospitality Schools. In the past, and even today, people from all over the world visit Europe and Switzerland for its natural beauty and quality of service. This tiny nation with a population of 7 million has 5600 hotels which provide accommodation for more than 35 million guests every year!<br />
        Tourism is indeed a very important economic activity in Switzerland. Due to the lack of manpower and the high cost of our labour force, the Swiss hospitality industry not only welcomes a majority of international visitors, but also employs a truly international work force. This is also reflected in hotel management schools, in terms of the curricula offered and the mix in the student population.
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
            <span className="accent-text">Switzerland</span>
          </h2>
                    <p className="hero-description">Explore the numerous opportunities Switzerland provides for international students to gain valuable work experience during their studies, after graduation, and build a strong foundation for long-term career growth. With its world-class education system, strong economy, and globally recognized industries, Switzerland offers excellent opportunities for students to develop professional skills and achieve international career success.</p>

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
                                        Switzerland. This can help you apply to become a permanent resident of Switzerland.</p>
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

                                    <p className="card-text">If you want to make Switzerland your permanent home, there are a
                                        number of ways to apply. In most cases, you will not need to leave Switzerland.</p>
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
        {/*  Section 4: Switzerland Advantage Banner  */}
        <section className="advantage-banner">
            <div className="layout-container advantage-grid">
                <div>
                    <h2 className="destinations-titles">Why International Students Choose Switzerland</h2>
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
                    <p className="hero-description mx-auto  text-center" style={{ maxWidth: `700px` }}>Discover globally recognized institutions offering world-class academic excellence and research opportunities.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="university-card" style={{ background: `#fff`, padding: `30px`, borderRadius: `15px`, boxShadow: `0 10px 30px rgba(0,0,0,0.05)`, height: `100%`, transition: `transform 0.3s ease`, borderBottom: `4px solid var(--accent)` }}>
                            <h4 style={{ color: `var(--primary)`, fontWeight: `700`, marginBottom: `15px` }}>Global Top 100 University</h4>
                            <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                <li>
                                    <ul style={{ listStyle: `none`, padding: `0`, margin: `0` }}>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>ETH Zurich – Swiss Federal Institute of Technology</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>EPFL – École Polytechnique Fédérale de Lausanne</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Zurich</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Geneva</span></li>
                                        <li style={{ marginBottom: `8px`, display: `flex`, alignItems: `center`, gap: `8px`, fontSize: `0.95rem`, color: `#555` }}><i className="fas fa-university" style={{ color: `var(--accent)`, fontSize: `0.85rem` }}></i> <span>University of Basel</span></li>
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
                        <img src="/img/switzerland_study.jpeg" alt="Popular Programs" className="img-fluid rounded-4 shadow-lg w-100"  />
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
                Estimated tuition fees for international students studying in Switzerland.
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
                            CHF 1,000 – CHF 4,000 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Public universities offer affordable tuition fees compared to many European countries.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Postgraduate (Master's)
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,500 – CHF 5,000 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Fees vary depending on university and programme specialisation.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            MBA Programmes
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 30,000 – CHF 85,000+
                        </td>

                        <td style={{ padding: `15px` }}>
                            Executive and business schools may have higher tuition fees.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            PhD / Doctoral Programmes
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,000 – CHF 3,000 / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Many research students receive funding or assistantship opportunities.
                        </td>
                    </tr>


                    <tr>
                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Private Universities
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 15,000 – CHF 50,000+ / year
                        </td>

                        <td style={{ padding: `15px` }}>
                            Private institutions and specialised programmes generally have higher fees.
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
                Estimated monthly living expenses for international students in Switzerland.
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
                            Zurich
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,500 – CHF 2,500
                        </td>

                        <td style={{ padding: `15px` }}>
                            ETH Zurich, University of Zurich
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Geneva
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,500 – CHF 2,400
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Geneva, Graduate Institute
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Lausanne
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,300 – CHF 2,200
                        </td>

                        <td style={{ padding: `15px` }}>
                            EPFL, University of Lausanne
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Bern
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,200 – CHF 2,000
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Bern
                        </td>

                    </tr>



                    <tr>

                        <td style={{ padding: `15px`, fontWeight: `500` }}>
                            Basel
                        </td>

                        <td style={{ padding: `15px` }}>
                            CHF 1,300 – CHF 2,200
                        </td>

                        <td style={{ padding: `15px` }}>
                            University of Basel
                        </td>

                    </tr>


                </tbody>


            </table>


        </div>


    </div>

</section>
        {/*  Section 5: Instagram Reels  */}
         {/*  Section 5: Instagram Reels  */}
        <InstagramStories country="Switzerland" />
<section className="work-opportunities-section" style={{ padding: `27px 0 0px 0`, backgroundColor: `#f8f9fa` }}>
    <div className="layout-container">

        <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">CAREER & EARNINGS</span>
            <h2 className="section-title">
                Part-Time Jobs & <span className="accent-text">Work Opportunities</span> in Switzerland
            </h2>
        </div>

        <div className="row g-5 align-items-center mb-5">

            <div className="col-lg-6" data-aos="fade-right">

                <h4 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>
                    Part-Time Jobs in Switzerland
                </h4>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Switzerland offers international students valuable opportunities to gain practical work experience while pursuing their studies. Eligible students may work part-time in accordance with Swiss immigration regulations, allowing them to earn additional income while developing professional and intercultural skills.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Students can find part-time employment in hospitality, tourism, retail, customer service, administration, research assistance, universities, IT support, finance, logistics, and other service sectors. These opportunities help students gain hands-on experience and understand Switzerland's highly professional work environment.
                </p>

                <p className="text-muted" style={{ lineHeight: `1.8` }}>
                    Working while studying helps students improve communication skills, become financially independent, build international professional networks, strengthen their resumes, and prepare for rewarding global careers.
                </p>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="position-relative">

                    <img src="/img/part-time.webp"
                        alt="Work in Switzerland"
                        className="img-fluid rounded-4 shadow-lg w-100" />

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 rounded-bottom-4"
                        style={{ background: `linear-gradient(to top,rgba(9,30,62,.9),transparent)` }}>

                        <h5 className="text-white fw-bold mb-1">
                            Post-Study Work Opportunities
                        </h5>

                        <p className="text-white opacity-75 mb-0" style={{ fontSize: `.9rem` }}>
                            Gain valuable Swiss work experience after graduation.
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
                        After completing an eligible qualification, international graduates can explore career opportunities in Switzerland by securing employment in their field of study. Practical work experience enhances employability, strengthens professional skills, and provides valuable international exposure in one of the world's most innovative economies.
                    </p>

                    <p className="text-muted mb-0">
                        Switzerland offers excellent career opportunities across industries such as Information Technology, Engineering, Banking & Finance, Healthcare, Pharmaceuticals, Biotechnology, Hospitality, Tourism, Research, Manufacturing, Luxury Goods, Business Management, and Environmental Sciences.
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
                            Gain valuable Swiss work experience.
                        </span>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Earn income to support living expenses.
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
                            Experience Switzerland's multicultural and innovative work environment.
                        </span>
                    </li>

                    <li className="d-flex align-items-start">
                        <div className="me-3 mt-1" style={{ color: `var(--accent)` }}>
                            <i className="fas fa-check-circle fs-5"></i>
                        </div>
                        <span className="text-muted fw-bold">
                            Enhance employability with internationally recognized work experience.
                        </span>
                    </li>

                </ul>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

                <div className="bg-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{ background: `var(--primary)!important` }}>

                    <div className="position-absolute"
                        style={{ top: `-20px`, right: `-20px`, opacity: `.1`, fontSize: `150px` }}>
                        <i className="fas fa-mountain"></i>
                    </div>

                    <h4 className="fw-bold mb-4 position-relative z-1 text-white">
                        How The Global Ties Can Help
                    </h4>

                    <p className="mb-4 position-relative z-1 text-light"
                        style={{ lineHeight: `1.8`, opacity: `.9` }}>

                        The Global Ties provides complete guidance for students planning to study in Switzerland. Our experienced counsellors assist with university selection, admissions, document verification, Swiss National D Visa applications, financial documentation, motivation letter review, accommodation guidance, pre-departure orientation, and post-arrival support. We also help students understand work opportunities, career pathways, and post-study employment options for a successful study abroad experience.

                    </p>

                    <div className="p-3 rounded-3 position-relative z-1"
                        style={{ background: `rgba(255,255,255,.1)`, borderLeft: `3px solid var(--accent)` }}>

                        <p className="mb-0 small" style={{ opacity: `.85` }}>

                            <strong>Note:</strong> Student work permissions, permitted working hours, and post-study employment regulations are governed by Swiss immigration authorities and may change over time. Students should always verify the latest regulations before making employment or visa-related decisions.

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
The Global Ties provides comprehensive end-to-end support for students planning to study in Switzerland. Our experienced counsellors offer personalized guidance to help you choose the right university, program, and study destination based on your academic qualifications, career goals, interests, and financial plans.

Our services include university selection, course and program guidance, profile evaluation, admission application assistance, document verification, motivation letter review, Statement of Purpose (SOP) guidance, financial documentation support, scholarship guidance, Swiss National D Visa application assistance, visa documentation review, interview preparation, accommodation guidance, pre-departure orientation, travel assistance, and post-arrival support.                 
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
                    <h4 className="modal-title fw-bold" id="contactModalLabel" style={{ color: `var(--primary)` }}>Switzerland Student Visa (National D Visa) Checklist</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4" style={{ lineHeight: `1.6`, fontSize: `0.95rem` }}>
                    <h5 className="mb-3 fw-bold" style={{ color: `var(--accent)` }}>Complete Student Visa Document Checklist | The Global Ties</h5>
                    <p className="text-muted mb-4">Switzerland is renowned for its world-class education system, research excellence, innovation, and high quality of life. International students planning to pursue studies for more than 90 days must apply for a Swiss National D Student Visa before travelling to Switzerland. After arrival, students are also required={true} to register with the local cantonal authorities and obtain a residence permit.</p>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Mandatory Documents</h5>
                    
                    <div className="mb-3">
                        <strong className="text-dark">1. Valid Passport</strong>
                        <ul className="text-muted mt-2">
                            <li>Original passport valid for the required={true} period.</li>
                            <li>Passport should contain sufficient blank pages.</li>
                            <li>Copies of previous passports (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">2. University Admission Letter</strong>
                        <p className="text-muted mt-2 mb-1">Official Letter of Acceptance or Confirmation of Enrolment from a recognised Swiss university or educational institution.</p>
                        <p className="text-muted mt-2 mb-1">The letter should clearly mention:</p>
                        <ul className="text-muted">
                            <li>Course name</li>
                            <li>Duration of study</li>
                            <li>Academic intake</li>
                            <li>Tuition fee details (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">3. National D Visa Application Form</strong>
                        <ul className="text-muted mt-2">
                            <li>Completed and signed Student Visa (National D) application form.</li>
                            <li>Submit all required={true} forms as instructed by the Swiss Embassy or Visa Application Centre.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">4. Passport-Size Photographs</strong>
                        <ul className="text-muted mt-2">
                            <li>Recent biometric passport-size photographs.</li>
                            <li>Must meet Swiss visa photo specifications.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">5. Proof of Tuition Fee Payment</strong>
                        <ul className="text-muted mt-2">
                            <li>Receipt of tuition fee payment or admission deposit (if required={true} by the institution).</li>
                            <li>Bank transaction receipt or official payment confirmation.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">6. Proof of Financial Support</strong>
                        <p className="text-muted mt-2 mb-1">Students must demonstrate sufficient financial resources to cover:</p>
                        <ul className="text-muted">
                            <li>Tuition fees</li>
                            <li>Living expenses</li>
                            <li>Accommodation</li>
                            <li>Health insurance</li>
                        </ul>
                        <p className="text-muted mt-2 mb-1">Accepted financial documents include:</p>
                        <ul className="text-muted">
                            <li>Recent Bank Statements</li>
                            <li>Education Loan Sanction Letter</li>
                            <li>Scholarship Award Letter</li>
                            <li>Sponsor's Financial Documents</li>
                            <li>Financial Guarantee (where accepted).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">7. Academic Documents</strong>
                        <ul className="text-muted mt-2">
                            <li>10th Mark Sheet & Certificate</li>
                            <li>12th Mark Sheet & Certificate</li>
                            <li>Bachelor's Degree (for Master's applicants)</li>
                            <li>Consolidated Mark Sheets</li>
                            <li>Degree/Provisional Certificate</li>
                            <li>Work Experience Certificates (if applicable).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">8. English or Language Proficiency</strong>
                        <p className="text-muted mt-2 mb-1">Provide valid language test scores where required={true}:</p>
                        <ul className="text-muted">
                            <li>IELTS Academic</li>
                            <li>TOEFL iBT</li>
                            <li>Other accepted English language qualifications</li>
                            <li>German, French or Italian language certificates (if applicable to the programme).</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">9. Statement of Purpose / Motivation Letter</strong>
                        <p className="text-muted mt-2 mb-1">A signed motivation letter explaining:</p>
                        <ul className="text-muted">
                            <li>Why you chose Switzerland.</li>
                            <li>Why you  the university and course.</li>
                            <li>Your future academic and career plans.</li>
                            <li>Your commitment to leave Switzerland after completing your studies, in accordance with visa conditions.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">10. Curriculum Vitae (CV)</strong>
                        <p className="text-muted mt-2 mb-1">Updated CV detailing:</p>
                        <ul className="text-muted">
                            <li>Educational qualifications</li>
                            <li>Employment history</li>
                            <li>Academic achievements</li>
                            <li>Relevant extracurricular activities.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">11. Health Insurance</strong>
                        <p className="text-muted mt-2 mb-0">Proof of valid health insurance covering your stay in Switzerland or evidence that you will obtain approved Swiss health insurance after arrival, as required={true}.</p>
                    </div>

                    <div className="mb-3">
                        <strong className="text-dark">12. Accommodation Details</strong>
                        <ul className="text-muted mt-2">
                            <li>Hostel confirmation</li>
                            <li>Rental agreement</li>
                            <li>University accommodation confirmation</li>
                            <li>Invitation letter from host (if applicable).</li>
                        </ul>
                    </div>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Additional Supporting Documents (If Applicable)</h5>
                    <ul className="text-muted">
                        <li>Previous Schengen Visa Copies</li>
                        <li>Scholarship Award Letter</li>
                        <li>Sponsorship Letter</li>
                        <li>Employment Experience Certificates</li>
                        <li>Internship Certificates</li>
                        <li>Police Clearance Certificate (if requested)</li>
                        <li>Marriage Certificate (if applicable)</li>
                        <li>Name Change Affidavit</li>
                        <li>Certified translations of documents not issued in English, German, French or Italian.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>Before You Submit Your Application</h5>
                    <p className="text-muted mb-1">Ensure that:</p>
                    <ul className="text-muted">
                        <li>All information matches your passport and admission letter.</li>
                        <li>Financial documents clearly demonstrate sufficient funds.</li>
                        <li>Your motivation letter is complete and professionally written.</li>
                        <li>Academic documents are organised and complete.</li>
                        <li>All scanned copies are clear and legible.</li>
                        <li>Original documents are available during submission or interview if requested.</li>
                    </ul>

                    <h5 className="mt-4 mb-3 fw-bold" style={{ color: `var(--primary)` }}>After Visa Approval</h5>
                    <p className="text-muted mb-1">Carry the following documents while travelling:</p>
                    <ul className="text-muted">
                        <li>Passport with Swiss National D Visa</li>
                        <li>University Admission Letter</li>
                        <li>Tuition Fee Payment Receipt</li>
                        <li>Financial Documents</li>
                        <li>Accommodation Details</li>
                        <li>Health Insurance Documents</li>
                        <li>Flight Ticket</li>
                        <li>Academic Certificates</li>
                        <li>Emergency Contact Details</li>
                        <li>Copies of all important documents</li>
                    </ul>

                    <p className="text-muted mt-3 mb-0">After arriving in Switzerland, register with the local cantonal migration office within the required={true} timeframe to obtain your student residence permit.</p>
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

export default StudyInSwitzerland;
