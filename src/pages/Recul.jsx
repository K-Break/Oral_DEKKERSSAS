import { RefreshCw, Compass, FileText, Monitor, PenTool, Zap, ClipboardList, BarChart3, ArrowRight } from 'lucide-react';
import './Recul.css';

const flowRows = [
  {
    oldIcon: FileText,
    oldText: 'Manuel (Excel/Papier)',
    newIcon: Monitor,
    newText: 'Application Centralisée',
  },
  {
    oldIcon: PenTool,
    oldText: 'Signature Manuelle',
    newIcon: Zap,
    newText: 'Numérique + Automatique',
  },
  {
    oldIcon: ClipboardList,
    oldText: 'Évaluation Papier',
    newIcon: BarChart3,
    newText: 'QR Code + Dashboard',
  },
];

const axes = [
  {
    title: 'Audit UX',
    desc: "Analyser les frictions d'usage réelles pour améliorer l'ergonomie globale.",
  },
  {
    title: 'Portail Client',
    desc: 'Ouvrir un accès sécurisé aux clients finaux pour plus de transparence.',
  },
  {
    title: 'Continuité Technique',
    desc: "Garantir la scalabilité et l'interopérabilité des systèmes déployés.",
  },
];

export default function Recul() {
  return (
    <div className="recul">
      {/* Header */}
      <header className="recul__header anim-fade-up">
        <span className="label">Prise de recul & Problématique</span>
        <h1>
          Un outil fonctionnel ne suffit pas —<br />
          <span>il faut qu'on l'adopte.</span>
        </h1>
      </header>

      {/* 2 cards */}
      <div className="recul__grid">
        {/* Évolution des Processus */}
        <div className="recul__card anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="recul__card-header">
            <div className="icon-circle"><RefreshCw size={18} /></div>
            <span className="recul__card-title">Évolution des Processus</span>
          </div>
          <div className="recul__flow">
            {flowRows.map((row) => {
              const OldIcon = row.oldIcon;
              const NewIcon = row.newIcon;
              return (
                <div className="recul__flow-row" key={row.oldText}>
                  <div className="recul__flow-old">
                    <OldIcon size={16} />
                    <span>{row.oldText}</span>
                  </div>
                  <div className="recul__flow-arrow">
                    <ArrowRight size={16} />
                  </div>
                  <div className="recul__flow-new">
                    <NewIcon size={16} />
                    <span>{row.newText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Axes pour l'Avenir */}
        <div className="recul__card anim-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="recul__card-header">
            <div className="icon-circle"><Compass size={18} /></div>
            <span className="recul__card-title">Axes pour l'Avenir</span>
          </div>
          <div className="recul__axes">
            {axes.map((axe) => (
              <div className="recul__axe" key={axe.title}>
                <div className="recul__axe-title">{axe.title}</div>
                <div className="recul__axe-desc">{axe.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
