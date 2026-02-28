import React from 'react';
import { Card } from './ui/card';
import { Cpu, Code, Sparkles, TrendingUp, Zap, MessageSquare, Shield, Target } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    icon: Cpu,
    title: 'Systems Thinking',
    description: 'Designing solutions with a deep understanding of how technology, business, and user behavior interact.'
  },
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'Strong foundations in algorithms, data structures, clean architecture, and scalable system design.'
  },
  {
    icon: Sparkles,
    title: 'AI & Emerging Technologies',
    description: 'Integrating intelligent systems and leveraging modern tools to build future-ready solutions.'
  },
  {
    icon: TrendingUp,
    title: 'Business & Product Strategy',
    description: 'Understanding market dynamics, revenue models, and building technology that creates real impact.'
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Transforming ideas into functional prototypes and shipping with speed and precision.'
  },
  {
    icon: MessageSquare,
    title: 'Communication & Clarity',
    description: 'Presenting complex technical concepts in a clear, structured, and compelling way.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Awareness',
    description: 'Building with security, privacy, and reliability as core principles.'
  },
  {
    icon: Target,
    title: 'Ownership & Initiative',
    description: 'Taking responsibility, driving projects forward, and delivering results.'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="skill-card">
                <div className="skill-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
