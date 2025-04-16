const fontFaces: string[] = []
const fontFamily = 'Museo Sans'
const fontWeights: number[] = [100, 300, 500, 700, 900]
const fontStyles: string[] = ['normal', 'italic']

fontWeights.forEach((fontWeight) => {
  fontStyles.forEach((fontStyle) => {
    fontFaces.push(`
      @font-face {
        font-family: '${fontFamily}';
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
        font-display: swap;
        src: local('${fontFamily}'),
             url(https://assets.qiwi.com/ao-qw/fonts/museo-sans/v2/${fontWeight}_${fontStyle}.woff2) format('woff2'),
             url(https://assets.qiwi.com/ao-qw/fonts/museo-sans/v2/${fontWeight}_${fontStyle}.woff) format('woff');
      }
    `)
  })
})

export const fonts = fontFaces.join('\n')
