<script setup lang="ts">
import { useScript } from '@unhead/vue'


interface GoogleAnalyticsApi {
    gtag: ((fn: 'event', opt: string, opt2: { [key: string]: string }) => void)
}
declare global {
  interface Window extends GoogleAnalyticsApi {}
}
// CORS error
const { $script } = useScript<GoogleAnalyticsApi>({
  src: 'https://www.google-analytics.com/analytics.js',
//   crossorigin: 'anonymous',
}, {
  use: () => ({ gtag: window.gtag }),
})

// CORS error
// const { gtag } = useGoogleAnalytics()
// console.log('gtag', gtag)


// THIS NEVER RESOLVES
$script.then((analytics) => {
  console.log('analyticsScript', analytics)
})

// THIS NEVER RESOLVES
// const analytics = await $script
// console.log('analyticsScript', analytics)

</script>
<template>
    <div>
        test
    </div>
</template>