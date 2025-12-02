import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Installation } from "@/components/Installation";
import { Integrations } from "@/components/Integrations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
