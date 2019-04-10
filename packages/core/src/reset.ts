import {CSSObject} from './styled'

const reset: CSSObject = {
  '*': {
    boxSizing: 'border-box',
    outline: 0,
    '-webkit-tap-highlight-color': 'transparent',
  },
  'html, body, div, span, applet, button, input, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  svg: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
}

export default reset
