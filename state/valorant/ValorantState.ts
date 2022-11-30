import { Status } from '../Status'
import { ValorantTeamType } from './ValorantTeam'

export interface ValorantStateType {
  matchId?: string
  gameLength?: number
  status: Status
  teams?: {
    blue?: ValorantTeamType
    red?: ValorantTeamType
  },
  agentSelect?: {
    isActive: boolean
    time?: number
    phase?: string
  },
  map: string
  rounds: number
}