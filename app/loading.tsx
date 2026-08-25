export default function Loading() {
  return (
    <main className="site-loading" aria-busy="true" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true" />
      <p>Carregando conteúdo…</p>
    </main>
  );
}
