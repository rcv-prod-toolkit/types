import { CasterStateType } from './caster/CasterState'
import { LeagueStateType } from './league/LeagueState'
import { TeamStateType } from './team/TeamState'
import { TwitchStateType } from './twitch/TwitchState'
import { ValorantStateType } from './valorant/ValorantState'

export interface GlobalState {
  league?: LeagueStateType,
  valorant?: ValorantStateType,
  teams?: TeamStateType,
  casters?: CasterStateType,
  twitch?: TwitchStateType
}