/**
 * Heuristic: returns true if the browser/OS likely shows a native confirmation
 * before initiating a tel: call, so we should skip our custom modal.
 *
 * There is no reliable API to detect this. Known behavior:
 * - iOS: Shows "Call [number]?" dialog
 * - Android: Typically opens dialer with confirmation
 * - Desktop: Varies (Chrome/Edge may show app picker; Safari launches FaceTime)
 *
 * We skip our popup on mobile (iOS/Android) where native confirmation is common.
 */
export function shouldSkipCallConfirmation() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : ''
  return /iPhone|iPad|iPod|Android/i.test(ua)
}
