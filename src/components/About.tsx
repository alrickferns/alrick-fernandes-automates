
import React from 'react';
import { Target, Lightbulb, Users2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Value</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connecting business needs with technical execution, streamlining processes, 
            and enabling smarter decisions through innovative automation solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Alignment</h3>
            <p className="text-slate-300 leading-relaxed">
              Securing 100% project buy-in through stakeholder engagement across finance and IT departments, 
              increasing automation adoption rates by 40%.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Process Innovation</h3>
            <p className="text-slate-300 leading-relaxed">
              Spearheading finance process optimization initiatives that increased automation coverage by 35%, 
              driving significant cost savings and error reduction.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Team Leadership</h3>
            <p className="text-slate-300 leading-relaxed">
              Mentoring 10+ junior analysts and developers while leading Agile Scrum ceremonies, 
              improving sprint delivery efficiency by 30%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
