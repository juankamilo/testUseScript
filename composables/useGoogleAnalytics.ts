import { useScript } from '@unhead/vue'

interface GoogleAnalyticsApi {
  gtag: ((fn: 'event', opt: string, opt2: { [key: string]: string }) => void)
}

declare global {
  interface Window extends GoogleAnalyticsApi {}
}

export function useGoogleAnalytics() {
  return useScript<GoogleAnalyticsApi>({
    src: 'https://www.google-analytics.com/analytics.js',
  }, {
    use: () => ({ gtag: window.gtag })
  })
}
