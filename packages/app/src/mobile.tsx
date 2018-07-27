import {client} from '@qiwi/pijma-mobile/app'

client()

if (module.hot) {
  module.hot.accept(client)
}
