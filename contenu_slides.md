# Soutenance DEKKERS SAS — V2 (11 slides, ~15 min)

> [!IMPORTANT]
> **Changements majeurs vs V1 :**
> - Accroche d'intro percutante (acronymes)
> - Structure simplifiée : Entreprise → Stage (sous-parties) → Difficultés → Conclusion
> - Difficultés enrichies avec liens IUT/Canada + problématique tissée dedans
> - Nouveaux contenus ajoutés : Véhicules, Formations, WordPress
> - Modules moins marquants (GED, Agenda, Notifs) réduits à des mentions rapides

---

## Slide 1 — Couverture + Accroche (~45 sec)

### Sur la slide
Même design sombre que tu as commencé. Logo, titre, dates, infos.

### Ce que tu dis (L'ACCROCHE)

> "TMD... DUERP... CSA... ADR 1.3... GTP..."
>
> *(pause, regard vers le jury)*
>
> "Autant d'acronymes qui ne me disaient absolument rien il y a encore trois mois. Et pourtant, pendant douze semaines, j'ai dû non seulement les comprendre, mais les transformer en lignes de code. En une application numérique capable de les gérer au quotidien."
>
> "Je m'appelle Kévin Morillo, je suis en troisième année de BUT MMI, et voici comment un développeur web s'est retrouvé plongé dans l'univers des audits réglementaires et du transport de matières dangereuses."

> [!TIP]
> **Pourquoi ça marche** : tu crées un décalage immédiat entre ton monde (le dev web) et celui de DEKKERS (QHSE/TMD). Le jury est accroché. Tu montres dès la première seconde que tu as dû sortir de ta zone de confort.

---

## Slide 2 — Sommaire (~15 sec)

### Sur la slide
```
01. L'entreprise
02. Le stage
    ├── Mission & méthodologie
    ├── Architecture technique
    ├── Le Form Builder
    ├── Génération PDF & Signature
    └── Modules avancés
03. Difficultés & apprentissages
04. Conclusion
```

### Ce que tu dis
> "Ma présentation s'articulera autour de quatre temps : l'entreprise, le détail de mes réalisations techniques, les difficultés rencontrées et ce qu'elles m'ont appris, et enfin ma conclusion."

---

## Slide 3 — L'entreprise (~1 min 15)

### Sur la slide
**"DEKKERS SAS — Conseil, Audit & Prévention des risques"**

- Fondée en 2013 à Béziers par Johannes DEKKERS
- Spécialité : **QHSE & TMD** — audits réglementaires
- Formation certifiée **QUALIOPI**
- **3 personnes** : M. DEKKERS (DG), Gauthier BALP (alternant QHSE), John RIVEMALE (secrétaire)
- Contexte : processus manuels (Excel, Word, papier) → besoin de digitalisation

Petit visuel : « Pourquoi DEKKERS ? » → Candidature spontanée depuis le Canada

### Ce que tu dis
> "DEKKERS SAS est un cabinet fondé en 2013, spécialisé dans le conseil et l'audit QHSE — tous ces fameux acronymes que je viens de citer. C'est une TPE de 3 personnes, ce qui m'a donné un accès direct au dirigeant."
>
> "Le contexte est simple : quand je suis arrivé, chaque audit était réalisé sur Excel ou Word, sans centralisation ni automatisation. M. DEKKERS avait besoin de digitaliser ses processus. C'est ce besoin qui a créé mon poste."
>
> "J'ai découvert cette entreprise depuis le Canada, où j'étais en échange universitaire. Mon stage initial étant tombé à l'eau, j'ai envoyé une candidature spontanée. Un mail, un entretien en visio, et la mission était lancée."

---

## Slide 4 — Mission & Méthodologie (~1 min 15)

### Sur la slide
**"02. Le stage — La DEKKERS App, de zéro"**

🎯 **Objectif** : Application web complète — créer, remplir, signer et archiver les audits réglementaires

📱 **Usage** : PC bureau + tablette terrain

🏗️ **Aucun code existant** → tout à construire, seul développeur

🔄 **Méthode** :
- Point matinal quotidien avec M. DEKKERS
- Itérations continues — déploiement puis retours terrain
- Post-its → notes téléphone → pilotage en temps réel

### Ce que tu dis
> "Ma mission : concevoir et développer de zéro une application web métier complète. Elle devait permettre de créer des modèles d'audit, de les remplir sur tablette en intervention, de générer les rapports PDF et de les faire signer numériquement."
>
> "J'étais seul développeur, avec une autonomie totale. Ma méthodologie reposait sur un point matinal quotidien avec M. DEKKERS — une vraie session de pilotage où je récupérais ses retours. Puis je déployais régulièrement en production pour avoir des retours terrain immédiats. C'est cette boucle courte qui a rendu le projet efficace."

---

