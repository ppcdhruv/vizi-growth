import Hero        from './components/Hero';
import Services    from './components/Services';
import CaseStudies from './components/CaseStudies';
import Insights    from './components/Insights';
import About       from './components/About';
import ContactForm from './components/ContactForm';
import Footer      from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Insights />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
