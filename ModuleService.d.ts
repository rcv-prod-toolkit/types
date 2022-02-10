import { Module, Plugin } from './Module'

export declare class ModuleService {
  modules: Module[]
  activePlugins: Plugin[]

  public initialize (): Promise<void>
  public getModulePath (): string
  private loadPlugins (): Promise<Plugin[]>
  private loadPlugin (module: Module): Promise<Plugin>
  private handleFolder (folder: string): Promise<Module | null>
  private handleModule (folder: string): Promise<Module | null>
}