
import React, { useState } from 'react';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

export const Experience = () => {
  const [activeRole, setActiveRole] = useState(0);

  const experiences = [
    {
      company: "Mettler-Toledo International, Inc",
      role: "Assistant Manager - Sr. Process Transformation Expert",
      period: "Mar 2024 - Present",
      location: "Mumbai · On-site",
      duration: "1 yr 4 mos",
      highlights: [
        "Led Agile Scrum ceremonies, improving sprint delivery efficiency by 30%",
        "Managed end-to-end delivery of 60+ UiPath RPA projects with 25% cycle time reduction",
        "Secured 100% project buy-in and increased automation adoption rates by 40%",
        "Increased automation coverage by 35%, driving significant cost savings",
        "Enhanced operational value by 15% through continuous improvement frameworks",
        "Mentored 10+ junior analysts, contributing to 50% increase in team productivity"
      ],
      skills: ["RPA", "Agile/Scrum", "Process Mining", "Stakeholder Management", "Business Process Re-engineering"]
    },
    {
      company: "Mettler-Toledo International, Inc",
      role: "Process Transformation Expert",
      period: "Apr 2022 - Mar 2024",
      location: "Mumbai, Maharashtra, India",
      duration: "2 yrs",
      highlights: [
        "Identified automation opportunities and conducted feasibility analysis for RPA solutions",
        "Collaborated with stakeholders to design automation solutions aligned with business goals",
        "Developed and implemented automation solutions using RPA tools and technologies",
        "Monitored and maintained automation solutions for optimal performance",
        "Provided training and support to end users on RPA tools and processes",
        "Stayed current with latest RPA technologies and best practices"
      ],
      skills: ["Case Studies", "Business Process Improvement", "Leadership", "Financial Analysis", "Presentations"]
    },
    {
      company: "Mettler-Toledo International, Inc",
      role: "Associate & Millennial Council Leader",
      period: "Aug 2017 - Apr 2022",
      location: "Mumbai Metropolitan Region",
      duration: "4 yrs 9 mos",
      highlights: [
        "Led dynamic team of 15 members as Millennial Council Leader",
        "Drove brainstorming sessions to improve organizational processes",
        "Managed customer payment collection and credit clearing in AR role",
        "Ensured accurate cash application and seamless portal transactions",
        "Resolved discrepancies promptly while maintaining customer relationships"
      ],
      skills: ["Finance", "SAP", "Team Leadership", "Process Improvement"]
    },
    {
      company: "J.P. Morgan",
      role: "Specialist II",
      period: "May 2015 - Jun 2017",
      location: "Mumbai Area, India",
      duration: "2 yrs 2 mos",
      highlights: [
        "Contacted delinquent credit card holders and negotiated payment arrangements",
        "Maintained accurate records of customer interactions and account updates",
        "Developed strategies to maximize collections and minimize charge-offs",
        "Provided exceptional customer service while ensuring compliance",
        "Resolved customer complaints and disputes effectively",
        "Assisted in developing new processes to improve call center efficiency"
      ],
      skills: ["Collections", "Customer Service", "Compliance", "Process Development"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nearly 8 years of progressive growth in process transformation, automation, and team leadership
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRole(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeRole === index 
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-4 border-blue-400' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Building2 className={`w-5 h-5 mt-1 ${activeRole === index ? 'text-blue-400' : 'text-slate-400'}`} />
                      <div>
                        <h3 className={`font-semibold ${activeRole === index ? 'text-white' : 'text-slate-300'}`}>
                          {exp.company}
                        </h3>
                        <p className={`text-sm ${activeRole === index ? 'text-blue-200' : 'text-slate-400'}`}>
                          {exp.role}
                        </p>
                        <p className={`text-xs ${activeRole === index ? 'text-purple-200' : 'text-slate-500'}`}>
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experiences[activeRole].role}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{experiences[activeRole].company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{experiences[activeRole].period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{experiences[activeRole].location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeRole].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeRole].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
