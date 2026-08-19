import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { handleFormSubmit } from '../utils/emailService';

const Course = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Course - GlobalEdu</title>
      </Helmet>
      <main>
        {/* Original HTML */}
{/*  Custom CSS  */}
    <link />
    <link />



    

    {/*  SECTION 1: HERO BANNER  */}
    <section className="course-hero">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7" data-aos="fade-right">
                    <span className="hero-label">Global Exam Preparation</span>
                    <h1>The Global Ties â€“ Coimbatore's Most Professional Coaching for PTE Exam</h1>
                    <p>Master the PTE Academic examination through expert trainers, personalized mentoring, unlimited practice tests, and AI-powered performance tracking to achieve your dream international score.</p>
                </div>
                <div className="col-lg-5" data-aos="fade-left">
                    <div className="lead-form-card glass-form">
                        <h3>Request Information</h3>
                        
              
              <div className="alert alert-success" role="alert" style={{ display: `none`, padding: `10px`, marginBottom: `15px`, borderRadius: `5px`, backgroundColor: `#d4edda`, color: `#155724`, border: `1px solid #c3e6cb` }}>
                Request submitted successfully! Our counselors will contact you soon.
              </div>
              
              <form onSubmit={handleFormSubmit}>
                            <div className="form-row">
                                <input type="text" name="full_name" className="custom-input" placeholder="Full Name" required={true} />
                                <input type="tel" name="phone" className="custom-input" placeholder="Phone Number" required={true} />
                            </div>
                            <input type="email" name="email" className="custom-input" placeholder="Email Address" required={true} />
                            
                            <input type="text" name="course" className="custom-input" required="" placeholder="Course/Destination Interested In" />
                <input type="text" name="city" className="custom-input" placeholder="City" />
                            <textarea name="questions" className="custom-input" rows="3" placeholder="Any specific questions?"></textarea>
                            <button type="submit" className="submit-btn mt-3">Submit Application Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>



    {/*  SECTION 3: ABOUT EXAM  */}
    <section className="luxury-section" id="about-exam">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                    <img src="/assets/img/hand.avif" alt="PTE Exam" className="img-fluid about-illustration" />
                </div>
                <div className="col-lg-6 px-lg-5" data-aos="fade-left">
                <h2 className="section-title">
           PTE 
            <span className="accent-text">Exam</span>
          </h2>    
                    <p className="section-subtitle-luxury">PTE Academic is the world's leading computer-based test of English for study abroad and immigration. Typically, PTE Academic results are available within five business days.

