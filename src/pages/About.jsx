import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>About The Global Ties | Study Abroad Consultants in Coimbatore</title>
        <meta name="description" content="Learn about The Global Ties, premier study abroad consultants in Coimbatore. We provide expert overseas education guidance, university admissions & visa assistance." />
        <meta name="keywords" content="Study Abroad Consultants in Coimbatore, Study Abroad, Study in Canada, Study in UK, Study in Australia, MBBS Abroad, IELTS" />
      </Helmet>
      <main>
        {/* Original HTML */}
<style>{`
    @media (max-width:900px){
        .img-fluid {
    max-width: 100%;
    height: auto !important;
}
        .about-hero {
    background: linear-gradient(rgba(10, 30, 50, 0.8), rgba(10, 30, 50, 0.8)), url(img/hero_edu2.png) center / cover no-repeat;
    padding: 29px 0 80px !important;
    text-align: center;
}
        .about-hero h1 {
    color: white;
    font-size: 2.5rem!important;
    font-weight: 700;
    margin-bottom: 20px;
}
        .stat-number {
    font-size: 2rem!important;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: var(--font-h);
}
    }
        .value-card {
        background: white;
        border-radius: 12px;
        padding: 30px;
        transition: transform 0.3s ease;
        text-align: center;
      }
    .value-card:hover {
        transform: translateY(-10px);
      }
    .value-icon { font-size: 2.2rem; color: #0384ca; } 
    .value-card h3 { color: #0384ca; font-weight: 600; font-size: 1.6rem; } 
    .value-card p { text-align: justify; color: #475569; line-height: 1.7; font-size: 0.95rem; }
    
    /* Track Record */
    .stat-box {
      text-align: center;
      padding: 30px;
      background: var(--primary);
      color: white;
      border-radius: 12px;
      margin-bottom: 30px;
    }
    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 10px;
      font-family: var(--font-h);
    }
    
    /* Team */
    .team-card {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(9, 30, 62, 0.08);
      margin-bottom: 40px;
      background: white;
      transition: all 0.4s ease;
      position: relative;
    }
    .team-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(9, 30, 62, 0.15);
    }
    .team-img-wrapper {
      position: relative;
      overflow: hidden;
    }
    .team-img {
      height: 405px;
      background-color: #e2e8f0;
      background-position: top center;
      background-size: cover;
      transition: transform 0.5s ease;
    }
    .team-card:hover .team-img {
      transform: scale(1.05);
    }
    .team-info {
      padding: 25px;
      text-align: center;
      background: white;
      position: relative;
      z-index: 2;
    }
    .team-info h4 {
      margin-bottom: 5px;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--primary);
    }
    .team-info p {
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 15px;
      font-size: 0.95rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .team-socials {
      display: flex;
      justify-content: center;
      gap: 12px;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.4s ease;
    }
    .team-card:hover .team-socials {
      opacity: 1;
      transform: translateY(0);
    }
    .team-socials a {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: rgba(9, 30, 62, 0.05);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .team-socials a:hover {
      background: var(--accent);
      color: white;
    }
    
    /* Enquiry Form */
    .enquiry-wrapper {
      background: white;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.08);
    }
    .form-control {
      padding: 12px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      border: 1px solid var(--border);
    }
    .btn-submit {
      background: var(--accent);
      color: white;
      padding: 12px 30px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      width: 100%;
      transition: background 0.3s;
    }
    .btn-submit:hover {
      background: #d97706;
      color: white;
    }
    .fs-4 {
        font-size: 1rem !important;
    }
   .pdf-section{
    background:#f8f9fa;
    padding:80px 0;
}

.pdf-card{
    position:relative;
    overflow:hidden;
    border-radius:16px;
    background:#fff;
    box-shadow:0 12px 30px rgba(0,0,0,.08);
    transition:.4s ease;
    height:540px; /* Same height for both cards */
}

.pdf-card:hover{
    transform:translateY(-8px);
    box-shadow:0 20px 45px rgba(0,0,0,.15);
}

.pdf-card img{
    width:100%;
    height:100%;          /* Fill card height */
    object-fit:cover;     /* Crop neatly */
    display:block;
    transition:.5s;
}

.pdf-card:hover img{
    transform:scale(1.05);
}

.pdf-overlay{
    position:absolute;
    inset:0;
    background:rgba(0,0,0,.55);
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    transition:.4s;
}

.pdf-card:hover .pdf-overlay{
    opacity:1;
}

.pdf-overlay span{
    background:#0d6efd;
    color:#fff;
    padding:12px 28px;
    border-radius:40px;
    font-size:16px;
    font-weight:600;
}

@media(max-width:991px){
    .pdf-section{
        padding:60px 0;
    }

    .pdf-card{
        height:auto;
    }

    .pdf-card img{
        height:auto;
        object-fit:contain;
    }
}
  
  `}</style>
  <style>{`
    .ques_section {
        margin-bottom: 25px;
        padding-left: 20px;
        border-left: 3px solid var(--accent);
    }
    .ques_section h4 {
        color: var(--primary);
        font-weight: 600;
        margin-bottom: 10px;
    }
    .ques_section p {
        color: var(--dark-text);
        line-height: 2.1;
    }
   
  `}</style>



  {/*  01 Hero Section  */}
  <section className="about-hero">
    <div className="container" data-aos="fade-up">
      <h1>About <span className="accent-text" style={{ color: `var(--accent)` }}>The Global Ties</span></h1>
      <p>Bridging the gap between your educational dreams and global realities. We are your trusted partners in international education and career advancement.</p>
    </div>
  </section>

  {/*  02 Who We Are  */}
  <section className="about-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
      <h2 className="section-title">
        Who <span className="accent-text">We Are</span>
    </h2>
          <p className="mt-4">The Global Ties is a leading professionaly managed Overseas Education Consulting company. Our team of young professionals is lead by expert advisers. We assist Indian students seeking admissions in globaly recognized education programs offered by famous academic institutions a l over the world. We are a leading Overseas Education service provider with immense experience in guiding students to get admissions to their desired universities across the globe.  Our recruitment team works hand-in-hand with institutions to reach their goals. The Global Ties have a decade of experience in Career Guidance, Test Preparatory Classes, and Overseas Education Consulting. </p>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/hero_edu2.png" alt="Who We Are" className="img-fluid rounded shadow-lg" style={{ objectFit: `cover`, height: `450px`, width: `100%` }} />
        </div>
      </div>
    </div>
  </section>

  {/*  03 Our Vision & Mission  */}
  <section className="about-section" style={{ backgroundColor: `#f8f9fa` }}>
    <div className="container">
      <div className="row g-4 justify-content-center">
        {/*  Our Vision  */}
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
          <div className="value-card text-start p-5">
            <div className="d-flex align-items-center mb-3">
    <i className="fa-solid fa-eye value-icon me-3"></i>
    <h3 className="mb-0">Our Vision</h3>
  </div>
            <p className="mt-3">Our vision is to make overseas education accessible to every student and provide dedicated support in nurturing students and provide seamless services. The Global Ties prepares students and assist them in enrolling in the top universities of their choice around the world. We are committed to providing individual attention to students and help them shape their career. We are extremely futuristic driven by a passion to guide students in their overseas education journey and bring their dreams to reality.</p>
          </div>
        </div>
        {/*  04 Our Mission  */}
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="200">
          <div className="value-card text-start p-5">
            <div className="d-flex align-items-center mb-3">
    <i className="fa-solid fa-bullseye value-icon me-3"></i>
    <h3 className="mb-0">Our Mission</h3>
  </div>
            <p className="mt-3">To deliver high-quality service that enables people to meet their goals in life more effectively. Our mission is to source internationally academic institutions providing modern learning programs leading to bright international careers and assist Indian students to gain easy access to such learning opportunities. We strive hard to make Overseas Education accessible to  students from tier 2 and tier 3 cities and create an awareness among them on importance of studying abroad that unlocks their future .</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  06 Proven Track Record  */}
  <section className="about-section bg-light-alt">
    <div className="container">
      <div className="section-header text-center mb-5" data-aos="fade-up">
     <h2 className="section-title">
        Proven <span className="accent-text">Track Record</span>
    </h2>    
      </div>
      <div className="row g-4">
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-box">
            <div className="stat-number">10+</div>
            <div>Years Experience</div>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-box">
            <div className="stat-number">5K+</div>
            <div>Successful Visas</div>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-box">
            <div className="stat-number">200+</div>
            <div>University Partners</div>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div>Destination Countries</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    <section className="pdf-section">
    <div className="container">
        <div className="row align-items-stretch g-4">

            <div className="col-lg-8">
                <div className="pdf-card">
                    <a href="img/presentation.pdf" target="_blank">
                        <img src="/img/presentation.jpg" alt="Presentation" />
                        <div className="pdf-overlay">
                            <span>View Presentation</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="pdf-card">
                    <a href="img/overseas_education.pdf" target="_blank">
                        <img src="/img/overseas_education.jpg" alt="Brochure" />
                        <div className="pdf-overlay">
                            <span>View Brochure</span>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>

  {/*  03 Our Vision & 04 Our Mission  */}
  <section className="about-section bg-light-alt">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
                  <img src="/img/career-counseling.jpg" className="img-fluid rounded shadow Career-Counseling" style={{ width: `100%` }} alt="Career Counseling" />
              </div>

              <div className="col-lg-7 col-md-12" data-aos="fade-left">
                  <div className="ques_section">
                      <h4>What is career counseling?</h4>
                      <p>Career counseling is a systematic process of analysing the individual's strength, interest, skills, abilities and map it with the right education and career options associated with it.</p>
                  </div>
                  <div className="ques_section">
                      <h4>What is career guidance?</h4>
                      <p>Career guidance is a continuation of the above mentioned process also provides the detail execution plan and help the individual in the entire end to end process.</p>
                  </div>
                  <div className="ques_section">
                      <h4>Overall benefits</h4>
                      <p>This entire procedure helps the individual to set realistic goals guiding them map their interest with the right career path. We help in bridging the gap of a student's vision turn into reality by setting them right direction which makes their life prosperous and successful.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>


  {/*  05 Objectives  */}
  <section className="about-section">
    <div className="container">
      <div className="section-header text-center mb-5" data-aos="fade-up">
     <h2 className="section-title">
        Our <span className="accent-text">Objectives</span>
    </h2>    
      </div>
      <div className="row text-center g-4">
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="p-4 border rounded bg-white shadow-sm h-100">
            <h4 className="mb-3">IELTS Coaching</h4>
            <p> We provide comprehensive IELTS coaching designed to help students achieve the scores required={true} for admission to top universities and successful visa applications. Our experienced trainers focus on developing all four language skills Listening, Reading, Writing, and Speaking through structured lessons, practical exercises, and regular mock tests.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 border rounded bg-white shadow-sm h-100">
            <h4 className="mb-3">Test Preparation</h4>
            <p>We offer expert test preparation programs designed to help students achieve outstanding scores in internationally recognized entrance and language proficiency exams. Our structured coaching, experienced faculty, and personalized learning approach ensure that students are fully prepared to meet the admission requirements of leading universities worldwide.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="p-4 border rounded bg-white shadow-sm h-100">
            <h4 className="mb-3">University Partnerships</h4>
            <p>We have established partnerships with reputed universities and colleges across the globe to help students access world-class education opportunities. Our extensive network of partner institutions ensures that students receive expert guidance in selecting the right university based on their academic background, career goals, and budget.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  Why The Global Ties?  */}
  <section className="about-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <img src="/img/why_choose_global.jpeg" alt="Why Choose Us" className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <h2 className="section-title">
            Why <span className="accent-text">The Global Ties?</span>
          </h2>  
          <ul className="list-unstyled mt-4" style={{ fontSize: `1.05rem` }}>
            <li className="mb-3 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Direct Interaction:</strong> University representatives will have direct interaction with the applicants.</p>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Scholarships:</strong> We offer a lot of courses with scholarships.</p>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Global Network:</strong> Official Representative of more than 500 World-class Educational Institutions around the globe.</p>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Unbiased Services:</strong> We give the best and unbiased services suitable according to the needs of the students aspiring to study in various countries across the globe.</p>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Future Ready:</strong> We help prepare students to face the future with confidence themselves.</p>
              </div>
            </li>
            <li className="d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)`, marginTop: `3px` }}></i>
              <div>
                <p className="text-muted mb-0"><strong>Expert Trainers:</strong> All our Test Preparatory Course trainers and Consultants are fully experienced, Professionally trained by trusted University Partners.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


