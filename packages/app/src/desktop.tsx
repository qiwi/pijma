import {client} from '@qiwi/pijma-desktop'

client()

if (module.hot) {
  module.hot.accept(client)
}
