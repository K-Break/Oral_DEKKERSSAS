import React from 'react';
import { Layers, CheckSquare, Type, PenTool, Camera, Calendar, MoreHorizontal, GitBranch } from 'lucide-react';
import './FormBuilder.css';

const levels = [
  { number: '01', name: 'Partie', desc: 'Le conteneur principal divisant le formulaire en sections thématiques distinctes.' },
  { number: '02', name: 'Ligne', desc: 'Structure horizontale permettant d\'organiser le flux de données dans une partie.' },
  { number: '03', name: 'Colonnes', desc: 'L\'unité finale accueillant les champs spécifiques et contrôlant la largeur responsive.' },
];

const fieldTypes = [
  { icon: CheckSquare, label: 'Checkbox' },
  { icon: Type, label: 'Text' },
  { icon: PenTool, label: 'Signature' },
  { icon: Camera, label: 'Photo' },
  { icon: Calendar, label: 'Date' },
  { icon: MoreHorizontal, label: 'Etc.' },
];

export default function FormBuilder() {
  return (
    <div className="formbuilder">
      {/* Header */}
      <header className="formbuilder__header anim-fade-up">
        <span className="label">SLIDE 6</span>
        <h1>Le Form Builder — Cœur de l'application</h1>
        <p>
          Conception d'une architecture flexible pour modéliser des formulaires complexes
          via une abstraction en couches : Partie, Ligne, et Colonnes.
        </p>
      </header>

      {/* Main: 2 columns */}
      <div className="formbuilder__main">
        {/* Left: Abstraction card */}
        <div className="formbuilder__abstraction anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="formbuilder__abstraction-title">
            <div className="icon-circle">
              <Layers size={18} />
            </div>
            L'Abstraction Structurelle
          </div>

          {levels.map((level, i) => (
            <div className="formbuilder__level" key={level.number}>
              <div className="formbuilder__level-number">{level.number}</div>
              <div className="formbuilder__level-name">{level.name}</div>
              <div className="formbuilder__level-desc">{level.desc}</div>
            </div>
          ))}
        </div>

        {/* Right: Screenshot */}
        <div className="formbuilder__screenshot anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="formbuilder__screenshot-label">Form Builder Workspace</div>
          <img src="/formbuilder.png" alt="Form Builder Workspace" />
        </div>
      </div>

      {/* Bottom: 2 cards */}
      <div className="formbuilder__bottom">
        {/* Types de champs */}
        <div className="formbuilder__card anim-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="formbuilder__card-title">Types de champs</div>
          <div className="formbuilder__field-types">
            {fieldTypes.map((ft) => (
              <div className="formbuilder__field-type" key={ft.label}>
                <ft.icon />
                <span>{ft.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logique conditionnelle */}
        <div className="formbuilder__card anim-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="formbuilder__logic-label">
            <GitBranch />
            Logique conditionnelle
          </div>
          <p className="formbuilder__logic-desc">
            Affichage dynamique des champs basé sur les réponses précédentes.
            Permet la création de parcours de saisie adaptatifs et complexes
            sans surcharger l'interface utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
}
