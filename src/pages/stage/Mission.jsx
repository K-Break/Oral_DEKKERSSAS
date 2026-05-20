import { Code2, Users, Upload, Pencil, CheckSquare, PenTool, Archive, ChevronRight } from 'lucide-react';
import './Mission.css';

export default function Mission() {
  return (
    <div className="mission">
      {/* Hero Section — text only */}
      <div className="mission__hero anim-fade-up" style={{ animationDelay: '0.05s' }}>
        <span className="label">MISSION &amp; MÉTHODOLOGIE</span>
        <h1>Tout de A à Z</h1>
        <p>
          Créer, remplir, signer et archiver les audits réglementaires.
          Une transformation complète du processus d'inspection vers une
          solution numérique intégrée.
        </p>
      </div>

      {/* Two main glass cards + floating mockup */}
      <div className="mission__cards-wrapper">
        <div className="mission__cards">
          {/* L'objectif card */}
          <div className="mission__card anim-fade-up" style={{ animationDelay: '0.15s' }}>
            <h3 className="mission__card-title">L'objectif</h3>
            <p className="mission__card-body">
              Développer une application métier de A à Z permettant aux inspecteurs
              de réaliser leurs audits sur le terrain avec une synchronisation en
              temps réel.
            </p>
            <div className="mission__progress">
              <span className="mission__progress-label">Code Initial</span>
              <span className="mission__progress-value">0%</span>
            </div>
            <div className="mission__progress-bar">
              <div className="mission__progress-bar-fill" />
            </div>
          </div>

          {/* Boucle D'Itération Continue card */}
          <div className="mission__card anim-fade-up" style={{ animationDelay: '0.25s' }}>
            <h3 className="mission__card-title">Boucle D'Itération Continue</h3>
            <div className="mission__cycle">
              <div className="mission__cycle-step">
                <span className="mission__cycle-step-number">01</span>
                <div className="icon-circle">
                  <Code2 size={20} />
                </div>
                <span className="mission__cycle-step-label">Point Matinal</span>
              </div>

              <span className="mission__cycle-arrow">
                <ChevronRight size={20} />
              </span>

              <div className="mission__cycle-step">
                <span className="mission__cycle-step-number">02</span>
                <div className="icon-circle">
                  <Users size={20} />
                </div>
                <span className="mission__cycle-step-label">Développement agile</span>
              </div>

              <span className="mission__cycle-arrow">
                <ChevronRight size={20} />
              </span>

              <div className="mission__cycle-step">
                <span className="mission__cycle-step-number">03</span>
                <div className="icon-circle">
                  <Upload size={20} />
                </div>
                <span className="mission__cycle-step-label">Mise en ligne</span>
              </div>

              <span className="mission__cycle-arrow mission__cycle-arrow--return">
                <ChevronRight size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Phone Mockup — floating, tilted, over the iteration card */}
        <div className="mission__phone anim-fade-up" style={{ animationDelay: '0.35s' }}>
          <img src="/mockup1.png" alt="DEKKERS App - Notes de terrain" className="mission__phone-img" />
        </div>
      </div>

      {/* Bottom action cards row */}
      <div className="mission__actions">
        <div className="mission__action anim-fade-up" style={{ animationDelay: '0.4s' }}>
          <Pencil />
          <span>Créer</span>
        </div>
        <div className="mission__action anim-fade-up" style={{ animationDelay: '0.45s' }}>
          <CheckSquare />
          <span>Remplir</span>
        </div>
        <div className="mission__action anim-fade-up" style={{ animationDelay: '0.5s' }}>
          <PenTool />
          <span>Signer</span>
        </div>
        <div className="mission__action anim-fade-up" style={{ animationDelay: '0.55s' }}>
          <Archive />
          <span>Archiver</span>
        </div>
      </div>
    </div>
  );
}
