import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cover.css';

function Cover() {
  const navigate = useNavigate();

  const goToSommaire = useCallback(() => {
    navigate('/sommaire');
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = () => goToSommaire();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToSommaire]);

  return (
    <div className="cover" onClick={goToSommaire}>
      {/* Decorative accent line */}
      <div className="cover__accent-line" />

      {/* Logo */}
      <div className="cover__logo">
        <img src="/logo.png" alt="DEKKERS SAS" className="cover__logo-img" />
      </div>

      {/* Center content */}
      <div className="cover__content">
        <h1 className="cover__title title-xl">
          Soutenance De Stage
        </h1>
        <p className="cover__subtitle">
          Développement d'une application métier d'audit numérique
        </p>
        <p className="cover__date">
          02 Février 2026 au 24 Avril 2026
        </p>
      </div>

      {/* Footer */}
      <div className="cover__footer">
        <div className="cover__company">
          <div className="cover__company-name">DEKKERS SAS</div>
          <div className="cover__company-address">
            24 Rue Georges Méliès,
            <br />
            34500 Béziers
          </div>
        </div>

        <div className="cover__student">
          <div className="cover__student-name">MORILLO Kévin</div>
          <div className="cover__student-info">
            MMI3 – Développement Et Design Intératif
            <br />
            IUT de Béziers – Université de Montpellier
          </div>
        </div>
      </div>

      {/* Click hint */}
      <div className="cover__hint">
        <span className="cover__hint-text">Cliquer pour commencer</span>
        <div className="cover__hint-arrow" />
      </div>
    </div>
  );
}

export default Cover;
