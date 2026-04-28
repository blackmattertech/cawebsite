import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import Seo from '../components/Seo';
import HomeJsonLd from '../components/HomeJsonLd';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Shivanichchi & Co. | Chartered Accountants in Bengaluru"
        description="Trusted CA firm in Bengaluru: taxation, audit and assurance, GST consulting, compliance, and business advisory for companies and professionals."
        path="/"
      />
      <HomeJsonLd />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
