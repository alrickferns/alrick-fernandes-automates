
import React from 'react';
import { ArrowDown, Briefcase, Users, Zap } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Alrick <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fernandes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Senior RPA Business Analyst • Scrum Master • Delivery Manager
          </p>
          
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
            Driving Finance Process Transformation with 5+ years of experience. 
            I excel at solving complex problems by blending automation with agile methods 
            to deliver timely, high-impact results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span className="text-white">60+ RPA Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-white">10+ Team Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-white">30% Efficiency Boost</span>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discover My Journey
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
