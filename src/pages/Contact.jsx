import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { handleFormSubmit } from '../utils/emailService';

const Contact = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Contact - GlobalEdu</title>
      </Helmet>
      <main>
        {/* Original HTML */}
{/*  Custom Contact Styles  */}
    <style>{`
        .contact-header {
            background: linear-gradient(rgba(10, 30, 50, 0.8), rgba(10, 30, 50, 0.8)), url('/img/hero_edu2.png') center/cover no-repeat;
            padding: 140px 0 90px;
            text-align: center;
            color: #fff;
        }
        .contact-header h1 {
            font-size: 3.2rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #fff;
        }
        .contact-header p {
            color:#fff;
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
        }

        .contact-section {
            padding: 80px 0;
            background-color: var(--light-bg);
        }

        .office-card {
            background: #fff;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0,0,0,0.05);
            margin-bottom: 30px;
            transition: all 0.3s ease;
        }
        .office-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            border-color: var(--primary);
        }
        .office-title {
            color: var(--primary);
            font-weight: 700;
            margin-bottom: 20px;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .office-details p {
            margin-bottom: 12px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1rem;
            color: var(--dark-text);
        }
        .office-details p i {
            color: var(--accent);
            margin-top: 5px;
            font-size: 1.1rem;
        }
        .office-details a {
            text-decoration: none;
            color: inherit;
            transition: color 0.3s;
        }
        .office-details a:hover {
            color: var(--primary);
        }

        .contact-form-card {
            background: #fff;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.05);
            border: 1px solid var(--border);
        }
        .contact-form-card h3 {
            font-weight: 700;
            color: var(--dark-text);
            margin-bottom: 25px;
        }
        .contact-form-card .form-control {
            margin-bottom: 20px;
            border-radius: 8px;
            padding: 12px 18px;
            border: 1px solid var(--border);
            font-size: 1rem;
        }
        .contact-form-card .form-control:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(3, 132, 202, 0.1);
        }
        .contact-form-submit {
            background-color: var(--primary);
            color: #fff;
            font-weight: 600;
            padding: 14px;
            border-radius: 8px;
            border: none;
            width: 100%;
            transition: background-color 0.3s;
            font-size: 1.1rem;
        }
        .contact-form-submit:hover {
            background-color: #026ca7;
        }

        /* Map styling */
        .map-container {
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            margin-top: 30px;
        }
    `}</style>



    {/*  Header Section  */}
        <section className="about-hero">
        <div className="container" data-aos="fade-up">
            <h1>Contact <span className="accent-text" style={{ color: `var(--accent)` }}>Us</span></h1>
            <p>Get in touch with our branches or drop us a query. Our expert counseling team is ready to guide you.</p>
        </div>
    </section>

    {/*  Main Content  */}
    <section className="contact-section">
        <div className="container">
            <div className="row g-5">
                
                {/*  Left Column: Branch Offices  */}
                <div className="col-lg-6" data-aos="fade-right">
                    
                    {/*  Head Office (Coimbatore)  */}
                    <div className="office-card">
                        <h3 className="office-title"><i className="fa-solid fa-building"></i> Head Office (Coimbatore)</h3>
                        <div className="office-details">
                            <p>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>198, First Floor, Vasu Arcade,<br />Raja Annamalai Road,<br />Saibaba Colony, Coimbatore - 641011</span>
                            </p>
                            <p>
                                <i className="fa-solid fa-phone fa-flip-horizontal"></i>
                                <a href="tel:+919787700661">+91 97877 00661</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:info@theglobalties.com">info@theglobalties.com</a>
                                

                                 
                            </p>
                            <p>
                                 <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:tgtabroad@gmail.com">tgtabroad@gmail.com </a>
                            </p>
                        </div>
                    </div>

                    {/*  Namakkal Office  */}
                    <div className="office-card">
                        <h3 className="office-title"><i className="fa-solid fa-building-flag"></i> Namakkal Office</h3>
                        <div className="office-details">
                            <p>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Moorthy Arcade, 2nd Floor, Kottai,<br />E Coast Road, Near Navani Lab,<br />Namakkal, Tamil Nadu - 637001</span>
                            </p>
                            <p>
                                <i className="fa-solid fa-user-tie"></i>
                                <span><strong>Branch Head:</strong> Mr. Deepak</span>
                            </p>
                            <p>
                                
                                <i className="fa-solid fa-phone fa-flip-horizontal"></i>
                                <a href="tel:+918903509536">+91 89035 09536</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:tgtnamakkal@gmail.com">tgtnamakkal@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    {/*  Bangalore Office  */}
                    <div className="office-card">
                        <h3 className="office-title"><i className="fa-solid fa-building-circle-check"></i> Bangalore Office</h3>
                        <div className="office-details">
                            <p>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>The Global Ties, Bangalore, India</span>
                            </p>
                            <p>
                                <i className="fa-solid fa-user-tie"></i>
                                <span><strong>Branch Head:</strong> Dharini Padhiar</span>
                            </p>
                            <p>
                                <i className="fa-solid fa-phone fa-flip-horizontal"></i>
                                <a href="tel:+919902417339">+91 99024 17339</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:tgtadmissionblr@gmail.com">tgtadmissionblr@gmail.com</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/*  Right Column: Consultation Form  */}
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="contact-form-card">
                        <h3>Send Us a Message</h3>
                        
                        <div className="alert alert-success" role="alert" style={{ display: `none`, padding: `10px`, marginBottom: `15px`, borderRadius: `5px`, backgroundColor: `#d4edda`, color: `#155724`, border: `1px solid #c3e6cb` }}>
                            Your message has been sent successfully! Our counselors will get in touch with you shortly.
                        </div>
                        
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" name="full_name" className="form-control" placeholder="Full Name" required={true} />
                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required={true} />
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required={true} />
                            
                            <input type="text" name="course" className="form-control" required={true} style={{ marginBottom: `15px` }} placeholder="Course/Destination Interested In" />
                            <input type="text" name="city" className="form-control" placeholder="City" />
                            <textarea name="questions" className="form-control" rows="5" placeholder="Write your query here..." required={true}></textarea>
                            <button type="submit" className="contact-form-submit">Send Message</button>
                        </form>
                    </div>

                    {/*  Embedded Map Placeholder/Design  */}
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.847439184892!2d76.93493449854107!3d11.022725276260728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858e8c3195555%3A0xe276df9134b771e4!2sThe%20Global%20Ties%20%7C%20Abroad%20Education%20Consultant%20%7C%20Study%20Abroad%20%7C%20MBBS%20Education%20Consultant!5e0!3m2!1sen!2sin!4v1783314329134!5m2!1sen!2sin" width="600" height="350" style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    {/*  JS dependencies  */}
    
    
    
      </main>
      <Footer />
    </>
  );
};

export default Contact;
