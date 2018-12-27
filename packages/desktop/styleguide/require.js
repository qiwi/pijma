import * as core from '@qiwi/pijma-core'
import * as media from '@qiwi/pijma-media'
import * as desktop from '@qiwi/pijma-desktop'

Object.keys(core).forEach(name => global[name] = core[name])
Object.keys(media).forEach(name => global[name] = media[name])
Object.keys(desktop).forEach(name => global[name] = desktop[name])
