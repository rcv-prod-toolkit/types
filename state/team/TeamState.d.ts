export interface TeamStateType {
  state: 'NO_MATCH' | 'READY'
  teams: {
    blue?: Team
    red?: Team
  }
  bestOf: number
  id?: string
  roundOf: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048
}

export interface Team {
  name: string
  tag: string
  score: number
  logo?: string
  color?: string
  standing?: string
  coach?: string
  id: string
}
