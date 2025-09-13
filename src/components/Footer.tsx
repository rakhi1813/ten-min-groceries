import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Fresh</h3>
            <p className="text-primary-foreground/80 text-sm">
              Delivering fresh groceries to your doorstep in 10 minutes. 
              Quality, speed, and convenience redefined.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-secondary transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-secondary transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-secondary transition-colors cursor-pointer" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Shop Categories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Deals & Offers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Subscription</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Mumbai, Delhi, Bangalore & more</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91 9999-FRESH (373-74)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>hello@fresh-groceries.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Fresh Groceries. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <span>🍎 Fresh Guarantee</span>
            <span>⚡ 10-Min Delivery</span>
            <span>🚚 Free Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;