## Slide 5 — Architecture technique (~1 min 15)

### Sur la slide
**"Architecture technique"**

Schéma Docker simplifié (ton Annexe 04 stylisé dark) :

| Couche | Technologies |
|---|---|
| **Frontend** | React · TypeScript · Vite · TailwindCSS · Shadcn/UI |
| **Backend** | Node.js · Hono · Drizzle ORM · Better Auth · Puppeteer |
| **BDD** | PostgreSQL (JSONB) |
| **Production** | Docker (4 containers) · Caddy · VPS OVH |
| **Externe** | SFTP (stockage PDF) · Resend (emails) · Google API |

En bas : *"IA en support : Gemini (documentation) · Claude (logique/debug)"*

### Ce que tu dis
> "J'ai eu carte blanche sur les technologies. J'ai construit une stack moderne — React TypeScript en front, Node.js avec Hono en back, PostgreSQL avec du JSONB pour stocker des structures de formulaires flexibles."
>
> "Le tout tourne dans 4 conteneurs Docker sur un VPS OVH, avec Caddy en reverse proxy. Et j'ai utilisé l'IA — Gemini et Claude — comme assistants techniques pour accélérer mon apprentissage, pas pour remplacer ma réflexion."
>
> "La majorité de ces technologies, je les ai apprises directement pendant le stage. Mon semestre au Canada m'avait donné les bases en React, mais Hono, Drizzle, Docker en production, Puppeteer — tout ça, je l'ai découvert sur le terrain."

---

## Slide 6 — Le Form Builder (~2 min)

### Sur la slide
**"Le Form Builder — Cœur de l'application"**

*"Comment abstraire des dizaines de formulaires réglementaires différents en un seul système ?"*

Structure : `Partie → Ligne → Colonnes (types variés)`

Types : ☑️ Checkbox · 📝 Texte · 🔽 Dropdown · 📷 Photo · ✍️ Signature · 📄 Upload · 🔢 Numérique

Logique conditionnelle :
- Intra-ligne : "Non Conforme" → observation obligatoire
- Globale : question → masque/affiche une section entière

Fonctionnalités productivité : duplication, drag & drop, copier-coller de logiques

> [!TIP]
> Capture possible : l'éditeur de formulaire en mode édition

### Ce que tu dis
> "Le composant central est le Form Builder — l'éditeur de modèles d'audit. C'est celui qui m'a demandé le plus de réflexion."
>
> "Le défi était conceptuel avant d'être technique : comment représenter des dizaines de formulaires différents — certains proches d'Excel, d'autres de Word, tous avec des logiques spécifiques — dans un seul et même outil ?"
>
> "J'ai conçu une structure en Partie, Ligne, Colonne, où chaque ligne peut combiner librement différents types de réponses. J'ai intégré de la logique conditionnelle à deux niveaux — par exemple, cocher 'Non Conforme' fait apparaître un champ observation. Une question préliminaire peut masquer une section entière."
>
> "Ce form builder n'a jamais été figé. Chaque nouveau type d'audit révélait un besoin. C'est un outil vivant qui a grandi avec le terrain."

---

## Slide 7 — PDF & Signature numérique (~1 min 45)

### Sur la slide
**"Génération PDF & Signature numérique"**

**PDF — Puppeteer** :
- HTML → PDF fidèle (page de garde, tableaux, photos, récap écarts)
- Défi : footers, sauts de page, sommaire paginé (double rendu)

**Signature propriétaire** :
```
✍️ Signature tactile → 📧 Lien sécurisé au client → 📄 PDF final + certificat
```
- Canvas (stylet/doigt) + métadonnées chiffrées (horodatage, IP)
- Alternative développée car Adobe Sign trop coûteux pour une TPE

*"Le moment fort : le premier rapport revenu signé numériquement par un vrai client."*

### Ce que tu dis
> "L'application génère automatiquement les rapports PDF grâce à Puppeteer, qui transforme le rendu HTML en document fidèle. Le défi technique principal a été la gestion des sauts de page et des footers."
>
> "Pour la signature, l'API Adobe Sign étant trop coûteuse pour une TPE, j'ai développé un module propriétaire. Le canvas capture la signature, les métadonnées sont chiffrées, le client reçoit un email avec un lien sécurisé, signe à distance, et le PDF final intègre un certificat d'authenticité."
>
> "Le moment fort du stage : quand le premier rapport est revenu signé numériquement par un vrai client. On venait de boucler un processus autrefois 100% papier."

---

## Slide 8 — Modules avancés (~2 min)

### Sur la slide
**"Les modules métier"**

4 blocs visuels :

**📋 DUERP** — Document Unique d'Évaluation des Risques
- Structure imbriquée complexe (unités > dangers > cotation)
- Collaboration avec Gauthier BALP
- Sommaire paginé dynamiquement (double rendu)

