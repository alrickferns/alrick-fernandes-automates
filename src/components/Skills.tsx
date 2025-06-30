
import React from 'react';
import { Bot, Users, Cog, TrendingUp, Brain, MessageSquare } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & RPA",
      icon: Bot,
      color: "from-blue-500 to-blue-600",
      skills: [
        "Robotic Process Automation (RPA)",
        "UiPath Development & Management",
        "Process Mining & Process Mapping",
        "Business Process Re-engineering",
        "Emerging Technology Evaluation"
      ]
    },
    {
      title: "Agile & Project Management",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      skills: [
        "Agile and Scrum Methodologies",
        "Project Management & Delivery",
        "Sprint Planning & Execution",
        "Cross-functional Team Leadership",
        "Stakeholder Engagement & Management"
      ]
    },
    {
      title: "Process Optimization",
      icon: Cog,
      color: "from-green-500 to-green-600",
      skills: [
        "Continuous Improvement & Lean Six Sigma",
        "Change Management",
        "Financial Process Knowledge",
        "Business Process Improvement",
        "Operational Excellence"
      ]
    },
    {
      title: "Leadership & Development",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      skills: [
        "Mentorship & Team Leadership",
        "Performance Management",
        "Team Productivity Enhancement",
        "Professional Development",
        "Culture Building"
      ]
    },
    {
      title: "Analysis & Problem Solving",
      icon: Brain,
      color: "from-pink-500 to-pink-600",
      skills: [
        "Problem-Solving & Critical Thinking",
        "Financial Analysis",
        "Case Studies Development",
        "Data-Driven Decision Making",
        "Risk Assessment"
      ]
    },
    {
      title: "Communication & Collaboration",
      icon: MessageSquare,
      color: "from-cyan-500 to-cyan-600",
      skills: [
        "Communication & Collaboration",
        "Stakeholder Management",
        "Presentations & Training",
        "Customer Service Excellence",
        "Cross-functional Coordination"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning automation, leadership, and process transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3 text-slate-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              60+
            </div>
            <p className="text-slate-300">RPA Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              30%
            </div>
            <p className="text-slate-300">Efficiency Improvement</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
              35%
            </div>
            <p className="text-slate-300">Automation Coverage</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
              8+
            </div>
            <p className="text-slate-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
