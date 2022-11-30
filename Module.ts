import { Logger } from 'winston'
import { LPTE } from './LPTE'
import { MultiBar } from 'cli-progress'
import { ModuleType } from './ModuleType'

export interface PackageJson {
  name: string
  version: string
  author: string
  dependencies?: { [n: string]: string }
  devDependencies?: { [n: string]: string }
  toolkit: ToolkitConfig
}

export interface PluginConfig {
  main: string
}

export interface ToolkitConfig {
  modes: ModuleType[]
  plugin: undefined | PluginConfig
  needsBuild?: boolean
  toolkitVersion?: string
  dependencies?: string[]
}

export interface Asset {
  name: string
  type: 'plugin' | 'module' | 'theme'
  version: string
  download_url: string
}

export interface ModuleInterface {
  packageJson: PackageJson
  plugin: undefined | PluginInterface
  folder: string
  asset?: Asset
  updateAvailable: boolean
  getName (): string
  getVersion (): string
  getNewestVersion (): string
  getAuthor (): string
  getConfig (): ToolkitConfig
  hasMode (mode: ModuleType): boolean
  hasPlugin (): boolean
  getPlugin (): PluginInterface | undefined
  getFolder (): string
  toJson (goDeep: boolean): any
}

export const enum PluginStatus {
  RUNNING = 'RUNNING',
  UNAVAILABLE = 'UNAVAILABLE',
  DEGRADED = 'DEGRADED'
}

export interface PluginContextInterface {
  log: Logger
  require: (file: string) => any
  LPTE: LPTE
  plugin: PluginInterface
  progress: MultiBar
}

export interface PluginInterface {
  isLoaded: boolean
  status: PluginStatus
  module: ModuleInterface
  context: undefined | PluginContextInterface
  getModule (): ModuleInterface
  getPluginConfig (): any
  getMain (): string
  toJson (goDeep: boolean): any
  initialize (): void
}