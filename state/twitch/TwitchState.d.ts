import { Team } from '../team/TeamState'

export interface TwitchStateType {
  teams: {
    blue?: Team
    red?: Team
  }
  bestOf: number
  show: boolean
  prediction: {
    inProgress: boolean
    id: string
    length: number
    outcomes: Outcome[]
    status: string
  }
}

export interface Outcome {
  channel_points: number
  color: string
  id: string
  title: string
  top_predictors: TopPredictor[]
  users: number
}

export interface TopPredictor {
  channel_points_used: number
  channel_points_won: number
  user_id: string
  user_login: string
  user_name: string
}