export const getFavicon = (url: string) =>
  `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`
