import {Global, CacheProvider, jsx} from '@emotion/core'
import styled, {CreateStyled, CSSObject} from '@emotion/styled'
import {injectGlobal, keyframes, cache, css, cx, flush} from 'emotion'
import {ThemeProvider} from 'emotion-theming'

import Theme from './Theme'

export {
  cache,
  CacheProvider,
  injectGlobal,
  Global,
  jsx,
  css,
  cx,
  flush,
  keyframes,
  ThemeProvider,
  CSSObject,
}

export default styled as CreateStyled<Theme>
