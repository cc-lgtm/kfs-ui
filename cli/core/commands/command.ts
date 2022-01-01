import { Command } from 'commander'
import { onBuild } from '../build/build'

const program = new Command()
program.command('build')
.option('-e --entry <type>', "打包packages入口")
.action(onBuild)
program.parse()

export default program;