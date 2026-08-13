import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Ielts = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Ielts - GlobalEdu</title>
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
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>IELTS</span> Preparation</h1>
      <p>Achieve your target score with our expert-led IELTS coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  About IELTS  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About <span className="accent-text">IELTS</span></h2>
          <p className="mt-4 text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>IELTS has two versions - Academic and General Training. The Academic test is for those who want to study at a tertiary level in an English-speaking country. The General Training test is for those who want to do work experience or training programs, secondary school or migrate to an English-speaking country. All candidates take the same Listening and Speaking tests but different Reading and Writing tests.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The IELTS Course is of 40 hours duration. Classes are held thrice a week. There is both weekday and weekend batches available. The course covers all aspects and sections of the exams. New batch is started every fortnight.</p>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/iels.test.jpeg" alt="Test Preparation" className="img-fluid rounded shadow-lg"  />
        </div>
      </div>
    </div>
  </section>

  {/*  IELTS Exam Overview  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">IELTS Exam <span className="accent-text">Overview</span></h2>
        <p className="text-muted mt-3" style={{ fontSize: `1.1rem`, maxWidth: `800px`, margin: `0 auto` }}>IELTS is the world's most widely accepted English language proficiency test, recognised by over 11,000 organisations across 140+ countries. The Global Ties' expert coaches help you achieve your target band score with free guidance, strategy and mock tests.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">British Council, IDP & Cambridge</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Types:</strong><br /><span className="text-muted">Academic & General Training</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">Band 0 - 9</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Sections:</strong><br /><span className="text-muted">Listening, Reading, Writing, Speaking</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">2 hours 45 minutes</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Modes:</strong><br /><span className="text-muted">Computer-based & Paper-based</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Validity:</strong><br /><span className="text-muted">2 years</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Fee (India):</strong><br /><span className="text-muted">17,000 (approx.)</span></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Why Study IELTS at The Global Ties  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Why to study IELTS at <span className="accent-text">The Global Ties?</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-chalkboard-user mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Experienced Teachers</h5>
            <p className="text-muted mb-0">Experienced and qualified teachers.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-user-group mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">One-on-One Attention</h5>
            <p className="text-muted mb-0">One on one attention is provided to each student.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-ban mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">No Batch Classes</h5>
            <p className="text-muted mb-0">No batch based classes, ensuring personalized pacing.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-brain mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Skill-Specific Focus</h5>
            <p className="text-muted mb-0">Each skill is taught by experienced trainers.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-layer-group mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Modular Learning</h5>
            <p className="text-muted mb-0">Learn each skill (Listening, Writing, Speaking, Reading) individually.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-calendar-alt mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Flexible Schedules</h5>
            <p className="text-muted mb-0">Combine weekday class with weekend class in your schedule.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  FAQs  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Frequently Asked <span className="accent-text">Questions</span></h2>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card">
            <h4>How do I know which should I take?</h4>
            <p className="text-muted">Read the explanation of the Academic and General Training tests and contact the organization or institution to which you are applying to find out what it requires. Note that you must know which version to take when you complete the IELTS Application Form.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>How long is the test?</h4>
            <p className="text-muted">The Reading and Writing sections are for 60 minutes each, the listening is for 30 minutes, speaking is for 11-14minutes, which means that total duration is 2hrs 45 minutes. The Listening, Reading and Writing tests are done in one sitting. The Speaking test may be on the same day or up to seven days before or after the other tests.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card">
            <h4>When will I receive my test results?</h4>
            <p className="text-muted">Your Test Report Form will be posted to you 13 calendar days after your test date. All test centers will post your Test Report Form to you. Keep your Test Report Form in a secure place as you only receive one copy. Some test centers provide SMS alerts and an online results service.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card">
            <h4>How long are IELTS scores valid?</h4>
            <p className="text-muted">IELTS scores are valid for 2 years.</p>
          </div>
        </div>
      </div>
    </div>
  </section>



  {/*  Exam Overview  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">IELTS Exam <span className="accent-text">Overview</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">IDP / British Council</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Type:</strong><br /><span className="text-muted">Paper-based or Computer-delivered</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">0 -9 Bands</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">2 hours 45 minutes</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Validity:</strong><br /><span className="text-muted">2 years</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Fee:</strong><br /><span className="text-muted">USD 200 - 250 (approx.)</span></div></li>
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
        <h2 className="section-title mb-4">Score <span className="accent-text">Bands</span></h2>
      </div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-8">
          <div className="table-responsive bg-white rounded shadow-sm p-4 border-top" style={{ borderTopColor: `var(--accent) !important`, borderTopWidth: `4px !important` }}>
            <table className="table table-hover mb-0">
              <thead style={{ backgroundColor: `#f8f9fa` }}>
                <tr>
                  <th className="py-3">IELTS Band</th>
                  <th className="py-3">CEFR Level</th>
                  <th className="py-3">Skill Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">4.0 - 5.0</td>
                  <td className="py-3">B1</td>
                  <td className="py-3 text-muted">Limited / Modest User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">5.5 - 6.5</td>
                  <td className="py-3">B2</td>
                  <td className="py-3 text-muted">Competent User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">7.0 - 8.0</td>
                  <td className="py-3">C1</td>
                  <td className="py-3 text-muted">Good / Very Good User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">8.5 - 9.0</td>
                  <td className="py-3">C2</td>
                  <td className="py-3 text-muted">Expert User</td>
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
            <p className="text-muted mb-0">Listening strategies, accent familiarization, and basic mock tests.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Reading techniques, skimming, scanning, and vocabulary expansion.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Writing structures, essay structuring, and graph descriptions (Task 1 & 2).</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Speaking fluency, one-on-one mock interviews, and full-length tests.</p>
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

export default Ielts;
