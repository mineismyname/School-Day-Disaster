export enum StatType {
  MENTAL = 'MENTAL',
  PHYSICAL = 'PHYSICAL',
  SOCIAL = 'SOCIAL',
}

export interface GameAction {
  id: string;
  label: string;
  description: string;
  logMessages?: string[];
  mentalImpact: number;
  physicalImpact: number;
  socialImpact: number;
  cooldown: number; // in seconds
  cost: number;
  category: 'Minor' | 'Major' | 'Catastrophic' | 'Apocalyptic' | 'Cosmic' | 'Existential' | 'Universal' | 'Multiversal' | 'Omniversal';
  allowedPeriods?: string[];
  upgrade?: {
    label: string;
    description: string;
    mentalImpactBonus: number;
    physicalImpactBonus: number;
    socialImpactBonus: number;
    costMultiplier: number;
  };
}

export interface GameState {
  mentalHealth: number;
  physicalHealth: number;
  socialStanding: number;
  miseryPoints: number;
  day: number;
  period: string;
  log: LogEntry[];
  isGameOver: boolean;
  gameOverReason: string;
  maxStatLimit: number;
  statUpgradeLevel: number;
  statUpgradeCost: number;
  baseMiseryPerClick: number;
  baseMiseryUpgradeCost: number;
  baseMiseryUpgradeLevel: number;
  actionUpgrades: Record<string, number>; // actionId -> level
  healCost: number;
  totalMiseryEarned: number;
  timeLeft: number; // in seconds
  leaderboard: LeaderboardEntry[];
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: number;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  message: string;
  type: 'action' | 'event' | 'system';
}
