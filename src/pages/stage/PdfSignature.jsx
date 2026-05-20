import React from 'react';
import { FileText, PenTool, Link2, FileCheck, Archive, ChevronRight, Trophy } from 'lucide-react';
import './PdfSignature.css';

const flowSteps = [
  {
    icon: PenTool,
    name: 'Signature Tactile',
    desc: 'Saisie sur appareil mobile',
    highlight: false,
  },
  {
    icon: Link2,
    name: 'Lien Sécurisé',
    desc: 'Génération token unique',
    highlight: false,
  },
  {
    icon: FileCheck,
    name: 'PDF + Certificat',
    desc: 'Scellement du document',
    highlight: true,
  },
  {
    icon: Archive,
    name: 'Archivage',
    desc: 'Stockage sécurisé',
    highlight: false,
  },
];

export default function PdfSignature() {
  return (
    <div className="pdfsig">
      {/* Header */}
      <div className="pdfsig__header anim-fade-up">
        <span className="label">SLIDE 7</span>
        <h1>PDF &amp; Signature Numérique</h1>
        <p>
          Génération de documents robustes et implémentation d'une solution de
          signature propriétaire sécurisée.
        </p>
      </div>

      {/* Top row */}
      <div className="pdfsig__top">
        {/* Génération PDF */}
        <div
          className="pdfsig__card anim-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="pdfsig__card-header">
            <div className="icon-circle">
              <FileText size={18} />
            </div>
            <span className="pdfsig__card-title">Génération PDF</span>
          </div>

          <p className="pdfsig__tech-name">Technologie : Puppeteer</p>
          <p className="pdfsig__tech-desc">
            Conversion de vues HTML complexes en documents PDF haute fidélité via
            un navigateur headless.
          </p>

          <div className="pdfsig__divider" />

          <p className="pdfsig__tech-name">Défi Technique</p>
          <p className="pdfsig__tech-desc">
            Gestion complexe des sauts de page (page breaks) pour les tableaux
            dynamiques et les sections de rapports longs, nécessitant des
            algorithmes de calcul de hauteur en temps réel.
          </p>
        </div>

        {/* Signature Propriétaire */}
        <div
          className="pdfsig__card anim-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="pdfsig__card-header">
            <div className="icon-circle">
              <PenTool size={18} />
            </div>
            <span className="pdfsig__card-title">Signature Propriétaire</span>
          </div>

          <span className="pdfsig__sig-label">
            Alternative in-house à Adobe Sign
          </span>

          <div className="pdfsig__flow">
            {flowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div
                    className={`pdfsig__flow-step${step.highlight ? ' pdfsig__flow-step--highlight' : ''}`}
                  >
                    <div className="icon-circle">
                      <Icon size={16} />
                    </div>
                    <span className="pdfsig__flow-step-name">{step.name}</span>
                    <span className="pdfsig__flow-step-desc">{step.desc}</span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="pdfsig__flow-arrow">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestone */}
      <div
        className="pdfsig__milestone anim-fade-up"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="icon-circle icon-circle--orange">
          <Trophy size={20} />
        </div>

        <div className="pdfsig__milestone-content">
          <span className="pdfsig__milestone-label">Milestone atteint</span>
          <h3 className="pdfsig__milestone-title">Premier Rapport Signé</h3>
          <p className="pdfsig__milestone-desc">
            Validation complète du flux de travail : de la saisie des données
            sur le terrain jusqu'à la génération du PDF final incluant le
            certificat de signature cryptographique in-house.
          </p>
        </div>

        <img
          src="/pdf_rapport.png"
          alt="Rapport PDF signé"
          className="pdfsig__milestone-img"
        />
      </div>
    </div>
  );
}
