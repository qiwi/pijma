import createCache from '@emotion/cache'
import styled from '@emotion/styled'

export { styled, createCache }

export type { CSSObject, Interpolation, StyledOptions } from '@emotion/styled'

export type { Theme } from '@emotion/react'

export { ThemeProvider, CacheProvider, Global, useTheme } from '@emotion/react'

export {
  flush,
  hydrate,
  cx,
  css,
  injectGlobal,
  keyframes,
  cache,
} from '@emotion/css'
