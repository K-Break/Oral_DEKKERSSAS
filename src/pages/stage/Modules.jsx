import React from 'react';
import { ClipboardList, Truck, GraduationCap, Globe } from 'lucide-react';
import './Modules.css';

const cards = [
  {
    label: 'STRUCTURE COMPLEXE',
    icon: ClipboardList,
    title: 'DUERP',
    desc: 'Architecture de données arborescente et outils de collaboration en temps réel pour la gestion des risques professionnels.',
  },
  {
    label: 'ANALYSE & EXPORTS',
    icon: Truck,
    title: 'Carnet de bord véhicules',
    desc: 'Suivi automatisé de la consommation, intégration de données kilométriques et génération d\u2019exports réglementaires.',
  },
  {
    label: 'ACQUISITION RAPIDE',
    icon: GraduationCap,
    title: 'Évaluations formations',
    desc: 'Système de collecte de feedback via QR codes dynamiques connectés à un dashboard analytique centralisé.',
  },
  {
    label: 'MIGRATION TECHNIQUE',
    icon: Globe,
    title: 'Site WordPress',
    desc: 'Refonte complète de l\u2019infrastructure web publique, optimisation des performances et modernisation du thème.',
  },
];

export default function Modules() {
  return (
    <div className="modules">
      <div className="modules__header anim-fade-up">
        <span className="label">SLIDE 8</span>
        <h1>Modules avancés métier</h1>
        <p>
          Solutions techniques structurantes développées durant le stage, alliant
          complexité métier et ergonomie.
        </p>
      </div>

      <div className="modules__grid">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              className="modules__card anim-fade-up"
              key={card.title}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="modules__card-label">{card.label}</span>

              <div className="modules__card-icon icon-circle">
                <Icon size={18} />
              </div>

              <h2 className="modules__card-title">{card.title}</h2>
              <p className="modules__card-desc">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
