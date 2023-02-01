import { SSTConfig } from 'sst'

import {
  Web,
} from './Stack'

export default {
  config() {
    return {
      name: 'yumbo',
      region: 'us-east-1',
      profile: 'default' // No profiles on Github actions, it will use env variables
    }
  },
  async stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs18.x',
      architecture: 'arm_64'
    })

    await app.stack(Web)
  }
} satisfies SSTConfig
