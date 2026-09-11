import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * GalleryLightbox
 * Renders a filterable grid of gallery items and a modal lightbox on selection.
 *
 * Props:
 *  - items: Array<{ id, src, srcSet, alt, title, year, category, description }>
 *  - categories: string[] (first entry is treated as "All")
 */
export default function GalleryLightbox({ items, categories }) {
  const [active, setActive] = useState(categories[0]);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const filtered =
    active === categories[0]
      ? items
      : items.filter((it) => it.category === active);

  const close = useCallback(() => setSelected(null), []);
  const next = useCallback(
    () =>
      setSelected((cur) => {
        if (!cur) return cur;
        const i = filtered.findIndex((it) => it.id === cur.id);
        return filtered[(i + 1) % filtered.length];
      }),
    [filtered]
  );
  const prev = useCallback(() => {
    setSelected((cur) => {
      if (!cur) return cur;
      const i = filtered.findIndex((it) => it.id === cur.id);
      return filtered[(i - 1 + filtered.length) % filtered.length];
    });
  }, [filtered]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected, close, next, prev]);

  const share = (it) => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: it.title, text: it.description, url: window.location.href }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`${it.title} — ${window.location.href}`);
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={
                'rounded-full px-4 py-2 text-sm font-medium transition-colors ' +
                (isActive
                  ? 'bg-sage text-offwhite'
                  : 'bg-cream text-charcoal/70 hover:bg-gold hover:text-charcoal')
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => setSelected(it)}
            className="group block text-left reveal"
            aria-label={`View ${it.title}`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-cream ring-1 ring-charcoal/5 aspect-[4/5]">
              <img
                src={it.src}
                srcSet={it.srcSet}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-5">
                  <p className="font-serif text-lg text-offwhite">{it.title}</p>
                  <p className="mt-1 text-sm text-offwhite/80">{it.category} · {it.year}</p>
                </div>
              </div>
            </div>
            <p className="mt-3 font-sans text-sm font-medium text-charcoal group-hover:text-sage-dark">
              {it.title}
              <span className="block text-charcoal/55">· {it.category}, {it.year}</span>
            </p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} detail`}
        >
          <div
            ref={dialogRef}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl bg-offwhite shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/90 text-charcoal ring-1 ring-charcoal/10 hover:bg-sage hover:text-offwhite"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>

            <div className="grid gap-0 sm:grid-cols-5">
              <div className="sm:col-span-3 bg-cream">
                <img
                  src={selected.src}
                  srcSet={selected.srcSet}
                  sizes="(min-width: 640px) 60vw, 100vw"
                  alt={selected.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-7 sm:col-span-2">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                    {selected.category} · {selected.year}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-charcoal">{selected.title}</h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-charcoal/75">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => share(selected)} className="btn-secondary !py-2 !px-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
                    Share
                  </button>
                  <button type="button" onClick={prev} aria-label="Previous" className="btn-outline !py-2 !px-4">‹ Prev</button>
                  <button type="button" onClick={next} aria-label="Next" className="btn-outline !py-2 !px-4">Next ›</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
