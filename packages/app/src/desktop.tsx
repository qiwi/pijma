import {client} from '@qiwi/pijma-desktop/lib/es5/app'

client()

if (module.hot) {
  module.hot.accept(client)
}
