import { Logger } from 'winston'
import { LPTE } from './LPTE'
import { MultiBar } from 'cli-progress'
import { ModuleType } from './ModuleType'

export interface PackageJson {
  name: string
  version: string
  author: string
  toolkit: ToolkitConfig
}

export interface PluginConfig {
  main: string
}

export interface ToolkitConfig {
  modes: ModuleType[]
  plugin: undefined | PluginConfig
}

export declare class Module {
  packageJson: PackageJson
  plugin: undefined | Plugin
  folder: string

  constructor (packageJson: any, folder: string)
  getName (): string
  getVersion (): string
  getAuthor (): string
  getConfig (): ToolkitConfig
  hasMode (mode: ModuleType): boolean
  hasPlugin (): boolean
  getPlugin (): Plugin | undefined
  getFolder (): string
  toJson (goDeep: boolean): any
}

export const enum PluginStatus {
  RUNNING = 'RUNNING',
  UNAVAILABLE = 'UNAVAILABLE',
  DEGRADED = 'DEGRADED'
}

export declare class PluginContext {
  log: Logger
  require: (file: string) => any
  LPTE: LPTE
  plugin: Plugin
  progress: MultiBar

  constructor (plugin: Plugin)
}

export declare class Plugin {
  isLoaded: boolean
  status: PluginStatus
  module: Module
  context: undefined | PluginContext

  constructor (module: Module)

  getModule (): Module
  getPluginConfig (): any
  getMain (): string
  toJson (goDeep: boolean): any
  initialize (svc: ModuleService): void
}