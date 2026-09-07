import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const French = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>French Language Classes in Coimbatore | Learn French</title>
        <meta name="description" content="Learn French in Coimbatore from certified language experts. A1, A2, B1, B2 levels, interactive sessions & DELF/DALF exam preparation." />
        <meta name="keywords" content="French Classes" />
      </Helmet>
      <main>
        {/* Original HTML */}
<style>{`
  
   @media (max-width:990px){
     .tp-hero h1 {
    font-size: 2.5rem!important;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
}
.tp-hero {
    background: linear-gradient(rgba(10, 30, 50, 0.8), rgba(10, 30, 50, 0.8)), url(img/hero_edu2.png) center / cover no-repeat;
    padding: 43px 0 70px!important;
    text-align: center;
    color: white;
}
  }
    /* Hero Section */
    .tp-hero {
      background: linear-gradient(rgba(10, 30, 50, 0.8), rgba(10, 30, 50, 0.8)), url('/img/hero_edu2.png') center/cover no-repeat;
      padding: 100px 0 70px;
      text-align: center;
      color: white;
    }
    .tp-hero h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: white;
    }
    .tp-hero p {
           color:#fff;
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
      opacity: 0.9;
    }
    
    /* Section Formatting */
    .content-section {
      padding: 80px 0;
    }
    .bg-light-alt {
      background-color: var(--light-bg);
    }
    .section-header {
      margin-bottom: 20px;
      text-align: center;
    }
    .section-header h2 {
      /* font-size: 2.5rem removed to unify heading sizes */
      font-weight: 700;
      position: relative;
      display: inline-block;
      padding-bottom: 15px;
      
    }
    .section-header h2::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 4px;
      background: var(--accent);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    /* Info Cards */
    .info-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border-top: 4px solid var(--accent);
      height: 100%;
    }
    .info-card h4 {
      color: var(--primary);
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    /* Feature List */
    .feature-list {
      list-style: none;
      padding-left: 0;
    }
    .feature-list li {
      margin-bottom: 15px;
      display: flex;
      align-items: flex-start;
    }
    .feature-list li i {
      color: var(--accent);
      margin-top: 5px;
      margin-right: 15px;
      font-size: 1.2rem;
    }
    
    /* Process Cards */
    .process-card {
      background: white;
      border-radius: 15px;
      padding: 40px 30px;
      position: relative;
      z-index: 1;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.05);
      height: 100%;
    }
    .process-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.1);
      border-color: var(--accent);
    }
    .process-card::before {
      content: attr(data-step);
      position: absolute;
      top: -20px;
      right: -10px;
      font-size: 8rem;
      font-weight: 800;
      color: rgba(0,0,0,0.03);
      z-index: -1;
      transition: all 0.3s ease;
    }
    .process-card:hover::before {
      color: rgba(255, 213, 79, 0.2);
    }
    .process-icon-box {
      width: 80px;
      height: 80px;
      background: rgba(13, 110, 253, 0.05);
      color: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      font-size: 2rem;
      transition: all 0.3s ease;
    }
    .process-card:hover .process-icon-box {
      background: var(--primary);
      color: white;
    }
  `}</style>



  {/*  Hero Section  */}
  <section className="tp-hero">
    <div className="container" data-aos="fade-up">
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>French</span> Classes</h1>
      <p>Achieve your target score with our expert-led French coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  What is the Test  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About the <span className="accent-text">French Exam</span></h2>
          <p className="mt-4 text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The French is a globally recognized standardized test essential for international university admissions and professional registrations. It rigorously evaluates your proficiency and readiness for an academic or professional environment abroad.</p>
          <div className="row g-3 mt-3">
            <div className="col-md-12">
              <div className="info-card p-3">
                <h6 className="fw-bold mb-2"><i className="fa-solid fa-earth-americas text-primary me-2"></i> Global Acceptance</h6>
                <p className="text-muted small mb-0">Accepted by thousands of institutions worldwide.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="info-card p-3">
                <h6 className="fw-bold mb-2"><i className="fa-solid fa-chart-bar text-primary me-2"></i> Comprehensive Assessment</h6>
                <p className="text-muted small mb-0">Accurately measures your core skills.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="info-card p-3">
                <h6 className="fw-bold mb-2"><i className="fa-solid fa-calendar-check text-primary me-2"></i> Flexible Dates</h6>
                <p className="text-muted small mb-0">Available multiple times a year at various test centers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/french-testpre.jpeg" alt="Test Preparation" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  {/*  Test Format  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Test Format <span className="accent-text">& Sections</span></h2>
        <p className="text-muted mt-3 text-center">Understanding the structure is the first step to mastering the exam.</p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card text-center p-4">
            <i className="fa-solid fa-ear-listen mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h4 className="fw-bold mb-3">Section 1: Comprehension de l'oral</h4>
            <p className="text-muted mb-0">Assesses your listening skills by answering questions based on recorded conversations, announcements, or broadcasts.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card text-center p-4">
            <i className="fa-solid fa-book-open-reader mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h4 className="fw-bold mb-3">Section 2: Comprehension des crits</h4>
            <p className="text-muted mb-0">Evaluates your ability to extract key information and understand detailed arguments from various written documents.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card text-center p-4">
            <i className="fa-solid fa-pen-nib mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h4 className="fw-bold mb-3">Section 3: Production ecrite</h4>
            <p className="text-muted mb-0">Tests your writing skills through tasks such as drafting formal letters, essays, or expressing a structured personal opinion.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card text-center p-4">
            <i className="fa-solid fa-comments mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h4 className="fw-bold mb-3">Section 4: Production orale</h4>
            <p className="text-muted mb-0">Measures your speaking ability via a guided conversation, interactive role-play, or presenting a documented argument.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Why Prepare With Us  */}
  <section className="content-section">
    <div className="container text-center">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-5 text-center">Why Prepare <span className="accent-text">With Us?</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="info-card p-4 text-center">
            <i className="fa-solid fa-chalkboard-user mb-3" style={{ fontSize: `3rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Expert Trainers</h5>
            <p className="text-muted mb-0">Learn from certified instructors with years of experience and proven track records.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="info-card p-4 text-center">
            <i className="fa-solid fa-book-open mb-3" style={{ fontSize: `3rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Extensive Materials</h5>
            <p className="text-muted mb-0">Access hundreds of practice questions, mock tests, and comprehensive study guides.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="info-card p-4 text-center">
            <i className="fa-solid fa-chart-line mb-3" style={{ fontSize: `3rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Performance Tracking</h5>
            <p className="text-muted mb-0">Regular assessments and personalized feedback to identify and improve weak areas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Exam Overview  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">French Exams <span className="accent-text">Overview</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">France education international & CCIP</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Types:</strong><br /><span className="text-muted">DELF, DALF, TEF, TCF</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">Aligned with CEFR Levels (A1 to C2)</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">Varies (1 hr 20 mins to 4 hours)</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Validity:</strong><br /><span className="text-muted">Lifetime (DELF/DALF) / 2 years (TEF/TCF)</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Fee:</strong><br /><span className="text-muted">Varies by level and test type</span></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Score Bands  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">CEFR <span className="accent-text">Levels</span></h2>
      </div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-8">
          <div className="table-responsive bg-white rounded shadow-sm p-4 border-top" style={{ borderTopColor: `var(--accent) !important`, borderTopWidth: `4px !important` }}>
            <table className="table table-hover mb-0">
              <thead style={{ backgroundColor: `#f8f9fa` }}>
                <tr>
                  <th className="py-3">Level</th>
                  <th className="py-3">Title</th>
                  <th className="py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">A1 / A2</td>
                  <td className="py-3">Basic User</td>
                  <td className="py-3 text-muted">Can understand and use familiar everyday expressions and basic phrases.</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">B1 / B2</td>
                  <td className="py-3">Independent User</td>
                  <td className="py-3 text-muted">required={true} for most university admissions in France and Canada PR (TEF/TCF).</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">C1 / C2</td>
                  <td className="py-3">Proficient User</td>
                  <td className="py-3 text-muted">Can express ideas fluently and spontaneously. required={true} for specialized academic degrees.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Preparation Plan  */}
  <section className="content-section">
    <div className="container text-center">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-5">Our 4-Week <span className="accent-text">Preparation Plan</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="process-card text-center" data-step="01">
            <div className="process-icon-box">
              <i className="fa-solid fa-ear-listen"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 1</h5>
            <p className="text-muted mb-0">Comprehension de l'oral (Listening): Podcasts, announcements, and dialogues.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Comprehension des ecrits (Reading): Articles, grammar structures, and vocabulary.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Production ecrite (Writing): Essays, formal letters, and structured argumentation.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Production orale (Speaking): Role-plays, monologues, and full mock interviews.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  FAQs  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Frequently Asked <span className="accent-text">Questions</span></h2>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card">
            <h4>DELF vs TEF: Which should I take?</h4>
            <p className="text-muted">DELF/DALF are diplomas valid for life, often used for academic purposes. TEF and TCF are tests valid for 2 years, highly requested for immigration (like Canada Express Entry) or naturalization.</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>What level is required={true} for studying in France?</h4>
            <p className="text-muted">Most undergraduate and postgraduate programs taught in French require at least a B2 level. Highly selective programs might require C1.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Footer CTA  */}
  <section className="py-5 text-center text-white" style={{ background: `linear-gradient(135deg, var(--primary), #1a365d)` }}>
    <div className="container" data-aos="fade-up">
      <h2 className="mb-4 text-white">Ready to Achieve Your Target Score?</h2>
      <p className="mb-4 text-center text-white" style={{ fontSize: `1.1rem`, opacity: `0.9` }}>Book a free counselling session or take a free practice test with The Global Ties.</p>
      <a href="contact" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold" style={{ color: `var(--primary)` }}>Book Free Counselling</a>
    </div>
  </section>

  {/*  Footer  */}
      </main>
      <Footer />
    </>
  );
};

export default French;
