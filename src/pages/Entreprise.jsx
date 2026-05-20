import { Shield, Truck, User, Users, Settings, FileText, Monitor, ArrowRight, Calendar } from 'lucide-react';
import './Entreprise.css';

function Entreprise() {
  return (
    <div className="entreprise">
      <div className="entreprise__container">
        {/* Header */}
        <header className="entreprise__header animate-in">
          <p className="label">Présentation</p>
          <h1>DEKKERS SAS</h1>
          <p>Conseil, Audit &amp; Prévention des risques</p>
        </header>

        {/* Cards Grid */}
        <div className="entreprise__grid">

          {/* Left Column — Spécialité & Cœur De Métier */}
          <div className="entreprise__card entreprise__card--specialty animate-in animate-in-delay-1">
            <h2 className="entreprise__card-title">Spécialité &amp; Cœur De Métier</h2>

            <div className="entreprise__specialty">
              <div className="icon-circle">
                <Shield />
              </div>
              <div>
                <div className="entreprise__specialty-name">QHSE</div>
                <p className="entreprise__specialty-desc">
                  Qualité, Hygiène, Sécurité, Environnement. Accompagnement stratégique et opérationnel.
                </p>
              </div>
            </div>

            <div className="entreprise__specialty">
              <div className="icon-circle">
                <Truck />
              </div>
              <div>
                <div className="entreprise__specialty-name">TMD</div>
                <p className="entreprise__specialty-desc">
                  Transport de Marchandises Dangereuses. Expertise réglementaire et sécurisation des flux.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Stacked cards */}
          <div className="entreprise__stack">
            {/* Fondateur */}
            <div className="entreprise__card animate-in animate-in-delay-2">
              <div className="entreprise__info-header">
                <div className="icon-circle">
                  <User />
                </div>
                <span className="entreprise__info-label">Fondateur</span>
              </div>
              <div className="entreprise__info-value">DEKKERS Johannes</div>
              <div className="entreprise__info-detail">
                <Calendar size={14} />
                Créé en 2013
              </div>
            </div>

            {/* Structure */}
            <div className="entreprise__card animate-in animate-in-delay-3">
              <div className="entreprise__info-header">
                <div className="icon-circle">
                  <Users />
                </div>
                <span className="entreprise__info-label">Structure</span>
              </div>
              <div className="entreprise__info-value">3 personnes</div>
              <div className="entreprise__info-detail">Format TPE Agile</div>
            </div>
          </div>

          {/* Full-width Bottom — Contexte Actuel */}
          <div className="entreprise__card entreprise__card--full animate-in animate-in-delay-4">
            <div className="entreprise__context-header">
              <div className="icon-circle">
                <Settings />
              </div>
              <div>
                <h2 className="entreprise__card-title" style={{ marginBottom: 0 }}>Contexte Actuel</h2>
                <p className="entreprise__context-sub">Transition Numérique de l'Entreprise</p>
              </div>
            </div>

            <div className="entreprise__flow">
              <div className="entreprise__flow-step">
                <div className="icon-circle">
                  <FileText />
                </div>
                <span>Manuel (Excel/Word)</span>
              </div>

              <div className="entreprise__flow-arrow">
                <ArrowRight size={16} className="entreprise__flow-arrow-icon" />
              </div>

              <div className="entreprise__flow-step entreprise__flow-digital">
                <div className="icon-circle">
                  <Monitor />
                </div>
                <span>Digital &amp; Centralisé</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Entreprise;
