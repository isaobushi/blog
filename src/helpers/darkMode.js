export function getInitialMode() {
  if (typeof window !== "undefined" && window.localStorage) {
    const isReturningUser = "dark" in localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"))
    const userPrefersDark = getPrefColorMode()
    if (isReturningUser) {
      return savedMode
    } else if (userPrefersDark) {
      return true
    } else return false
  } else return
}

function getPrefColorMode() {
  if (window.matchMedia) return
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}
