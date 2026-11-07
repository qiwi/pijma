import { ComponentType } from 'react'
import { WithTranslation, WithTranslationProps } from 'react-i18next'

/**
 * The type `withTranslation()(Component<P & WithTranslation>)` resolves to.
 * Spelled out explicitly: otherwise TS 4.x declaration emit leaks react-i18next's
 * inner type parameter `N` into the published d.ts.
 */
export type WithTranslationComponent<P> = ComponentType<
  Omit<
    Omit<P & WithTranslation, keyof WithTranslationProps>,
    keyof WithTranslation
  > &
    WithTranslationProps
>
