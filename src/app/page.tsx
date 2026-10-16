import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheStory from "@/components/TheStory";
import CircuitJourney from "@/components/CircuitJourney";
import TheNumbers from "@/components/TheNumbers";
import TheLeader from "@/components/TheLeader";
import Research from "@/components/Research";
import TheBuilder from "@/components/TheBuilder";
import Athlete from "@/components/Athlete";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <Navigation />
      
      {/* Interactive Recruiter Flow */}
      <Hero />             {/* Screen 1: Hero */}
      <TheStory />
      <CircuitJourney />
      <TheNumbers />
      <TheLeader />
      <Research />
      <TheBuilder />
      <Athlete />
      <Skills />
      <Certifications />
      <Contact />
      
    </main>
  );
}
