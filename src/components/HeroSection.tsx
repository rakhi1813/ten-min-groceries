import React from 'react';
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grocery-bag.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              DELIVERING FRESH
              <br />
              GROCERIES TO
              <br />
              YOUR DOORSTEP
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-md">
              Get fresh groceries delivered to your door in just 10 minutes. 
              Quality products, unbeatable prices, lightning-fast delivery.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Sign up for 3 free deliveries!
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Fresh grocery bag with vegetables and fruits" 
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-fresh-mint text-primary px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">✨ Fresh guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-fresh-mint opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-warning opacity-20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;