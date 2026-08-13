import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Gmat = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Gmat - GlobalEdu</title>
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
      font-size: 1.2rem;
            color:#fff;
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

    .testimonial-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border-left: 4px solid var(--accent);
      height: 100%;
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
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>GMAT</span> Preparation</h1>
      <p>Achieve your target score with our expert-led GMAT coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  About GMAT Exam  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About the <span className="accent-text">GMAT Exam</span></h2>
          <p className="mt-4 text-muted mb-4" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The Graduate Management Admission Test (GMAT) is an essential part of the business school application process.</p>
          <ul className="feature-list mt-4" style={{ fontSize: `1.1rem`, lineHeight: `1.8` }}>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Administered by:</strong> GMAC (Graduate Management Admission Council)</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>required={true} for:</strong> Students who want to pursue PG Degree/ Masters in Business Administration Entrance exam in USA primarily. However there are some Premier Ivy League universities in UK that may also require GMAT to be taken as a qualifying exam.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Website:</strong> <a href="http://www.mba.com" target="_blank">mba.com</a></div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Validity:</strong> The score is generally valid for 5 years.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Reporting:</strong> Sent to 5 universities free of cost at the time of exam.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Registration:</strong> Online, Phone, Mail, Fax.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Total Duration:</strong> 2 hours 15 minutes (Focus Edition).</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div><strong>Fee:</strong> USD 275 (Test Center) / USD 300 (Online).</div></li>
          </ul>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/gmat-testpre.jpeg" alt="Test Preparation" className="img-fluid rounded shadow-lg"  />
        </div>
      </div>
    </div>
  </section>

  {/*  Why Study GMAT at The Global Ties  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Why to study GMAT at <span className="accent-text">The Global Ties?</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up">
          <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.8` }}>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Experienced and specialist faculty for GMAT Verbal and GMAT Quants.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Best track record of students (Target Scores and Admissions).</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Adaptive GMAT coaching tailoring student's requirements and ability.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Best in class learning infrastructure and ambiance.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Dedicated GMAT review sessions.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>One on One GMAT classes.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Get free GMAT 5 online full length computer adaptive test and 20 full length paper based test.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>10000 plus practice questions.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Guaranteed result.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Flexible timings.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Comprehensive study material including a course book and practice test book.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Students have 10% discount for the following enrollment and for any Translation Services or Essay Editing Services of The Global Ties.</div></li>
            <li><i className="fa-solid fa-angle-right" style={{ color: `var(--primary)` }}></i> <div>Best GMAT training center in Coimbatore.</div></li>
          </ul>
        </div>
      </div>
    </div>
  </section>



  {/*  Score Bands  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">GMAT Score <span className="accent-text">Ranges (Focus Edition)</span></h2>
      </div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-8">
          <div className="table-responsive bg-white rounded shadow-sm p-4 border-top" style={{ borderTopColor: `var(--accent) !important`, borderTopWidth: `4px !important` }}>
            <table className="table table-hover mb-0">
              <thead style={{ backgroundColor: `#f8f9fa` }}>
                <tr>
                  <th className="py-3">GMAT Score (205-805)</th>
                  <th className="py-3">Percentile Estimate</th>
                  <th className="py-3">Competitiveness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">555 -  605</td>
                  <td className="py-3">50th - 70th Percentile</td>
                  <td className="py-3 text-muted">Average / Good Programs</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">615 -  655</td>
                  <td className="py-3">75th - 89th Percentile</td>
                  <td className="py-3 text-muted">Highly Competitive</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">665 -  705+</td>
                  <td className="py-3">93rd - 99th Percentile</td>
                  <td className="py-3 text-muted">Top Tier Universities (Ivy League/M7)</td>
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
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 1</h5>
            <p className="text-muted mb-0">Quantitative Reasoning: Algebra, arithmetic, and intensive problem-solving.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-spell-check"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Verbal Reasoning: Critical reasoning, reading comprehension, and logic strategies.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Data Insights: Data sufficiency, multi-source reasoning, and graphical interpretation.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Full-length computer adaptive mock tests, error log reviews, and pacing.</p>
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
            <h4>What is the GMAT Focus Edition?</h4>
            <p className="text-muted">The GMAT Focus Edition is the new, shortened version of the exam. It removes the essay section and introduces a new Data Insights section, taking only 2 hours and 15 minutes.</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>Can I choose my section order?</h4>
            <p className="text-muted">Yes! You can take the three sections (Quantitative, Verbal, Data Insights) in any order you choose, giving you the flexibility to play to your strengths.</p>
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

export default Gmat;
