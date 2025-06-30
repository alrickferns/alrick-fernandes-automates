
import React from 'react';
import { Mail, Linkedin, FileText, Download } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Processes?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how my expertise in RPA, process optimization, and agile delivery 
            can drive meaningful transformation for your organization.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:alrick.fernandes@email.com"
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300">Let's discuss opportunities</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/alrickfernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-300">Professional network</p>
            </a>
            
            <button className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Resume</h3>
              <p className="text-slate-300">Download my CV</p>
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">What I Bring to Your Team</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-2">Immediate Impact</h4>
                <p className="text-slate-300 text-sm">
                  Proven track record of delivering 60+ RPA projects with measurable business outcomes
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-2">Strategic Vision</h4>
                <p className="text-slate-300 text-sm">
                  Bridge between business needs and technical execution for optimal automation solutions
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-200 mb-2">Team Leadership</h4>
                <p className="text-slate-300 text-sm">
                  Experience mentoring teams and improving delivery efficiency through agile methodologies
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-200 mb-2">Continuous Innovation</h4>
                <p className="text-slate-300 text-sm">
                  Always exploring emerging technologies to drive process transformation and business value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pb-8">
        <p className="text-slate-400">
          © 2024 Alrick Fernandes. Transforming processes, one automation at a time.
        </p>
      </div>
    </section>
  );
};
