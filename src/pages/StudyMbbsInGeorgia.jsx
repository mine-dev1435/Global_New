import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
const StudyMbbsInGeorgia = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>MBBS in Georgia | Best MBBS Consultants in Coimbatore</title>
        <meta name="description" content="Study MBBS in Georgia with trusted education consultants in Coimbatore. Premier European medical education, high USMLE/NExT pass rates, modern facilities & student visa support." />
        <meta name="keywords" content="MBBS in Georgia" />
      </Helmet>
      <main>
        {/* Original HTML */}
<style>{`
   @media (max-width:990px){
      .mbbs-hero h1 {
    font-size: 2.0rem !important;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
}
.mbbs-hero {
    background: linear-gradient(rgba(10, 30, 50, 0.7), rgba(10, 30, 50, 0.7)), url(img/hero_edu2.png) center / cover;
    padding: 33px 0 80px !important;
    text-align: center;
    color: white;
}
  }
    /* Hero Section */
    .mbbs-hero {
      background: linear-gradient(rgba(10, 30, 50, 0.7), rgba(10, 30, 50, 0.7)), url('/img/hero_edu2.png') center / cover;
      padding: 120px 0 80px;
      text-align: center;
      color: white;
    }
    .mbbs-hero h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: white;
    }
    .mbbs-hero p {
      font-size: 1.2rem;
            color:#fff;
      max-width: 800px;
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

    /* Cards */
    .feature-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      height: 100%;
      transition: transform 0.3s ease;
      text-align: center;
    }
    .feature-card:hover {
      transform: translateY(-10px);
    }
    .feature-icon {
      /* font-size: 2.5rem removed to unify heading sizes */
      color: var(--accent);
      margin-bottom: 20px;
    }

    /* List styling */
    .custom-list {
      list-style: none;
      padding-left: 0;
    }
    .custom-list li {
      margin-bottom: 15px;
      position: relative;
      padding-left: 30px;
    }
    .custom-list li::before {
      content: '\f058';
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      color: var(--accent);
      position: absolute;
      left: 0;
      top: 2px;
    }

    /* Table */
    .custom-table th {
      background-color: var(--primary);
      color: white;
      padding: 15px;
    }
    .custom-table td {
      padding: 15px;
      vertical-align: middle;
    }
  `}</style>



  {/*  Hero Section  */}
  <section className="mbbs-hero">
    <div className="container" data-aos="fade-up">
      <h1>MBBS in <span className="accent-text" style={{ color: `var(--accent)` }}>Georgia</span></h1>
      <p>Georgia is known for its European-standard education system, high safety standards, and top-tier medical universities that are widely acclaimed.</p>
    </div>
  </section>

  {/*  Why Study MBBS  */}
  <section className="content-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">Why Study MBBS in <span className="accent-text">Georgia?</span></h2>
        <p className="text-muted mt-3">Georgia features WHO-approved medical degrees and clinical exposure designed in accordance with European health guidelines.</p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="feature-card">
            <i className="fa-solid fa-graduation-cap feature-icon"></i>
            <h4>Global Recognition</h4>
            <p className="text-muted text-sm mt-2">Universities recognized by NMC, WHO, FAIMER, and other global medical councils.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="feature-card">
            <i className="fa-solid fa-wallet feature-icon"></i>
            <h4>Affordable Fees</h4>
            <p className="text-muted text-sm mt-2">Highly subsidized education compared to private colleges in India or the West.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-card">
            <i className="fa-solid fa-language feature-icon"></i>
            <h4>English Medium</h4>
            <p className="text-muted text-sm mt-2">Courses are taught entirely in English, making it easier for international students.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="feature-card">
            <i className="fa-solid fa-microscope feature-icon"></i>
            <h4>Advanced Infrastructure</h4>
            <p className="text-muted text-sm mt-2">State-of-the-art laboratories, modern hospitals, and practical clinical exposure.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Top Universities  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title">Top Medical Universities in <span className="accent-text">Georgia</span></h2>
          <p className="mt-4 text-muted">These prestigious medical universities in Georgia offer high-quality education and a comprehensive MBBS program which includes academic training and clinical internships.</p>
          <ul className="custom-list mt-4">
            <li>Tbilisi State Medical University</li>
            <li>Batumi Shota Rustaveli State University</li>
            <li>David Tvildiani Medical University</li>
            <li>New Vision University</li>
            <li>Caucasus International University</li>
          </ul>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/georgia.png" alt="Medical Students" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  {/*  Eligibility & Admission Process  */}
  <section className="content-section">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6" data-aos="fade-up">
          <h2 className="section-title mb-4">Eligibility <span className="accent-text">Criteria</span></h2>
          <div className="p-4 border rounded shadow-sm bg-white">
            <ul className="custom-list">
              <li><strong>Age:</strong> Must be at least 17 years old by 31st December of the admission year.</li>
              <li><strong>Academics:</strong> 50% aggregate marks in Physics, Chemistry, and Biology (PCB) in 12th standard (40% for reserved categories).</li>
              <li><strong>NEET:</strong> Qualifying NEET score is mandatory for Indian students intending to practice in India.</li>
              <li><strong>Language:</strong> No IELTS or TOEFL required={true}, but basic English proficiency is expected.</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-title mb-4">Admission <span className="accent-text">Process</span></h2>
          <div className="p-4 border rounded shadow-sm bg-white">
            <ul className="custom-list">
              <li><strong>Step 1:</strong> Choose a university and submit the application form along with 10th/12th mark sheets and passport copy.</li>
              <li><strong>Step 2:</strong> Receive the Admission Letter from the university within 3-5 working days.</li>
              <li><strong>Step 3:</strong> Apply for the official Invitation Letter from the Ministry of Education and Science, Georgia.</li>
              <li><strong>Step 4:</strong> Apply for the Student Visa at the Georgian Embassy.</li>
              <li><strong>Step 5:</strong> Book flights and prepare for departure with our pre-departure briefing.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

    {/*  Cost of Living & Fee Structure  */}
  <section className="content-section bg-light-alt">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="section-title mb-4">Cost of Living <span className="accent-text">& Fee Structure</span></h2>
          <p className="text-muted mb-4">Planning your finances is an important step. Here is a general breakdown of the fee structure including tuition, hostel, and mess charges.</p>
          
          <div className="table-responsive bg-white rounded shadow-sm mb-4">
            <table className="table table-hover custom-table mb-0 text-center">
              <thead style={{ backgroundColor: `var(--primary)`, color: `white` }}>
                <tr>
                  <th className="py-3">Particulars</th>
                  <th className="py-3">Estimated Cost (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold">Tuition Fee</td>
                  <td className="py-3 text-muted">Varies by University</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold">Hostel Charges</td>
                  <td className="py-3 text-muted">Varies by University</td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold">Mess / Food</td>
                  <td className="py-3 text-muted">Varies by University</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="mt-4 mb-3" style={{ color: `var(--primary)`, fontWeight: `700` }}>Cost of Living</h4>
          <p className="text-muted">The average cost of living for international students is highly affordable. It typically covers accommodation, food, local transportation, and basic utilities, ensuring a comfortable stay while pursuing your MBBS degree.</p>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="/img/medium-shot-graduate-student.jpg" alt="Cost of Living and Fee Structure" className="img-fluid rounded shadow-lg" style={{ objectFit: `cover`, height: `450px`, width: `100%` }} />
        </div>
      </div>
    </div>
  </section>

  {/* Related Destinations */}

      </main>
      <Footer />
    </>
  );
};

export default StudyMbbsInGeorgia;
