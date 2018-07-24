import {client} from '@qiwi/pijma-mobile/lib/es5/app'

client()

if (module.hot) {
  module.hot.accept(client)
}
