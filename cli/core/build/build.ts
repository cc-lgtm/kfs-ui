const fs = require('fs-extra')
const inquirer = require('inquirer')
import { red, green, yellow } from 'kolorist'
const path = require('path')
import { buildAll } from './compile'

const BUILDOPTIONS = ['all', 'demand'] as string[]
const defPath = path.join(__dirname, '../../')

const findPackage = (entry: string, output?: string) => {
  const ENTRY = `${defPath}${entry}/`
  const OUTPUT = output || `${defPath}${output}lib`
  fs.readdir(ENTRY, (err: Error, data: any[]) => {
    if (err) {
      console.log(red(`查找文件失败${err}`))
    } else {
      if (!data?.length) {
        console.log(yellow('该文件夹下为空'))
      }
      buildAll(ENTRY, OUTPUT)
      console.log(green('编译成功: 请运行 yarn build'))
    }
  })
}

const inputType = async () => {
  const info = await inquirer.prompt([
    {
      name: 'type',
      type: 'list',
      message: '(必选) 请选择打包的方式 all or demand',
      choices: BUILDOPTIONS,
      default: 0
    }
  ])
  return info
}

type CmdType = { [propname: string]: any }
export const onBuild = async (cmd: CmdType) => {
  let { type } = cmd
  const info = await inputType()
  type = info.type
  const options = await inquirer.prompt([
    {
      name: 'entry',
      type: 'input',
      message: '(必填) 请输入打包的入口文件夹'
    },
    {
      name: 'output',
      type: 'input',
      message: '(可填) 请输入打包到那个文件夹,默认项目下lib文件夹'
    }
  ])
  const { entry, output } = options
  if (entry === '') {
    console.log(red('入口文件不能为空'))
  }
  findPackage(entry, output)
}
