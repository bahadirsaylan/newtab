export function parseForm<T>(form: HTMLFormElement) {
  const data = new FormData(form)
  return Object.fromEntries(data.entries()) as T
}
