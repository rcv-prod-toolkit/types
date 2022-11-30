import { LeagueTeamType } from './LeagueTeam'
import { LeagueTimelineType } from './LeagueTimeline'
import { Status } from '../Status'

export interface LeagueStateType {
  matchId?: string
  gameLength?: number
  status: Status
  timeline?: LeagueTimelineType
  teams?: {
    blue?: LeagueTeamType
    red?: LeagueTeamType
  },
  champSelect?: {
    isActive: boolean
    showSummoners: boolean
    type?: DraftType
    time?: number
    phase?: string
  }
}

export enum DraftType {
  BLIND_PICK = 'SimulPickStrategy',
  DRAFT_MODE = 'DraftModeSinglePickStrategy',
  ALL_RANDOM = 'AllRandomPickStrategy',
  TOURNAMENT_DRAFT = 'TournamentPickStrategy'
}