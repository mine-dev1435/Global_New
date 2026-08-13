import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Toefl = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Toefl - GlobalEdu</title>
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
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>TOEFL</span> Preparation</h1>
      <p>Achieve your target score with our expert-led TOEFL coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  About TOEFL Training  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About <span className="accent-text">TOEFL Training</span></h2>
          <p className="mt-4 text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Achieve your target TOEFL score with our expert-led coaching program designed to help you succeed. We provide highly comprehensive study materials, personalized guidance, and unlimited computer-based practice tests that closely match the actual TOEFL exam. Our library is equipped with the latest TOEFL preparation resources, including updated practice tests, mock exams, and reference books. Our experienced trainers focus on improving your Reading, Listening, Speaking, and Writing skills through structured lessons and regular performance assessments. With one-on-one feedback, proven test-taking strategies, and a supportive learning environment, we help students build confidence and maximize their scores. Whether you are planning to study abroad or meet university admission requirements, our TOEFL coaching program equips you with the skills and confidence needed to achieve your desired score and reach your academic goals.</p>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/toelf.jpeg
" alt="Test Preparation" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </section>


  {/*  Features of TOEFL Training  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Features of <span className="accent-text">TOEFL Training</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-clock mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">40 Hours Training</h5>
            <p className="text-muted mb-0">40 Hours of unmatched classroom training.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-question-circle mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Doubt Clearing</h5>
            <p className="text-muted mb-0">Unlimited doubt clearing sessions.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-user-tie mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Expert Faculty Access</h5>
            <p className="text-muted mb-0">Unlimited access to the faculty for one-on-one sessions.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-book mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Comprehensive Material</h5>
            <p className="text-muted mb-0">Highly comprehensive study material.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-laptop-file mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Real-Life Mock Tests</h5>
            <p className="text-muted mb-0">Mock-tests conducted under real life exam conditions.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-comments mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Admission Counseling</h5>
            <p className="text-muted mb-0">Preliminary counseling sessions on admission to Universities.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  TOEFL iBT Test Sections  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">TOEFL iBT <span className="accent-text">Test Sections</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12" data-aos="fade-up">
          <div className="table-responsive bg-white rounded shadow-sm p-4">
            <table className="table table-bordered table-striped mb-0">
              <thead style={{ background: `var(--primary)`, color: `white` }}>
                <tr>
                  <th style={{ width: `15%` }}>Section</th>
                  <th style={{ width: `20%` }}>Time Limit</th>
                  <th style={{ width: `20%` }}>Questions</th>
                  <th style={{ width: `45%` }}>Tasks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Reading</strong></td>
                  <td>60-80 minutes</td>
                  <td>36-56 questions</td>
                  <td>Read 3 or 4 passages from academic texts and answer questions.</td>
                </tr>
                <tr>
                  <td><strong>Listening</strong></td>
                  <td>60-90 minutes</td>
                  <td>34-51 questions</td>
                  <td>Listen to lectures, classroom discussions and conversations, then answer questions.</td>
                </tr>
                <tr>
                  <td><strong>Break</strong></td>
                  <td>10 minutes</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><strong>Speaking</strong></td>
                  <td>20 minutes</td>
                  <td>6 tasks</td>
                  <td>Express an opinion on a familiar topic; speak based on reading and listening tasks.</td>
                </tr>
                <tr>
                  <td><strong>Writing</strong></td>
                  <td>50 minutes</td>
                  <td>2 tasks</td>
                  <td>Write essay responses based on reading and listening tasks; support an opinion in writing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Exam Overview  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">TOEFL Exam <span className="accent-text">Overview</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">ETS (Educational Testing Service)</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Type:</strong><br /><span className="text-muted">iBT (Internet-Based Test) or Home Edition</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">0 � 120 Points</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">Under 2 hours (new format)</span></div></li>
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
                  <th className="py-3">TOEFL Score</th>
                  <th className="py-3">CEFR Level</th>
                  <th className="py-3">Skill Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">42 � 71</td>
                  <td className="py-3">B1</td>
                  <td className="py-3 text-muted">Intermediate</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">72 � 94</td>
                  <td className="py-3">B2</td>
                  <td className="py-3 text-muted">High-Intermediate</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">95 � 120</td>
                  <td className="py-3">C1 / C2</td>
                  <td className="py-3 text-muted">Advanced / Expert</td>
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
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 1</h5>
            <p className="text-muted mb-0">Reading strategies: Academic texts, pacing, and answering inference questions.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-headphones"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Listening focus: Note-taking during university lectures and conversations.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Speaking structure: Expressing opinions clearly on academic and familiar topics.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Writing synthesis, mock tests, and time management for the new shorter format.</p>
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
            <h4>Is TOEFL accepted in the UK and Australia?</h4>
            <p className="text-muted">Yes, the TOEFL iBT is widely accepted for university admissions in the UK, Australia, New Zealand, Canada, and the USA.</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>How long does it take to get scores?</h4>
            <p className="text-muted">You can view your unofficial Reading and Listening scores at the end of your test. Official scores are typically available within 4-8 days.</p>
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

export default Toefl;
