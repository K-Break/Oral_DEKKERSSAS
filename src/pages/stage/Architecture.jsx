import React from 'react';
import { Monitor, Server, Database, Cloud, Sparkles } from 'lucide-react';
import './Architecture.css';

const cards = [
  {
    icon: Monitor,
    title: 'Frontend',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Shadcn/UI'],
  },
  {
    icon: Server,
    title: 'Backend',
    tags: ['Node.js', 'Hono', 'Drizzle', 'Better Auth', 'Puppeteer'],
  },
];

const bottomCards = [
  {
    icon: Database,
    title: 'Database',
    tags: ['PostgreSQL (JSONB)'],
  },
  {
    icon: Cloud,
    title: 'Production',
    tags: ['Docker (4 containers)', 'VPS OVH', 'Caddy'],
  },
  {
    icon: Sparkles,
    title: 'AI Support',
    tags: ['Gemini', 'Claude'],
    isAi: true,
  },
];

export default function Architecture() {
  return (
    <div className="architecture">
      <div className="architecture__header anim-fade-up">
        <span className="label">SLIDE 5</span>
        <h1>Architecture technique</h1>
        <p>Stack web moderne, infrastructure minimale, performance edge.</p>
      </div>

      <div className="architecture__grid">
        <div className="architecture__grid-top">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="architecture__card anim-fade-up"
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="architecture__card-header">
                  <div className="icon-circle">
                    <Icon size={18} />
                  </div>
                  <span className="architecture__card-title">{card.title}</span>
                </div>
                <div className="architecture__tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="architecture__tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="architecture__grid-bottom">
          {bottomCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`architecture__card${card.isAi ? ' architecture__card--ai' : ''} anim-fade-up`}
                style={{ animationDelay: `${(i + 3) * 0.1}s` }}
              >
                <div className="architecture__card-header">
                  <div className="icon-circle">
                    <Icon size={18} />
                  </div>
                  <span className={`architecture__card-title${card.isAi ? ' architecture__card-title--ai' : ''}`}>
                    {card.title}
                  </span>
                </div>
                <div className="architecture__tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="architecture__tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
