function PreviewPage() {
  return <div className="rd-preview-page">
    <div className="rd-preview-nav">
      <span>Seu negócio</span>
      <span className="rd-preview-links"><span>Serviços</span><span>Sobre</span><span>Contato</span></span>
    </div>
    <div className="rd-preview-content">
      <div className="rd-preview-copy">
        <span className="rd-preview-title">Soluções para o seu dia a dia.</span>
        <span className="rd-preview-button">Conheça os serviços <span>→</span></span>
      </div>
      <div className="rd-preview-art"><i /><i /><i /></div>
    </div>
    <div className="rd-preview-details"><span>Serviços</span><span>Sobre a empresa</span><span>Contato</span></div>
  </div>;
}

export default function HeroWebsitePreview() {
  return <figure className="rd-showcase">
    <div className="rd-showcase-light" aria-hidden="true" />
    <figcaption className="rd-showcase-caption">
      <span>Exemplo de site</span><span>Desktop e celular</span>
    </figcaption>
    <div className="rd-preview-devices" aria-hidden="true">
      <div className="rd-preview-desktop">
        <div className="rd-preview-browser"><span /><span /><span /></div>
        <PreviewPage />
      </div>
      <div className="rd-preview-phone">
        <div className="rd-preview-camera" />
        <PreviewPage />
      </div>
    </div>
  </figure>;
}
