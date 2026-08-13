import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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




import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ScrollToTopAndInitAOS = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true
    });
    AOS.refresh();
  }, [pathname]);

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






        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