**🚛 Carnet de bord véhicules** *(NOUVEAU)*
- Suivi véhicules de société et de fonction
- Infos, consommation, trajets
- Clôtures annuelles exportables

**🎓 Évaluations de formations** *(NOUVEAU)*
- Création stagiaires + formations
- QR code scanné en fin de formation → évaluation sur l'app
- N° candidat auto-généré
- Dashboard analytique pour M. DEKKERS

**🌐 Site vitrine WordPress** *(NOUVEAU)*
- Refonte complète du contenu et de la présentation
- Modernisation en respectant la charte graphique

### Ce que tu dis
> "Au-delà du cœur de l'application, j'ai développé plusieurs modules métier spécifiques."
>
> "Le DUERP, Document Unique d'Évaluation des Risques, est le module le plus complexe. Sa structure imbriquée — unités de travail, dangers, cotation — rendait impossible la réutilisation de mon Form Builder. J'ai collaboré étroitement avec Gauthier BALP pour transposer un fichier Excel massif en interface web."
>
> "Sur mes deux dernières semaines, j'ai ajouté deux fonctionnalités majeures. D'abord un carnet de bord des véhicules de société — suivi des trajets, consommation, avec des clôtures annuelles exportables. Ensuite, un module d'évaluation des formations : M. DEKKERS forme des stagiaires et avant, l'évaluation se faisait sur papier. J'ai créé un système avec QR code — en fin de formation, les stagiaires scannent, entrent leur numéro candidat généré automatiquement, et remplissent l'évaluation directement sur l'application. Un dashboard analytique permet ensuite à M. DEKKERS d'avoir une vision globale de ses formations — chose impossible avant."
>
> "Enfin, j'ai refondu le site vitrine WordPress de l'entreprise, en modernisant chaque page tout en respectant la charte graphique existante."

---

## Slide 9 — Difficultés & Apprentissages (~2 min 30)

### Sur la slide
**"Difficultés rencontrées & ce qu'elles m'ont appris"**

| Difficulté | Ce que j'en retiens | Lien formation |
|---|---|---|
| **Abstraction du Form Builder** | Décomposer un problème monolithique en briques | Modélisation de données (IUT) |
| **Technologies inconnues** (Hono, Drizzle, Puppeteer) | Apprendre à apprendre, autonomie technique | Échange au Canada : même situation avec Laravel |
| **Mise en production** | Responsabilité des données réelles, rigueur DevOps | Docker appris en MMI2, appliqué à l'échelle réelle |
| **Bug silencieux SFTP** | Importance des logs et de la documentation | Debugging (IUT) poussé au niveau pro |
| **Conflits Git (branche DUERP)** | Synchroniser régulièrement, ne pas attendre le merge final | Git en cours mais jamais à cette échelle |
| **Frustration UX/Design** | Un outil fonctionnel ≠ un outil adopté | Cours UX/UI MMI → prise de conscience terrain |

*Phrase clé :*
> *"Chaque difficulté technique m'a appris quelque chose que la théorie seule n'aurait pas pu m'enseigner."*

### Ce que tu dis
> "Si je devais retenir un seul apprentissage de ce stage, c'est que chaque difficulté m'a apporté plus que n'importe quel cours."
>
> "Le Form Builder m'a appris à décomposer un problème qui semblait impossible en briques gérables. C'est exactement ce qu'on nous enseigne en modélisation de données à l'IUT, mais l'appliquer sur un vrai projet avec de vrais enjeux, c'est une autre dimension."
>
> "La découverte de technologies inconnues — Hono, Drizzle, Puppeteer — m'a rappelé mon échange au Canada, où j'avais débarqué face à Laravel et Livewire sans les connaître. Le Canada m'avait appris à apprendre vite. Ce stage m'a confirmé que cette capacité d'adaptation est ma compétence la plus précieuse."
>
> "La mise en production m'a confronté à la responsabilité des données réelles. Docker, je l'avais appris en deuxième année de MMI, mais l'utiliser en production avec de vrais audits réglementaires, c'est un tout autre niveau de rigueur."
>
> "Et ma frustration la plus forte : le design. L'application est propre, professionnelle, fonctionnelle. Mais je n'ai pas eu le temps de mener une vraie réflexion UX en amont — les parcours utilisateurs, les moments de friction. En cours de MMI, on nous enseigne l'importance de l'UX. Sur le terrain, j'ai mesuré la distance entre savoir et faire. Et c'est cette frustration qui éclaire mon projet professionnel."

---

## Slide 10 — Prise de recul & problématique (~1 min 30)

### Sur la slide
**"Un outil fonctionnel ne suffit pas — il faut qu'on l'adopte"**

