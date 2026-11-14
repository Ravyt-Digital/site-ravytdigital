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
      <span>Exemplos de interface</span><span>Site e aplicativo</span>
    </figcaption>
    <div className="rd-preview-devices" aria-hidden="true">
      <div className="rd-preview-desktop">
        <div className="rd-preview-browser"><span /><span /><span /></div>
        <PreviewPage />
      </div>
      <div className="rd-preview-phone">
        <div className="rd-preview-camera" />
        <div className="rd-preview-app">
          <div className="rd-preview-app-heading"><span>Meu aplicativo</span><span className="rd-preview-app-icon">•</span></div>
          <strong>Meus pedidos</strong>
          <span className="rd-preview-app-status"><i /> Em andamento</span>
          <span className="rd-preview-app-row"><i /> Novo pedido <span>›</span></span>
          <span className="rd-preview-app-row"><i /> Histórico <span>›</span></span>
        </div>
      </div>
    </div>
  </figure>;
}
