
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import SpecificationsSection from '@/components/SpecificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-feltrix-dark-blue">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <DifferentialsSection />
      <SpecificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
