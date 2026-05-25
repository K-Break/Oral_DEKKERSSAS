import { Link } from 'react-router-dom';
import { RefreshCw, Compass, FileText, Monitor, PenTool, Zap, ClipboardList, BarChart3, ArrowRight, ChevronRight, HelpCircle } from 'lucide-react';
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
    title: 'Audit UX approfondi',
    desc: "Analyser précisément l'usage réel sur le terrain pour éliminer la moindre friction.",
  },
  {
    title: 'Portail Client & Onboarding',
    desc: "Préparer un espace dédié avec un parcours d'onboarding interactif et guidé.",
  },
  {
    title: 'Suivi & Pérennisation',
    desc: "Garantir un accompagnement technique et un suivi de l'outil après mon départ.",
  },
];

export default function Recul() {
  return (
    <div className="recul">
      {/* Header */}
      <header className="recul__header anim-fade-up">
        <span className="label">Prise de recul & Problématique</span>
        <h1>
          Un outil fonctionnel ne suffit pas<br />
          <span>il faut qu'on l'adopte.</span>
        </h1>
      </header>

      {/* Constat / Question Centrale */}
      <div className="recul__highlight anim-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="recul__highlight-top">
          <div className="icon-circle">
            <HelpCircle size={18} />
          </div>
          <span className="recul__highlight-label">Question centrale</span>
        </div>
        <p className="recul__highlight-quote">
          « Un logiciel peut être techniquement irréprochable sans pour autant être adopté. »
        </p>
        <p className="recul__highlight-desc">
          Les gains sont réels — passage du tout manuel à une automatisation complète (rapports, signatures, évaluations). Cependant, dans une <strong>TPE sans service informatique</strong>, si l'outil n'est pas immédiatement intuitif, l'utilisateur revient inévitablement à <strong>Excel</strong>.
        </p>
      </div>

      {/* 2 cards */}
      <div className="recul__grid anim-fade-up" style={{ animationDelay: '0.2s' }}>
        {/* Évolution des Processus */}
        <div className="recul__card">
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
        <div className="recul__card">
          <div className="recul__card-header">
            <div className="icon-circle"><Compass size={18} /></div>
            <span className="recul__card-title">Axes de Pérennisation</span>
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

      {/* Navigation vers Conclusion */}
      <Link to="/conclusion" className="recul__next anim-fade-up" style={{ animationDelay: '0.3s' }}>
        <span>Suivant : Conclusion & Bilan Personnel</span>
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
