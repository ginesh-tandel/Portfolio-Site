// Shared reference to the active Lenis instance (set by App.jsx),
// so any component can route its scroll through Lenis instead of
// the native scroll (which jumps instantly and fights Lenis's smoothing).
export const lenisRef = { current: null }
