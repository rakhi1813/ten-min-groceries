import React from 'react';
import { Clock, Shield, Truck, Star } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "10-Minute Delivery",
    description: "Lightning-fast delivery to your doorstep in just 10 minutes",
    color: "text-fresh-teal"
  },
  {
    icon: Shield,
    title: "Fresh Guarantee",
    description: "100% fresh products or your money back, no questions asked",
    color: "text-fresh-green"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders over ₹500. No hidden charges",
    color: "text-accent"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Hand-picked products from trusted suppliers and brands",
    color: "text-warning"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-fresh-mint">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Fresh?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the convenience of modern grocery shopping with our reliable service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 text-center group hover:transform hover:scale-105"
            >
              <div className={`${feature.color} bg-current/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join thousands of happy customers!
            </h3>
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-fresh-teal">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fresh-green">10min</div>
                <div className="text-sm text-muted-foreground">Avg Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">On-time Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning">4.9★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;