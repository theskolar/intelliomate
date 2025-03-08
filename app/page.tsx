import GpsTracking from "@/components/GpsTracking";
import BoostSuccess from "@/components/BoostSuccess";

import Header from "@/components/Header";
import GPSTrackingServices from "@/components/CustomService";
import GPSSoftwareDevelopment from "@/components/GPSSoftwareDevelopment";
import Minimized from "@/components/Minimized";
import GPSTechnologies from "@/components/AllApps";
import SuccessStory from "@/components/SuccessStory";
import GpsTrackingPanels from "@/components/GpsPanel";
import SolutionsWeOffer from "@/components/SolutionOffer";
import FAQSection from "@/components/Faq";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactUs from "@/components/ContactUs";
import RecentBlogs from "@/components/RecentBlogs";
import Footer from "@/components/Footer";

export default function Page () {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* <TopBar /> */}

      {/* Header */}
      <Header />

      {/* Hero Section */}

      <GpsTracking />

      {/* Content Section */}
      {/* <BoostSuccess /> */}

      <GPSTrackingServices />

      <GPSSoftwareDevelopment />

      <Minimized />

      <GPSTechnologies />

      {/* <SuccessStory /> */}

      <GpsTrackingPanels />

      <SolutionsWeOffer />

      <FAQSection />

      {/* <TestimonialCarousel /> */}

      {/* <ContactUs /> */}

      {/* <RecentBlogs /> */}

      {/* Contact Us Section */}
      <ContactUs />

      <Footer />
    </div>
  );
}
