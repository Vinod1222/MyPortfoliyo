export function SkeletonScreen() {
  return (
    <div
      className="skeleton-screen fixed inset-0 z-[999] bg-[#19182d] px-[5.5vw] text-white"
      aria-label="Loading portfolio preview"
    >
      <header className="flex min-h-[76px] items-center justify-between border-b border-white/10">
        <div className="skeleton-shimmer relative h-7 w-48 overflow-hidden rounded-full bg-white/10" />
        <div className="hidden gap-5 md:flex">
          <span className="skeleton-shimmer relative h-5 w-20 overflow-hidden rounded-full bg-white/10" />
          <span className="skeleton-shimmer relative h-5 w-20 overflow-hidden rounded-full bg-white/10" />
          <span className="skeleton-shimmer relative h-5 w-24 overflow-hidden rounded-full bg-white/10" />
          <span className="skeleton-shimmer relative h-5 w-24 overflow-hidden rounded-full bg-white/10" />
        </div>
        <div className="skeleton-shimmer relative h-10 w-32 overflow-hidden rounded-xl bg-[#ff664d]/30" />
      </header>

      <section className="grid min-h-[calc(100vh-76px)] grid-cols-[minmax(0,0.92fr)_minmax(320px,0.9fr)] items-center gap-[4vw] max-lg:grid-cols-1">
        <div>
          <div className="skeleton-shimmer relative mb-8 h-11 w-64 overflow-hidden rounded-full bg-[#25c99c]/15" />
          <div className="skeleton-shimmer relative mb-4 h-16 w-[min(560px,100%)] overflow-hidden rounded-xl bg-white/10" />
          <div className="skeleton-shimmer relative mb-8 h-16 w-[min(420px,80%)] overflow-hidden rounded-xl bg-[#ff664d]/22" />
          <div className="skeleton-shimmer relative mb-4 h-7 w-[min(700px,100%)] overflow-hidden rounded-full bg-white/10" />
          <div className="skeleton-shimmer relative mb-10 h-7 w-[min(560px,88%)] overflow-hidden rounded-full bg-white/10" />
          <div className="flex gap-4">
            <span className="skeleton-shimmer relative h-14 w-36 overflow-hidden rounded-xl bg-[#ff664d]/15" />
            <span className="skeleton-shimmer relative h-14 w-52 overflow-hidden rounded-xl bg-[#ff664d]/15" />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-[min(33vw,430px)] min-w-[300px] rounded-full max-md:w-[min(72vw,290px)] max-md:min-w-0">
          <span className="skeleton-orbit-spin absolute inset-[4%] rounded-full border-2 border-dashed border-[#ff664d]/45" />
          <span className="absolute inset-[18%] rounded-full border-2 border-[#ff664d]/20" />
          <span className="skeleton-shimmer absolute left-1/2 top-1/2 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#ff664d]/20" />
        </div>
      </section>
    </div>
  );
}