<section className="section-padding" id="sec">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-subtitle">Our Core Values</span>
        <h2 className="section-title">
            The Principles That <span className="accent-text">Drive Us</span>
        </h2>
      </div>
      {/*  Features  */}
      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-handshake"></i>
            </div>
            <h5>Integrity</h5>
            <p>
              Maintaining complete honesty and transparency in every interaction and process.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h5>Innovation</h5>
            <p>
              Continuously embracing new ideas to simplify the overseas education journeys.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-heart"></i>
            </div>
            <h5>Empathy</h5>
            <p>
              Deeply understanding and prioritizing the dreams and concerns of every student.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="feature-card text-center">
            <div className="feature-icon mx-auto">
              <i className="fas fa-award"></i>
            </div>
            <h5>Excellence</h5>
            <p>
              Consistently driving for the best possible outcomes and continuous improvement.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  08 What We Do  */}
  <section className="about-section bg-light-alt">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2" data-aos="fade-left">
         <h2 className="section-title">
        What <span className="accent-text">We Do</span>
    </h2>  
          <ul className="list-unstyled mt-4">
            <li className="mb-4 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)` }}></i>
              <div>
                <h5>Career & Course Counseling</h5>
                <p className="text-muted">Personalized sessions to identify the right course and career path tailored to your profile.</p>
              </div>
            </li>
            <li className="mb-4 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)` }}></i>
              <div>
                <h5>University Admissions</h5>
                <p className="text-muted">End-to-end assistance with applications, SOP drafting, and scholarship guidance.</p>
              </div>
            </li>
            <li className="mb-4 d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)` }}></i>
              <div>
                <h5>Visa Processing</h5>
                <p className="text-muted">Expert mock interviews, financial documentation support, and visa filing.</p>
              </div>
            </li>
            <li className="d-flex">
              <i className="fa-solid fa-check-circle text-accent fs-4 me-3" style={{ color: `var(--accent)` }}></i>
              <div>
                <h5>Post-Departure Support</h5>
                <p className="text-muted">Assistance with accommodation, flights, and connecting with alumni.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 order-lg-1 mt-5 mt-lg-0" data-aos="fade-right">
          <img src="/img/what-we-do.png" alt="What We Do" className="img-fluid rounded shadow-lg"  />
        </div>
      </div>
    </div>
  </section>



  {/*  09 Our Team  */}
  <section className="about-section bg-light-alt">
    <div className="container">
      <div className="section-header text-center mb-5" data-aos="fade-up">
     <h2 className="section-title">
        Founder  <span className="accent-text">Details</span>
    </h2>    
      </div>
      <div className="row align-items-center">
        {/*  Team Member 1  */}
        <div className="col-lg-4 col-md-5 mb-4" data-aos="fade-right">
          <div className="team-card" style={{ margin: `0 auto`, maxWidth: `400px` }}>
            <div className="team-img-wrapper">
                <div className="team-img" style={{ backgroundImage: `url('/img/founder-img.jpeg')` }}></div>
            </div>
            <div className="team-info">
              <h4>Ms. Nandini Ramesh</h4>
              <p>Founder & CEO </p>
              <div className="team-socials">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7" data-aos="fade-left">
          <p className="text-muted mb-3" style={{ fontSize: `1.1rem`, lineHeight: `1.7`, textAlign: `justify` }}><strong>Ms. Nandini Ramesh</strong> is the Founder and Chief Executive Officer of The Global Ties. She holds a postgraduate degree in Business Administration and has more than a decade of experience in the field of HR, Recruitment, Training, Overseas higher Education Consulting, and Financial Consulting. She is specialized in recruiting suitable people for different sectors, especially in middle and senior-level management.</p>
          <p className="text-muted mb-3" style={{ fontSize: `1.1rem`, lineHeight: `1.7`, textAlign: `justify` }}>She had attended several conferences and workshops in India and abroad related to Overseas Education. She has participated in a professional exchange program organized by the rotary international to the USA. She has conducted many training programs for students and faculties of various colleges. She has also served as the secretary of the Junior Chamber International.</p>
          <p className="text-muted mb-3" style={{ fontSize: `1.1rem`, lineHeight: `1.7`, textAlign: `justify` }}>Nandini is also a qualified international career coach assisting many students on their higher education journey. She is a motivational speaker and has conducted many skill development workshops in colleges. She has assisted more than 1500 students in career counseling, university selection, admission process, visa assistance as well as post landing services pertaining to education abroad. This encompasses under-graduation, postgraduation as well as research-based programs and had helped many aspirants' dreams come true.</p>
          <p className="text-muted mb-0" style={{ fontSize: `1.1rem`, lineHeight: `1.7`, textAlign: `justify` }}>The Global Ties is recognized and authorized by many reputed universities and institutions all over the world for its excellence. The Global Ties is also a certified training provider for IELTS, TOEFL, PTE, GRE, GMAT and SAT.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  11 Footer  */}
  

  {/*  Scripts  */}
      </main>
      <Footer />
    </>
  );
};

export default About;









