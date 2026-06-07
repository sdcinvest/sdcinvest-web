# SDC Invest — Site vitrine

Site web professionnel pour **SDC Invest**, société française spécialisée dans le
**développement informatique** (mobile, web, logiciel), le **conseil et l'intégration ERP**,
et l'**investissement dans la tech**.
Site statique (HTML / CSS / JavaScript), sans dépendance ni étape de build.

## Aperçu local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur :

```bash
# Python
python3 -m http.server 8000

# ou Node
npx serve .
```

Puis rendez-vous sur http://localhost:8000

## Structure

| Fichier                 | Rôle                                                        |
|-------------------------|-------------------------------------------------------------|
| `index.html`            | Page d'accueil (contenu et structure)                       |
| `mentions-legales.html` | Page Mentions légales & politique de confidentialité        |
| `styles.css`            | Identité visuelle, mise en page, responsive                 |
| `script.js`             | Menu mobile, animations au défilement, compteurs, formulaire |

## Sections

- **Accueil** — hero avec accroche et appels à l'action
- **Services** — 6 domaines (dév. mobile, dév. web/logiciel, conseil & intégration ERP, conseil IT, cloud/support/TMA, investissement tech)
- **Méthode** — démarche agile en 4 étapes
- **Chiffres** — statistiques animées
- **Contact** — coordonnées + formulaire avec validation
- **Mentions légales** (page dédiée) — éditeur, hébergement, propriété intellectuelle, RGPD/confidentialité, cookies, responsabilité, droit applicable

## Personnalisation

- **Couleurs / typographies** : variables CSS en haut de `styles.css` (`:root`).
- **Coordonnées** : section `#contact` dans `index.html`.
- **Formulaire** : l'envoi est simulé dans `script.js`. Branchez votre backend ou un service
  (Formspree, EmailJS, etc.) à l'endroit indiqué par le commentaire.
- **Textes / chiffres** : contenus éditables directement dans `index.html`.

> ℹ️ Les informations légales (dénomination, SASU, capital, SIREN/SIRET, RCS Lille Métropole,
> siège à Lille, dirigeant) sont **réelles** (source : registre du commerce / Pappers).
> Restent à compléter : les **coordonnées de l'hébergeur** dans `mentions-legales.html`,
> ainsi que l'e-mail/téléphone de contact et les **chiffres clés** (valeurs d'exemple) si besoin.
