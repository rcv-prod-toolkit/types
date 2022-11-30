import { Asset, ModuleInterface, PluginInterface } from './Module'

export declare class ModuleService {
  modules: ModuleInterface[]
  activePlugins: PluginInterface[]
  assets: Asset[]

  public initialize (): Promise<void>
  public getAssets (): Promise<Asset[]>
  public getModulePath (): string
  private loadPlugins (): Promise<Plugin[]>
  private loadPlugin (module: ModuleInterface): Promise<Plugin>
  private handleFolder (folder: string): Promise<ModuleInterface | null>
  private handleModule (folder: string): Promise<ModuleInterface | null>
  private install(asset: Asset): Promise<void>
}