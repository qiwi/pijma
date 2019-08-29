import * as core from '@qiwi/pijma-core'
import * as mobile from '@qiwi/pijma-mobile'

Object.keys(core).forEach(name => global[name] = core[name])
Object.keys(mobile).forEach(name => global[name] = mobile[name])
