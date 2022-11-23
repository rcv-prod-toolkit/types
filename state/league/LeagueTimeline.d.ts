export interface LeagueTimelineType {
  frames: Array<MatchTimelineFrameType>
  frameInterval: number
}

export interface CoordinateType {
  x: number
  y: number
}

export interface MatchTimelineFrameType {
  timestamp: number
  participantFrames: {
    [participantId: string]: ParticipantFrameType
  }
}

export interface ParticipantFrameType {
  currentGold: number
  championStats: TimelineChampionStatsType
  damageStats: TimelineDamageStatsType
  goldPerSecond: number
  jungleMinionsKilled: number
  level: number
  minionsKilled: number
  participantId: number
  position: CoordinateType
  timeEnemySpentControlled: number
  totalGold: number
  xp: number
}

export interface TimelineChampionStatsType {
  abilityPower: number
  armor: number
  armorPen: number
  armorPenPercent: number
  attackDamage: number
  attackSpeed: number
  bonusArmorPenPercent: number
  bonusMagicPenPercent: number
  ccReduction: number
  cooldownReduction: number
  health: number
  healthMax: number
  healthRegen: number
  lifesteal: number
  magicPen: number
  magicPenPercent: number
  magicResist: number
  movementSpeed: number
  power: number
  powerMax: number
  powerRegen: number
  spellVamp: number
}

export interface TimelineDamageStatsType {
  magicDamageDone: number
  magicDamageDoneToChampions: number
  magicDamageTaken: number
  physicalDamageDone: number
  physicalDamageDoneToChampions: number
  physicalDamageTaken: number
  totalDamageDone: number
  totalDamageDoneToChampions: number
  totalDamageTaken: number
  trueDamageDone: number
  trueDamageDoneToChampions: number
  trueDamageTaken: number
}