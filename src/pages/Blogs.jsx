import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Blogs - GlobalEdu</title>
      </Helmet>
      <main>
        {/* Original HTML */}
        <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latest Blogs & Insights | The Global Ties</title>
    <!-- Custom Blog Styles -->
    <style>
        .blog-header {
            background: linear-gradient(rgba(10, 30, 50, 0.75), rgba(10, 30, 50, 0.75)), url('/img/hero_edu2.png') center/cover no-repeat;
            padding: 140px 0 90px;
            text-align: center;
            color: #fff;
        }
        .blog-header h1 {
            font-size: 3.2rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #fff;
        }
        .blog-header p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
            color:#fff;
        }

        .blog-section {
            padding: 80px 0;
            background-color: var(--light-bg);
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }

        .blog-card {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: var(--primary);
        }

        .blog-card-img-wrapper {
            position: relative;
            padding-top: 56.25%; /* 16:9 ratio */
            overflow: hidden;
            background-color: #eee;
        }

        .blog-card-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .blog-card:hover .blog-card-img {
            transform: scale(1.05);
        }

        .blog-card-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: var(--primary);
            color: #fff;
            padding: 6px 16px;
            font-size: 0.8rem;
            font-weight: 600;
            border-radius: 30px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .blog-card-content {
            padding: 25px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .blog-meta {
            font-size: 0.85rem;
            color: var(--gray-text);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .blog-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .blog-card-title {
            font-size: 1.35rem;
            font-weight: 700;
            line-height: 1.4;
            margin-bottom: 12px;
            color: var(--dark-text);
            transition: color 0.3s;
        }

        .blog-card:hover .blog-card-title {
            color: var(--primary);
        }

        .blog-card-title a {
            text-decoration: none;
            color: inherit;
        }

        .blog-card-excerpt {
            font-size: 0.95rem;
            color: var(--gray-text);
            line-height: 1.6;
            margin-bottom: 20px;
            flex-grow: 1;
        }

        .blog-read-more-btn {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--primary);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: gap 0.3s;
        }

        .blog-read-more-btn:hover {
            color: var(--accent);
            gap: 12px;
        }
    </style>
</head>
<body>

    <!-- Header Section -->
        <section class="about-hero">
        <div class="container" data-aos="fade-up">
            <h1>Our Insights & <span class="accent-text" style="color:var(--accent);">Blogs</span></h1>
            <p>Stay updated with the latest trends in global education, visa procedures, exam updates, and student success stories.</p>
        </div>
    </section>

    <!-- Blogs List Section -->
    <section class="blog-section">
        <div class="container">
            <div class="blog-grid">
                
                    
                    
                    <article class="blog-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="blog-card-img-wrapper">
                            <img class="blog-card-img" src="/img/hero_edu2.png" alt="Ultimate Guide to Study MBBS Abroad in 2026">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta">
                                <span><i class="fa-regular fa-calendar"></i> July 4, 2026</span>
                                <span><i class="fa-regular fa-user"></i> By Dr. Amit Sharma</span>
                            </div>
                            <h3 class="blog-card-title">
                                <a href="/blog-detail?slug=mbbs-abroad-2026">
                                    Ultimate Guide to Study MBBS Abroad in 2026
                                </a>
                            </h3>
                            <p class="blog-card-excerpt">Thinking of studying medicine abroad? We compare fees, admission criteria, and NMC approvals across Russia, Kazakhstan, Uzbekistan, and Georgia to help you choose the right path.</p>
                            <div>
                                <a href="/blog-detail?slug=mbbs-abroad-2026" class="blog-read-more-btn">
                                    Read Article <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article class="blog-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="blog-card-img-wrapper">
                            <img class="blog-card-img" src="/img/hero_edu1.png" alt="Crack the IELTS: 5 Proven Strategies for an 8+ Band Score">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta">
                                <span><i class="fa-regular fa-calendar"></i> June 28, 2026</span>
                                <span><i class="fa-regular fa-user"></i> By Sarah Jenkins (IELTS Trainer)</span>
                            </div>
                            <h3 class="blog-card-title">
                                <a href="/blog-detail?slug=crack-ielts-8-band">
                                    Crack the IELTS: 5 Proven Strategies for an 8+ Band Score
                                </a>
                            </h3>
                            <p class="blog-card-excerpt">Achieve your dream band score with our expert-approved study methods. Master the Reading, Writing, Speaking, and Listening sections step-by-step.</p>
                            <div>
                                <a href="/blog-detail?slug=crack-ielts-8-band" class="blog-read-more-btn">
                                    Read Article <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article class="blog-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="blog-card-img-wrapper">
                            <img class="blog-card-img" src="/img/hero_edu2.png" alt="Why Canada Remains a Top Choice for International Students">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta">
                                <span><i class="fa-regular fa-calendar"></i> June 15, 2026</span>
                                <span><i class="fa-regular fa-user"></i> By Rohit Verma</span>
                            </div>
                            <h3 class="blog-card-title">
                                <a href="/blog-detail?slug=canada-top-choice">
                                    Why Canada Remains a Top Choice for International Students
                                </a>
                            </h3>
                            <p class="blog-card-excerpt">Explore the long-term benefits of Canadian education, post-study work permits (PGWP), express entry pathways, and academic lifestyle in Canadian institutions.</p>
                            <div>
                                <a href="/blog-detail?slug=canada-top-choice" class="blog-read-more-btn">
                                    Read Article <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                
            </div>
        </div>
    </section>

    <!-- Footer -->
    

    <!-- JS dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true
        });
    </script>
</body>
</html>

` }} />
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
