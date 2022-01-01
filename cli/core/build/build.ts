import fs from 'fs-extra'
import inquirer from 'inquirer'
import { red, green, yellow } from 'kolorist'
import path from 'path'

const findPackage = (entry: string) => {
  const defPath = path.join(__dirname, '../../')
  fs.readdir(`${defPath}${entry}/`, (err, data) => {
    if (err) {
      console.log(red(`查找文件失败${err}`))
    }
    if (!data.length) {
      console.log(yellow('该文件夹下为空'))
    }
  })
}

type CmdType = {[propname: string]: any}
export const onBuild = async (cmd: CmdType) => {
  let { entry } = cmd
  if (!entry) {
    const result = await inquirer.prompt([
      {
        name: 'entry',
        type: 'input',
        message: '(必填) 请输入要打包的入口文件夹'
      }
    ])
    entry = result.entry
  }
  findPackage(entry)
}
