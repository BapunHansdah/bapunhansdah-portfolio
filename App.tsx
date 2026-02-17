import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { BIO, EXPERIENCE, PORTFOLIO_OWNER, PORTFOLIO_ROLE, PROJECTS, SKILLS, SOCIALS } from './constants';

const NotionBlock: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`py-1 ${className}`}>
    {children}
  </div>
);

const PageLink: React.FC<{ icon: string; title: string; isActive?: boolean; onClick?: () => void }> = ({ icon, title, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-2 p-1 px-2 rounded cursor-pointer select-none transition-colors ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}
  >
    <span className={`${isActive ? 'border-gray-300' : 'border-transparent'} pb-[1px]`}>{title}</span>
  </div>
);

const Callout: React.FC<{ icon: string; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex gap-4 p-4 my-4 bg-gray-50 rounded-md border border-gray-100">
    <div className="text-2xl select-none">{icon}</div>
    <div className="text-notion-text">{children}</div>
  </div>
);

const Tag: React.FC<{ text: string; color?: string }> = ({ text, color = "gray" }) => {
  const colors: Record<string, string> = {
    gray: "bg-gray-100 text-gray-700",
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-800",
    green: "bg-green-50 text-green-700"
  };
  return (
    <span className={`px-1.5 py-0.5 rounded text-xs font-medium font-mono ${colors[color] || colors.gray} mr-2`}>
      {text}
    </span>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  // Simple state for "routing" within the SPA
  const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'about'>('home');

  return (
    <div className="min-h-screen bg-white text-notion-text font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
      
      {/* Top Banner / Cover */}
      <img className="h-48 w-full object-cover" src="/image.jpg" alt="Background Image" />

      <div className="max-w-3xl mx-auto px-6 sm:px-12 -mt-12 relative">
        
        {/* Profile Icon */}
        <div className="text-6xl mb-6 select-none cursor-default hover:scale-105 transition-transform origin-left inline-block">
          🧑‍💻
        </div>

        {/* Header Title */}
        <h1 className="text-4xl font-bold mb-2 text-black tracking-tight">{PORTFOLIO_OWNER}</h1>
        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mb-8">
          <span>{PORTFOLIO_ROLE}</span>
          <span>•</span>
          <span>Based in Bangalore</span>
        </div>

        {/* Navigation Tabs (Notion style) */}
        <div className="flex flex-wrap gap-1 mb-8 border-b border-gray-100 pb-2">
          <PageLink 
            icon="🏠" 
            title="Home" 
            isActive={activeSection === 'home'} 
            onClick={() => setActiveSection('home')} 
          />
          <PageLink 
            icon="🔨" 
            title="Projects" 
            isActive={activeSection === 'projects'} 
            onClick={() => setActiveSection('projects')} 
          />
          <PageLink 
            icon="👤" 
            title="Experience" 
            isActive={activeSection === 'about'} 
            onClick={() => setActiveSection('about')} 
          />
        </div>

        {/* Content Area */}
        <main className="animate-in fade-in duration-300">
          
          {/* HOME SECTION */}
          {activeSection === 'home' && (
            <div className="space-y-6">
              <NotionBlock>
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 border-b border-gray-100 pb-1">
                  <span className="text-gray-400">#</span> Biography
                </h2>
                <p className="text-gray-800 leading-7 whitespace-pre-line">
                  {BIO}
                </p>
              </NotionBlock>

              <NotionBlock>
                 <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 border-b border-gray-100 pb-1">
                  <span className="text-gray-400">#</span> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-y-2">
                  {SKILLS.map(skill => (
                    <Tag key={skill} text={skill} color="gray" />
                  ))}
                </div>
              </NotionBlock>

              <NotionBlock>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 border-b border-gray-100 pb-1">
                  <span className="text-gray-400">#</span> Connect
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SOCIALS.map(link => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors group border border-transparent hover:border-gray-100"
                    >
                      <img className="w-10" src={link.icon}/>
                      <span className="underline decoration-gray-300 underline-offset-4 group-hover:decoration-gray-500">{link.platform}</span>
                      <ExternalLink size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </a>
                  ))}
                </div>
              </NotionBlock>
            </div>
          )}

          {/* PROJECTS SECTION */}
          {activeSection === 'projects' && (
            <div className="space-y-8">
              <p className="text-gray-500 italic mb-6">Selected works from 2023 - 2026</p>
              <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map(project => (
                  <div key={project.id} className="group border border-gray-200 rounded-md p-4 hover:shadow-sm transition-all bg-white">
                     <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg  decoration-1 underline-offset-4 decoration-gray-400">{project.title}</h3>
                        </div>
                        {project.link && (
                          <a href={project.link} className="text-gray-400 hover:text-black transition-colors">
                            <ExternalLink size={18} />
                          </a>
                        )}
                     </div>
                     <p className="text-gray-600 mb-4 pl-1 text-sm leading-6">
                        {project.description}
                     </p>
                     <div className="pl-1">
                        {project.tags.map(tag => (
                          <Tag key={tag} text={tag} color="orange" />
                        ))}
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABOUT/EXPERIENCE SECTION */}
          {activeSection === 'about' && (
            <div className="space-y-8">
               <NotionBlock>
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b border-gray-100 pb-1">
                  <span className="text-gray-400">#</span> Experience
                </h2>
                <div className="space-y-8 pl-2 border-l border-gray-100 ml-2">
                  {EXPERIENCE.map(job => (
                    <div key={job.id} className="relative pl-6">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-200 rounded-full border border-white ring-4 ring-white"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                        <h3 className="font-medium text-lg">{job.role}</h3>
                        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">{job.period}</span>
                      </div>
                      <div className="text-gray-600 font-medium mb-2 flex items-center gap-1">
                        <span className="text-gray-400">@</span> {job.company}
                      </div>
                      <ul className="space-y-1">
                        {job.description.map((desc, i) => (
                           <li key={i} className="text-gray-600 text-sm leading-6 flex items-start gap-2">
                              <span className="text-gray-300 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gray-300"></span>
                              {desc}
                           </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NotionBlock>
            </div>
          )}

        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs font-mono mb-10">
          <p>© {new Date().getFullYear()} {PORTFOLIO_OWNER}.</p>
        </footer>

      </div>
      
      {/* AI Chat Widget */}
      {/* <ChatWidget /> */}
    </div>
  );
};

export default App;