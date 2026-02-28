import React from 'react';
import { Card } from './ui/card';
import { Lightbulb, Ship, Trophy, Cpu, Sparkles, Bot } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    icon: Lightbulb,
    title: "Where's My Money?",
    organization: 'Rabbitron Lab × Heriot-Watt University',
    type: '2-Day Hackathon',
    description: 'Built an AI-Powered Financial Assistant that makes personal finance simple and conversational. The app allows users to track spending effortlessly, get personalized insights, ask questions in plain English, and receive smart budgeting suggestions.',
    highlights: [
      'AI-powered financial insights',
      'Natural language processing',
      'Smart budgeting recommendations',
      'Accessible financial wellness'
    ],
    tags: ['AI', 'FinTech', 'Hackathon']
  },
  {
    icon: Ship,
    title: 'STCW Training & STSDSD Certification',
    organization: 'BP Marine India',
    type: 'Professional Training',
    description: 'Successfully completed STCW training covering Personal Survival Techniques, Fire Prevention & Firefighting, Elementary First Aid, and Personal Safety. Also completed STSDSD course focusing on safe handling and transfer of hazardous substances during ship-to-ship operations.',
    highlights: [
      'Personal Survival Techniques (PST)',
      'Fire Prevention and Firefighting (FPFF)',
      'Elementary First Aid (EFA)',
      'STSDSD - Dangerous Substances Declaration'
    ],
    tags: ['Maritime', 'Safety', 'Certification']
  },
  {
    icon: Trophy,
    title: 'Nasaar FZE - Marine Excellence',
    organization: 'Nasaar FZE',
    type: 'Industry Experience',
    description: 'Experience with offshore ship management, repairs, chartering and marine support operations. Contributing to world-class solutions and engineering excellence in maritime operations. Part of the Nasaar Sharks team, embodying teamwork and resilience.',
    highlights: [
      'Offshore ship management',
      'Marine support operations',
      'Engineering excellence',
      'Team collaboration (Nasaar Sharks)'
    ],
    tags: ['Maritime', 'Management', 'Teamwork']
  },
  {
    icon: Cpu,
    title: 'MasterMind on Raspberry Pi',
    organization: 'Heriot-Watt University (with Ahmed Khan)',
    type: 'Embedded Systems Project',
    description: 'Developed a functional MasterMind game on Raspberry Pi using C and ARM Assembly. Integrated hardware components including LCD screen, LEDs, buttons, and potentiometer. Gained hands-on experience in embedded systems development, GPIO control, and hardware-software integration.',
    highlights: [
      'C and ARM Assembly programming',
      'LCD and LED interface',
      'GPIO pin control',
      'Real-time processing'
    ],
    tags: ['Embedded Systems', 'C', 'Hardware']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects & Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <div className="project-meta">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-organization">{project.organization}</p>
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4 className="highlights-title">Key Highlights:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </Card>
            );
          })}
          
          {/* Coming Soon Card */}
          <Card className="project-card coming-soon-card">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">
                <Sparkles size={48} strokeWidth={1.5} />
              </div>
              <h3 className="coming-soon-title">More Exciting Projects Coming Soon</h3>
              <p className="coming-soon-text">
                Currently working on bigger and more impactful projects. Stay tuned for updates!
              </p>
              <div className="coming-soon-note">In Development</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
