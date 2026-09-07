import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import About from './pages/About';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';

import Contact from './pages/Contact';
import Course from './pages/Course';
import Duolingo from './pages/Duolingo';
import French from './pages/French';
import German from './pages/German';
import Gmat from './pages/Gmat';
import Gre from './pages/Gre';
import Ielts from './pages/Ielts';
import Home from './pages/Home';
import Oet from './pages/Oet';
import Pte from './pages/Pte';

import Sat from './pages/Sat';
import Service from './pages/Service';
import StudyInDenmark from './pages/StudyInDenmark';
import StudyInDubai from './pages/StudyInDubai';
import StudyInFrance from './pages/StudyInFrance';
import StudyInItaly from './pages/StudyInItaly';
import StudyInSpain from './pages/StudyInSpain';
import StudyInSweden from './pages/StudyInSweden';
import StudyInSwitzerland from './pages/StudyInSwitzerland';
import StudyMbbsInBangladesh from './pages/StudyMbbsInBangladesh';
import StudyMbbsInCaribbeanIslands from './pages/StudyMbbsInCaribbeanIslands';
import StudyMbbsInGeorgia from './pages/StudyMbbsInGeorgia';
import StudyMbbsInKazakhstan from './pages/StudyMbbsInKazakhstan';
import StudyMbbsInKyrgyzstan from './pages/StudyMbbsInKyrgyzstan';
import StudyMbbsInLatvia from './pages/StudyMbbsInLatvia';
import StudyMbbsInMalaysia from './pages/StudyMbbsInMalaysia';
import StudyMbbsInPoland from './pages/StudyMbbsInPoland';
import StudyMbbsInRussia from './pages/StudyMbbsInRussia';
import StudyMbbsInTajikistan from './pages/StudyMbbsInTajikistan';
import StudyMbbsInUzbekistan from './pages/StudyMbbsInUzbekistan';
import StudyInAustralia from './pages/StudyInAustralia';
import StudyInCanada from './pages/StudyInCanada';
import StudyInGermany from './pages/StudyInGermany';
import StudyInIreland from './pages/StudyInIreland';
import StudyInNewzealand from './pages/StudyInNewzealand';
import StudyInSingapore from './pages/StudyInSingapore';
import StudyInUk from './pages/StudyInUk';
import StudyInUsa from './pages/StudyInUsa';
import Toefl from './pages/Toefl';

