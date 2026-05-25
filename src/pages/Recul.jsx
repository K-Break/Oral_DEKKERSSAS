import { Link } from 'react-router-dom';
import { Compass, AlertTriangle, Search, Users, Activity, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Recul.css';

export default function Recul() {
  return (
    <div className="recul">
      {/* Header with the massive problematic quote */}
      <header className="recul__header anim-fade-up">
        <span className="label">Prise de recul & Problématique</span>
        <h1 className="recul__title">
          « Un logiciel peut être <span>techniquement irréprochable</span> sans pour autant être <span>adopté</span>. »
        </h1>
      </header>

      {/* Grid containing the TPE Reality and the 3 Strategic Axes */}
      <div className="recul__grid">
        
        {/* Left Column: TPE Reality */}
        <div className="recul__card anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="recul__card-header">
            <div className="icon-circle"><Activity size={18} /></div>
            <span className="recul__card-title">La réalité du terrain (TPE)</span>
          </div>

          <p className="recul__section-intro">
            Les gains de productivité apportés par le développement de l'application sont majeurs :
          </p>

          <div className="recul__gains">
            <div className="recul__gain-item">
              <CheckCircle2 size={16} className="recul__gain-icon" />
              <span>Génération automatique de rapports d'audit</span>
            </div>
            <div className="recul__gain-item">
              <CheckCircle2 size={16} className="recul__gain-icon" />
              <span>Signatures numériques centralisées</span>
            </div>
            <div className="recul__gain-item">
              <CheckCircle2 size={16} className="recul__gain-icon" />
              <span>Évaluations clients en temps réel</span>
            </div>
          </div>

          {/* Warning Block */}
          <div className="recul__warning">
            <div className="recul__warning-header">
              <AlertTriangle size={18} className="recul__warning-icon" />
              <span>Le piège de la complexité</span>
            </div>
            <p className="recul__warning-text">
              Dans une TPE sans service informatique dédié, la moindre friction est fatale. 
              Si l'outil n'est pas <strong>immédiatement intuitif</strong>, l'utilisateur revient naturellement à ses anciennes habitudes : <strong>Excel et le papier</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Three Axes for the Future */}
        <div className="recul__card anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="recul__card-header">
            <div className="icon-circle"><Compass size={18} /></div>
            <span className="recul__card-title">Pérenniser l'adoption : 3 axes</span>
          </div>

          <div className="recul__axes">
            
            {/* Axis 1 */}
            <div className="recul__axe-card">
              <div className="recul__axe-num">01</div>
              <div className="recul__axe-content">
                <div className="recul__axe-header">
                  <Search size={16} className="recul__axe-icon" />
                  <h4>Audit UX continu</h4>
                </div>
                <p>Analyser et mesurer les frictions d'usage réelles pour simplifier continuellement l'ergonomie globale de l'interface.</p>
              </div>
            </div>

            {/* Axis 2 */}
            <div className="recul__axe-card">
              <div className="recul__axe-num">02</div>
              <div className="recul__axe-content">
                <div className="recul__axe-header">
                  <Users size={16} className="recul__axe-icon" />
                  <h4>Portail client & onboarding</h4>
                </div>
                <p>Préparer un portail client dédié avec un parcours guidé (onboarding) pour maximiser le taux de complétion autonome.</p>
              </div>
            </div>

            {/* Axis 3 */}
            <div className="recul__axe-card">
              <div className="recul__axe-num">03</div>
              <div className="recul__axe-content">
                <div className="recul__axe-header">
                  <Activity size={16} className="recul__axe-icon" />
                  <h4>Suivi post-départ</h4>
                </div>
                <p>Garantir et pérenniser l'investissement technique en planifiant le suivi, la maintenance et l'évolution de l'application.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Navigation to Conclusion */}
      <Link to="/conclusion" className="recul__next anim-fade-up" style={{ animationDelay: '0.3s' }}>
        <span>Suivant : Conclusion de la soutenance</span>
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
