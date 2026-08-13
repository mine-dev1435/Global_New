import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Pte = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Pte - GlobalEdu</title>
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
      <h1><span className="accent-text" style={{ color: `var(--accent)` }}>PTE</span> Preparation</h1>
      <p>Achieve your target score with our expert-led PTE coaching. Comprehensive study materials, mock tests, and personalized feedback to guarantee your success.</p>
    </div>
  </section>

  {/*  About PTE  */}
  <section className="content-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">About the <span className="accent-text">PTE Exam</span></h2>
          <p className="mt-4 text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>PTE Academic is the world's leading computer-based test of English for study abroad and immigration. Typically, PTE Academic results are available within five business days.</p>
          <ul className="feature-list mt-4" style={{ fontSize: `1.1rem` }}>
            <li><i className="fa-solid fa-bolt"></i> <div><strong>Fast:</strong> PTE Academic typically delivers results in five business days, so you don't need to worry about waiting for results.</div></li>
            <li><i className="fa-solid fa-map-marker-alt"></i> <div><strong>Approved:</strong> Approved by the Australian Government for visa applications and accepted by thousands of institutions in the UK, Australia, USA, Canada, New Zealand, and Ireland, including Harvard, Yale and INSEAD.</div></li>
            <li><i className="fa-solid fa-calendar-check"></i> <div><strong>Flexible Test Dates:</strong> We run test sessions 363 days of the year, at one of over 200 locations worldwide, so you can choose a time and place that suits you.</div></li>
          </ul>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/pte.jpeg" alt="Test Preparation" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  {/*  Why Study PTE at The Global Ties  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Why to study PTE at <span className="accent-text">The Global Ties?</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-chalkboard-user mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Expert Trainers</h5>
            <p className="text-muted mb-0">Experienced and qualified PTE trainers.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-user-group mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">One-on-One Coaching</h5>
            <p className="text-muted mb-0">One-on-one attention is provided to each student.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-book-open mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Free Materials</h5>
            <p className="text-muted mb-0">Free PTE study materials provided for all students.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-tag mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">No Enrollment Fees</h5>
            <p className="text-muted mb-0">Start learning without any hidden enrollment costs.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-building mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">All-Day Access</h5>
            <p className="text-muted mb-0">Study PTE course all day at our institute. It’s free to use!</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div className="info-card text-center" style={{ padding: `30px 20px` }}>
            <i className="fa-solid fa-award mb-3" style={{ fontSize: `2rem`, color: `var(--primary)` }}></i>
            <h5 className="fw-bold mb-3">Top Rated</h5>
            <p className="text-muted mb-0">Rated as the best PTE training center in Coimbatore.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  PTE Test Structure  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">The PTE <span className="accent-text">Test Structure</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12" data-aos="fade-up">
          <div className="table-responsive bg-white rounded shadow-sm p-4">
            <table className="table table-bordered table-striped mb-0">
              <thead style={{ background: `var(--primary)`, color: `white` }}>
                <tr>
                  <th style={{ width: `25%` }}>Section</th>
                  <th style={{ width: `50%` }}>Question Format</th>
                  <th style={{ width: `25%` }}>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>INTRODUCTION</strong></td>
                  <td></td>
                  <td>1 - 2 minutes</td>
                </tr>
                <tr>
                  <td><strong>PART 1: SPEAKING & WRITING</strong></td>
                  <td>Personal Introduction<br />Read aloud<br />Repeat sentence<br />Describe image<br />Re-tell lecture<br />Answer short question<br />Summarise written text (one sentence)<br />Summarise written text (paragraph)<br />Essay (20mins)</td>
                  <td>77 - 93 minutes</td>
                </tr>
                <tr>
                  <td><strong>PART 2: READING</strong></td>
                  <td>Multiple choice questions (x2)<br />Re-order paragraphs<br />Fill in the blanks (x2)</td>
                  <td>32 - 41 minutes</td>
                </tr>
                <tr>
                  <td><strong>BREAK</strong></td>
                  <td>A ten minute break is optional.</td>
                  <td>10 minutes</td>
                </tr>
                <tr>
                  <td><strong>PART 3: LISTENING</strong></td>
                  <td>Summarise spoken text<br />Multiple choice (x2)<br />Fill the blanks<br />Highlight the correct summary<br />Select missing word<br />Highlight incorrect words<br />Write from dictation</td>
                  <td>45 - 57 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Scoring Pattern  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">Scoring <span className="accent-text">Pattern</span></h2>
      </div>
      <div className="row">
        <div className="col-lg-12" data-aos="fade-up">
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The PTE test is scored against the Global Scale of English, giving you an accurate snapshot of the performance of the test-taker on a scale of 10 - 90. Detailed score reports show the overall test-taker performance as well as their ability on sub-skills and enabling skills. Join a coaching centre and work hard to attain good PTE scores.</p>
          
          <h5 className="mt-4" style={{ color: `var(--primary)`, fontWeight: `bold` }}>Item scoring</h5>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>All items in PTE Academic are machine-scored. Scores for some item types are based on correctness alone, while others are based on correctness, formal aspects and the quality of the response.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Formal aspects refer to the form of the response: for example, whether it is over or under the word limit for a particular item type. The quality of the response is represented in the enabling skills. For example, in the item type Re-tell lecture, the response is scored on skills such as oral fluency and pronunciation.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Scores for item types assessing speaking and writing skills are generated by automated scoring systems. There are two types of scoring: Correct or Incorrect.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Some item types are scored as either correct or incorrect. If a response is correct, a score of 1 is given, but if it is incorrect, no score points are awarded.</p>

          <h5 className="mt-4" style={{ color: `var(--primary)`, fontWeight: `bold` }}>Partial credit</h5>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Other item types are scored as correct, partially correct or incorrect. If responses to these items are correct, the maximum score points available for each item type will be received, but if they are partly correct, some score points will be given, but less than the maximum available for the item type. If responses are incorrect, no score points will be received.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The tables that follow give an overview of how the 20 item types in the three parts of PTE Academic are scored. They also show timings, the number of items in any given test, the communicative skills, enabling skills and other elements scored.</p>
          <p className="text-muted font-italic" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>Note- The minimum and maximum time indicated for the sections of each part of the test do not add up to the total time stated. This is because different versions of the test are balanced for total length. No candidate will get the maximum or minimum times indicated.</p>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The PTE Academic reports an overall score.</p>

          <h5 className="mt-4" style={{ color: `var(--primary)`, fontWeight: `bold` }}>Overall score</h5>
          <p className="text-muted" style={{ fontSize: `1.1rem`, lineHeight: `1.7` }}>The overall score is based on the student's performance on all test items. For each item, the score you obtain contributes to the overall score. The overall score range is 10-90 points. Good preparation will definitely result in good PTE scores.</p>
        </div>
      </div>
    </div>
  </section>



  {/*  Exam Overview  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title mb-4">PTE Exam <span className="accent-text">Overview</span></h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="info-card" style={{ padding: `40px`, background: `white`, borderRadius: `15px`, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, borderTop: `5px solid var(--accent)` }}>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Conducted By:</strong><br /><span className="text-muted">Pearson PLC Group</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Test Type:</strong><br /><span className="text-muted">Computer-based</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Score Range:</strong><br /><span className="text-muted">10 – 90 Points</span></div></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list" style={{ fontSize: `1.1rem`, lineHeight: `1.6`, margin: `0` }}>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Total Duration:</strong><br /><span className="text-muted">Approx. 2 hours</span></div></li>
                  <li style={{ marginBottom: `20px`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Validity:</strong><br /><span className="text-muted">2 years</span></div></li>
                  <li style={{ marginBottom: `0`, alignItems: `center` }}><i className="fa-solid fa-check-circle" style={{ fontSize: `1.4rem`, marginRight: `15px`, marginTop: `0` }}></i> <div><strong>Fee:</strong><br /><span className="text-muted">USD 200 - 220 (approx.)</span></div></li>
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
                  <th className="py-3">PTE Score</th>
                  <th className="py-3">CEFR Level</th>
                  <th className="py-3">Skill Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold text-primary">30 – 42</td>
                  <td className="py-3">A2</td>
                  <td className="py-3 text-muted">Limited User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">43 – 58</td>
                  <td className="py-3">B1</td>
                  <td className="py-3 text-muted">Modest User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">59 – 75</td>
                  <td className="py-3">B2</td>
                  <td className="py-3 text-muted">Competent User</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold text-primary">76 – 84+</td>
                  <td className="py-3">C1 / C2</td>
                  <td className="py-3 text-muted">Good / Expert User</td>
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
        <h2 className="section-title mb-2">Our 4-Week <span className="accent-text">Preparation Plan</span></h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="process-card text-center" data-step="01">
            <div className="process-icon-box">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 1</h5>
            <p className="text-muted mb-0">Speaking section focus: Read aloud, repeat sentence, and describe image practice.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="process-card text-center" data-step="02">
            <div className="process-icon-box">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 2</h5>
            <p className="text-muted mb-0">Writing strategies: Summarize written text and perfecting the 20-minute essay.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="process-card text-center" data-step="03">
            <div className="process-icon-box">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 3</h5>
            <p className="text-muted mb-0">Reading comprehension: Re-order paragraphs and fill in the blanks accuracy.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="process-card text-center" data-step="04">
            <div className="process-icon-box">
              <i className="fa-solid fa-headphones"></i>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: `var(--primary)` }}>Week 4</h5>
            <p className="text-muted mb-0">Listening practice, write from dictation, and full-length computer tests.</p>
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
            <h4>Is PTE accepted for student visas?</h4>
            <p className="text-muted">Yes, PTE Academic is widely accepted by universities and government bodies for study visas in countries like Australia, New Zealand, the UK, and Canada (for SDS in some cases).</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="info-card">
            <h4>How quickly are PTE results released?</h4>
            <p className="text-muted">One of the major advantages of PTE is speed. Most test takers receive their automated scores within 48 hours of completing the exam.</p>
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

export default Pte;
