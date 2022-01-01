import { Command } from 'commander'

const onCreate = (cmd: string) => {
  console.log(cmd)
}

const program = new Command()
program.command('create')
.option('-t --type <type>')
.action(onCreate)
program.parse()

export default program;
