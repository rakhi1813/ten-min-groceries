import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Save on summer sale Up to 50% off</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Order now and get within 10 mins!</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Fresh</h1>
          </div>
          
          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Delivery to</span>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/20">
              Select location
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for products..." 
                className="pl-10 bg-white text-foreground"
              />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/20">
              <User className="h-4 w-4 mr-2" />
              <div className="text-left hidden sm:block">
                <div className="text-xs">Register</div>
                <div className="text-xs">My Account</div>
              </div>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/20 relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <div className="text-left hidden sm:block">
                <div className="text-xs">$ 0.00</div>
                <div className="text-xs">My Cart</div>
              </div>
              <span className="absolute -top-2 -right-2 bg-warning text-warning-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4 flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-secondary transition-colors">Home</a>
          <a href="#" className="hover:text-secondary transition-colors">Shop Categories</a>
          <a href="#" className="hover:text-secondary transition-colors">Deals</a>
          <a href="#" className="hover:text-secondary transition-colors">About us</a>
          <a href="#" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;