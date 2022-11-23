import { LeaguePlayerType } from './LeaguePlayer'
import { LeagueChampionType } from './LeagueChampion'

export interface LeagueTeamType {
  teamId: 100 | 200
  players: Map<string, LeaguePlayerType>
  bans: Array<LeaguePickBan>
  objectives: {
    turrets: Array<LeagueTurretType>
    drakes: Array<LeagueDrakeType>
    baron: Array<LeagueObjectiveType>
    herald: Array<LeagueObjectiveType>
    inhibs: Array<LeagueInhibType>
    plates: Array<LeaguePlateType>
  },
  kills: Array<LeagueKillType>
  won: boolean
}

export interface LeagueObjectiveType {
  time: number
  killer: string
  assists: Array<string>
}

export interface LeagueTurretType extends LeagueObjectiveType {
  lane: Lane,
  position: number
}
export interface LeagueInhibType extends LeagueObjectiveType {
  lane: Lane
}
export interface LeaguePlateType extends LeagueObjectiveType {
  lane: Lane
}
export interface LeagueDrakeType extends LeagueObjectiveType {
  drake: DrakeType
}
export interface LeagueKillType extends LeagueObjectiveType {
  victim: string
}

export interface LeaguePickBan {
  champion: LeagueChampionType
  turn: number
  isComplete: boolean
  isActive: boolean
}

export enum Lane {
  TOP,
  MID,
  BOT
}

export enum DrakeType {
  HextechDragon = 'SRU_Dragon_Hextech',
  ChemtechDragon = 'SRU_Dragon_Chemtech',
  CloudDragon = 'SRU_Dragon_Air',
  ElderDragon = 'SRU_Dragon_Elder',
  InfernalDragon = 'SRU_Dragon_Fire',
  OceanDragon = 'SRU_Dragon_Water',
  MountainDragon = 'SRU_Dragon_Earth',
}