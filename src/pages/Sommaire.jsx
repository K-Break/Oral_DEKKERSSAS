import { Link } from 'react-router-dom';
import { Building2, Code2, Settings, Trophy, ChevronRight } from 'lucide-react';
import './Sommaire.css';

const sections = [
  {
    number: '01',
    title: "L'Entreprise",
    subtitle: 'Présentation de DEKKERS SAS et contexte organisationnel.',
    icon: Building2,
    to: '/entreprise',
    tags: null,
    disabled: false,
  },
  {
    number: '02',
    title: 'Le Stage',
    subtitle: null,
    icon: Code2,
    to: '/stage/mission',
    tags: ['Mission', 'Architecture', 'Form Builder', 'PDF/Signature'],
    disabled: false,
  },
  {
    number: '03',
    title: 'Difficultés & Apprentissages',
    subtitle: 'Défis techniques rencontrés et compétences acquises.',
    icon: Settings,
    to: '/difficultes',
    tags: null,
    disabled: false,
  },
  {
    number: '04',
    title: 'Conclusion',
    subtitle: 'Bilan global et perspectives futures.',
    icon: Trophy,
    to: '/conclusion',
    tags: null,
    disabled: false,
  },
];

export default function Sommaire() {
  return (
    <div className="sommaire page">
      <div className="sommaire__content">
        <div className="sommaire__header animate-in">
          <span className="label">Index</span>
          <h1 className="title-lg">Sommaire</h1>
        </div>

        <div className="sommaire__cards">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link
                key={section.number}
                to={section.disabled ? '#' : section.to}
                className={`sommaire__card animate-in ${section.disabled ? 'disabled' : ''}`}
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                onClick={(e) => section.disabled && e.preventDefault()}
              >
                <div className="icon-circle">
                  <IconComponent />
                </div>

                <div className="sommaire__card-content">
                  <div className="sommaire__card-title">
                    <span className="sommaire__card-number">{section.number}. </span>
                    {section.title}
                  </div>

                  {section.subtitle && (
                    <p className="sommaire__card-subtitle">{section.subtitle}</p>
                  )}

                  {section.tags && (
                    <div className="sommaire__card-tags">
                      {section.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <ChevronRight className="sommaire__card-arrow" size={22} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