Avant/Après visuel :
| Avant | Après |
|---|---|
| Excel, Word, papier | App centralisée |
| Envoi manuel | Signature numérique + envoi auto |
| Évaluations papier | QR code + dashboard analytique |
| Pas de traçabilité | Versioning automatique |

**L'enjeu :** Dans une TPE de 3 personnes, pas de service info ni de formation dédiée.
L'outil doit être **immédiatement intuitif** sinon → retour aux anciennes habitudes.

**Mes recommandations :**
1. 🎨 Audit UX & identité visuelle
2. 👥 Portail client avec onboarding guidé
3. 🔧 Pérennité technique (doc, tests)

### Ce que tu dis
> "Cette réflexion m'amène à la question centrale de mon stage : un logiciel peut être techniquement irréprochable sans pour autant être adopté."
>
> "Les gains sont réels — on est passé du tout manuel à une application qui automatise la génération de rapports, les signatures, les évaluations. Mais dans une TPE, il n'y a pas de service informatique. Si l'outil n'est pas immédiatement intuitif, l'utilisateur revient à Excel."
>
> "C'est pourquoi je propose trois axes pour pérenniser l'adoption : un audit UX, la préparation d'un portail client avec onboarding guidé, et un investissement dans la documentation technique pour que l'application survive après mon départ."

---

## Slide 11 — Conclusion (~1 min 30)

### Sur la slide
**"Conclusion"**

**⚡ Montée en compétences**
React, TypeScript, Docker, Puppeteer, PostgreSQL, WordPress...
De la page blanche à la production.

**🧱 Méthode**
*"Face à une montagne : découper."*

**🌍 Ouverture**
Canada → DEKKERS → chaque expérience a renforcé la même compétence : **s'adapter**.

**🧭 Projet pro**
Le dev est mon socle. Ma voie : la conception d'interfaces & l'expérience utilisateur.

*"Le développement n'est jamais une fin en soi. Il est au service d'un humain, d'un usage, d'un besoin concret."*

Remerciements : M. Johannes DEKKERS · Gauthier BALP · IUT de Béziers

### Ce que tu dis
> "Pour conclure, ces douze semaines ont été l'expérience la plus formatrice de mon parcours. J'ai appris des technologies que je ne maîtrisais pas, développé une application complète de la page blanche à la production, et découvert un univers métier que je ne soupçonnais pas."
>
> "Ce que je retiens, c'est une leçon de méthode : face à une montagne, découper. Et une leçon humaine : chaque expérience — le Canada, Kalya, DEKKERS — a renforcé la même chose chez moi : la capacité à m'adapter, à apprendre vite, à produire dans l'incertitude."
>
> "Ce stage a clarifié mon projet professionnel. Ma voie n'est pas le développement pour lui-même, mais la conception d'interfaces et l'expérience utilisateur. Le dev est mon socle — comprendre les contraintes techniques me permettra d'être un meilleur concepteur."
>
> "Le développement n'est jamais une fin en soi. Il est au service d'un humain, d'un usage, d'un besoin concret. Et c'est quand on l'oublie qu'on construit des outils qu'on utilise, et non des outils qu'on aime."
>
> "Je remercie M. DEKKERS pour sa confiance et Gauthier BALP pour sa collaboration. Merci pour votre attention, je suis prêt à répondre à vos questions."

---

## Timing récapitulatif

| Slide | Contenu | Durée |
|---|---|---|
| 1 | Couverture + accroche | 45 sec |
| 2 | Sommaire | 15 sec |
| 3 | L'entreprise | 1 min 15 |
| 4 | Mission & méthode | 1 min 15 |
| 5 | Stack technique | 1 min 15 |
| 6 | Form Builder | 2 min |
| 7 | PDF & Signature | 1 min 45 |
| 8 | Modules avancés | 2 min |
| 9 | Difficultés & apprentissages | 2 min 30 |
| 10 | Problématique / prise de recul | 1 min 30 |
| 11 | Conclusion | 1 min 30 |
| **Total** | | **~16 min** |

> [!WARNING]
> On est à ~16 min. Pour rentrer dans les 15 min :
> - **Option A** : Fusionner slides 9 et 10 (Difficultés + Problématique en une seule slide de ~3 min)
> - **Option B** : Réduire la stack technique (slide 5) à 45 sec — aller plus vite dessus
> - **Option C** : Les deux → confortable à ~14 min 30

---

## Tips pour Figma

- **Nav interactive** : ta barre de nav peut refléter les 4 sections (Entreprise · Stage · Difficultés · Conclusion) avec les sous-pages du stage accessibles au clic
- **Transitions** : smart animate entre les slides pour un effet fluide
- **Captures d'écran** : intègre-les avec des bords arrondis + léger glow orange, ça s'intègre parfaitement au dark theme
- **Slide 9 (Difficultés)** : c'est ta slide la plus dense → utilise un layout en grille/cards plutôt qu'une liste pour aérer
