import { Mountain, Users, Sparkles } from 'lucide-react';
import './Conclusion.css';

export default function Conclusion() {
  return (
    <div className="conclusion">
      {/* Statement */}
      <div className="conclusion__statement anim-fade-up">
        <h1>
          Titanesque.<br />
          <span>Et fier de l'avoir fait.</span>
        </h1>
      </div>

      {/* 3 pillars — icon + word, nothing else */}
      <div className="conclusion__pillars">
        <div className="conclusion__pillar anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="conclusion__pillar-icon">
            <Mountain size={28} />
          </div>
          <span className="conclusion__pillar-word">Dépassement</span>
        </div>

        <div className="conclusion__pillar-sep anim-fade-up" style={{ animationDelay: '0.3s' }} />

        <div className="conclusion__pillar anim-fade-up" style={{ animationDelay: '0.35s' }}>
          <div className="conclusion__pillar-icon">
            <Users size={28} />
          </div>
          <span className="conclusion__pillar-word">Confiance</span>
        </div>

        <div className="conclusion__pillar-sep anim-fade-up" style={{ animationDelay: '0.45s' }} />

        <div className="conclusion__pillar anim-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="conclusion__pillar-icon">
            <Sparkles size={28} />
          </div>
          <span className="conclusion__pillar-word">Polyvalence</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="conclusion__footer anim-fade-up" style={{ animationDelay: '0.65s' }}>
        <img src="/logo.png" alt="DEKKERS SAS" className="conclusion__logo" />
        <div className="conclusion__merci">Merci</div>
        <div className="conclusion__names">M. Johannes DEKKERS · Gauthier BALP</div>
      </footer>
    </div>
  );
}
