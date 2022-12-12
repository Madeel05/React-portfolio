import React, { Suspense, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Resume = React.lazy(() => import('./components/Resume'));
const Services = React.lazy(() => import('./components/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));
const Submitted = React.lazy(() => import('./components/Submitted'));

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Wrapper>
          <main id="main">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<Resume />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="submitted" element={<Submitted/>}/>
            </Routes>
            <Footer />
          </main>
        </Wrapper>
      </Suspense>
    </>
  );
}

export default App;
