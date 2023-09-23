module.exports = {
  pwa: {
    themeColor: '#EDF2F7',
    msTileColor: '#EDF2F7',
    manifestOptions: {
      background_color: '#EDF2F7'
    },
    name: 'BootWind',
    manifestCrossorigin: 'use-credentials',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}