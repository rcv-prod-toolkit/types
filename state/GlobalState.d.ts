import { LeagueStateType } from './league/LeagueState'

export interface GlobalState {
  league?: LeagueStateType,
  /* valorant?: ValorantState,
  teams?: TeamState,
  casters?: CasterState,
  twitch?: TwitchState */
}