// 30 Replication Pages
import StudyAbroadConsultantsCoimbatore from './pages/replication/StudyAbroadConsultantsCoimbatore';
import StudyAbroadConsultantCoimbatore from './pages/replication/StudyAbroadConsultantCoimbatore';
import OverseasEducationConsultantsCoimbatore from './pages/replication/OverseasEducationConsultantsCoimbatore';
import OverseasEducationConsultantCoimbatore from './pages/replication/OverseasEducationConsultantCoimbatore';
import AbroadEducationConsultantsCoimbatore from './pages/replication/AbroadEducationConsultantsCoimbatore';
import AbroadEducationConsultantCoimbatore from './pages/replication/AbroadEducationConsultantCoimbatore';
import BestStudyAbroadConsultantsCoimbatore from './pages/replication/BestStudyAbroadConsultantsCoimbatore';
import TopStudyAbroadConsultantsCoimbatore from './pages/replication/TopStudyAbroadConsultantsCoimbatore';
import ForeignEducationConsultantsCoimbatore from './pages/replication/ForeignEducationConsultantsCoimbatore';
import InternationalEducationConsultantsCoimbatore from './pages/replication/InternationalEducationConsultantsCoimbatore';
import UkStudyAbroadConsultantsCoimbatore from './pages/replication/UkStudyAbroadConsultantsCoimbatore';
import CanadaStudyAbroadConsultantsCoimbatore from './pages/replication/CanadaStudyAbroadConsultantsCoimbatore';
import AustraliaStudyAbroadConsultantsCoimbatore from './pages/replication/AustraliaStudyAbroadConsultantsCoimbatore';
import UsaStudyAbroadConsultantsCoimbatore from './pages/replication/UsaStudyAbroadConsultantsCoimbatore';
import GermanyStudyAbroadConsultantsCoimbatore from './pages/replication/GermanyStudyAbroadConsultantsCoimbatore';
import IrelandStudyAbroadConsultantsCoimbatore from './pages/replication/IrelandStudyAbroadConsultantsCoimbatore';
import NewZealandStudyAbroadConsultantsCoimbatore from './pages/replication/NewZealandStudyAbroadConsultantsCoimbatore';
import FranceStudyAbroadConsultantsCoimbatore from './pages/replication/FranceStudyAbroadConsultantsCoimbatore';
import UkEducationConsultantsCoimbatore from './pages/replication/UkEducationConsultantsCoimbatore';
import CanadaEducationConsultantsCoimbatore from './pages/replication/CanadaEducationConsultantsCoimbatore';
import AustraliaEducationConsultantsCoimbatore from './pages/replication/AustraliaEducationConsultantsCoimbatore';
import UsaEducationConsultantsCoimbatore from './pages/replication/UsaEducationConsultantsCoimbatore';
import BestStudyAbroadConsultantsStudentsCoimbatore from './pages/replication/BestStudyAbroadConsultantsStudentsCoimbatore';
import AffordableStudyAbroadConsultantsCoimbatore from './pages/replication/AffordableStudyAbroadConsultantsCoimbatore';
import TrustedOverseasEducationConsultantsCoimbatore from './pages/replication/TrustedOverseasEducationConsultantsCoimbatore';
import StudyAbroadConsultantsVisaAssistanceCoimbatore from './pages/replication/StudyAbroadConsultantsVisaAssistanceCoimbatore';
import StudyAbroadConsultantsScholarshipAssistanceCoimbatore from './pages/replication/StudyAbroadConsultantsScholarshipAssistanceCoimbatore';
import StudyAbroadConsultantsUniversityApplicationSupportCoimbatore from './pages/replication/StudyAbroadConsultantsUniversityApplicationSupportCoimbatore';
import OverseasEducationConsultantsVisaAssistanceCoimbatore from './pages/replication/OverseasEducationConsultantsVisaAssistanceCoimbatore';
import BestOverseasEducationAgencyCoimbatore from './pages/replication/BestOverseasEducationAgencyCoimbatore';





