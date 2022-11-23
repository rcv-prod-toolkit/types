import { LeagueTeamType } from './LeagueTeam'
import { LeagueTimelineType } from './LeagueTimeline'

export interface LeagueStateType {
  matchId?: string
  gameLength?: number
  status: Status
  timeline?: LeagueTimelineType
  teams?: {
    blue?: LeagueTeamType
    red?: LeagueTeamType
  },
  draftType?: DraftType
  draftTime?: number,
  draftPhase?: string,
}

export enum DraftType {
  BLIND_PICK = 'SimulPickStrategy',
  DRAFT_MODE = 'DraftModeSinglePickStrategy',
  ALL_RANDOM = 'AllRandomPickStrategy',
  TOURNAMENT_DRAFT = 'TournamentPickStrategy'
}

export enum Status {
  OFFLINE,
  LOBBY,
  DRAFT,
  INGAME,
  POSTGAME
}