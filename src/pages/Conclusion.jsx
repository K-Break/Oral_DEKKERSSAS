import { Code2, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import './Conclusion.css';

export default function Conclusion() {
  return (
    <div className="conclusion">
      {/* Big quote */}
      <div className="conclusion__quote anim-fade-up">
        <span className="conclusion__quote-mark">"</span>
        <p className="conclusion__quote-text">
          Le développement n'est jamais une fin en soi.
          Il est au service d'un humain.
        </p>
        <span className="conclusion__quote-mark conclusion__quote-mark--close">"</span>
      </div>

      {/* 3 cards */}
      <div className="conclusion__cards">
        {/* Tech Stack */}
        <div className="conclusion__card anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="conclusion__card-header">
            <div className="icon-circle"><Code2 size={18} /></div>
            <span className="conclusion__card-title">Tech Stack</span>
          </div>
          <ul className="conclusion__list">
            <li>• React</li>
            <li>• Docker</li>
            <li>• WordPress</li>
          </ul>
        </div>

        {/* Méthode — featured center */}
        <div className="conclusion__card conclusion__card--featured anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="conclusion__card-header">
            <div className="icon-circle"><Lightbulb size={18} /></div>
            <div>
              <div className="conclusion__card-label">Méthode</div>
              <span className="conclusion__card-title">Diviser pour mieux régner</span>
            </div>
          </div>

          <div className="conclusion__divider" />

          <div className="conclusion__card-label">Global Mindset</div>
          <div className="conclusion__flow">
            <span className="conclusion__flow-from">Canada</span>
            <ArrowRight size={16} className="conclusion__flow-arrow" />
            <span className="conclusion__flow-to">DEKKERS</span>
          </div>
        </div>

        {/* Projet Final */}
        <div className="conclusion__card anim-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="conclusion__card-header">
            <div className="icon-circle"><Compass size={18} /></div>
            <span className="conclusion__card-title">Projet Final</span>
          </div>
          <p className="conclusion__project-text">
            Interface design &<br />User experience
          </p>
          <span className="conclusion__badge">&lt; /&gt; Dev as a base</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="conclusion__footer anim-fade-up" style={{ animationDelay: '0.4s' }}>
        <div className="conclusion__footer-logo">
          <img src="/logo.png" alt="DEKKERS SAS" />
        </div>
        <div className="conclusion__footer-thanks">
          <div className="conclusion__footer-thanks-title">Remerciements</div>
          <div className="conclusion__footer-thanks-names">M. Johannes DEKKERS · Gauthier BALP · IUT de Béziers</div>
        </div>
      </footer>
    </div>
  );
}
