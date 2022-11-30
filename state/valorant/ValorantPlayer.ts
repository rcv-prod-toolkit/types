export interface ValorantPlayerType {
  subject: string
  characterId: string
  characterSelectionState: '' | 'selected' | 'locked'
  pregamePlayerState: string
  competitiveTier: number
  stats: PlayerStatsType
  name: {
    displayName: string
    gameName: string
    tagLine: string
    nickName: string
  }
  playerIdentity: {
    playerCardId: string
    playerTitleId: string
    accountLevel: number
    preferredLevelBorderId: string
    incognito: boolean
    hideAccountLevel: boolean
  }
  seasonalBadgeInfo: {
    seasonId: string
    numberOfWins: number
    winsByTier: number | null
    rank: number
    leaderboardRank: number
  }
}

export interface PlayerStatsType {
  score: number
  roundsPlayed: number
  kills: number
  deaths: number
  assists: number
  playtimeMillis: number
  abilityCasts: AbilityCastsType
}

export interface AbilityCastsType {
  grenadeCasts: number
  ability1Casts: number
  ability2Casts: number
  ultimateCasts: number
}