</p>
                    
                    <div className="features-flex-container mt-4">
                        <div className="feature-glass-card">
                            <div className="feature-icon-wrapper"><i className="fas fa-bolt"></i></div>
                            <div>
                                <h5 className="fw-bold mb-1">Fast Results</h5>
                                <p className="text-muted mb-0 small">Get your scores typically within 48 hours.</p>
                            </div>
                        </div>
                        <div className="feature-glass-card">
                            <div className="feature-icon-wrapper"><i className="fas fa-shield-alt"></i></div>
                            <div>
                                <h5 className="fw-bold mb-1">Gov Approved</h5>
                                <p className="text-muted mb-0 small">Accepted by thousands of universities.</p>
                            </div>
                        </div>
                        <div className="feature-glass-card">
                            <div className="feature-icon-wrapper"><i className="fas fa-calendar-check"></i></div>
                            <div>
                                <h5 className="fw-bold mb-1">Flexible Dates</h5>
                                <p className="text-muted mb-0 small">Schedule up to 24 hours in advance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SECTION 4: WHY CHOOSE US  */}
    <section className="luxury-section alt-bg" id="why-choose-us">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title">
           Why to Study PTE at 
            <span className="accent-text">The Global Ties?</span>
          </h2>    
                <p className="section-subtitle-luxury max-w-700 mx-auto">Experience the best coaching with our proven methodology.</p>
            </div>
            
            <div className="why-us-grid">
                {/*  Point 1  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <h4 className="fw-bold mb-2">One-on-one PTE coaching.</h4>
                    </div>
                </div>
                {/*  Point 2  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="150">
                    <div>
                        <h4 className="fw-bold mb-2">Individual attention on PTE training.</h4>
                    </div>
                </div>
                {/*  Point 3  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <h4 className="fw-bold mb-2">Free PTE study materials.</h4>
                    </div>
                </div>
                {/*  Point 4  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="250">
                    <div>
                        <h4 className="fw-bold mb-2">No enrollment fees.</h4>
                    </div>
                </div>
                {/*  Point 5  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="300">
                    <div>
                        <h4 className="fw-bold mb-2">Unlimited Lab Access</h4>
                    </div>
                </div>
                {/*  Point 6  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="350">
                    <div>
                        <h4 className="fw-bold mb-2">Leading PTE Preparation Institute</h4>
                    </div>
                </div>
                {/*  Point 7  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <h4 className="fw-bold mb-2">Certified PTE Trainers</h4>
                    </div>
                </div>
                {/*  Point 8  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="450">
                    <div>
                        <h4 className="fw-bold mb-2">Individual Student Attention</h4>
                    </div>
                </div>
                {/*  Point 9  */}
                <div className="premium-icon-card" data-aos="fade-up" data-aos-delay="500">
                    <div>
                        <h4 className="fw-bold mb-2">No batch based PTE classes.</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SECTION 5: TEST STRUCTURE  */}
    <section className="luxury-section" id="test-structure">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
 <h2 className="section-title">
           Test
            <span className="accent-text">Structure</span>
          </h2>   
            <p className="section-subtitle-luxury">Understand the PTE Academic format.</p>
            </div>
            
            <div className="row justify-content-center">
                {/*  Part 1  */}
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="test-structure-card h-100">
                        <div className="card-top">
                            <span className="part-badge">Part 1</span>
                            <h4>Speaking & Writing</h4>
                            <span className="duration-badge"><i className="far fa-clock"></i> 54â€“67 Minutes</span>
                        </div>
                        <div className="card-bottom">
                            <ul className="test-list">
                                <li>Personal introduction</li>
                                <li>Read aloud</li>
                                <li>Repeat sentence</li>
                                <li>Describe image</li>
                                <li>Retell lecture</li>
                                <li>Answer short question</li>
                                <li>Summarize written text</li>
                                <li>Essay</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  Part 2  */}
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="test-structure-card h-100">
                        <div className="card-top">
                            <span className="part-badge">Part 2</span>
                            <h4>Reading</h4>
                            <span className="duration-badge"><i className="far fa-clock"></i> 29â€“30 Minutes</span>
                        </div>
                        <div className="card-bottom">
                            <ul className="test-list">
                                <li>Fill in the blanks (Reading & Writing)</li>
                                <li>Multiple choice, multiple answer</li>
                                <li>Re-order paragraphs</li>
                                <li>Fill in the blanks (Reading)</li>
                                <li>Multiple choice, single answer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  Part 3  */}
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="test-structure-card h-100">
                        <div className="card-top">
                            <span className="part-badge">Part 3</span>
                            <h4>Listening</h4>
                            <span className="duration-badge"><i className="far fa-clock"></i> 30â€“43 Minutes</span>
                        </div>
                        <div className="card-bottom">
                            <ul className="test-list">
                                <li>Summarize spoken text</li>
                                <li>Multiple choice, multiple answer</li>
                                <li>Fill in the blanks</li>
                                <li>Highlight correct summary</li>
                                <li>Multiple choice, single answer</li>
                                <li>Select missing word</li>
                                <li>Highlight incorrect words</li>
                                <li>Write from dictation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SECTION 6: SCORING PATTERN  */}
    <section className="luxury-section alt-bg" id="scoring-pattern">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title">
                    Scoring 
                    <span className="accent-text">Pattern</span>
                </h2>  
                <p className="section-subtitle-luxury">Automated AI scoring ensures accuracy and objectivity.</p>
            </div>
            
            <div className="row justify-content-center">
                {/*  Card 1  */}
                <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="simple-score-card">
                        <div className="score-icon"><i className="fas fa-tachometer-alt"></i></div>
                        <h5>10-90 Score Range</h5>
                        <p>Graded on the Global Scale of English.</p>
                    </div>
                </div>
                {/*  Card 2  */}
                <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="simple-score-card">
                        <div className="score-icon"><i className="fas fa-robot"></i></div>
                        <h5>Machine Scoring</h5>
                        <p>100% automated scoring without human bias.</p>
                    </div>
                </div>
                {/*  Card 3  */}
                <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="simple-score-card">
                        <div className="score-icon"><i className="fas fa-brain"></i></div>
                        <h5>AI Evaluation</h5>
                        <p>Advanced speech AI evaluates pronunciation & fluency.</p>
                    </div>
                </div>
                {/*  Card 4  */}
                <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="simple-score-card">
                        <div className="score-icon"><i className="fas fa-chart-pie"></i></div>
                        <h5>Partial Credit</h5>
                        <p>Earn points even if your answer isn't perfect.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SECTION 7: TESTIMONIALS  */}
    <section className="luxury-section" id="testimonials">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title">
                    PTE 
                    <span className="accent-text">Testimonials</span>
                </h2>  
                <p className="section-subtitle-luxury">Hear from our students who achieved their dream scores.</p>
            </div>
            
            <div className="swiper testimonial-slider pb-5" data-aos="fade-up">
                <div className="swiper-wrapper">
                    {/*  Testimonial 1  */}
                    <div className="swiper-slide">
                        <div className="testimonial-glass-card">
                            <div className="student-info">
                                <div className="student-initials" style={{ width: `50px`, height: `50px`, background: `var(--course-primary-light)`, color: `#fff`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontWeight: `bold`, fontSize: `20px` }}>Y</div>
                                <div className="student-meta">
                                    <h5>Yugendhar</h5>
                                </div>
                            </div>
                            <p className="text-muted mt-3">"Aptitude Test conducted here is wonderful, one on one coaching made me get a good score. This help me to get admission in Canada. Overall had a great learning."</p>
                        </div>
                    </div>
                    {/*  Testimonial 2  */}
                    <div className="swiper-slide">
                        <div className="testimonial-glass-card">
                            <div className="student-info">
                                <div className="student-initials" style={{ width: `50px`, height: `50px`, background: `var(--course-primary-light)`, color: `#fff`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontWeight: `bold`, fontSize: `20px` }}>A</div>
                            <div className="student-meta">
                                    <h5>Aravind</h5>
                                </div>
                            </div>
                            <p className="text-muted mt-3">"The Global Ties focuses in all domains in a effective manner. They give equal importance, this helps the students here to get top score in PTE."</p>
                        </div>
                    </div>
                    {/*  Testimonial 3  */}
                    <div className="swiper-slide">
                        <div className="testimonial-glass-card">
                            <div className="student-info">
                                <div className="student-initials" style={{ width: `50px`, height: `50px`, background: `var(--course-primary-light)`, color: `#fff`, borderRadius: `50%`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontWeight: `bold`, fontSize: `20px` }}>P</div>
                                <div className="student-meta">
                                    <h5>Prakash</h5>
                                </div>
                            </div>
                            <p className="text-muted mt-3">"PTE coaching here is excellent. I enjoyed as the examples were very practical which enabled me to secure 75."</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>

    {/*  SECTION 8: RECENT TOP SCORES  */}
    <section className="luxury-section alt-bg" id="leaderboard">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto" data-aos="fade-up">
                    <div className="text-center mb-5">
