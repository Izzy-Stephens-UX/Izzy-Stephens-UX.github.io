import { useState, useEffect } from 'react';

const sections = [
  'The Setup',
  'The Problem',
  'The Constraints',
  'Study Design',
  'The AI Behind the Profiles',
  'Running the Study',
  'Synthesis',
  'Findings',
  'Delivering the Research',
  'Reflections'
];

export default function CaseStudyNav() {
  const [activeSection, setActiveSection] = useState('Overview');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s =>
        document.getElementById(s.toLowerCase().replace(/\s+/g, '-'))
      );

      const current = sectionElements.find(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (current) {
        const sectionName = sections.find(s =>
          s.toLowerCase().replace(/\s+/g, '-') === current.id
        );
        if (sectionName) setActiveSection(sectionName);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-32 w-60">
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--red)] mb-6">
        In this case study
      </div>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
              className={`block font-['Source_Serif_4'] text-[13px] py-1 pl-3 border-l-2 transition-all -ml-3 pr-3 ${
                activeSection === section
                  ? 'border-[var(--red)] text-[var(--ink)]'
                  : 'border-transparent text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--red)] hover:translate-x-2 hover:bg-[var(--bg-card)]'
              }`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      <div className="font-['JetBrains_Mono'] text-[10px] text-[var(--red)] mt-12">
        ↓ Embedded slides
      </div>
    </nav>
  );
}
