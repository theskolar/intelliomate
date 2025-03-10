import GpsTracking from "@/components/GpsTracking";
import GPSTrackingServices from "@/components/CustomService";
import GPSSoftwareDevelopment from "@/components/GPSSoftwareDevelopment";
import Minimized from "@/components/Minimized";
import GPSTechnologies from "@/components/AllApps";
import GpsTrackingPanels from "@/components/GpsPanel";
import SolutionsWeOffer from "@/components/SolutionOffer";
import FAQSection from "@/components/Faq";
import ContactUs from "@/components/ContactUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900">
      <GpsTracking />

      <GPSTrackingServices />

      <GPSSoftwareDevelopment />

      <Minimized />

      <GPSTechnologies />

      <GpsTrackingPanels />

      <SolutionsWeOffer />

      <FAQSection />

    </div>
  );
}
