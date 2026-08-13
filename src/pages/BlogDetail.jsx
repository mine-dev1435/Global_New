import React, { useEffect } from 'react';
import { handleFormSubmit } from '../utils/emailService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetail = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);



    return (
        <>
            <Header />
            <Helmet>
                <title>Ultimate Guide to Study MBBS Abroad in 2026 | The Global Ties</title>
                <style>{`
                    .detail-header {
                        background: linear-gradient(rgba(10, 30, 50, 0.8), rgba(10, 30, 50, 0.8)), url('/img/hero_edu2.png') center/cover no-repeat;
                        padding: 150px 0 100px;
                        color: #fff;
                    }
                    .detail-header h1 {
                        font-size: 2.8rem;
                        font-weight: 700;
                        margin-bottom: 20px;
                        color: #fff;
                        line-height: 1.3;
                    }
                    .detail-badge {
                        background-color: var(--accent, #F4A261);
                        color: #fff;
                        padding: 6px 18px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        border-radius: 30px;
                        text-transform: uppercase;
                        display: inline-block;
                        margin-bottom: 20px;
                    }
                    .detail-meta {
                        display: flex;
                        align-items: center;
                        gap: 25px;
                        font-size: 0.95rem;
                        opacity: 0.85;
                        flex-wrap: wrap;
                    }
                    .detail-meta span {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .detail-section {
                        padding: 80px 0;
                        background-color: #ffffff;
                    }

                    .article-content {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: var(--dark-text, #212529);
                    }
                    .article-content p {
                        margin-bottom: 25px;
                    }
                    .article-content h3 {
                        font-size: 1.6rem;
                        font-weight: 700;
                        margin: 40px 0 20px;
                        color: var(--dark-text, #212529);
                    }
                    .article-content ul {
                        margin-bottom: 30px;
                        padding-left: 20px;
                    }
                    .article-content li {
                        margin-bottom: 12px;
                    }

                    .blog-quote {
                        border-left: 5px solid var(--primary, #0D3B66);
                        padding: 15px 25px;
                        margin: 35px 0;
                        background-color: var(--light-bg, #f8f9fa);
                        font-style: italic;
                        font-size: 1.25rem;
                        border-radius: 0 12px 12px 0;
                        color: var(--primary, #0D3B66);
                    }

                    /* Sidebar styling */
                    .blog-sidebar {
                        position: sticky;
                        top: 100px;
                    }

                    .sidebar-card {
                        background: #fff;
                        border-radius: 16px;
                        padding: 30px;
                        border: 1px solid rgba(0,0,0,0.05);
                        margin-bottom: 30px;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.02);
                    }

                    .sidebar-title {
                        font-size: 1.25rem;
                        font-weight: 700;
                        margin-bottom: 20px;
                        position: relative;
                        padding-bottom: 10px;
                        color: var(--dark-text, #212529);
                    }
                    .sidebar-title::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 40px;
                        height: 3px;
                        background-color: var(--accent, #F4A261);
                        border-radius: 2px;
                    }

                    .recent-blog-item {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        margin-bottom: 20px;
                    }
                    .recent-blog-item:last-child {
                        margin-bottom: 0;
                    }
                    .recent-blog-img {
                        width: 70px;
                        height: 70px;
                        object-fit: cover;
                        border-radius: 8px;
                        background-color: #eee;
                        flex-shrink: 0;
                    }
                    .recent-blog-info h5 {
                        font-size: 0.95rem;
                        font-weight: 600;
                        line-height: 1.4;
                        margin-bottom: 5px;
                    }
                    .recent-blog-info h5 a {
                        text-decoration: none;
                        color: var(--dark-text, #212529);
                        transition: color 0.3s;
                    }
                    .recent-blog-info h5 a:hover {
                        color: var(--primary, #0D3B66);
                    }
                    .recent-blog-date {
                        font-size: 0.8rem;
                        color: var(--gray-text, #6c757d);
                    }

                    /* Glassmorphic Consultation Form */
                    .sidebar-form-card {
                        background: #ffffff;
                        border-radius: 12px;
                        padding: 24px;
                        border: 2px solid #0088cc;
                        box-shadow: none;
                    }
                    .sidebar-form-card h4 {
                        color: #0088cc;
                        font-weight: 700;
                        margin-bottom: 8px;
                        font-size: 1.15rem;
                    }
                    .sidebar-form-card p {
                        font-size: 0.85rem;
                        color: #6c757d;
                        margin-bottom: 16px;
                        line-height: 1.5;
                    }
                    .sidebar-form-card .form-control {
                        margin-bottom: 12px;
                        border-radius: 4px;
                        padding: 10px 14px;
                        border: 1px solid #ced4da;
                        font-size: 0.85rem;
                        height: auto;
                        color: #495057;
                        background-color: #fff;
                    }
                    .sidebar-form-submit {
                        background-color: #0088cc;
                        color: #fff;
                        font-weight: 600;
                        width: 100%;
                        padding: 10px;
                        border-radius: 4px;
                        border: none;
                        font-size: 0.95rem;
                        transition: all 0.3s ease;
                        margin-top: 5px;
                    }
                    .sidebar-form-submit:hover {
                        background-color: #0077b3;
                    }
                `}</style>
            </Helmet>
            <main>
                {/* Header Banner */}
                <section className="detail-header">
                    <div className="container" data-aos="fade-up">
                        <span className="detail-badge">MBBS Abroad</span>
                        <h1>Ultimate Guide to Study MBBS Abroad in 2026</h1>
                        <div className="detail-meta">
                            <span><i className="fa-regular fa-calendar"></i> July 4, 2026</span>
                            <span><i className="fa-regular fa-user"></i> By Dr. Amit Sharma</span>
                            <span><i className="fa-regular fa-clock"></i> 5 Min Read</span>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="detail-section">
                    <div className="container">
                        <div className="row g-5">
                            {/* Blog Content (Left Column) */}
                            <div className="col-lg-8" data-aos="fade-right">
                                <article className="article-content" style={{ color: '#444', fontSize: '15px', lineHeight: '1.8' }}>
                                    <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                                        Studying MBBS abroad has become one of the most viable and preferred pathways for medical aspirants worldwide. With high competition and limited government medical seats in domestic colleges, destinations like Russia, Uzbekistan, Georgia, and the Caribbean offer a perfect alternative.
                                    </p>

                                    <h3 style={{ marginTop: '35px', marginBottom: '15px', color: '#091E3E', fontWeight: '700', fontSize: '22px' }}>
                                        Why Consider <span className="accent-text">MBBS Abroad?</span>
                                    </h3>
                                    <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                        Choosing to study medicine outside your home country is a major decision, but it comes with unmatched advantages:
                                    </p>
                                    
                                    <ul style={{ lineHeight: '1.8', marginBottom: '25px', paddingLeft: '20px' }}>
                                        <li style={{ marginBottom: '10px' }}><strong>Affordable Tuition Fees:</strong> Most state-owned foreign medical universities are heavily subsidized, making the total package 50-70% cheaper than private medical colleges domestically.</li>
                                        <li style={{ marginBottom: '10px' }}><strong>No Donation or Capitation Fees:</strong> Admissions are purely based on eligibility criteria (such as standard 12th marks and NEET qualification for Indian students).</li>
                                        <li style={{ marginBottom: '10px' }}><strong>English Medium Curriculum:</strong> Leading universities offer the entire 5 to 6-year course in English.</li>
                                    </ul>
                                    
                                    <blockquote style={{ borderLeft: '3px solid #0088cc', padding: '15px 20px', fontStyle: 'italic', color: '#0088cc', background: '#f8fbfe', borderRadius: '4px', margin: '30px 0', fontWeight: '500' }}>
                                        "Getting global exposure during your clinical rotations helps you stand out as a highly versatile medical professional."
                                    </blockquote>

                                    <h3 style={{ marginTop: '35px', marginBottom: '15px', color: '#091E3E', fontWeight: '700', fontSize: '22px' }}>
                                        Tuition Fee & Duration Comparison
                                    </h3>
                                    <div className="table-responsive" style={{ marginBottom: '30px' }}>
                                        <table className="table table-bordered mt-3" style={{ border: '1px solid #dee2e6' }}>
                                            <thead style={{ backgroundColor: '#0088cc', color: 'white' }}>
                                                <tr>
                                                    <th style={{ padding: '12px', fontWeight: '600', borderColor: '#0088cc' }}>Country</th>
                                                    <th style={{ padding: '12px', fontWeight: '600', borderColor: '#0088cc' }}>Average Annual Tuition Fee</th>
                                                    <th style={{ padding: '12px', fontWeight: '600', borderColor: '#0088cc' }}>Course Duration</th>
                                                    <th style={{ padding: '12px', fontWeight: '600', borderColor: '#0088cc' }}>Cost of Living (Monthly)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td style={{ padding: '12px' }}>Russia</td><td style={{ padding: '12px' }}>$3,500 - $6,000</td><td style={{ padding: '12px' }}>6 Years</td><td style={{ padding: '12px' }}>$150 - $250</td></tr>
                                                <tr><td style={{ padding: '12px' }}>Uzbekistan</td><td style={{ padding: '12px' }}>$3,000 - $4,500</td><td style={{ padding: '12px' }}>6 Years</td><td style={{ padding: '12px' }}>$120 - $200</td></tr>
                                                <tr><td style={{ padding: '12px' }}>Georgia</td><td style={{ padding: '12px' }}>$5,000 - $8,000</td><td style={{ padding: '12px' }}>6 Years</td><td style={{ padding: '12px' }}>$200 - $300</td></tr>
                                                <tr><td style={{ padding: '12px' }}>Caribbean Islands</td><td style={{ padding: '12px' }}>$8,000 - $15,000</td><td style={{ padding: '12px' }}>5.5 Years</td><td style={{ padding: '12px' }}>$400 - $600</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 style={{ marginTop: '35px', marginBottom: '15px', color: '#091E3E', fontWeight: '700', fontSize: '22px' }}>
                                        Licensing and Recognition
                                    </h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        Ensure that the university you select is listed under the World Directory of Medical Schools (WDOMS) and recognized by major medical councils like the NMC (National Medical Commission), ECFMG (USA), and AMC (Australia). This ensures that you can take licensing exams (like NExT, USMLE, or PLAB) upon graduation.
                                    </p>
                                </article>
                            </div>

                            {/* Sidebar (Right Column) */}
                            <div className="col-lg-4" data-aos="fade-left">
                                <aside className="blog-sidebar">
                                    {/* Recent Articles */}
                                    <div className="sidebar-card">
                                        <h4 className="sidebar-title">Recent Articles</h4>
                                        <div className="recent-blog-list">
                                            <div className="recent-blog-item">
                                                <img className="recent-blog-img" src="/img/hero_edu1.png" alt="Crack the IELTS" />
                                                <div className="recent-blog-info">
                                                    <h5><Link to="/blog-detail?slug=crack-ielts-8-band">Crack the IELTS: 5 Proven Strategies for an 8+ Band Score</Link></h5>
                                                    <span><i className="fa-regular fa-calendar"></i> June 28, 2026</span>
                                                </div>
                                            </div>
                                            <div className="recent-blog-item">
                                                <img className="recent-blog-img" src="/img/hero_edu2.png" alt="Why Canada Remains a Top Choice" />
                                                <div className="recent-blog-info">
                                                    <h5><Link to="/blog-detail?slug=canada-top-choice">Why Canada Remains a Top Choice for International Students</Link></h5>
                                                    <span><i className="fa-regular fa-calendar"></i> June 15, 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-form-card">
                                        <h4>Quick Counseling</h4>
                                        <p className="text-muted text-sm mb-4">Have questions about studying abroad? Submit your detail for an expert call back.</p>
                                        <form onSubmit={handleFormSubmit}>
                                            <input type="text" name="full_name" className="form-control" placeholder="Full Name" required />
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
                                            <select name="destination" className="form-control" required defaultValue="">
                                                <option value="" disabled>Select Destination</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Canada">Canada</option>
                                                <option value="UK">UK</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <button type="submit" className="sidebar-form-submit">Submit Inquiry</button>
                                        </form>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BlogDetail;
