export default function MentionsLegales() {
  return (
    <>
      <p className="legal-tag">Légal</p>
      <h2 className="legal-ttl">MENTIONS LÉGALES</h2>
      <p className="legal-updated">Dernière mise à jour : Juin 2026</p>

      <h3 className="legal-h2">1. Éditeur du site</h3>
      <dl className="legal-dl">
        <dt className="legal-dt">Nom</dt>          <dd className="legal-dd"><strong>Pierre Nègre</strong></dd>
        <dt className="legal-dt">Marque</dt>        <dd className="legal-dd">StoneCode</dd>
        <dt className="legal-dt">Statut</dt>        <dd className="legal-dd">Micro-entrepreneur (auto-entrepreneur)</dd>
        <dt className="legal-dt">SIRET</dt>         <dd className="legal-dd">939 136 917 00019</dd>
        <dt className="legal-dt">Adresse</dt>       <dd className="legal-dd">10 rue Bacchus, 66330 Cabestany, France</dd>
        <dt className="legal-dt">Email</dt>         <dd className="legal-dd"><a href="mailto:pierrenegre66@gmail.com">pierrenegre66@gmail.com</a></dd>
        <dt className="legal-dt">Activité</dt>      <dd className="legal-dd">Développement de sites web et applications — Code APE 6201Z</dd>
      </dl>

      <h3 className="legal-h2">2. Hébergement</h3>
      <dl className="legal-dl">
        <dt className="legal-dt">Hébergeur</dt>   <dd className="legal-dd"><strong>Vercel Inc.</strong></dd>
        <dt className="legal-dt">Adresse</dt>     <dd className="legal-dd">340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</dd>
        <dt className="legal-dt">Site web</dt>    <dd className="legal-dd"><a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a></dd>
      </dl>

      <h3 className="legal-h2">3. Propriété intellectuelle</h3>
      <p className="legal-p">
        L'ensemble des éléments constituant ce site (textes, graphismes, logotypes, code source) est la propriété exclusive de <strong>Pierre Nègre / StoneCode</strong>,
        sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle des éléments du site,
        quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
      </p>

      <h3 className="legal-h2">4. Responsabilité</h3>
      <p className="legal-p">
        Pierre Nègre s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site.
        Cependant, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
        En conséquence, Pierre Nègre décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
      </p>
      <p className="legal-p">
        Les liens hypertextes présents sur ce site peuvent renvoyer vers d'autres sites internet. Pierre Nègre n'est pas responsable du contenu de ces sites tiers.
      </p>

      <h3 className="legal-h2">5. Données personnelles</h3>
      <p className="legal-p">
        Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont pas transmises à des tiers.
        Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
        vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
      </p>
      <p className="legal-p">
        Pour exercer ces droits, contactez : <a href="mailto:pierrenegre66@gmail.com">pierrenegre66@gmail.com</a>
      </p>

      <h3 className="legal-h2">6. Cookies</h3>
      <p className="legal-p">
        Ce site n'utilise pas de cookies à des fins de traçage ou de publicité. Des cookies techniques strictement nécessaires
        au bon fonctionnement du site peuvent être déposés sur votre terminal.
      </p>

      <h3 className="legal-h2">7. Droit applicable</h3>
      <p className="legal-p">
        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>

      <div className="legal-notice">
        Ces mentions légales ont été rédigées conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN) et au RGPD (UE) 2016/679.
      </div>
    </>
  )
}
