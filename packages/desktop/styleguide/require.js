import * as core from '@qiwi/pijma-core'
import * as media from '@qiwi/pijma-media'

Object.keys(core).forEach(name => global[name] = core[name])
Object.keys(media).forEach(name => global[name] = media[name])
