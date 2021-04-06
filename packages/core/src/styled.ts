import styled, {CSSObject, StyledOptions as _StyledOptions} from '@emotion/styled'
import {injectGlobal, keyframes, cache, css, cx, flush} from '@emotion/css'
import {ThemeProvider, jsx, CacheProvider, Global} from '@emotion/react'
import {Theme as _Theme} from './Theme'

// https://deploy-preview-1600--emotion.netlify.app/docs/typescript#define-a-theme
// https://github.com/emotion-js/emotion/issues/1757#issuecomment-617281471
declare module '@emotion/react' {
  export interface Theme extends _Theme {}
}

export * from './Theme'

// https://github.com/emotion-js/emotion/pull/2333/
export interface StyledOptions extends _StyledOptions<Record<PropertyKey, any>> {
  shouldForwardProp: (prop: string) => boolean
}

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

export default styled
