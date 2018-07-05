import {client} from '@qiwi/pijma-mobile'

client()

if (module.hot) {
  module.hot.accept(client)
}
