import { LeaguePickBanType } from './LeagueTeam'

export interface LeaguePlayerType {
  summonerId: string
  nickName: string
  summonerName: string
  profileIcon: number
  summonerLevel: number
  elo?: EloType
  pick?: LeaguePickBanType
  spell1?: SpellType
  spell2?: SpellType
  perks?: PerksType,
  stats?: Partial<PlayerStatsType>
  items?: Array<ItemType>
}

export interface PerksType {
  statPerks: {
    defense: number
    flex: number
    offense: number
  }
  styles: Array<PerkStyleType>
}

export interface PerkStyleType {
  description: 'primaryStyle' | 'subStyle'
  style: number
  selections: Array<PerkStyleSelectionType>
}

export interface PerkStyleSelectionType {
  perk: number
  var1: number
  var2: number
  var3: number
}

export interface SpellType {
  id: number
  key: string
}

export interface ItemType {
  id: number
  time?: number
}

export interface PlayerStatsType {
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  goldEarned: number
  goldSpent: number
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusTakedowns: number
  nexusLost: number
  objectivesStolen: number
  objectivesStolenAssists: number
  participantId: number
  pentaKills: number
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  quadraKills: number
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  timeCCingOthers: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
}

export interface EloType {
  tier: string
  division?: string 
}