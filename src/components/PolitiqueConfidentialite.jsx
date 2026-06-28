export default function PolitiqueConfidentialite() {
  return (
    <>
      <p className="legal-tag">Légal</p>
      <h2 className="legal-ttl">POLITIQUE DE CONFIDENTIALITÉ</h2>
      <p className="legal-updated">Dernière mise à jour : Juin 2026</p>

      <h3 className="legal-h2">1. Responsable du traitement</h3>
      <dl className="legal-dl">
        <dt className="legal-dt">Identité</dt>  <dd className="legal-dd"><strong>Pierre Nègre</strong> — StoneCode</dd>
        <dt className="legal-dt">SIRET</dt>     <dd className="legal-dd">939 136 917 00019</dd>
        <dt className="legal-dt">Adresse</dt>   <dd className="legal-dd">10 rue Bacchus, 66330 Cabestany, France</dd>
        <dt className="legal-dt">Contact</dt>   <dd className="legal-dd"><a href="mailto:pierrenegre66@gmail.com">pierrenegre66@gmail.com</a></dd>
      </dl>

      <h3 className="legal-h2">2. Données collectées</h3>
      <p className="legal-p">
        Ce site collecte des données personnelles uniquement via le formulaire de contact. Les données collectées sont :
      </p>
      <ul className="legal-ul">
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Sujet et contenu du message</li>
      </ul>
      <p className="legal-p">
        Aucune donnée de navigation (adresse IP, cookies tiers, fingerprinting) n'est collectée à des fins d'analyse ou de ciblage publicitaire.
      </p>

      <h3 className="legal-h2">3. Finalité des traitements</h3>
      <p className="legal-p">
        Les données collectées via le formulaire de contact sont utilisées exclusivement pour <strong>répondre à vos demandes</strong> et,
        avec votre accord implicite, pour maintenir une correspondance professionnelle dans le cadre d'un projet potentiel.
      </p>
      <p className="legal-p">
        Base légale : <strong>intérêt légitime</strong> (répondre à une prise de contact commerciale) conformément à l'article 6.1.f du RGPD.
      </p>

      <h3 className="legal-h2">4. Destinataires des données</h3>
      <p className="legal-p">
        Vos données sont transmises via le service <strong>Formsubmit</strong> (formsubmit.co), prestataire technique d'acheminement d'emails, et sont réceptionnées
        sur l'adresse email du responsable du traitement. Elles ne sont <strong>pas revendues ni transmises à des tiers</strong> à des fins commerciales.
      </p>

      <h3 className="legal-h2">5. Durée de conservation</h3>
      <p className="legal-p">
        Les données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum <strong>3 ans</strong>
        à compter du dernier contact, conformément aux recommandations de la CNIL pour les données de prospection.
      </p>

      <h3 className="legal-h2">6. Vos droits</h3>
      <p className="legal-p">
        Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul className="legal-ul">
        <li><strong>Droit d'accès</strong> — obtenir une copie des données vous concernant</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
        <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
        <li><strong>Droit à la limitation</strong> — restreindre temporairement le traitement</li>
        <li><strong>Droit d'opposition</strong> — s'opposer au traitement de vos données</li>
        <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
      </ul>
      <p className="legal-p">
        Pour exercer ces droits, contactez : <a href="mailto:pierrenegre66@gmail.com">pierrenegre66@gmail.com</a>
        <br />Réponse garantie sous <strong>30 jours</strong>.
      </p>

      <h3 className="legal-h2">7. Cookies</h3>
      <p className="legal-p">
        Ce site n'utilise <strong>pas de cookies tiers</strong>, de traceurs publicitaires, ni de scripts d'analyse (Google Analytics, Meta Pixel, etc.).
        Aucun cookie non essentiel n'est déposé sur votre terminal.
      </p>

      <h3 className="legal-h2">8. Sécurité</h3>
      <p className="legal-p">
        Ce site est servi exclusivement via <strong>HTTPS</strong>. Des mesures techniques appropriées sont mises en œuvre pour protéger
        vos données contre tout accès non autorisé, perte ou altération.
      </p>

      <h3 className="legal-h2">9. Réclamation</h3>
      <p className="legal-p">
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
        <strong> CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer"> www.cnil.fr</a>
      </p>

      <div className="legal-notice">
        Cette politique de confidentialité est conforme au Règlement (UE) 2016/679 du Parlement européen et du Conseil (RGPD) et à la loi « Informatique et Libertés » n° 78-17 du 6 janvier 1978 modifiée.
      </div>
    </>
  )
}
