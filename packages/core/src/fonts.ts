const fontFaces: string[] = []
const fontFamily: string = 'Museo Sans'
const fontWeights: number[] = [100, 300, 500, 700, 900]
const fontStyles: string[] = ['normal', 'italic']

fontWeights.forEach(fontWeight => {
  fontStyles.forEach(fontStyle => {
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
  })
})

const fonts = fontFaces.join('\n')

export default fonts
