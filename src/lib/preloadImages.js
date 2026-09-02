/**
 * Preload image URLs in parallel. Resolves when all finish (or fail) or timeout is reached.
 * @param {string[]} urls
 * @param {{ timeoutMs?: number }} options
 */
export function preloadImages(urls, { timeoutMs = 10000 } = {}) {
  const unique = [...new Set((urls || []).filter(Boolean))];
  if (unique.length === 0) return Promise.resolve();

  const loadOne = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      const done = () => resolve();
      img.onload = done;
      img.onerror = done;
      img.src = src;
    });

  const allLoaded = Promise.all(unique.map(loadOne));
  const timeout = new Promise((resolve) => window.setTimeout(resolve, timeoutMs));

  return Promise.race([allLoaded, timeout]);
}
