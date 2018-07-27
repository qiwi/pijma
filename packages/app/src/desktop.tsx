import {client} from '@qiwi/pijma-desktop/app'

client()

if (module.hot) {
  module.hot.accept(client)
}
