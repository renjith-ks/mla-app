import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import InteractiveSection from '@/components/InteractiveSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';

import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import NotForSection from '@/components/sections/NotForSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <InteractiveSection />
      <FeaturesSection />
      
      <BenefitsSection />
     <HowItWorksSection/>
      <TestimonialsSection />
      <PricingSection />
      <NotForSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

