import { styled } from '@qiwi/pijma-core'

export default styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  min-width: 400px;
  > * {
    padding: 0 50px !important;
  }
`
