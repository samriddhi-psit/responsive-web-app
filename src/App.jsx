import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import OurWork from "./components/sections/OurWork";
import QuotesSection from "./components/sections/QuotesSection";
import GetInvolvedForm from "./components/sections/GetInvolvedForm";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Our Work Section */}
        <OurWork />

        {/* Quotes / API Section */}
        <QuotesSection />

        {/* Get Involved Form */}
        <GetInvolvedForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
