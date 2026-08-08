export function SkeletonScreen() {
  return (
    <div className="skeleton-screen" aria-label="Loading portfolio preview">
      <header className="skeleton-header">
        <div className="skeleton-pill brand-skeleton" />
        <div className="skeleton-nav">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="skeleton-button" />
      </header>

      <section className="skeleton-hero">
        <div className="skeleton-copy">
          <div className="skeleton-pill status" />
          <div className="skeleton-line title wide" />
          <div className="skeleton-line title short" />
          <div className="skeleton-line body wide" />
          <div className="skeleton-line body medium" />
          <div className="skeleton-chip-row">
            <span />
            <span />
          </div>
        </div>

        <div className="skeleton-orbit">
          <span className="ring outer" />
          <span className="ring inner" />
          <span className="core" />
        </div>
      </section>
    </div>
  );
}
