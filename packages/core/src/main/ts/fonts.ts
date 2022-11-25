const fontFaces: string[] = []
const fontFamily = 'Museo Sans'
const fontWeights: number[] = [100, 300, 500, 700, 900]
const fontStyles: string[] = ['normal', 'italic']

for (const fontWeight of fontWeights) {
  for (const fontStyle of fontStyles) {
    fontFaces.push(`
      @font-face {
        font-family: '${fontFamily}';
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
        font-display: swap;
        src: local('${fontFamily}'),
             url(https://static.qiwi.com/fonts/museo-sans/v2/${fontWeight}_${fontStyle}.woff2) format('woff2'),
             url(https://static.qiwi.com/fonts/museo-sans/v2/${fontWeight}_${fontStyle}.woff) format('woff');
      }
    `)
  }
}

export const fonts = fontFaces.join('\n')
