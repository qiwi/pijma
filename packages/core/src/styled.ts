import styled, {CSSObject, StyledOptions} from '@emotion/styled'
import {injectGlobal, keyframes, cache, css, cx, flush} from '@emotion/css'
import {ThemeProvider, jsx, CacheProvider, Global} from '@emotion/react'
import {Theme as T} from './Theme'

// https://deploy-preview-1600--emotion.netlify.app/docs/typescript#define-a-theme
// https://github.com/emotion-js/emotion/issues/1757#issuecomment-617281471
declare module '@emotion/react' {
  export interface Theme extends T {}
}

export * from './Theme'

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
  StyledOptions,
}

export default styled
