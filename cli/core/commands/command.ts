import { Command } from 'commander'
import { onBuild } from '../build/build'

const program = new Command()
program.command('build')
.option('-t --type <type>', "打包类型 all or demand")
.action(onBuild)
program.parse()

export {
  program
}