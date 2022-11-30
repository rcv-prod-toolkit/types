import { ValorantPlayerType } from './ValorantPlayer';

export interface ValorantTeamType {
  teamId: 'red' | 'blue',
  players: Map<string, ValorantPlayerType>
  won: boolean
  rounds: number
}