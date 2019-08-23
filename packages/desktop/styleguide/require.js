import * as core from '@qiwi/pijma-core'
import * as desktop from '@qiwi/pijma-desktop'

Object.keys(core).forEach(name => global[name] = core[name])
Object.keys(desktop).forEach(name => global[name] = desktop[name])