import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ScrollToTopAndInitAOS = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we need to scroll to the admission contact section
    const shouldScrollToContact = sessionStorage.getItem('scrollToContact') === 'true';
    if (shouldScrollToContact) {
      sessionStorage.removeItem('scrollToContact');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const navbarHeight = 70;
          const y = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }

    AOS.init({
      duration: 800,
      once: true
    });
    AOS.refresh();
  }, [pathname]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href="#contact"], a[href="/#contact"], .apply-btn');
      if (anchor) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const navbarHeight = 70;
          const y = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          sessionStorage.setItem('scrollToContact', 'true');
          navigate('/');
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navigate]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopAndInitAOS />
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/duolingo" element={<Duolingo />} />
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />
        <Route path="/gmat" element={<Gmat />} />
        <Route path="/gre" element={<Gre />} />
        <Route path="/ielts" element={<Ielts />} />
        <Route path="/" element={<Home />} />
        <Route path="/oet" element={<Oet />} />
        <Route path="/pte" element={<Pte />} />

        <Route path="/sat" element={<Sat />} />
        <Route path="/services" element={<Service />} />
        <Route path="/study-in-denmark" element={<StudyInDenmark />} />
        <Route path="/study-in-dubai" element={<StudyInDubai />} />
        <Route path="/study-in-france" element={<StudyInFrance />} />
        <Route path="/study-in-italy" element={<StudyInItaly />} />
        <Route path="/study-in-spain" element={<StudyInSpain />} />
        <Route path="/study-in-sweden" element={<StudyInSweden />} />
        <Route path="/study-in-switzerland" element={<StudyInSwitzerland />} />
        <Route path="/study-mbbs-in-bangladesh" element={<StudyMbbsInBangladesh />} />
        <Route path="/study-mbbs-in-caribbean-islands" element={<StudyMbbsInCaribbeanIslands />} />
        <Route path="/study-mbbs-in-georgia" element={<StudyMbbsInGeorgia />} />
        <Route path="/study-mbbs-in-kazakhstan" element={<StudyMbbsInKazakhstan />} />
        <Route path="/study-mbbs-in-kyrgyzstan" element={<StudyMbbsInKyrgyzstan />} />
        <Route path="/study-mbbs-in-latvia" element={<StudyMbbsInLatvia />} />
        <Route path="/study-mbbs-in-malaysia" element={<StudyMbbsInMalaysia />} />
        <Route path="/study-mbbs-in-poland" element={<StudyMbbsInPoland />} />
        <Route path="/study-mbbs-in-russia" element={<StudyMbbsInRussia />} />
        <Route path="/study-mbbs-in-tajikistan" element={<StudyMbbsInTajikistan />} />
        <Route path="/study-mbbs-in-uzbekistan" element={<StudyMbbsInUzbekistan />} />
        <Route path="/study-in-australia" element={<StudyInAustralia />} />
        <Route path="/study-in-canada" element={<StudyInCanada />} />
        <Route path="/study-in-germany" element={<StudyInGermany />} />
        <Route path="/study-in-ireland" element={<StudyInIreland />} />
        <Route path="/study-in-new-zealand" element={<StudyInNewzealand />} />
        <Route path="/study-in-singapore" element={<StudyInSingapore />} />
        <Route path="/study-in-uk" element={<StudyInUk />} />
        <Route path="/study-in-usa" element={<StudyInUsa />} />
        <Route path="/toefl" element={<Toefl />} />

        {/* 30 Replication Routes */}
        <Route path="/study-abroad-consultants-coimbatore" element={<StudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultant-coimbatore" element={<StudyAbroadConsultantCoimbatore />} />
        <Route path="/overseas-education-consultants-coimbatore" element={<OverseasEducationConsultantsCoimbatore />} />
        <Route path="/overseas-education-consultant-coimbatore" element={<OverseasEducationConsultantCoimbatore />} />
        <Route path="/abroad-education-consultants-coimbatore" element={<AbroadEducationConsultantsCoimbatore />} />
        <Route path="/abroad-education-consultant-coimbatore" element={<AbroadEducationConsultantCoimbatore />} />
        <Route path="/best-study-abroad-consultants-coimbatore" element={<BestStudyAbroadConsultantsCoimbatore />} />
        <Route path="/top-study-abroad-consultants-coimbatore" element={<TopStudyAbroadConsultantsCoimbatore />} />
        <Route path="/foreign-education-consultants-coimbatore" element={<ForeignEducationConsultantsCoimbatore />} />
        <Route path="/international-education-consultants-coimbatore" element={<InternationalEducationConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-uk-coimbatore" element={<UkStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-canada-coimbatore" element={<CanadaStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-australia-coimbatore" element={<AustraliaStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-usa-coimbatore" element={<UsaStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-germany-coimbatore" element={<GermanyStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-ireland-coimbatore" element={<IrelandStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-new-zealand-coimbatore" element={<NewZealandStudyAbroadConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-france-coimbatore" element={<FranceStudyAbroadConsultantsCoimbatore />} />
        <Route path="/uk-education-consultants-coimbatore" element={<UkEducationConsultantsCoimbatore />} />
        <Route path="/canada-education-consultants-coimbatore" element={<CanadaEducationConsultantsCoimbatore />} />
        <Route path="/australia-education-consultants-coimbatore" element={<AustraliaEducationConsultantsCoimbatore />} />
        <Route path="/usa-education-consultants-coimbatore" element={<UsaEducationConsultantsCoimbatore />} />
        <Route path="/best-study-abroad-consultants-students-coimbatore" element={<BestStudyAbroadConsultantsStudentsCoimbatore />} />
        <Route path="/affordable-study-abroad-consultants-coimbatore" element={<AffordableStudyAbroadConsultantsCoimbatore />} />
        <Route path="/trusted-overseas-education-consultants-coimbatore" element={<TrustedOverseasEducationConsultantsCoimbatore />} />
        <Route path="/study-abroad-consultants-visa-assistance-coimbatore" element={<StudyAbroadConsultantsVisaAssistanceCoimbatore />} />
        <Route path="/study-abroad-consultants-scholarship-assistance-coimbatore" element={<StudyAbroadConsultantsScholarshipAssistanceCoimbatore />} />
        <Route path="/study-abroad-consultants-university-application-support-coimbatore" element={<StudyAbroadConsultantsUniversityApplicationSupportCoimbatore />} />
        <Route path="/overseas-education-consultants-visa-assistance" element={<OverseasEducationConsultantsVisaAssistanceCoimbatore />} />
        <Route path="/best-overseas-education-agency-coimbatore" element={<BestOverseasEducationAgencyCoimbatore />} />







        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

