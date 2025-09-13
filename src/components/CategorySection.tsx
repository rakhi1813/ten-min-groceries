import React from 'react';
import { Button } from "@/components/ui/button";
import vegetablesIcon from "@/assets/vegetables-icon.jpg";
import bakingIcon from "@/assets/baking-icon.jpg";
import cannedIcon from "@/assets/canned-icon.jpg";
import meatSeafoodIcon from "@/assets/meat-seafood-icon.jpg";
import petFoodIcon from "@/assets/pet-food-icon.jpg";

const categories = [
  {
    id: 1,
    name: "Vegetables",
    icon: vegetablesIcon,
    color: "bg-fresh-green"
  },
  {
    id: 2,
    name: "Baking Items",
    icon: bakingIcon,
    color: "bg-warning"
  },
  {
    id: 3,
    name: "Canned Food",
    icon: cannedIcon,
    color: "bg-fresh-teal"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    icon: meatSeafoodIcon,
    color: "bg-accent"
  },
  {
    id: 5,
    name: "Pet Food",
    icon: petFoodIcon,
    color: "bg-secondary"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-category relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            EXPLORE CATEGORIES
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="category"
              className="flex flex-col items-center p-6 h-auto space-y-4 group relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-white p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-semibold text-white text-sm md:text-base">
                {category.name}
              </span>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          ))}
        </div>
        
        {/* Additional Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh Produce</h3>
            <p className="text-sm opacity-90">Farm-fresh fruits and vegetables delivered daily</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Pantry Essentials</h3>
            <p className="text-sm opacity-90">Stock up on cooking basics and household items</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Special Diets</h3>
            <p className="text-sm opacity-90">Organic, gluten-free, and specialty products</p>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CategorySection;