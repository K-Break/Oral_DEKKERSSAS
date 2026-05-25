import React from 'react';
import { Monitor, Server, Database, Cloud, Sparkles, Code2 } from 'lucide-react';
import './Architecture.css';

const cards = [
  {
    icon: Monitor,
    title: 'Frontend',
    tags: [
      { name: 'React', desc: 'Bibliothèque créée par Meta pour concevoir des interfaces interactives via des composants réutilisables.' },
      { name: 'TypeScript', desc: 'Langage ajoutant un typage statique à JavaScript pour sécuriser le code et éliminer les erreurs à la compilation.' },
      { name: 'Vite', desc: 'Outil de build ultra-rapide servant de serveur de développement et de compilateur de production.' },
      { name: 'TailwindCSS', desc: 'Framework CSS facilitant la conception d\'interfaces sur-mesure directement dans les classes HTML.' },
      { name: 'Shadcn/UI', desc: 'Composants UI prêts à l\'emploi et entièrement accessibles, simplifiant le développement de l\'interface.' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    tags: [
      { name: 'Node.js', desc: 'Environnement d\'exécution JavaScript côté serveur rapide et performant basé sur le moteur de Google.' },
      { name: 'Hono', desc: 'Framework web minimaliste et extrêmement rapide, optimisé pour les environnements serveurs modernes.' },
      { name: 'Drizzle', desc: 'ORM léger et performant permettant de requêter SQL de façon sécurisée grâce au typage TypeScript.' },
      { name: 'Better Auth', desc: 'Solution d\'authentification robuste facilitant la gestion sécurisée des utilisateurs et des sessions.' },
      { name: 'Puppeteer', desc: 'Outil pilotant un navigateur Chrome, ici utilisé pour générer automatiquement les rapports d\'audits en PDF.' },
    ],
  },
];

const bottomCards = [
  {
    icon: Database,
    title: 'Database',
    tags: [
      { name: 'PostgreSQL (JSONB)', desc: 'Base de données SQL relationnelle avec support JSON avancé pour allier rigueur et flexibilité.' },
    ],
  },
  {
    icon: Cloud,
    title: 'Production',
    tags: [
      { name: 'Docker (4 containers)', desc: 'Système de conteneurisation isolant les modules de l\'application pour garantir un déploiement identique partout.' },
      { name: 'VPS OVH', desc: 'Serveur privé virtuel hébergé dans un datacenter français assurant la disponibilité 24/7 du service.' },
      { name: 'Caddy', desc: 'Serveur web moderne et sécurisé, assurant le routage réseau et la génération automatique des certificats SSL.' },
    ],
  },
  {
    icon: Sparkles,
    title: 'AI Support',
    tags: [
      { name: 'Gemini', desc: 'Modèle de langage IA performant utilisé en pair-programming pour concevoir et optimiser les algorithmes.' },
      { name: 'Claude', desc: 'IA avancée facilitant la relecture de code, la détection de bugs et la structuration des composants.' },
    ],
    isAi: true,
  },
];

const devCard = {
  title: 'Environnement de Développement',
  tags: [
    { name: 'VS Code (IDE)', desc: 'Environnement de développement intégré : l\'atelier principal servant à écrire le code, gérer le projet et exécuter les scripts.' },
    { name: 'Git & GitHub', desc: 'Système de versioning et plateforme cloud pour sauvegarder le code, gérer les versions et automatiser le déploiement.' },
    { name: 'Chrome DevTools', desc: 'Outils de diagnostic du navigateur servant à inspecter l\'interface (HTML/CSS) et à analyser le réseau et la console.' },
  ],
};

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
                    <span key={tag.name} className="architecture__tag" data-tooltip={tag.desc}>
                      {tag.name}
                    </span>
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
                    <span key={tag.name} className="architecture__tag" data-tooltip={tag.desc}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Environment row — full width */}
        <div className="architecture__grid-dev anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="architecture__card architecture__card--dev">
            <div className="architecture__card-header">
              <div className="icon-circle">
                <Code2 size={18} />
              </div>
              <span className="architecture__card-title">{devCard.title}</span>
            </div>
            <div className="architecture__tags">
              {devCard.tags.map((tag) => (
                <span key={tag.name} className="architecture__tag" data-tooltip={tag.desc}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
