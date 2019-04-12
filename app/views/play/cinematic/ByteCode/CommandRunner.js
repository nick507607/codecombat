import { run, cancel } from './AbstractCommand'

export default class CommandRunner {
  constructor (commands) {
    this.commands = commands
  }

  /**
   * Runs all of the given commands.
   */
  async run () {
    for (const command of this.commands) {
      // TODO: Make sure cancelling is more robust. Maybe by racing them?
      // Uncomment below to get cancel behavior.
      // setTimeout(() => command[cancel](), 60)
      await command[run]()
    }
  }
}
