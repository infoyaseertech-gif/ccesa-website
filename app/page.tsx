import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProgrammesOverview from "@/components/home/ProgrammesOverview";
import DarkContrast from "@/components/home/DarkContrast";
import ProgrammeGrid from "@/components/home/ProgrammeGrid";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import Testimonials from "@/components/home/Testimonials";
import UpcomingEventsHome from "@/components/home/UpcomingEventsHome";
import ClosingCta from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProgrammesOverview />
      <DarkContrast />
      <ProgrammeGrid />
      <ImpactNumbers />
      <Testimonials />
      <UpcomingEventsHome />
      <ClosingCta />
    </>
  );
}
