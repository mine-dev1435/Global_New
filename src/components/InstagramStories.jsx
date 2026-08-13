import React from 'react';

const InstagramStories = ({ country = "Germany" }) => {
    return (
        <section className="reels-section luxury-testimonial-layout">
            <div className="layout-container opp-luxury-split">
                {/* Left Content Area */}
               <div className="opp-left-luxury">
                    <span className="section-subtitle">INSTAGRAM STORIES</span>
                    <div className="reels-accent-line"></div>
                    <h2 className="section-title" style={{ lineHeight: '1.2', marginBottom: '20px' }}>
                        <span style={{ color: 'var(--primary, #0975b9)', display: 'block' }}>Experience Through</span>
                        <span style={{ color: 'var(--accent-gold, #f2b31a)' }}>Instagram Stories</span>
                    </h2>
                    <p className="hero-description">Step into the world of global education through the inspiring stories of our students. Explore visa success celebrations, university admissions, campus life, graduation moments, cultural experiences, and unforgettable memories shared directly from our Instagram community. </p>
                   <div className="social-box">

                        <a href="https://www.instagram.com/theglobalties/reels/" target="_blank" rel="noreferrer" className="social-card instagram">
                            <div className="social-icon">
                                <i className="fa-brands fa-instagram"></i>
                            </div>

                            <div className="social-content">
                                <span>Watch us on</span>
                                <h5>Instagram Reels</h5>
                            </div>
                        </a>

                        <a href="https://www.facebook.com/theglobalties" target="_blank" rel="noreferrer" className="social-card facebook">
                            <div className="social-icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>

                            <div className="social-content">
                                <span>Connect with us</span>
                                <h5>Facebook</h5>
                            </div>
                        </a>

                    </div>
                </div>

                {/* Right Content Area (Reels Slider) */}
                <div className="reel-slider-wrapper">
                    <div className="reel-slider-container" id="reel-slider">
                        <div className="reel-slider-track" id="reel-track" style={{ transform: 'translateX(0px)' }}>
                            {/* Reel 1 */}
                            <div className="reel-slide">
                                <div className="reel-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                    <iframe src="https://www.youtube.com/embed/ZKEQ7xHlKpg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="reel-overlay" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
                                    <div className="reel-play-icon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, pointerEvents: 'none' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FF0000" d="M17.15 8.92c-1.39-.74-2.14-.94-2.14-.94l2.12-1.07A4.6 4.6 0 0 0 19.5 2.8C18.66 1.15 16.59.45 14.94 1.3L4.66 6.55a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.12s1.43.76 2.14.94l-2.12 1.07a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.11l10.28-5.25a4.6 4.6 0 0 0 2.37-4.11 4.6 4.6 0 0 0-2.37-4.11z"/>
                                            <path fill="#FFF" d="M9.75 15.02l6.25-3.52-6.25-3.52v7.04z"/>
                                        </svg>
                                    </div>
                                    <div className="reel-top" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <div className="reel-account">
                                            <div className="reel-avatar">
                                                <img src="https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66" alt="The Global Ties" onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66' }} />
                                            </div>
                                            <div className="reel-account-text">
                                                <span className="reel-name">The Global Ties <span className="verified-badge">✓</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reel-bottom" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <span className="student-name">Student Story</span>
                                        <span className="university-name">Study in {country}</span>
                                        <span className="country-name">{country}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Reel 2 */}
                            <div className="reel-slide">
                                <div className="reel-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                    <iframe src="https://www.youtube.com/embed/dP3zAT8Dfh8" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="reel-overlay" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
                                    <div className="reel-play-icon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, pointerEvents: 'none' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FF0000" d="M17.15 8.92c-1.39-.74-2.14-.94-2.14-.94l2.12-1.07A4.6 4.6 0 0 0 19.5 2.8C18.66 1.15 16.59.45 14.94 1.3L4.66 6.55a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.12s1.43.76 2.14.94l-2.12 1.07a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.11l10.28-5.25a4.6 4.6 0 0 0 2.37-4.11 4.6 4.6 0 0 0-2.37-4.11z"/>
                                            <path fill="#FFF" d="M9.75 15.02l6.25-3.52-6.25-3.52v7.04z"/>
                                        </svg>
                                    </div>
                                    <div className="reel-top" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <div className="reel-account">
                                            <div className="reel-avatar">
                                                <img src="https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66" alt="The Global Ties" onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66' }} />
                                            </div>
                                            <div className="reel-account-text">
                                                <span className="reel-name">The Global Ties <span className="verified-badge">✓</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reel-bottom" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <span className="student-name">Student Story</span>
                                        <span className="university-name">Study in {country}</span>
                                        <span className="country-name">{country}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Reel 3 */}
                            <div className="reel-slide">
                                <div className="reel-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                    <iframe src="https://www.youtube.com/embed/hWDNvdlbBsM" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="reel-overlay" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
                                    <div className="reel-play-icon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, pointerEvents: 'none' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FF0000" d="M17.15 8.92c-1.39-.74-2.14-.94-2.14-.94l2.12-1.07A4.6 4.6 0 0 0 19.5 2.8C18.66 1.15 16.59.45 14.94 1.3L4.66 6.55a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.12s1.43.76 2.14.94l-2.12 1.07a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.11l10.28-5.25a4.6 4.6 0 0 0 2.37-4.11 4.6 4.6 0 0 0-2.37-4.11z"/>
                                            <path fill="#FFF" d="M9.75 15.02l6.25-3.52-6.25-3.52v7.04z"/>
                                        </svg>
                                    </div>
                                    <div className="reel-top" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <div className="reel-account">
                                            <div className="reel-avatar">
                                                <img src="https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66" alt="The Global Ties" onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66' }} />
                                            </div>
                                            <div className="reel-account-text">
                                                <span className="reel-name">The Global Ties <span className="verified-badge">✓</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reel-bottom" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <span className="student-name">Student Story</span>
                                        <span className="university-name">Study in {country}</span>
                                        <span className="country-name">{country === 'Germany' ? 'Germany Details: +91 97877 00661 | 98455 00661' : country}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Reel 4 */}
                            <div className="reel-slide">
                                <div className="reel-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                    <iframe src="https://www.youtube.com/embed/sWDBq8rBaLo" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="reel-overlay" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
                                    <div className="reel-play-icon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, pointerEvents: 'none' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FF0000" d="M17.15 8.92c-1.39-.74-2.14-.94-2.14-.94l2.12-1.07A4.6 4.6 0 0 0 19.5 2.8C18.66 1.15 16.59.45 14.94 1.3L4.66 6.55a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.12s1.43.76 2.14.94l-2.12 1.07a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.11l10.28-5.25a4.6 4.6 0 0 0 2.37-4.11 4.6 4.6 0 0 0-2.37-4.11z"/>
                                            <path fill="#FFF" d="M9.75 15.02l6.25-3.52-6.25-3.52v7.04z"/>
                                        </svg>
                                    </div>
                                    <div className="reel-top" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <div className="reel-account">
                                            <div className="reel-avatar">
                                                <img src="https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66" alt="The Global Ties" onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66' }} />
                                            </div>
                                            <div className="reel-account-text">
                                                <span className="reel-name">The Global Ties <span className="verified-badge">✓</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reel-bottom" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <span className="student-name">Student Story</span>
                                        <span className="university-name">Study in {country}</span>
                                        <span className="country-name">{country}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Reel 5 */}
                            <div className="reel-slide">
                                <div className="reel-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                    <iframe src="https://www.youtube.com/embed/hO1PeNA7EdM" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="reel-overlay" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
                                    <div className="reel-play-icon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, pointerEvents: 'none' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FF0000" d="M17.15 8.92c-1.39-.74-2.14-.94-2.14-.94l2.12-1.07A4.6 4.6 0 0 0 19.5 2.8C18.66 1.15 16.59.45 14.94 1.3L4.66 6.55a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.12s1.43.76 2.14.94l-2.12 1.07a4.6 4.6 0 0 0-2.37 4.11 4.6 4.6 0 0 0 2.37 4.11l10.28-5.25a4.6 4.6 0 0 0 2.37-4.11 4.6 4.6 0 0 0-2.37-4.11z"/>
                                            <path fill="#FFF" d="M9.75 15.02l6.25-3.52-6.25-3.52v7.04z"/>
                                        </svg>
                                    </div>
                                    <div className="reel-top" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <div className="reel-account">
                                            <div className="reel-avatar">
                                                <img src="https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66" alt="The Global Ties" onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=GT&background=fff&color=0D3B66' }} />
                                            </div>
                                            <div className="reel-account-text">
                                                <span className="reel-name">The Global Ties <span className="verified-badge">✓</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reel-bottom" style={{ zIndex: 4, pointerEvents: 'none' }}>
                                        <span className="student-name">Student Story</span>
                                        <span className="university-name">Study in {country}</span>
                                        <span className="country-name">{country}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Controls */}
                    <div className="opp-slider-controls image-exact-controls">
                        <button className="arrow-btn prev-btn" onClick={() => window.moveReelSlide && window.moveReelSlide(-1)}>&#8249;</button>
                        <div className="opp-pagination image-exact-pagination" id="reel-pagination">
                            <span className="dot active" onClick={() => window.goToReelSlide && window.goToReelSlide(0)}></span>
                            <span className="dot" onClick={() => window.goToReelSlide && window.goToReelSlide(1)}></span>
                            <span className="dot" onClick={() => window.goToReelSlide && window.goToReelSlide(2)}></span>
                            <span className="dot" onClick={() => window.goToReelSlide && window.goToReelSlide(3)}></span>
                            <span className="dot" onClick={() => window.goToReelSlide && window.goToReelSlide(4)}></span>
                        </div>
                        <button className="arrow-btn next-btn" onClick={() => window.moveReelSlide && window.moveReelSlide(1)}>&#8250;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramStories;
