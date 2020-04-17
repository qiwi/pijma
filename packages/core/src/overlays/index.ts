import {Modal, Overlay} from 'react-overlays'

export type ModalProps = Modal['props']
export type OverlayProps = Overlay.OverlayProps
export type Placements = 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'

export * from 'react-overlays'