<h2 className="section-title">
           Recent
            <span className="accent-text">Top Scores</span>
          </h2>                            <p className="section-subtitle-luxury">Our leaderboard of outstanding achievers.</p>
                    </div>
                    
                    <div className="d-flex justify-content-center gap-2 gap-md-3" style={{ flexWrap: `nowrap` }}>
                        <div style={{ flex: `1` }} data-aos="fade-up" data-aos-delay="100">
                            <div className="simple-result-card">
                                <div className="result-score">90</div>
                                <div className="result-name">Vaishnavi</div>
                            </div>
                        </div>
                        <div style={{ flex: `1` }} data-aos="fade-up" data-aos-delay="200">
                            <div className="simple-result-card">
                                <div className="result-score">80</div>
                                <div className="result-name">Priya</div>
                            </div>
                        </div>
                        <div style={{ flex: `1` }} data-aos="fade-up" data-aos-delay="300">
                            <div className="simple-result-card">
                                <div className="result-score">80</div>
                                <div className="result-name">Aravind</div>
                            </div>
                        </div>
                        <div style={{ flex: `1` }} data-aos="fade-up" data-aos-delay="400">
                            <div className="simple-result-card">
                                <div className="result-score">75</div>
                                <div className="result-name">Sahib</div>
                            </div>
                        </div>
                        <div style={{ flex: `1` }} data-aos="fade-up" data-aos-delay="500">
                            <div className="simple-result-card">
                                <div className="result-score">74</div>
                                <div className="result-name">Aravindsamy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    

    

    {/*  Initialize Swiper  */}
    
      </main>
      <Footer />
    </>
  );
};

export default Course;
