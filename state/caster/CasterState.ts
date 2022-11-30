export interface CasterStateType {
  casterSets: {
    1: Caster[]
    2: Caster[]
  }
}

export interface Caster {
  name: string
  platform: string
  handle: string
  id: string
}