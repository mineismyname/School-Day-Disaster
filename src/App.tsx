/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Brain, 
  Users, 
  Clock, 
  AlertTriangle, 
  RefreshCw,
  Skull,
  Zap,
  MessageSquare,
  TrendingUp,
  Coins,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { GameState, LogEntry, GameAction } from './types';
import { ACTIONS, SCHOOL_PERIODS, SCHOOL_NEWS, FLAVOR_MESSAGES } from './constants';

const INITIAL_STATE: GameState = {
  mentalHealth: 100,
  physicalHealth: 100,
  socialStanding: 100,
  miseryPoints: 0,
  day: 1,
  period: SCHOOL_PERIODS[0],
  log: [{ id: '1', timestamp: Date.now(), message: 'Welcome to another miserable day at school.', type: 'system' }],
  isGameOver: false,
  gameOverReason: '',
  maxStatLimit: 100,
  statUpgradeLevel: 0,
  statUpgradeCost: 250,
  baseMiseryPerClick: 1,
  baseMiseryUpgradeCost: 250,
  baseMiseryUpgradeLevel: 0,
  actionUpgrades: {},
  healCost: 100,
  totalMiseryEarned: 0,
  timeLeft: 1200, // 20 minutes
  leaderboard: [],
};

export default function App() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<'Minor' | 'Major' | 'Catastrophic' | 'Apocalyptic' | 'Cosmic' | 'Existential' | 'Universal' | 'Multiversal' | 'Omniversal'>('Minor');
  const [newsIndex, setNewsIndex] = useState(0);
  const [clickAnimations, setClickAnimations] = useState<{ id: number; x: number; y: number; points: number }[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Load leaderboard
  useEffect(() => {
    const saved = localStorage.getItem('school_disaster_leaderboard');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setState(prev => ({ ...prev, leaderboard: parsed }));
      } catch (e) {
        console.error('Failed to load leaderboard', e);
      }
    }
  }, []);

  // 20-minute timer
  useEffect(() => {
    if (state.isGameOver) return;

    const timer = setInterval(() => {
      setState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(timer);
          return { 
            ...prev, 
            timeLeft: 0, 
            isGameOver: true, 
            gameOverReason: "Time's up! Your day of suffering has ended. The bell rings, but the trauma remains." 
          };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isGameOver]);

  // News Ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex(prev => (prev + 1) % SCHOOL_NEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Period progression
  useEffect(() => {
    if (state.isGameOver) return;

    const timer = setInterval(() => {
      setState(prev => {
        const currentIdx = SCHOOL_PERIODS.indexOf(prev.period);
        if (currentIdx === SCHOOL_PERIODS.length - 1) {
          return {
            ...prev,
            day: prev.day + 1,
            period: SCHOOL_PERIODS[0],
            log: [{ 
              id: Math.random().toString(), 
              timestamp: Date.now(), 
              message: `Day ${prev.day + 1} begins. The cycle of pain continues.`, 
              type: 'system' 
            }, ...prev.log].slice(0, 50)
          };
        }
        
        const nextPeriod = SCHOOL_PERIODS[currentIdx + 1];
        const homeMessage = nextPeriod === 'At Home' ? "School is over. Time to suffer in the comfort of your own room." : null;
        
        return {
          ...prev,
          period: nextPeriod,
          log: homeMessage ? [{
            id: Math.random().toString(),
            timestamp: Date.now(),
            message: homeMessage,
            type: 'system'
          }, ...prev.log].slice(0, 50) : prev.log
        };
      });
    }, 15000);

    return () => clearInterval(timer);
  }, [state.isGameOver]);

  // Stat Rubber-banding (Passive Recovery)
  useEffect(() => {
    if (state.isGameOver) return;

    const timer = setInterval(() => {
      setState(prev => {
        const calculateRecovery = (val: number) => {
          if (val >= prev.maxStatLimit) return 0;
          // The lower the stat, the faster it recovers (rubber banding)
          const gap = prev.maxStatLimit - val;
          return (gap * gap) / 5000 + 0.05;
        };

        return {
          ...prev,
          mentalHealth: Math.min(prev.maxStatLimit, prev.mentalHealth + calculateRecovery(prev.mentalHealth)),
          physicalHealth: Math.min(prev.maxStatLimit, prev.physicalHealth + calculateRecovery(prev.physicalHealth)),
          socialStanding: Math.min(prev.maxStatLimit, prev.socialStanding + calculateRecovery(prev.socialStanding)),
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isGameOver]);

  // Flavor Messages
  useEffect(() => {
    if (state.isGameOver) return;

    const timer = setInterval(() => {
      if (Math.random() > 0.5) {
        const msg = FLAVOR_MESSAGES[Math.floor(Math.random() * FLAVOR_MESSAGES.length)];
        setState(prev => ({
          ...prev,
          log: [{
            id: Math.random().toString(),
            timestamp: Date.now(),
            message: msg,
            type: 'system'
          }, ...prev.log].slice(0, 50)
        }));
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [state.isGameOver]);

  // Random Positive Events
  useEffect(() => {
    if (state.isGameOver) return;

    const timer = setInterval(() => {
      if (Math.random() > 0.6) {
        const events = [
          { msg: "Found a $5 bill in the hallway. Mood improved.", m: 5, p: 0, s: 0 },
          { msg: "Crush smiled at you. Social standing slightly recovered.", m: 10, p: 0, s: 5 },
          { msg: "Aced a surprise quiz. Mental health boost.", m: 15, p: 0, s: 2 },
          { msg: "Found a quiet spot to nap in the library.", m: 5, p: 10, s: 0 },
          { msg: "Someone complimented your shoes. Rare win.", m: 2, p: 0, s: 10 },
          { msg: "Teacher forgot to assign homework. Stress relief.", m: 12, p: 0, s: 0 },
          { msg: "Cafeteria served actual pizza today. Physical boost.", m: 5, p: 15, s: 0 },
          { msg: "Your meme got 50 likes on the school page.", m: 8, p: 0, s: 20 },
          { msg: "Found your lost gym shorts. Dignity restored.", m: 5, p: 0, s: 15 },
          { msg: "The bully got detention. Small justice.", m: 20, p: 0, s: 5 },
        ];
        const event = events[Math.floor(Math.random() * events.length)];
        
        setState(prev => ({
          ...prev,
          mentalHealth: Math.min(prev.maxStatLimit, prev.mentalHealth + event.m),
          physicalHealth: Math.min(prev.maxStatLimit, prev.physicalHealth + event.p),
          socialStanding: Math.min(prev.maxStatLimit, prev.socialStanding + event.s),
          log: [{
            id: Math.random().toString(),
            timestamp: Date.now(),
            message: `[EVENT] ${event.msg}`,
            type: 'event'
          }, ...prev.log].slice(0, 50)
        }));
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [state.isGameOver]);

  // Cooldown management
  useEffect(() => {
    const timer = setInterval(() => {
      setCooldowns(prev => {
        const next = { ...prev };
        let changed = false;
        Object.keys(next).forEach(key => {
          if (next[key] > 0) {
            next[key] -= 1;
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check game over
  useEffect(() => {
    if (state.isGameOver) return;

    if (state.mentalHealth <= 0) {
      setState(prev => ({ ...prev, isGameOver: true, gameOverReason: 'Total Mental Breakdown. You are now a hollow shell.' }));
    } else if (state.physicalHealth <= 0) {
      setState(prev => ({ ...prev, isGameOver: true, gameOverReason: 'Physical Collapse. The nurse gave you an ice pack, but it didn\'t help.' }));
    } else if (state.socialStanding <= 0) {
      setState(prev => ({ ...prev, isGameOver: true, gameOverReason: 'Social Outcast. You have been voted "Most Likely to be Forgotten".' }));
    }
  }, [state.mentalHealth, state.physicalHealth, state.socialStanding, state.isGameOver]);

  const calculateMiseryPoints = (mental: number, physical: number, social: number) => {
    const impact = Math.abs(mental) + Math.abs(physical) + Math.abs(social);
    const maxPossibleMissing = state.maxStatLimit * 3;
    const currentMissing = maxPossibleMissing - (state.mentalHealth + state.physicalHealth + state.socialStanding);
    
    // Multiplier: (maxPossibleMissing - currentStatsSum) / 50
    const multiplier = Math.max(1, currentMissing / 50);
    return Math.ceil(impact * 10 * multiplier);
  };

  const handleAction = useCallback((action: GameAction) => {
    const isPeriodAllowed = !action.allowedPeriods || action.allowedPeriods.includes(state.period);
    if (state.isGameOver || (cooldowns[action.id] || 0) > 0 || state.miseryPoints < action.cost || !isPeriodAllowed) return;

    const upgradeLevel = state.actionUpgrades[action.id] || 0;
    const mentalImpact = action.mentalImpact + (action.upgrade?.mentalImpactBonus || 0) * upgradeLevel;
    const physicalImpact = action.physicalImpact + (action.upgrade?.physicalImpactBonus || 0) * upgradeLevel;
    const socialImpact = action.socialImpact + (action.upgrade?.socialImpactBonus || 0) * upgradeLevel;

    const points = calculateMiseryPoints(mentalImpact, physicalImpact, socialImpact);
    
    const isNewCategory = ['Apocalyptic', 'Cosmic', 'Existential', 'Universal', 'Multiversal', 'Omniversal'].includes(action.category);

    const logMessage = action.upgrade && upgradeLevel > 0 
      ? `[UPGRADED] ${action.upgrade.label}: ${action.upgrade.description}`
      : action.logMessages 
        ? action.logMessages[Math.floor(Math.random() * action.logMessages.length)]
        : action.description;

    setState(prev => ({
      ...prev,
      miseryPoints: prev.miseryPoints - action.cost + points,
      totalMiseryEarned: prev.totalMiseryEarned + points,
      mentalHealth: Math.max(0, prev.mentalHealth + mentalImpact),
      physicalHealth: Math.max(0, prev.physicalHealth + physicalImpact),
      socialStanding: Math.max(0, prev.socialStanding + socialImpact),
      log: [{
        id: Math.random().toString(),
        timestamp: Date.now(),
        message: logMessage,
        type: 'action'
      }, ...(isNewCategory ? [{
        id: Math.random().toString(),
        timestamp: Date.now(),
        message: `The sheer scale of this disaster has reset all other cooldowns.`,
        type: 'system' as const
      }] : []), ...prev.log].slice(0, 50)
    }));

    if (isNewCategory) {
      setCooldowns({
        [action.id]: action.cooldown
      });
    } else {
      setCooldowns(prev => ({
        ...prev,
        [action.id]: action.cooldown
      }));
    }
  }, [state.isGameOver, cooldowns, state.miseryPoints, state.period, state.actionUpgrades, state.maxStatLimit, state.mentalHealth, state.physicalHealth, state.socialStanding]);

  const clickSkull = (e: React.MouseEvent) => {
    if (state.isGameOver) return;
    
    // Base points increase with days
    const basePoints = 2 + Math.floor(state.day);
    
    // Multiplier: (maxPossibleMissing - currentStatsSum) / 50
    const maxPossibleMissing = state.maxStatLimit * 3;
    const currentMissing = maxPossibleMissing - (state.mentalHealth + state.physicalHealth + state.socialStanding);
    const multiplier = Math.max(1, currentMissing / 50);
    
    const points = Math.ceil(basePoints * multiplier * state.baseMiseryPerClick);
    
    setState(prev => ({ 
      ...prev, 
      miseryPoints: prev.miseryPoints + points,
      totalMiseryEarned: prev.totalMiseryEarned + points
    }));
    
    const id = Date.now();
    setClickAnimations(prev => [...prev, { id, x: e.clientX, y: e.clientY, points }]);
    setTimeout(() => {
      setClickAnimations(prev => prev.filter(a => a.id !== id));
    }, 1000);
  };

  const upgradeStats = () => {
    if (state.miseryPoints >= state.statUpgradeCost) {
      setState(prev => ({
        ...prev,
        miseryPoints: prev.miseryPoints - prev.statUpgradeCost,
        maxStatLimit: prev.maxStatLimit + 50,
        statUpgradeLevel: prev.statUpgradeLevel + 1,
        statUpgradeCost: Math.floor(prev.statUpgradeCost * 2.5),
        mentalHealth: prev.maxStatLimit + 50,
        physicalHealth: prev.maxStatLimit + 50,
        socialStanding: prev.maxStatLimit + 50,
        log: [{
          id: Math.random().toString(),
          timestamp: Date.now(),
          message: `Max Stats increased to ${prev.maxStatLimit + 50}%! You are fully restored and ready for more pain.`,
          type: 'system'
        }, ...prev.log].slice(0, 50)
      }));
    }
  };

  const healCharacter = () => {
    if (state.miseryPoints >= state.healCost) {
      setState(prev => ({
        ...prev,
        miseryPoints: prev.miseryPoints - prev.healCost,
        mentalHealth: prev.maxStatLimit,
        physicalHealth: prev.maxStatLimit,
        socialStanding: prev.maxStatLimit,
        healCost: Math.floor(prev.healCost * 2.5),
        log: [{
          id: Math.random().toString(),
          timestamp: Date.now(),
          message: `You spent points to feel slightly better. Cooldowns reset. It won't last.`,
          type: 'system'
        }, ...prev.log].slice(0, 50)
      }));
      setCooldowns({});
    }
  };

  const upgradeAction = (actionId: string) => {
    const action = ACTIONS.find(a => a.id === actionId);
    if (!action || !action.upgrade) return;
    
    const currentLevel = state.actionUpgrades[actionId] || 0;
    const upgradeCost = Math.floor(action.cost * action.upgrade.costMultiplier * (currentLevel + 1));
    
    if (state.miseryPoints >= upgradeCost) {
      setState(prev => ({
        ...prev,
        miseryPoints: prev.miseryPoints - upgradeCost,
        actionUpgrades: {
          ...prev.actionUpgrades,
          [actionId]: currentLevel + 1
        },
        log: [{
          id: Math.random().toString(),
          timestamp: Date.now(),
          message: `Disaster Upgraded: ${action.upgrade?.label}! The suffering deepens.`,
          type: 'system'
        }, ...prev.log].slice(0, 50)
      }));
    }
  };

  const upgradeBaseMisery = () => {
    if (state.miseryPoints >= state.baseMiseryUpgradeCost) {
      setState(prev => ({
        ...prev,
        miseryPoints: prev.miseryPoints - prev.baseMiseryUpgradeCost,
        baseMiseryPerClick: prev.baseMiseryPerClick + 1,
        baseMiseryUpgradeLevel: prev.baseMiseryUpgradeLevel + 1,
        baseMiseryUpgradeCost: Math.floor(prev.baseMiseryUpgradeCost * 2.2),
        log: [{
          id: Math.random().toString(),
          timestamp: Date.now(),
          message: `Each click now yields more misery. Base misery is now ${prev.baseMiseryPerClick + 1}.`,
          type: 'system'
        }, ...prev.log].slice(0, 50)
      }));
    }
  };

  const resetGame = () => {
    setState({
      ...INITIAL_STATE,
      leaderboard: state.leaderboard // Keep leaderboard across resets
    });
    setCooldowns({});
    setActiveCategory('Minor');
    setHasSubmitted(false);
    setPlayerName('');
  };

  const submitScore = () => {
    if (!playerName.trim()) return;

    const newEntry = {
      name: playerName.trim(),
      score: state.totalMiseryEarned,
      timestamp: Date.now()
    };

    const updatedLeaderboard = [...state.leaderboard];
    const existingIndex = updatedLeaderboard.findIndex(e => e.name.toLowerCase() === newEntry.name.toLowerCase());

    if (existingIndex !== -1) {
      if (newEntry.score > updatedLeaderboard[existingIndex].score) {
        updatedLeaderboard[existingIndex] = newEntry;
      }
    } else {
      updatedLeaderboard.push(newEntry);
    }

    // Sort by score descending
    updatedLeaderboard.sort((a, b) => b.score - a.score);
    
    // Keep top 10
    const top10 = updatedLeaderboard.slice(0, 10);

    setState(prev => ({ ...prev, leaderboard: top10 }));
    localStorage.setItem('school_disaster_leaderboard', JSON.stringify(top10));
    setHasSubmitted(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatColor = (val: number) => {
    if (val > 70) return 'bg-emerald-500';
    if (val > 30) return 'bg-amber-500';
    return 'bg-red-500';
  };

    const currentMissing = (state.maxStatLimit * 3) - (state.mentalHealth + state.physicalHealth + state.socialStanding);
    const currentMultiplier = Math.max(1, currentMissing / 50);
    const filteredActions = ACTIONS.filter(a => a.category === activeCategory);

    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono p-4 md:p-8 flex flex-col gap-6 selection:bg-red-500 selection:text-white overflow-hidden">
      {/* News Ticker */}
      <div className="bg-red-900/20 border-y border-red-500/30 py-2 overflow-hidden whitespace-nowrap relative">
        <div className="flex items-center gap-4 animate-marquee">
          <span className="text-red-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-1">
            <AlertTriangle size={12} /> BREAKING NEWS:
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={newsIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs uppercase tracking-tight text-white/80"
            >
              {SCHOOL_NEWS[newsIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic text-red-500">
            School Day Disaster
          </h1>
          <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">
            Status: {state.isGameOver ? 'TERMINATED' : 'ACTIVE DEGRADATION'}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center">
            <button 
              onClick={healCharacter}
              disabled={state.miseryPoints < state.healCost || state.isGameOver}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                state.miseryPoints >= state.healCost 
                  ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20 text-red-500' 
                  : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <p className="text-[8px] font-bold uppercase">Heal</p>
              <div className="flex items-center gap-1">
                <Heart size={12} />
                <span className="text-xs font-black">Rest</span>
              </div>
              <p className="text-[8px] font-mono mt-1">Cost: {state.healCost}</p>
            </button>

            <button 
              onClick={upgradeStats}
              disabled={state.miseryPoints < state.statUpgradeCost || state.isGameOver}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                state.miseryPoints >= state.statUpgradeCost 
                  ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-500' 
                  : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <p className="text-[8px] font-bold uppercase">Max Stats</p>
              <div className="flex items-center gap-1">
                <TrendingUp size={12} />
                <span className="text-xs font-black">{state.maxStatLimit}%</span>
              </div>
              <p className="text-[8px] font-mono mt-1">Cost: {state.statUpgradeCost}</p>
            </button>

            <button 
              onClick={upgradeBaseMisery}
              disabled={state.miseryPoints < state.baseMiseryUpgradeCost || state.isGameOver}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                state.miseryPoints >= state.baseMiseryUpgradeCost 
                  ? 'bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 text-orange-500' 
                  : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <p className="text-[8px] font-bold uppercase">Base Misery</p>
              <div className="flex items-center gap-1">
                <Skull size={12} />
                <span className="text-xs font-black">{state.baseMiseryPerClick}</span>
              </div>
              <p className="text-[8px] font-mono mt-1">Cost: {state.baseMiseryUpgradeCost}</p>
            </button>
          </div>

          <div className="flex gap-8 items-center bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase">Time Left</p>
              <p className={`text-2xl font-bold ${state.timeLeft < 60 ? 'text-red-500 animate-pulse' : ''}`}>
                {formatTime(state.timeLeft)}
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase">Day</p>
              <p className="text-2xl font-bold">{state.day}</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-right">
              <p className="text-[10px] text-white/40 uppercase">Current Period</p>
              <p className="text-sm font-bold text-amber-400">{state.period}</p>
            </div>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg flex items-center gap-3">
            <Coins className="text-amber-500" size={24} />
            <div>
              <p className="text-[10px] text-amber-500/60 uppercase font-bold">Misery Points</p>
              <p className="text-2xl font-black text-amber-500">{state.miseryPoints}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
        {/* Stats Panel */}
        <section className="lg:col-span-4 flex flex-col gap-4 overflow-hidden">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
              <Zap size={14} /> Vital Signs
            </h2>
            
            <StatBar 
              label="Mental Health" 
              value={(state.mentalHealth / state.maxStatLimit) * 100} 
              displayValue={state.mentalHealth}
              icon={<Brain size={18} />} 
              color={getStatColor((state.mentalHealth / state.maxStatLimit) * 100)} 
            />
            <StatBar 
              label="Physical Health" 
              value={(state.physicalHealth / state.maxStatLimit) * 100} 
              displayValue={state.physicalHealth}
              icon={<Heart size={18} />} 
              color={getStatColor((state.physicalHealth / state.maxStatLimit) * 100)} 
            />
            <StatBar 
              label="Social Standing" 
              value={(state.socialStanding / state.maxStatLimit) * 100} 
              displayValue={state.socialStanding}
              icon={<Users size={18} />} 
              color={getStatColor((state.socialStanding / state.maxStatLimit) * 100)} 
            />
          </div>

          <div 
            onClick={clickSkull}
            className={`cursor-pointer group relative bg-red-500/10 border border-red-500/20 rounded-xl p-6 flex-1 flex flex-col items-center justify-center text-center gap-4 transition-all active:scale-95 ${state.isGameOver ? 'cursor-default' : 'hover:bg-red-500/20'}`}
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: (state.mentalHealth / state.maxStatLimit) * 100 < 30 ? [-2, 2, -2] : 0
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Skull size={100} className={state.isGameOver ? 'text-red-500' : 'text-white/20 group-hover:text-white/40 transition-colors'} />
              </motion.div>
              
              {/* Multiplier Display */}
              {!state.isGameOver && (
                <div className="absolute -top-4 -right-4 bg-black/80 border border-white/20 px-2 py-1 rounded-md shadow-xl">
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] text-white/40 uppercase font-bold">Multiplier</span>
                    <span className="text-sm font-black text-red-500">
                      {currentMultiplier.toFixed(1)}x
                    </span>
                    <span className="text-[8px] text-white/20">Scaling</span>
                  </div>
                </div>
              )}
              {!state.isGameOver && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  CLICK TO SUFFER
                </div>
              )}
              {state.isGameOver && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded rotate-12">
                    WASTED
                  </div>
                </motion.div>
              )}
            </div>
            <p className="text-xs text-white/40 italic max-w-[200px]">
              {state.isGameOver ? 'The end of the road.' : 'Click the skull to generate Misery Points. The more you suffer, the more you can do.'}
            </p>

            {/* Click Animations */}
            <AnimatePresence>
              {clickAnimations.map(anim => (
                <motion.div
                  key={anim.id}
                  initial={{ opacity: 1, y: anim.y - 50, x: anim.x - 20 }}
                  animate={{ opacity: 0, y: anim.y - 150 }}
                  exit={{ opacity: 0 }}
                  className="fixed pointer-events-none text-amber-500 font-black text-xl z-[100]"
                >
                  +{anim.points}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Actions Panel */}
        <section className="lg:col-span-8 flex flex-col gap-6 overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['Minor', 'Major', 'Catastrophic', 'Apocalyptic', 'Cosmic', 'Existential', 'Universal', 'Multiversal', 'Omniversal'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 min-w-[100px] py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto custom-scrollbar pr-2 max-h-[500px]">
            <AnimatePresence mode="popLayout">
              {filteredActions.map((action) => {
                const isPeriodAllowed = !action.allowedPeriods || action.allowedPeriods.includes(state.period);
                return (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    layout
                  >
                    <ActionButton 
                      action={action} 
                      onClick={() => handleAction(action)}
                      onUpgrade={() => upgradeAction(action.id)}
                      cooldown={cooldowns[action.id] || 0}
                      disabled={state.isGameOver || state.miseryPoints < action.cost || !isPeriodAllowed}
                      canAfford={state.miseryPoints >= action.cost && isPeriodAllowed}
                      upgradeLevel={state.actionUpgrades[action.id] || 0}
                      canAffordUpgrade={state.miseryPoints >= Math.floor(action.cost * (action.upgrade?.costMultiplier || 0) * ((state.actionUpgrades[action.id] || 0) + 1))}
                      upgradeCost={Math.floor(action.cost * (action.upgrade?.costMultiplier || 0) * ((state.actionUpgrades[action.id] || 0) + 1))}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Log */}
          <div className="bg-white/5 border border-white/10 rounded-xl h-[300px] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <MessageSquare size={14} /> Incident Report
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              <AnimatePresence initial={false}>
                {state.log.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-xs p-2 rounded border-l-2 ${
                      entry.type === 'action' ? 'border-red-500 bg-red-500/5' : 
                      entry.type === 'event' ? 'border-emerald-500 bg-emerald-500/5' : 
                      'border-white/20 bg-white/5'
                    }`}
                  >
                    <span className="text-white/30 mr-2">[{new Date(entry.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                    {entry.message}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Game Over Modal */}
      <AnimatePresence>
        {state.isGameOver && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#151515] border-2 border-red-600 p-8 rounded-2xl max-w-md w-full text-center space-y-6 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            >
              <AlertTriangle size={64} className="text-red-600 mx-auto" />
              <div className="space-y-2">
                <h2 className="text-3xl font-black uppercase italic text-red-600">Game Over</h2>
                <p className="text-white/80">{state.gameOverReason}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left bg-white/5 p-4 rounded-lg border border-white/10">
                <div>
                  <p className="text-[10px] text-white/40 uppercase">Survival Time</p>
                  <p className="font-bold">Day {state.day}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase">Total Misery Earned</p>
                  <p className="font-bold text-amber-500">{state.totalMiseryEarned}</p>
                </div>
              </div>

              {!hasSubmitted ? (
                <div className="space-y-3">
                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-[10px] text-white/40 uppercase font-bold">Enter Name for Leaderboard</label>
                    <input 
                      type="text" 
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder="Your miserable name..."
                      maxLength={15}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:border-red-500 outline-none transition-colors"
                    />
                  </div>
                  <button 
                    onClick={submitScore}
                    disabled={!playerName.trim()}
                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors uppercase text-xs tracking-widest"
                  >
                    Submit Score
                  </button>
                </div>
              ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-lg text-emerald-500 text-xs font-bold uppercase">
                  Score Submitted Successfully
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 border-b border-white/10 pb-2">Leaderboard</h3>
                <div className="space-y-1 max-h-[150px] overflow-y-auto custom-scrollbar">
                  {state.leaderboard.length > 0 ? (
                    state.leaderboard.map((entry, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] bg-white/5 p-2 rounded">
                        <div className="flex items-center gap-2">
                          <span className="text-white/40">{idx + 1}.</span>
                          <span className="font-bold text-white/80">{entry.name}</span>
                        </div>
                        <span className="font-black text-amber-500">{entry.score}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] text-white/20 italic">No entries yet. Be the first to suffer.</p>
                  )}
                </div>
              </div>

              <button 
                onClick={resetGame}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
              >
                <RefreshCw size={20} /> Try Again (If You Dare)
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-[10px] text-white/20 text-center uppercase tracking-[0.2em] pt-4">
        &copy; 2024 High School Misery Simulator v1.1.0 // All Dignity Forfeited
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

interface StatBarProps {
  label: string;
  value: number;
  displayValue: number;
  icon: React.ReactNode;
  color: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, displayValue, icon, color }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2 text-white/80">
          {icon}
          <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
        </div>
        <span className={`text-sm font-black ${value < 30 ? 'animate-pulse text-red-500' : ''}`}>{Math.round(displayValue)}%</span>
      </div>
      <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, value)}%` }}
          className={`h-full rounded-full ${color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
        />
      </div>
    </div>
  );
}

interface ActionButtonProps {
  action: GameAction;
  onClick: () => void;
  onUpgrade: () => void;
  cooldown: number;
  disabled: boolean;
  canAfford: boolean;
  upgradeLevel: number;
  canAffordUpgrade: boolean;
  upgradeCost: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  action, 
  onClick, 
  onUpgrade, 
  cooldown, 
  disabled, 
  canAfford, 
  upgradeLevel,
  canAffordUpgrade,
  upgradeCost
}) => {
  const isOnCooldown = cooldown > 0;
  
  return (
    <div className="relative group flex flex-col gap-2">
      <button
        onClick={onClick}
        disabled={disabled || isOnCooldown}
        className={`relative text-left p-4 rounded-xl border transition-all duration-200 overflow-hidden w-full ${
          disabled || isOnCooldown 
            ? 'bg-white/5 border-white/5 opacity-50 cursor-not-allowed' 
            : 'bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-red-500/5 cursor-pointer'
        }`}
      >
        {/* Cooldown Overlay */}
        {isOnCooldown && (
          <motion.div 
            initial={{ height: '100%' }}
            animate={{ height: '0%' }}
            transition={{ duration: cooldown, ease: 'linear' }}
            className="absolute bottom-0 left-0 right-0 bg-red-500/10 pointer-events-none"
          />
        )}
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-1">
            <h3 className={`font-bold text-sm uppercase tracking-tight ${isOnCooldown ? 'text-white/40' : 'text-white group-hover:text-red-400'}`}>
              {upgradeLevel > 0 ? `[Lvl ${upgradeLevel}] ` : ''}{action.label}
            </h3>
            <div className="flex flex-col items-end">
              {isOnCooldown && <span className="text-[10px] font-mono text-red-500 font-bold">{cooldown}s</span>}
              <div className={`flex items-center gap-1 text-[10px] font-black ${canAfford ? 'text-amber-500' : 'text-red-500'}`}>
                <Coins size={10} /> {action.cost}
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/40 leading-tight mb-3 line-clamp-2">
            {upgradeLevel > 0 && action.upgrade ? action.upgrade.description : action.description}
          </p>
          <div className="flex gap-3">
            <ImpactBadge label="M" value={action.mentalImpact + (action.upgrade?.mentalImpactBonus || 0) * upgradeLevel} />
            <ImpactBadge label="P" value={action.physicalImpact + (action.upgrade?.physicalImpactBonus || 0) * upgradeLevel} />
            <ImpactBadge label="S" value={action.socialImpact + (action.upgrade?.socialImpactBonus || 0) * upgradeLevel} />
          </div>
        </div>
      </button>

      {action.upgrade && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onUpgrade();
          }}
          disabled={!canAffordUpgrade}
          className={`py-1 px-3 rounded-lg border text-[8px] font-bold uppercase tracking-widest transition-all flex items-center justify-between ${
            canAffordUpgrade
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/20'
              : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
          }`}
        >
          <span>Upgrade: {action.upgrade.label}</span>
          <span className="font-mono">Cost: {upgradeCost}</span>
        </button>
      )}
    </div>
  );
}

function ImpactBadge({ label, value }: { label: string, value: number }) {
  if (value === 0) return null;
  return (
    <div className="flex items-center gap-1">
      <span className="text-[8px] text-white/30 font-bold">{label}</span>
      <span className={`text-[10px] font-bold ${value < 0 ? 'text-red-500' : 'text-emerald-500'}`}>
        {value > 0 ? '+' : ''}{value}
      </span>
    </div>
  );
}
