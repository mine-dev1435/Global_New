import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Gre = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>GRE Coaching in Coimbatore | Best GRE Training Center</title>
        <meta name="description" content="Get GRE coaching in Coimbatore with expert quant & verbal trainers. Diagnostic tests, customized study plans & top university admission guidance." />
        <meta name="keywords" content="GRE Coaching" />
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
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>GRE</span> Coaching</h1>
      <p>Achieve your target score with our expert-led GRE coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  About GRE Exam  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About the <span className="accent-text">GRE Exam</span></h2>
          <p className="mt-4 text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The GRE is now only available as a Computer Based Test (Paper based test is in limited scope). The Verbal Reasoning and Quantitative Reasoning sections are section-level adaptive, meaning that the first section of the Verbal Reasoning and Quantitative Reasoning measures span a range of difficulty levels, from easy to difficult. The first section is assembled such that, overall, the first section is of average difficulty. The second section of each of the measures is administered based on a test taker's overall performance on the first section. The Tough questions have more credit than easier ones.</p>

        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/gre-testpre.jpeg" alt="Test Preparation" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  {/*  Why Study GRE at The Global Ties  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Why to study GRE at <span className="accent-text">The Global Ties?</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-chalkboard-user mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Specialist Faculty</h5>
            <p className="text-muted mb-0">Experienced and specialist faculty for GRE Verbal and GRE Quants.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-trophy mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Best Track Record</h5>
            <p className="text-muted mb-0">Best track record of our GRE students for target scores and admissions.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-brain mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Adaptive Coaching</h5>
            <p className="text-muted mb-0">Adaptive coaching tailoring student�s requirements and ability.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-building mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Top Infrastructure</h5>
            <p className="text-muted mb-0">Best in class learning infrastructure and ambiance.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-user-group mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">One-on-One Classes</h5>
            <p className="text-muted mb-0">Dedicated GRE review sessions and one-on-one classes.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-laptop-code mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Free Mock Tests</h5>
            <p className="text-muted mb-0">Get free 5 GRE online full length CBTs and 20 full length PBTs.</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>

  {/*  GRE Test Structure  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">GRE <span className="accent-text">Test Structure</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12" data-aos="fade-up">
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Total Computer Based Test (CBT) time is up to three hours 45 minutes, not including the research section. The directions at the beginning of each section specify the total number of questions in the section and the time allowed for the section. There are six sections with a 10-minute break following the third section. The Verbal and Quantitative sections may appear in any order, including an unidentified unscored section. Treat each section presented during your test as if it counts.</p>
          
          <div className="table-responsive bg-white rounded shadow-sm p-4 mt-4">
            <table className="table table-bordered table-striped mb-0">
              <thead style={{ background: `var(--primary)`, color: `white` }}>
                <tr>
                  <th style={{ width: `30%` }}>Section</th>
                  <th style={{ width: `40%` }}>Number of Questions</th>
                  <th style={{ width: `30%` }}>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Analytical Writing</strong></td>
                  <td>1 Issue Task*</td>
                  <td>30 minutes</td>
                </tr>
                <tr>
                  <td><strong>Analytical Writing</strong></td>
                  <td>1 Argument Task</td>
                  <td>30 minutes</td>
                </tr>
                <tr>
                  <td><strong>Verbal (2 sections)</strong></td>
                  <td>Approximately 20 questions per section</td>
                  <td>30 minutes for each section</td>
                </tr>
                <tr>
                  <td><strong>Quantitative (2 sections)</strong></td>
                  <td>Approximately 20 questions per section</td>
                  <td>35 minutes for each section</td>
                </tr>
                <tr>
                  <td><strong>Unscored**</strong></td>
                  <td>Varies</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td><strong>Research***</strong></td>
                  <td>Varies</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-muted" style={{ fontSize: `0.95rem` }}>
            <p>* For the Issue task, two essay topics are presented and you choose one. The Argument task does not present a choice of topics; instead one topic is presented.</p>
            <p>** An unidentified unscored section may be included and may appear in any order after the Analytical Writing section. It is not counted as part of your score.</p>
            <p>*** An identified research section that is not scored may be included, and it is always at the end of the test.</p>
          </div>
          <p className="text-muted mt-4" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Educational Testing Service (ETS) announced that the GRE General Test, the world's most widely accepted graduate admissions test, is now accepted by more than 500 business schools worldwide (including top schools like Harvard, MIT, Wharton, INSEAD for their MBA programs. In the last four years, the number of business schools accepting the GRE General Test for MBA admissions has quadrupled.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  GRE Scoring & Some Facts  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
          <div className="section-header text-start mb-4">
            <h2 className="section-title">GRE <span className="accent-text">Scoring</span></h2>
          </div>
          <div className="table-responsive bg-white rounded shadow-sm p-4">
            <table className="table table-bordered table-striped mb-0">
              <thead style={{ background: `var(--primary)`, color: `white` }}>
                <tr>
                  <th style={{ width: `40%` }}>Measure</th>
                  <th style={{ width: `60%` }}>Scores Reported</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Verbal Reasoning</strong></td>
                  <td>130 - 170, in 1 point increments</td>
                </tr>
                <tr>
                  <td><strong>Quantitative Reasoning</strong></td>
                  <td>130 - 170, in 1 point increments</td>
                </tr>
                <tr>
                  <td><strong>Analytical Writing</strong></td>
                  <td>0 - 6, in half point increments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <div className="section-header text-start mb-4">
            <h2 className="section-title">Some <span className="accent-text">Facts</span></h2>
          </div>
          <ul className="feature-list" style={{ fontSize: `1rem` }}>
            <li><i className="fa-solid fa-angle-right"></i> <div>Maximum score for sections Verbal, Quantitative is 170. Analytical writing score will be reported on a 0-6 score scale, in half-point increments.</div></li>
            <li><i className="fa-solid fa-angle-right"></i> <div>GRE is generally required={true} by universities in North America (USA and Canada).</div></li>
            <li><i className="fa-solid fa-angle-right"></i> <div>Most Universities require General GRE for admission to MS and Ph.D. in Engineering Sciences. Many Business schools now accept GRE scores for admission to MBA program.</div></li>
            <li><i className="fa-solid fa-angle-right"></i> <div>Generally for engineering Students score like 160 (q)+ 148 (v) + 4 (a) is considered OK for admission for middle order universities ranked between 40 to 90. There might be some deviation.</div></li>
          </ul>
        </div>
      </div>
    </div>
  </section>



  {/*  Exam Overview  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">GRE Exam <span className="accent-text">Overview</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">ETS (Educational Testing Service)</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Type:</strong><br /><span className="text-muted">Computer-delivered (Adaptive)</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">260 -  340 (V: 130-170, Q: 130-170)</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">1 hour 58 minutes (New Shorter GRE)</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Validity:</strong><br /><span className="text-muted">5 years</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Fee:</strong><br /><span className="text-muted">USD 220 (approx.)</span></div></li>
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
        <h2 className="section-title mb-4">Score <span className="accent-text">Ranges</span></h2>
      </div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-8">
          <div className="table-responsive bg-white rounded shadow-sm p-4 border-top" style={{ borderTopColor: `var(--accent) !important`, borderTopWidth: `4px !important` }}>
            <table className="table table-hover mb-0">
              <thead style={{ backgroundColor: `#f8f9fa` }}>
                <tr>
                  <th className="py-3">GRE Total Score</th>
                  <th className="py-3">Percentile Estimate</th>
                  <th className="py-3">Competitiveness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">300-  314</td>
                  <td className="py-3">50th - 65th Percentile</td>
                  <td className="py-3 text-muted">Average / Moderate Programs</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">315-  327</td>
                  <td className="py-3">70th - 85th Percentile</td>
                  <td className="py-3 text-muted">Highly Competitive</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">328-  340</td>
                  <td className="py-3">90th+ Percentile</td>
                  <td className="py-3 text-muted">Top Tier Universities (Ivy League)</td>
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
            <p className="text-muted mb-0">Quantitative foundation: Arithmetic, algebra, geometry, and data analysis.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-spell-check"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Verbal strategies: Text completion, sentence equivalence, and intense vocabulary.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Reading comprehension deep-dive and Analytical Writing (AWA) templates.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Full-length adaptive mock tests, pacing strategies, and detailed review.</p>
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
            <h4>Can I retake the GRE?</h4>
            <p className="text-muted">Yes, you can take the computer-delivered GRE up to five times within any continuous 12-month period, but no more than once every 21 days.</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>Is the GRE only for STEM programs?</h4>
            <p className="text-muted">No, the GRE is widely accepted for a variety of Master's and PhD programs across humanities, sciences, engineering, and increasingly, MBA programs.</p>
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
  
  
  
  
  

  {/*  Modal moved outside of layout containers to prevent backdrop issues  */}
  <div className="modal fade" id="greModal" tabIndex="-1" aria-labelledby="greModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header" style={{ background: `var(--primary)`, color: `white` }}>
          <h5 className="modal-title" id="greModalLabel">More About GRE Exam</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body text-start">
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>You can still earn a very high score even if you answer several questions incorrectly. Correct answers to harder questions lead to higher score as compared to easier questions. To get good score more difficult questions has to be answered.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Some universities may demand subject GRE. After completing your exam (even before with ScoreSelect), you can send your scores (free!) to four universities so be prepared.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Your GRE scores are valid for 5 years.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>You can take the GRE revised General Test (computer-based) only once every 21 days, and no more than five times within any continuous rolling 12-month period. This applies even if you canceled your scores on a test taken previously. If you take only the paper-based GRE revised General Test, you may take it as often as it is offered.</p>
        </div>
      </div>
    </div>
  </div>
      </main>
      <Footer />
    </>
  );
};

export default Gre;
