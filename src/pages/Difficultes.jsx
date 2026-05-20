import { Link } from 'react-router-dom';
import { Lightbulb, ArrowRight, MapPin, Puzzle, Box, Palette, ChevronRight } from 'lucide-react';
import './Difficultes.css';

export default function Difficultes() {
  return (
    <div className="difficultes">
      {/* Header */}
      <header className="difficultes__header anim-fade-up">
        <h1>Difficultés rencontrées & apprentissages</h1>
        <p>
          Un retour critique sur les obstacles techniques et fonctionnels franchis
          durant le projet, et les compétences clés développées en réponse.
        </p>
      </header>

      {/* Highlight card — full width */}
      <div className="difficultes__highlight anim-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="difficultes__highlight-top">
          <div className="icon-circle">
            <Lightbulb size={18} />
          </div>
          <span className="difficultes__highlight-title">Inconnues techniques</span>
          <ArrowRight size={18} className="difficultes__highlight-arrow" />
          <span className="difficultes__highlight-title"><em>Learning to learn</em></span>
        </div>
        <p className="difficultes__highlight-desc">
          Face à des technologies non maîtrisées initialement, l'enjeu principal
          fut de développer une capacité d'apprentissage rapide et autonome. La
          compétence "apprendre à apprendre" s'est révélée être l'atout le plus
          crucial du stage.
        </p>
        <div className="difficultes__highlight-link">
          <MapPin size={14} />
          Lien avec l'expérience au Canada
        </div>
      </div>

      {/* Middle row — 2 cards */}
      <div className="difficultes__row">
        {/* Abstraction Form Builder */}
        <div className="difficultes__card anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="difficultes__card-header">
            <div className="icon-circle"><Puzzle size={18} /></div>
            <span className="difficultes__card-title">Abstraction Form Builder</span>
          </div>
          <div className="difficultes__section-label">Difficulté</div>
          <p className="difficultes__section-desc">
            Conception d'un système de génération de formulaires dynamiques gérant
            de multiples types de données et relations complexes.
          </p>
          <div className="difficultes__separator" />
          <div className="difficultes__section-label">Apprentissage</div>
          <p className="difficultes__section-desc">
            <strong>Data Modeling :</strong> Structuration rigoureuse des données,
            normalisation et anticipation de l'évolutivité des schémas de base de données.
          </p>
        </div>

        {/* Production & Docker */}
        <div className="difficultes__card anim-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="difficultes__card-header">
            <div className="icon-circle"><Box size={18} /></div>
            <span className="difficultes__card-title">Production & Docker</span>
          </div>
          <div className="difficultes__section-label">Difficulté</div>
          <p className="difficultes__section-desc">
            Déploiement en environnement de production, configuration réseau et
            gestion de conteneurs dans des conditions réelles.
          </p>
          <div className="difficultes__separator" />
          <div className="difficultes__section-label">Apprentissage</div>
          <p className="difficultes__section-desc">
            <strong>Rigueur DevOps :</strong> Maîtrise des concepts de conteneurisation,
            d'intégration continue et de sécurisation des déploiements.
          </p>
        </div>
      </div>

      {/* Bottom — Frustration UX (full width) */}
      <div className="difficultes__card difficultes__card--full anim-fade-up" style={{ animationDelay: '0.4s' }}>
        <div className="difficultes__card-header">
          <div className="icon-circle"><Palette size={18} /></div>
          <span className="difficultes__card-title">Frustration UX</span>
        </div>
        <div className="difficultes__card-columns">
          <div>
            <div className="difficultes__section-label">Difficulté</div>
            <p className="difficultes__section-desc">
              Décalage entre l'expérience utilisateur théorique conçue sur
              maquette et son utilisation pratique par les clients.
            </p>
          </div>
          <div>
            <div className="difficultes__section-label">Apprentissage</div>
            <p className="difficultes__section-desc">
              <strong>Théorie vs Pratique :</strong> Importance de l'empathie utilisateur,
              itérations basées sur des retours réels plutôt que sur des suppositions
              esthétiques.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation vers Prise de recul */}
      <Link to="/recul" className="difficultes__next anim-fade-up" style={{ animationDelay: '0.5s' }}>
        <span>Suivant : Prise de recul & Problématique</span>
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
