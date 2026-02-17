/**
 * Returns true if we should skip our custom confirmation and go straight to tel:.
 * We show our custom bar on both mobile and desktop (user prefers it).
 * Skip only when we're confident native provides a good experience - currently
 * we always show our bar to ensure consistent UX.
 */
export function shouldSkipCallConfirmation() {
  return false
}
