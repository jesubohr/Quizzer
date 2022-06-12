export default function getCurrentPath (pathname) {
  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
  return paths.length === 1 ? paths[0] : paths[paths.length - 1]
}
