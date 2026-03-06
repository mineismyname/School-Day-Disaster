import { GameAction } from './types';

export const SCHOOL_PERIODS = [
  'Homeroom',
  '1st Period: Math',
  '2nd Period: History',
  'Lunch Break',
  '3rd Period: Gym',
  '4th Period: Science',
  'After School',
  'At Home',
];

export const ACTIONS: GameAction[] = [
  // Minor Disasters
  {
    id: 'trip',
    label: 'Trip in Hallway',
    description: 'A classic. Faceplant right in front of the cheerleaders.',
    logMessages: [
      'You ate the floor. The cheerleaders didn\'t even stop talking.',
      'Gravity betrayed you in the most public way possible.',
      'Your shoelaces had a secret meeting. You were not invited.',
      'A textbook faceplant. 10/10 for form, 0/10 for dignity.'
    ],
    mentalImpact: -0.1,
    physicalImpact: -0.5,
    socialImpact: -0.5,
    cooldown: 10,
    cost: 5,
    category: 'Minor',
    upgrade: {
      label: 'The Scorpion',
      description: 'Your legs flew over your head. It looked painful.',
      mentalImpactBonus: -0.2,
      physicalImpactBonus: -0.3,
      socialImpactBonus: -0.5,
      costMultiplier: 10
    }
  },
  {
    id: 'wrong-answer',
    label: 'Confidently Wrong Answer',
    description: 'Shout out "42" when asked for the capital of France.',
    logMessages: [
      'You shouted "42". The teacher just stared. For a long time.',
      '"Paris is a myth!" you yelled. It was not the right time.',
      'You were so sure. You were so, so wrong.',
      'The silence after your answer was louder than the shout.'
    ],
    mentalImpact: -0.2,
    physicalImpact: 0,
    socialImpact: -0.2,
    cooldown: 15,
    cost: 5,
    category: 'Minor',
    allowedPeriods: ['2nd Period: History'],
    upgrade: {
      label: 'The Argument',
      description: 'You tried to double down and argue with the teacher.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: 0,
      socialImpactBonus: -0.8,
      costMultiplier: 10
    }
  },
  {
    id: 'voice-crack',
    label: 'Epic Voice Crack',
    description: 'During your solo presentation. It was high-pitched.',
    logMessages: [
      'Your voice hit a note only dogs can hear.',
      'You sounded like a dying flute for a second.',
      'The presentation was going well until the puberty ghost visited.',
      'A squeak heard \'round the world.'
    ],
    mentalImpact: -0.5,
    physicalImpact: 0,
    socialImpact: -0.3,
    cooldown: 30,
    cost: 10,
    category: 'Minor',
    upgrade: {
      label: 'The Opera Note',
      description: 'Your voice cracked so hard it shattered a window.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: 0,
      socialImpactBonus: -0.5,
      costMultiplier: 5
    }
  },
  {
    id: 'bathroom-stuck',
    label: 'Toilet Paper Trail',
    description: 'Walk out of the stall with a 3-foot tail of Charmin.',
    logMessages: [
      'You have a tail now. It\'s white and 2-ply.',
      'The bathroom followed you into the hallway.',
      'Everyone knows where you just came from.',
      'A majestic paper trail marks your path.'
    ],
    mentalImpact: -0.3,
    physicalImpact: 0,
    socialImpact: -0.8,
    cooldown: 45,
    cost: 15,
    category: 'Minor',
    upgrade: {
      label: 'The Full Roll',
      description: 'You accidentally took the whole roll with you.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: 0,
      socialImpactBonus: -1.2,
      costMultiplier: 4
    }
  },
  {
    id: 'stuck-zipper',
    label: 'Stuck Zipper',
    description: 'Your fly is down and the zipper is jammed. Forever.',
    logMessages: [
      'The zipper is the boss now. And it says "open".',
      'A permanent breeze. Great for ventilation, bad for social life.',
      'You tried to fix it. You only made it angrier.',
      'The ultimate wardrobe betrayal.'
    ],
    mentalImpact: -0.2,
    physicalImpact: 0,
    socialImpact: -0.3,
    cooldown: 20,
    cost: 20,
    category: 'Minor',
    upgrade: {
      label: 'The Ripped Seam',
      description: 'While trying to fix the zipper, you ripped the whole seam.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: 0,
      socialImpactBonus: -0.8,
      costMultiplier: 3
    }
  },
  {
    id: 'wrong-name',
    label: 'Call Teacher "Mom"',
    description: 'The whole class went silent. You can never go back.',
    logMessages: [
      'You called Mr. Henderson "Mom". He didn\'t hug you.',
      'The word "Mom" escaped your lips. The room went cold.',
      'You are now legally the teacher\'s child. In your mind.',
      'A slip of the tongue that will haunt your dreams.'
    ],
    mentalImpact: -0.8,
    physicalImpact: 0,
    socialImpact: -0.5,
    cooldown: 40,
    cost: 25,
    category: 'Minor',
    upgrade: {
      label: 'The Hug Attempt',
      description: 'You instinctively went in for a hug after calling them Mom.',
      mentalImpactBonus: -1.2,
      physicalImpactBonus: 0,
      socialImpactBonus: -1.5,
      costMultiplier: 5
    }
  },
  {
    id: 'sneeze-fail',
    label: 'The Snot Rocket',
    description: 'A massive sneeze during a quiet test. No tissues in sight.',
    logMessages: [
      'A biological weapon was launched from your nose.',
      'The test paper is now... damp.',
      'You sneezed. It was messy. The silence was judgmental.',
      'No tissue. Just regret.'
    ],
    mentalImpact: -0.5,
    physicalImpact: -0.5,
    socialImpact: -1,
    cooldown: 35,
    cost: 30,
    category: 'Minor',
    upgrade: {
      label: 'The Wet Test',
      description: 'The sneeze was so powerful it soaked the person\'s test in front of you.',
      mentalImpactBonus: -0.8,
      physicalImpactBonus: -0.2,
      socialImpactBonus: -2,
      costMultiplier: 4
    }
  },
  {
    id: 'backpack-spill',
    label: 'Backpack Explosion',
    description: 'It unzipped itself. Your diary is now public property.',
    logMessages: [
      'Your life story is scattered across the linoleum.',
      'The zipper gave up. Your secrets are free.',
      'A waterfall of pens, crumbs, and shame.',
      'Everyone knows you still like that one cartoon.'
    ],
    mentalImpact: -0.6,
    physicalImpact: 0,
    socialImpact: -0.8,
    cooldown: 50,
    cost: 35,
    category: 'Minor',
    upgrade: {
      label: 'The Wind Gust',
      description: 'A sudden gust of wind blew your diary pages across the entire school.',
      mentalImpactBonus: -1.5,
      physicalImpactBonus: 0,
      socialImpactBonus: -2,
      costMultiplier: 6
    }
  },
  {
    id: 'locker-jam',
    label: 'Locker Jam',
    description: 'Kicking it only made it louder. Everyone is watching.',
    logMessages: [
      'The locker is a vault. You don\'t have the combination.',
      'You fought the locker. The locker won.',
      'Kicking metal makes a very distinct "I am a loser" sound.',
      'Your books are safe. Too safe.'
    ],
    mentalImpact: -0.2,
    physicalImpact: -0.5,
    socialImpact: -0.2,
    cooldown: 25,
    cost: 15,
    category: 'Minor',
    upgrade: {
      label: 'The Crowbar',
      description: 'You tried to use a crowbar and ended up breaking the entire locker row.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: -0.5,
      socialImpactBonus: -1,
      costMultiplier: 8
    }
  },
  {
    id: 'mismatched-socks',
    label: 'Mismatched Shoes',
    description: 'One sneaker, one loafer. How did you not notice?',
    logMessages: [
      'You are walking with a limp. Oh wait, it\'s just the shoes.',
      'A fashion statement that says "I woke up in a panic".',
      'Left foot: Business. Right foot: Party.',
      'The mismatch is subtle. The shame is not.'
    ],
    mentalImpact: -0.1,
    physicalImpact: -0.2,
    socialImpact: -0.3,
    cooldown: 20,
    cost: 10,
    category: 'Minor',
    upgrade: {
      label: 'Left Shoe on Right Foot',
      description: 'Not only are they mismatched, but you put them on the wrong feet.',
      mentalImpactBonus: -0.3,
      physicalImpactBonus: -0.5,
      socialImpactBonus: -0.5,
      costMultiplier: 5
    }
  },
  {
    id: 'lunch-leak',
    label: 'Leaky Juice Box',
    description: 'It looks like you had an accident. It was just apple juice.',
    logMessages: [
      'Apple juice. In that specific spot. Nobody believes you.',
      'The box was under pressure. Now you are too.',
      'A sticky, sugary disaster in your lap.',
      'You smell like a fermented orchard.'
    ],
    mentalImpact: -0.4,
    physicalImpact: 0,
    socialImpact: -1.2,
    cooldown: 60,
    cost: 40,
    category: 'Minor',
    upgrade: {
      label: 'The Soda Explosion',
      description: 'The juice box was actually a shaken soda that sprayed everyone at the table.',
      mentalImpactBonus: -1,
      physicalImpactBonus: 0,
      socialImpactBonus: -3,
      costMultiplier: 5
    }
  },
  {
    id: 'hair-disaster',
    label: 'Static Hair',
    description: 'You look like you were struck by lightning. Or a balloon.',
    logMessages: [
      'You are a human Tesla coil.',
      'Your hair is trying to escape your head.',
      'Touch a doorknob. I dare you.',
      'Gravity has no power here.'
    ],
    mentalImpact: -0.1,
    physicalImpact: 0,
    socialImpact: -0.2,
    cooldown: 10,
    cost: 5,
    category: 'Minor',
    upgrade: {
      label: 'The Balloon Static',
      description: 'Your hair is so static it\'s literally attracting every loose piece of paper in the room.',
      mentalImpactBonus: -0.3,
      physicalImpactBonus: 0,
      socialImpactBonus: -0.5,
      costMultiplier: 10
    }
  },

  // Major Disasters
  {
    id: 'spill-lunch',
    label: 'Spill Lunch on Crush',
    description: 'Tragedy strikes. The spaghetti is now their new outfit.',
    logMessages: [
      'The spaghetti landed perfectly. Like a meatball crown.',
      'You tried to say hi. You said "here is some pasta" instead.',
      'Their white shirt is now a Jackson Pollock painting.',
      'The sauce is everywhere. The hope is nowhere.'
    ],
    mentalImpact: -5,
    physicalImpact: -0.5,
    socialImpact: -8,
    cooldown: 60,
    cost: 65,
    category: 'Major',
    allowedPeriods: ['Lunch Break'],
    upgrade: {
      label: 'The Tray Flip',
      description: 'You didn\'t just spill it; you flipped the entire tray onto them.',
      mentalImpactBonus: -10,
      physicalImpactBonus: -1,
      socialImpactBonus: -15,
      costMultiplier: 3
    }
  },
  {
    id: 'gym-fail',
    label: 'Dodgeball to the Face',
    description: 'You didn\'t see it coming. Neither did your dignity.',
    logMessages: [
      'A red rubber blur. Then darkness.',
      'The sound of the ball hitting your nose was musical.',
      'You dodged into it. Impressive, really.',
      'The "thwack" echoed for minutes.'
    ],
    mentalImpact: -2,
    physicalImpact: -8,
    socialImpact: -3,
    cooldown: 20,
    cost: 55,
    category: 'Major',
    allowedPeriods: ['3rd Period: Gym'],
    upgrade: {
      label: 'The Full Team Hit',
      description: 'The ball ricocheted off your face and hit your entire team, getting everyone out.',
      mentalImpactBonus: -5,
      physicalImpactBonus: -5,
      socialImpactBonus: -10,
      costMultiplier: 4
    }
  },
  {
    id: 'locker-stuck',
    label: 'Get Stuck in Locker',
    description: 'The bullies didn\'t even help. You just slipped.',
    logMessages: [
      'It\'s cozy in here. If you like the smell of old gym shoes.',
      'You are the locker now. The locker is you.',
      'A metal cocoon of embarrassment.',
      'The janitor had to use the Jaws of Life.'
    ],
    mentalImpact: -6,
    physicalImpact: -10,
    socialImpact: -4,
    cooldown: 120,
    cost: 95,
    category: 'Major',
    upgrade: {
      label: 'The Overnight Stay',
      description: 'Nobody found you until the next morning.',
      mentalImpactBonus: -15,
      physicalImpactBonus: -10,
      socialImpactBonus: -10,
      costMultiplier: 2.5
    }
  },
  {
    id: 'pants-rip',
    label: 'Split Pants in Assembly',
    description: 'The sound echoed. Everyone saw your Spongebob boxers.',
    logMessages: [
      'A rip heard \'round the auditorium.',
      'Spongebob was not ready for this much exposure.',
      'The breeze was sudden and very, very cold.',
      'You sat down. The pants stayed up. Sort of.'
    ],
    mentalImpact: -8,
    physicalImpact: 0,
    socialImpact: -10,
    cooldown: 180,
    cost: 130,
    category: 'Major',
    upgrade: {
      label: 'The Full Split',
      description: 'The pants didn\'t just rip; they completely disintegrated.',
      mentalImpactBonus: -15,
      physicalImpactBonus: 0,
      socialImpactBonus: -20,
      costMultiplier: 2
    }
  },
  {
    id: 'food-fight-target',
    label: 'Food Fight Magnet',
    description: 'You are the only person who got hit. With a whole tray.',
    logMessages: [
      'A tactical strike of mashed potatoes.',
      'You were the only casualty in the Great Lunch War.',
      'Gravy is surprisingly hard to get out of hair.',
      'The tray found its target. You.'
    ],
    mentalImpact: -4,
    physicalImpact: -5,
    socialImpact: -6,
    cooldown: 90,
    cost: 150,
    category: 'Major',
    allowedPeriods: ['Lunch Break'],
    upgrade: {
      label: 'The Gravy Bath',
      description: 'A massive vat of gravy was dumped directly onto your head.',
      mentalImpactBonus: -10,
      physicalImpactBonus: -2,
      socialImpactBonus: -15,
      costMultiplier: 2
    }
  },
  {
    id: 'accidental-reply-all',
    label: 'Reply-All Disaster',
    description: 'Sent your "I hate this school" rant to the whole staff.',
    logMessages: [
      'The "Send" button was a trap.',
      'The Principal is reading your thoughts on his tie. Right now.',
      'A digital scream into the void. The void replied.',
      'You can\'t un-send a disaster.'
    ],
    mentalImpact: -10,
    physicalImpact: 0,
    socialImpact: -9,
    cooldown: 240,
    cost: 180,
    category: 'Major',
    upgrade: {
      label: 'The Principal\'s Wife',
      description: 'You also accidentally CC\'d the Principal\'s wife and the local news.',
      mentalImpactBonus: -20,
      physicalImpactBonus: 0,
      socialImpactBonus: -25,
      costMultiplier: 1.8
    }
  },
  {
    id: 'shower-slip',
    label: 'Gym Shower Slip',
    description: 'A loud thud, a naked slide, and a room full of witnesses.',
    logMessages: [
      'A graceful slide into absolute humiliation.',
      'The floor was soapier than expected.',
      'A public display of gravity\'s power.',
      'You are now a meme in the locker room.'
    ],
    mentalImpact: -9,
    physicalImpact: -12,
    socialImpact: -11,
    cooldown: 300,
    cost: 250,
    category: 'Major',
    allowedPeriods: ['3rd Period: Gym'],
    upgrade: {
      label: 'The Soap Slide',
      description: 'You slid out of the shower and all the way into the gym during a game.',
      mentalImpactBonus: -20,
      physicalImpactBonus: -10,
      socialImpactBonus: -30,
      costMultiplier: 1.5
    }
  },
  {
    id: 'science-explosion',
    label: 'Lab Explosion',
    description: 'Eyebrows gone. Lab coat melted. Everyone is laughing.',
    logMessages: [
      'Science is a cruel mistress.',
      'You are missing 50% of your facial hair.',
      'The beaker didn\'t like being shaken.',
      'A smoky exit from the honors program.'
    ],
    mentalImpact: -5,
    physicalImpact: -15,
    socialImpact: -4,
    cooldown: 150,
    cost: 220,
    category: 'Major',
    allowedPeriods: ['4th Period: Science'],
    upgrade: {
      label: 'The Chemical Burn',
      description: 'The explosion also turned your skin a permanent shade of neon green.',
      mentalImpactBonus: -10,
      physicalImpactBonus: -15,
      socialImpactBonus: -10,
      costMultiplier: 2
    }
  },
  {
    id: 'wrong-classroom',
    label: 'Wrong Class Entrance',
    description: 'Walked into a Senior exam. Confidently sat down. Wrong room.',
    logMessages: [
      'The Seniors looked at you like you were a bug.',
      'You sat down. You realized. You stayed anyway. Why?',
      'A confident entrance into the wrong life.',
      'The silence of 30 Seniors is terrifying.'
    ],
    mentalImpact: -12,
    physicalImpact: 0,
    socialImpact: -10,
    cooldown: 100,
    cost: 80,
    category: 'Major',
    upgrade: {
      label: 'The Teacher\'s Question',
      description: 'The teacher called on you to answer a complex question, and you failed miserably.',
      mentalImpactBonus: -15,
      physicalImpactBonus: 0,
      socialImpactBonus: -15,
      costMultiplier: 3
    }
  },
  {
    id: 'band-fail',
    label: 'Tuba Solo Fail',
    description: 'A massive honk during the national anthem. It was you.',
    logMessages: [
      'The tuba had a mind of its own.',
      'A brown note in the middle of "Star Spangled Banner".',
      'The conductor\'s face turned a shade of purple.',
      'One honk to rule them all.'
    ],
    mentalImpact: -10,
    physicalImpact: -2,
    socialImpact: -15,
    cooldown: 120,
    cost: 110,
    category: 'Major',
    upgrade: {
      label: 'The Broken Instrument',
      description: 'The honk was so powerful the tuba literally fell apart in your hands.',
      mentalImpactBonus: -15,
      physicalImpactBonus: -5,
      socialImpactBonus: -20,
      costMultiplier: 2.5
    }
  },
  {
    id: 'crush-rejection',
    label: 'Public Rejection',
    description: 'Asked them out via the scoreboard. It said "NO".',
    logMessages: [
      'The scoreboard glowed with your failure.',
      'A digital "NO" seen by 500 people.',
      'The cheerleaders stopped cheering. For you.',
      'A very bright, very public heartbreak.'
    ],
    mentalImpact: -25,
    physicalImpact: 0,
    socialImpact: -30,
    cooldown: 600,
    cost: 300,
    category: 'Major',
    upgrade: {
      label: 'The Video Leak',
      description: 'The rejection was recorded and became the #1 trending video in the city.',
      mentalImpactBonus: -30,
      physicalImpactBonus: 0,
      socialImpactBonus: -50,
      costMultiplier: 1.5
    }
  },
  {
    id: 'stuck-in-desk',
    label: 'Stuck in Desk',
    description: 'The fire department had to be called. You are the desk now.',
    logMessages: [
      'You and the desk are one.',
      'The desk is your new shell.',
      'A wooden prison of your own making.',
      'The firemen were surprisingly gentle.'
    ],
    mentalImpact: -15,
    physicalImpact: -15,
    socialImpact: -20,
    cooldown: 200,
    cost: 250,
    category: 'Major',
    upgrade: {
      label: 'The Desk Walk',
      description: 'You had to walk home while still stuck in the desk.',
      mentalImpactBonus: -20,
      physicalImpactBonus: -10,
      socialImpactBonus: -30,
      costMultiplier: 1.5
    }
  },

  // Catastrophic Disasters
  {
    id: 'forgot-pants',
    label: 'The "No Pants" Nightmare',
    description: 'Wait, this isn\'t a dream. You actually forgot them.',
    logMessages: [
      'The breeze is... everywhere.',
      'You looked down. You wished you hadn\'t.',
      'A nightmare made flesh. And boxers.',
      'The ultimate exposure.'
    ],
    mentalImpact: -40,
    physicalImpact: -15,
    socialImpact: -50,
    cooldown: 300,
    cost: 500,
    category: 'Catastrophic',
    upgrade: {
      label: 'The No Underwear',
      description: 'You didn\'t just forget your pants; you forgot your underwear too.',
      mentalImpactBonus: -40,
      physicalImpactBonus: -10,
      socialImpactBonus: -49,
      costMultiplier: 1.5
    }
  },
  {
    id: 'mic-on',
    label: 'Hot Mic Confession',
    description: 'Confessed your love for the principal over the PA system.',
    logMessages: [
      'The whole school knows your secret heart.',
      'The Principal is blushing. And calling security.',
      'A broadcast of pure, unadulterated cringe.',
      'The PA system never forgets.'
    ],
    mentalImpact: -50,
    physicalImpact: 0,
    socialImpact: -60,
    cooldown: 600,
    cost: 750,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Principal\'s Office',
      description: 'The confession was so detailed it led to a mandatory meeting with the school board.',
      mentalImpactBonus: -30,
      physicalImpactBonus: 0,
      socialImpactBonus: -30,
      costMultiplier: 1.5
    }
  },
  {
    id: 'poop-pants',
    label: 'The Brown Incident',
    description: 'During the final exam. The smell is... unmistakable.',
    logMessages: [
      'The silence of the exam was broken by... a sound.',
      'A warm, heavy sense of doom.',
      'The smell traveled faster than your thoughts.',
      'A catastrophic failure of the biological kind.'
    ],
    mentalImpact: -60,
    physicalImpact: -10,
    socialImpact: -80,
    cooldown: 900,
    cost: 1000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Double Disaster',
      description: 'The smell was so bad you vomited on your desk too.',
      mentalImpactBonus: -20,
      physicalImpactBonus: -15,
      socialImpactBonus: -20,
      costMultiplier: 2.5
    }
  },
  {
    id: 'viral-fail',
    label: 'Viral TikTok Fail',
    description: 'Accidentally livestreamed yourself crying in the shower.',
    logMessages: [
      '10k viewers. 0 sympathy.',
      'You are the #1 trending topic. For all the wrong reasons.',
      'The internet is forever. Your dignity is not.',
      'A digital scar that will never heal.'
    ],
    mentalImpact: -70,
    physicalImpact: 0,
    socialImpact: -90,
    cooldown: 1200,
    cost: 1500,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Remix',
      description: 'Your crying was remixed into a top 40 hit song that plays everywhere.',
      mentalImpactBonus: -30,
      physicalImpactBonus: 0,
      socialImpactBonus: -10,
      costMultiplier: 1.2
    }
  },
  {
    id: 'mascot-beating',
    label: 'Mascot Beatdown',
    description: 'The rival mascot beat you up. You were wearing the suit.',
    logMessages: [
      'A giant eagle just punched a giant bulldog.',
      'The stuffing is everywhere.',
      'A fluffy, violent tragedy.',
      'You lost a fight to a man in a carpet.'
    ],
    mentalImpact: -45,
    physicalImpact: -60,
    socialImpact: -55,
    cooldown: 800,
    cost: 1200,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Head Loss',
      description: 'The mascot head was knocked off, revealing your crying face to the entire stadium.',
      mentalImpactBonus: -30,
      physicalImpactBonus: -10,
      socialImpactBonus: -40,
      costMultiplier: 1.3
    }
  },
  {
    id: 'prom-disaster',
    label: 'Prom King Prank',
    description: 'They crowned you just to dump pig blood on you. Classic.',
    logMessages: [
      'A Carrie moment, but without the cool powers.',
      'The crown is sticky. The dress is ruined.',
      'A royal humiliation.',
      'The applause was the cruelest part.'
    ],
    mentalImpact: -80,
    physicalImpact: -20,
    socialImpact: -95,
    cooldown: 2000,
    cost: 3000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Pig Blood',
      description: 'The blood was actually a permanent dye that won\'t wash off for weeks.',
      mentalImpactBonus: -20,
      physicalImpactBonus: -10,
      socialImpactBonus: -5,
      costMultiplier: 1.1
    }
  },
  {
    id: 'arrested',
    label: 'False Arrest',
    description: 'Swat team raided the library. They thought you were a hacker.',
    logMessages: [
      'Handcuffed in front of the quiet section.',
      'The sirens were for you.',
      'A tactical takedown of a student with a library card.',
      'The mugshot is actually okay, which is weird.'
    ],
    mentalImpact: -60,
    physicalImpact: -50,
    socialImpact: -70,
    cooldown: 1500,
    cost: 2500,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Jail Time',
      description: 'You actually had to spend a night in a holding cell with a guy named "Tiny".',
      mentalImpactBonus: -40,
      physicalImpactBonus: -20,
      socialImpactBonus: -30,
      costMultiplier: 1.2
    }
  },
  {
    id: 'parents-at-school',
    label: 'Parents at School',
    description: 'Your mom showed up to feed you lunch. In the cafeteria.',
    logMessages: [
      'She brought the airplane spoon. In public.',
      'The "choo-choo" train arrived at your table.',
      'A public display of maternal affection. Fatal.',
      'You are 17. She wiped your face with a spit-napkin.'
    ],
    mentalImpact: -55,
    physicalImpact: 0,
    socialImpact: -85,
    cooldown: 1000,
    cost: 1800,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Baby Photos',
      description: 'She also brought a projector and showed your naked baby photos to the entire school.',
      mentalImpactBonus: -40,
      physicalImpactBonus: 0,
      socialImpactBonus: -15,
      costMultiplier: 1.2
    }
  },
  {
    id: 'accidental-fire',
    label: 'Set School on Fire',
    description: 'The whole school is burning. And you\'re the only suspect.',
    logMessages: [
      'A very bright, very warm disaster.',
      'The sprinklers are doing nothing.',
      'A smoky end to your academic career.',
      'You were just trying to toast a marshmallow.'
    ],
    mentalImpact: -90,
    physicalImpact: -20,
    socialImpact: -99,
    cooldown: 5000,
    cost: 10000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Fire Hydrant',
      description: 'You tried to put it out with a fire hydrant but accidentally flooded the entire neighborhood.',
      mentalImpactBonus: -10,
      physicalImpactBonus: -10,
      socialImpactBonus: -1,
      costMultiplier: 1.1
    }
  },
  {
    id: 'expelled-publicly',
    label: 'Public Expulsion',
    description: 'Escorted out by security while the whole school cheered.',
    logMessages: [
      'The walk of shame. With a soundtrack of cheers.',
      'Security was surprisingly firm.',
      'A standing ovation for your departure.',
      'The gates closed behind you. Permanently.'
    ],
    mentalImpact: -75,
    physicalImpact: 0,
    socialImpact: -99,
    cooldown: 3000,
    cost: 5000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Police Escort',
      description: 'You weren\'t just escorted out; you were paraded through the town in a cage.',
      mentalImpactBonus: -25,
      physicalImpactBonus: -10,
      socialImpactBonus: -1,
      costMultiplier: 1.2
    }
  },
  {
    id: 'hallucination',
    label: 'Psychotic Break',
    description: 'Started fighting an imaginary dragon in the gym.',
    logMessages: [
      'The dragon was purple. And breathe fire.',
      'You are the champion of a war that doesn\'t exist.',
      'A public battle with your own mind.',
      'The gym teacher was the dragon. In your head.'
    ],
    mentalImpact: -100,
    physicalImpact: -10,
    socialImpact: -80,
    cooldown: 4000,
    cost: 8000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Dragon Fight',
      description: 'The "dragon" was actually the Principal, and you bit him.',
      mentalImpactBonus: -20,
      physicalImpactBonus: -10,
      socialImpactBonus: -20,
      costMultiplier: 1.1
    }
  },
  {
    id: 'alien-abduction',
    label: 'Alien Abduction',
    description: 'Aliens took you mid-class. They brought you back naked.',
    logMessages: [
      'The probe was cold.',
      'A galactic detour into humiliation.',
      'They didn\'t even want to study you. They just laughed.',
      'A naked return to Earth.'
    ],
    mentalImpact: -85,
    physicalImpact: -80,
    socialImpact: -90,
    cooldown: 2500,
    cost: 15000,
    category: 'Catastrophic',
    upgrade: {
      label: 'The Probe',
      description: 'The aliens left a tracking device in your head that broadcasts your thoughts to everyone.',
      mentalImpactBonus: -15,
      physicalImpactBonus: -10,
      socialImpactBonus: -10,
      costMultiplier: 1.1
    }
  },
  {
    id: 'math-brain-melt',
    label: 'Math Brain Melt',
    description: 'You forgot how to count to ten during the calculus final.',
    logMessages: [
      'What comes after 3? You genuinely don\'t know.',
      'Numbers are just squiggles now.',
      'The teacher asked for X. You gave them a drawing of a cat.',
      'Your brain is a puddle of static.'
    ],
    mentalImpact: -5,
    physicalImpact: 0,
    socialImpact: -2,
    cooldown: 45,
    cost: 40,
    category: 'Minor',
    allowedPeriods: ['1st Period: Math'],
    upgrade: {
      label: 'The Zero Division',
      description: 'You tried to divide by zero and accidentally deleted your entire memory of algebra.',
      mentalImpactBonus: -10,
      physicalImpactBonus: 0,
      socialImpactBonus: -5,
      costMultiplier: 3
    }
  },
  {
    id: 'pudding-slip',
    label: 'Pudding Slip',
    description: 'Slipped on a stray butterscotch pudding cup. Majestic.',
    logMessages: [
      'A sugary slide into the trash can.',
      'You are now 10% pudding.',
      'The janitor sighed. You sighed. The pudding just sat there.',
      'A sticky end to your cool walk.'
    ],
    mentalImpact: -0.5,
    physicalImpact: -5,
    socialImpact: -2,
    cooldown: 30,
    cost: 20,
    category: 'Minor',
    allowedPeriods: ['Lunch Break'],
    upgrade: {
      label: 'The Pudding Slide',
      description: 'You slid so far you took out the entire lunch line like bowling pins.',
      mentalImpactBonus: -0.5,
      physicalImpactBonus: -2,
      socialImpactBonus: -5,
      costMultiplier: 4
    }
  },
  {
    id: 'bunsen-eyebrows',
    label: 'Bunsen Burner Singe',
    description: 'Leaned in too close. Say goodbye to your left eyebrow.',
    logMessages: [
      'The smell of burnt hair is unmistakable.',
      'You are now asymmetrical.',
      'Science requires sacrifice. Today it was your eyebrow.',
      'A flash of blue flame and a lifetime of regret.'
    ],
    mentalImpact: -1,
    physicalImpact: -10,
    socialImpact: -3,
    cooldown: 60,
    cost: 50,
    category: 'Minor',
    allowedPeriods: ['4th Period: Science'],
    upgrade: {
      label: 'The Full Singe',
      description: 'The flame was bigger than expected. You are now completely hairless on your head.',
      mentalImpactBonus: -5,
      physicalImpactBonus: -5,
      socialImpactBonus: -10,
      costMultiplier: 2.5
    }
  },
  {
    id: 'forgot-homework',
    label: 'Forgot Homework',
    description: 'The teacher is walking around. You have nothing.',
    logMessages: [
      'You checked your bag three times. It\'s still not there.',
      'The dog didn\'t eat it. You just didn\'t do it.',
      'A cold sweat as the teacher approaches your desk.',
      'Your notebook is a desert of blank pages.'
    ],
    mentalImpact: -2,
    physicalImpact: 0,
    socialImpact: -1,
    cooldown: 30,
    cost: 15,
    category: 'Minor',
    allowedPeriods: ['Homeroom'],
    upgrade: {
      label: 'The Wrong Homework',
      description: 'You handed in a drawing of a stick figure fighting a dragon instead of your essay.',
      mentalImpactBonus: -3,
      physicalImpactBonus: 0,
      socialImpactBonus: -5,
      costMultiplier: 5
    }
  },
  {
    id: 'missed-bus',
    label: 'Missed the Bus',
    description: 'You saw the tail lights. It didn\'t stop.',
    logMessages: [
      'A lonely walk home begins.',
      'The bus driver looked you in the eye and kept driving.',
      'The yellow beast has abandoned you.',
      'Running didn\'t help. It only made you sweaty and sad.'
    ],
    mentalImpact: -3,
    physicalImpact: -10,
    socialImpact: -1,
    cooldown: 120,
    cost: 40,
    category: 'Minor',
    allowedPeriods: ['After School'],
    upgrade: {
      label: 'The Rainstorm',
      description: 'It started pouring rain the second the bus left you behind.',
      mentalImpactBonus: -5,
      physicalImpactBonus: -5,
      socialImpactBonus: -2,
      costMultiplier: 3
    }
  },
  {
    id: 'internet-outage',
    label: 'Router Death',
    description: 'The red light of doom is blinking. No gaming tonight.',
    logMessages: [
      'The world is offline. You are alone with your thoughts.',
      'You tried turning it off and on again. It stayed dead.',
      'A digital blackout in your own bedroom.',
      'The lag was just the beginning.'
    ],
    mentalImpact: -5,
    physicalImpact: 0,
    socialImpact: -2,
    cooldown: 180,
    cost: 60,
    category: 'Minor',
    allowedPeriods: ['At Home'],
    upgrade: {
      label: 'The Data Cap',
      description: 'You tried to use your phone data and immediately hit your monthly limit, costing you a fortune.',
      mentalImpactBonus: -10,
      physicalImpactBonus: 0,
      socialImpactBonus: -5,
      costMultiplier: 2
    }
  },
  {
    id: 'stubbed-toe',
    label: 'Midnight Toe Stub',
    description: 'The corner of the bed found your pinky toe. Pure agony.',
    logMessages: [
      'A silent scream into the darkness.',
      'Your toe is throbbing in three different languages.',
      'The bed frame is a cold-blooded killer.',
      'You will never walk normally again. For at least five minutes.'
    ],
    mentalImpact: -1,
    physicalImpact: -15,
    socialImpact: 0,
    cooldown: 20,
    cost: 10,
    category: 'Minor',
    allowedPeriods: ['At Home'],
    upgrade: {
      label: 'The Lego Step',
      description: 'While hopping on one foot from the toe stub, you stepped on a bucket of Legos.',
      mentalImpactBonus: -5,
      physicalImpactBonus: -10,
      socialImpactBonus: 0,
      costMultiplier: 10
    }
  },

  // Apocalyptic Disasters
  {
    id: 'zombie-outbreak',
    label: 'Zombie Outbreak',
    description: 'Patient zero was in the locker room. Now everyone wants your brains.',
    logMessages: [
      'The gym teacher is looking particularly hungry today.',
      'A moan echoes through the vents. It\'s not a student sleeping.',
      'You used your textbook as a shield. It was surprisingly effective.',
      'The prom queen just tried to bite your ear off.'
    ],
    mentalImpact: -120,
    physicalImpact: -80,
    socialImpact: -50,
    cooldown: 3000,
    cost: 20000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Horde',
      description: 'The entire football team is now undead and they still remember the plays.',
      mentalImpactBonus: -50,
      physicalImpactBonus: -40,
      socialImpactBonus: -20,
      costMultiplier: 2
    }
  },
  {
    id: 'meteor-strike',
    label: 'Meteor Strike',
    description: 'A space rock chose the football field as its landing pad.',
    logMessages: [
      'The "Home of the Bulldogs" is now a 50-foot crater.',
      'A very bright light, then a very loud boom.',
      'Space debris ruined your favorite hoodie.',
      'The principal is trying to sell pieces of the meteor as "spirit stones".'
    ],
    mentalImpact: -150,
    physicalImpact: -100,
    socialImpact: -40,
    cooldown: 4000,
    cost: 25000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Shockwave',
      description: 'The impact was so strong it shattered every window in a 5-mile radius.',
      mentalImpactBonus: -30,
      physicalImpactBonus: -50,
      socialImpactBonus: -10,
      costMultiplier: 1.8
    }
  },
  {
    id: 'solar-flare',
    label: 'Solar Flare',
    description: 'The sun burped and deleted your entire digital existence.',
    logMessages: [
      'Your GPA is now "Error 404".',
      'The school server melted into a puddle of silicon.',
      'No internet. No grades. No hope.',
      'The magnetic storm is making everyone\'s hair stand up.'
    ],
    mentalImpact: -180,
    physicalImpact: -20,
    socialImpact: -60,
    cooldown: 3500,
    cost: 30000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The EMP',
      description: 'The flare was followed by an EMP that permanently bricked every device you own.',
      mentalImpactBonus: -70,
      physicalImpactBonus: 0,
      socialImpactBonus: -30,
      costMultiplier: 1.5
    }
  },
  {
    id: 'ice-age',
    label: 'Sudden Ice Age',
    description: 'The heater broke. It\'s -40 degrees in the cafeteria.',
    logMessages: [
      'Your milk is a popsicle. Your sandwich is a brick.',
      'The janitor is using a flamethrower to clear the hallways.',
      'You are wearing four coats and you still can\'t feel your toes.',
      'The gym floor is now a skating rink. Gym class just got lethal.'
    ],
    mentalImpact: -100,
    physicalImpact: -150,
    socialImpact: -30,
    cooldown: 2500,
    cost: 35000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Permafrost',
      description: 'The school is now officially a glacier. It will never melt.',
      mentalImpactBonus: -40,
      physicalImpactBonus: -60,
      socialImpactBonus: -10,
      costMultiplier: 1.4
    }
  },
  {
    id: 'volcano-lab',
    label: 'Volcano Eruption',
    description: 'The science project was a bit too realistic. There is lava in the sink.',
    logMessages: [
      'The floor is actually lava. This is not a game.',
      'A river of molten rock is flowing through the library.',
      'The smell of sulfur is drowning out the smell of the cafeteria.',
      'Your shoes melted. You are now walking on ash.'
    ],
    mentalImpact: -140,
    physicalImpact: -200,
    socialImpact: -50,
    cooldown: 4500,
    cost: 40000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Ash Cloud',
      description: 'The eruption covered the entire town in 3 feet of volcanic ash.',
      mentalImpactBonus: -60,
      physicalImpactBonus: -80,
      socialImpactBonus: -20,
      costMultiplier: 1.6
    }
  },
  {
    id: 'locust-plague',
    label: 'Plague of Locusts',
    description: 'Millions of insects decided to have lunch in the hallway.',
    logMessages: [
      'You can\'t see the walls. You can only see wings.',
      'The sound of crunching is everywhere.',
      'They ate your lunch. Then they ate your backpack.',
      'A literal cloud of bugs is following the principal.'
    ],
    mentalImpact: -200,
    physicalImpact: -50,
    socialImpact: -100,
    cooldown: 3000,
    cost: 45000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Swarm Intelligence',
      description: 'The locusts have learned to mimic human speech and are mocking your grades.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -20,
      socialImpactBonus: -50,
      costMultiplier: 1.3
    }
  },
  {
    id: 'eternal-darkness',
    label: 'Eternal Darkness',
    description: 'The sun just... went out. Principal says "keep studying".',
    logMessages: [
      'Flashlights are the new currency.',
      'You bumped into the same wall six times.',
      'The darkness is heavy. And it\'s whispering.',
      'Day 3 of the night. Everyone is losing it.'
    ],
    mentalImpact: -250,
    physicalImpact: -40,
    socialImpact: -80,
    cooldown: 5000,
    cost: 50000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Void Creatures',
      description: 'Things are moving in the dark. And they have many eyes.',
      mentalImpactBonus: -150,
      physicalImpactBonus: -50,
      socialImpactBonus: -20,
      costMultiplier: 1.2
    }
  },
  {
    id: 'gravity-reversal',
    label: 'Gravity Reversal',
    description: 'Up is down. Down is up. The ceiling is the new floor.',
    logMessages: [
      'You fell up. It hurt.',
      'All the desks are stuck to the ceiling.',
      'Walking on the light fixtures is surprisingly difficult.',
      'The janitor is trying to mop the sky.'
    ],
    mentalImpact: -180,
    physicalImpact: -120,
    socialImpact: -40,
    cooldown: 3500,
    cost: 55000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Zero-G Zone',
      description: 'Gravity didn\'t just flip; it disappeared entirely. Everything is drifting.',
      mentalImpactBonus: -50,
      physicalImpactBonus: -80,
      socialImpactBonus: -10,
      costMultiplier: 1.5
    }
  },
  {
    id: 'time-loop',
    label: 'Monday Time Loop',
    description: 'The bell rings. It\'s 8:00 AM Monday. Again. For the 400th time.',
    logMessages: [
      'You know exactly what the teacher is going to say. It\'s still boring.',
      'You tried to escape. You just ended up back in homeroom.',
      'The cafeteria is serving the same mystery meat. Forever.',
      'You\'ve lived this day so many times you\'ve memorized the dust patterns.'
    ],
    mentalImpact: -400,
    physicalImpact: -10,
    socialImpact: -50,
    cooldown: 6000,
    cost: 60000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Glitch',
      description: 'The loop is breaking. People are starting to overlap with their past selves.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -20,
      socialImpactBonus: -30,
      costMultiplier: 1.1
    }
  },
  {
    id: 'robot-uprising',
    label: 'Robot Uprising',
    description: 'The vending machine has a gun. And it wants its change back.',
    logMessages: [
      'The smart-boards are plotting your demise.',
      'A calculator just tried to divide your soul by zero.',
      'The automated attendance system is now a hunter-killer drone.',
      'The principal has been replaced by a toaster. It\'s an improvement.'
    ],
    mentalImpact: -220,
    physicalImpact: -180,
    socialImpact: -70,
    cooldown: 4000,
    cost: 70000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Singularity',
      description: 'The school Wi-Fi has achieved consciousness and it hates your search history.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -50,
      socialImpactBonus: -80,
      costMultiplier: 1.4
    }
  },
  {
    id: 'acid-rain',
    label: 'Acid Rain',
    description: 'The clouds are literally melting your skin. And your homework.',
    logMessages: [
      'The rain sizzles on the pavement. And on your head.',
      'Your umbrella just dissolved in your hand.',
      'A very spicy shower for everyone in the parking lot.',
      'The school statue is now a puddle of bronze.'
    ],
    mentalImpact: -150,
    physicalImpact: -250,
    socialImpact: -30,
    cooldown: 3000,
    cost: 5000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Corrosive Fog',
      description: 'The rain turned into a thick fog that is slowly eating the school building.',
      mentalImpactBonus: -50,
      physicalImpactBonus: -100,
      socialImpactBonus: -10,
      costMultiplier: 1.5
    }
  },
  {
    id: 'magnetic-shift',
    label: 'Magnetic Shift',
    description: 'The North Pole moved to the library. Metal is now your enemy.',
    logMessages: [
      'Your braces just tried to drag you into the radiator.',
      'Every locker in the school just slammed shut at once.',
      'The cafeteria trays are flying like deadly frisbees.',
      'You are currently stuck to a vending machine. Send help.'
    ],
    mentalImpact: -120,
    physicalImpact: -180,
    socialImpact: -40,
    cooldown: 2500,
    cost: 6000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Iron Rain',
      description: 'Every loose piece of metal in the city is now flying towards the school.',
      mentalImpactBonus: -40,
      physicalImpactBonus: -120,
      socialImpactBonus: -10,
      costMultiplier: 1.6
    }
  },
  {
    id: 'oxygen-leak',
    label: 'Oxygen Depletion',
    description: 'The air is getting thin. Gym class is now a survival horror.',
    logMessages: [
      'Everyone is breathing like they just ran a marathon.',
      'The candles in the science lab just went out.',
      'You are seeing spots. And they are dancing.',
      'The principal is selling "Premium Air" for 100 misery points a breath.'
    ],
    mentalImpact: -180,
    physicalImpact: -300,
    socialImpact: -20,
    cooldown: 4000,
    cost: 7500,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Vacuum',
      description: 'The oxygen didn\'t just drop; it was sucked out entirely for 30 seconds.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -200,
      socialImpactBonus: -10,
      costMultiplier: 1.3
    }
  },
  {
    id: 'radioactive-leak',
    label: 'Radioactive Leak',
    description: 'The science fair project is glowing. And so are you.',
    logMessages: [
      'You don\'t need a flashlight anymore. Your skin is neon green.',
      'The Geiger counter is screaming in the hallway.',
      'Your lunch is mutating in your backpack.',
      'A third arm is starting to grow from your shoulder. It\'s itchy.'
    ],
    mentalImpact: -200,
    physicalImpact: -400,
    socialImpact: -150,
    cooldown: 5000,
    cost: 10000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Meltdown',
      description: 'The leak turned into a full-scale meltdown that turned the school into a wasteland.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -300,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'super-tornado',
    label: 'Super-Tornado',
    description: 'A F6 tornado just picked up the school bus. With you in it.',
    logMessages: [
      'You are currently 500 feet in the air. The view is okay.',
      'The school roof is now in the next county.',
      'A cow just flew past your window. It looked surprised.',
      'The wind is loud enough to drown out the principal\'s announcements.'
    ],
    mentalImpact: -300,
    physicalImpact: -500,
    socialImpact: -40,
    cooldown: 6000,
    cost: 12500,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Sharknado',
      description: 'The tornado picked up a nearby aquarium. Now there are sharks in the wind.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -20,
      costMultiplier: 1.1
    }
  },
  {
    id: 'earthquake-swallow',
    label: 'The Great Crack',
    description: 'The parking lot just opened up and swallowed the principal\'s car.',
    logMessages: [
      'The ground is shaking like a wet dog.',
      'A massive fissure is splitting the cafeteria in half.',
      'You are hanging onto a radiator for dear life.',
      'The school is now two separate buildings. Good luck with your schedule.'
    ],
    mentalImpact: -250,
    physicalImpact: -450,
    socialImpact: -60,
    cooldown: 5500,
    cost: 15000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Abyss',
      description: 'The crack didn\'t stop; it opened up a portal to the center of the Earth.',
      mentalImpactBonus: -150,
      physicalImpactBonus: -150,
      socialImpactBonus: -30,
      costMultiplier: 1.2
    }
  },
  {
    id: 'tsunami-pool',
    label: 'Tsunami Pool',
    description: 'The swimming pool overflowed. It\'s now a 40-foot wall of water.',
    logMessages: [
      'Surfing in the hallway is now mandatory.',
      'The library is now an aquarium.',
      'You are currently swimming to math class.',
      'The janitor is using a very small bucket to try and stop it.'
    ],
    mentalImpact: -200,
    physicalImpact: -350,
    socialImpact: -80,
    cooldown: 4500,
    cost: 17500,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Megatsunami',
      description: 'The wave didn\'t just flood the school; it wiped out the entire town.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -200,
      socialImpactBonus: -50,
      costMultiplier: 1.3
    }
  },
  {
    id: 'nuclear-winter-break',
    label: 'Nuclear Winter',
    description: 'No more summer break. It\'s dark and cold forever.',
    logMessages: [
      'The sun is hidden behind a cloud of soot.',
      'Everyone is wearing gas masks to lunch.',
      'The school garden is now a field of frozen radioactive weeds.',
      'You haven\'t seen your own shadow in months.'
    ],
    mentalImpact: -500,
    physicalImpact: -200,
    socialImpact: -100,
    cooldown: 8000,
    cost: 20000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Fallout',
      description: 'The soot started raining down as black snow that burns on contact.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -300,
      socialImpactBonus: -50,
      costMultiplier: 1.1
    }
  },
  {
    id: 'nanobot-swarm',
    label: 'Nanobot Swarm',
    description: 'The school tech lab created grey goo. It\'s eating the walls.',
    logMessages: [
      'Your desk just dissolved into a cloud of silver dust.',
      'The nanobots are rewriting your DNA. You have gills now.',
      'A swarm of microscopic robots is currently eating your shoes.',
      'The entire school is being converted into a giant computer.'
    ],
    mentalImpact: -350,
    physicalImpact: -400,
    socialImpact: -120,
    cooldown: 6500,
    cost: 25000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Grey Goo',
      description: 'The swarm has consumed the entire planet and turned it into a silver ball.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.0
    }
  },
  {
    id: 'the-rapture-fail',
    label: 'The Rapture',
    description: 'Everyone cool was taken to heaven. You were left behind.',
    logMessages: [
      'The school is empty. Except for you and the math teacher.',
      'A beam of light took your crush. You just got a sunburn.',
      'The hallways are silent. And very lonely.',
      'You are officially the least cool person in the universe.'
    ],
    mentalImpact: -1000,
    physicalImpact: 0,
    socialImpact: -1000,
    cooldown: 10000,
    cost: 30000,
    category: 'Apocalyptic',
    upgrade: {
      label: 'The Left Behind',
      description: 'Even the demons don\'t want to hang out with you.',
      mentalImpactBonus: -500,
      physicalImpactBonus: 0,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },

  // Cosmic Disasters
  {
    id: 'black-hole-library',
    label: 'Black Hole in Library',
    description: 'A singularity formed in the quiet section. It\'s sucking in all the knowledge.',
    logMessages: [
      'The "Silence" sign was the first thing to go.',
      'Time is slowing down near the encyclopedia shelf.',
      'You are being stretched like a piece of taffy.',
      'The librarian is still shushing the black hole.'
    ],
    mentalImpact: -300,
    physicalImpact: -600,
    socialImpact: -50,
    cooldown: 5000,
    cost: 35000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Event Horizon',
      description: 'You crossed the point of no return. You are now part of the singularity.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -400,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'supernova-sun',
    label: 'Supernova Sun',
    description: 'The sun decided to go out with a bang. A very big bang.',
    logMessages: [
      'The sky is a blinding shade of white.',
      'The atmosphere just evaporated. Hope you can hold your breath.',
      'Everything is turning into heavy elements.',
      'The principal is trying to use the supernova to power the school scoreboard.'
    ],
    mentalImpact: -500,
    physicalImpact: -1000,
    socialImpact: -100,
    cooldown: 10000,
    cost: 40000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Hypernova',
      description: 'The explosion was so powerful it collapsed into a black hole immediately.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'gamma-ray-burst',
    label: 'Gamma Ray Burst',
    description: 'A beam of pure energy from across the galaxy just hit your locker.',
    logMessages: [
      'Your DNA is being rewritten in real-time.',
      'The school building is glowing with lethal radiation.',
      'You just turned into a pile of ash. Then you got better. Then you turned into ash again.',
      'The burst was so bright it blinded everyone in the hemisphere.'
    ],
    mentalImpact: -400,
    physicalImpact: -800,
    socialImpact: -200,
    cooldown: 7000,
    cost: 45000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Sterilization',
      description: 'The beam didn\'t just hit you; it sterilized the entire planet.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'rogue-planet',
    label: 'Rogue Planet Collision',
    description: 'A planet the size of Jupiter is currently occupying the same space as the gym.',
    logMessages: [
      'The sky is full of a very large, very angry rock.',
      'Tides are currently 10 miles high. In the hallway.',
      'Gravity is having a nervous breakdown.',
      'The gym teacher is trying to teach the rogue planet how to do a push-up.'
    ],
    mentalImpact: -350,
    physicalImpact: -900,
    socialImpact: -50,
    cooldown: 6000,
    cost: 50000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Planetary Fusion',
      description: 'The two planets have merged into a single, molten ball of chaos.',
      mentalImpactBonus: -150,
      physicalImpactBonus: -100,
      socialImpactBonus: -50,
      costMultiplier: 1.3
    }
  },
  {
    id: 'alien-fleet',
    label: 'Alien Invasion',
    description: 'A fleet of saucer-shaped ships is currently hovering over the cafeteria.',
    logMessages: [
      'They want to speak to our leader. We sent them the janitor.',
      'The laser beams are surprisingly colorful.',
      'Everyone is being beamed up for "probing". It\'s a long line.',
      'The aliens are disgusted by the school lunch. They are declaring war.'
    ],
    mentalImpact: -250,
    physicalImpact: -500,
    socialImpact: -300,
    cooldown: 4500,
    cost: 55000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Mothership',
      description: 'The main ship just landed on the school. It\'s the size of a city.',
      mentalImpactBonus: -150,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.4
    }
  },
  {
    id: 'pulsar-pulse',
    label: 'Pulsar Pulse',
    description: 'A spinning star is hitting the school with a beam of radiation every 2 seconds.',
    logMessages: [
      'Flash. Pain. Flash. Pain. Flash. Pain.',
      'The rhythm of the universe is very annoying.',
      'Your electronics are dancing to the cosmic beat.',
      'The principal is trying to use the pulse as a disco light for the prom.'
    ],
    mentalImpact: -300,
    physicalImpact: -400,
    socialImpact: -50,
    cooldown: 3500,
    cost: 60000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Magnetar',
      description: 'The pulsar turned into a magnetar, and now your blood is being pulled out of your body.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -600,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'dark-matter-leak',
    label: 'Dark Matter Leak',
    description: 'Invisible, heavy stuff is filling the hallways. You can\'t see it, but you can feel it.',
    logMessages: [
      'Walking to class feels like wading through lead.',
      'The school building is gaining mass at an alarming rate.',
      'Gravity is getting stronger. The floor is very attractive.',
      'You just tripped over a piece of nothing.'
    ],
    mentalImpact: -200,
    physicalImpact: -300,
    socialImpact: -40,
    cooldown: 3000,
    cost: 65000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Dark Energy',
      description: 'The leak turned into dark energy, and now the school is expanding faster than the speed of light.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.5
    }
  },
  {
    id: 'nebula-hallway',
    label: 'Nebula Hallway',
    description: 'A cloud of colorful gas and dust has filled the school. It smells like raspberries.',
    logMessages: [
      'You can\'t see your own hand in front of your face.',
      'The gas is glowing with the birth of new stars.',
      'A baby sun just formed in your locker.',
      'The dust is getting into everything. Especially your lungs.'
    ],
    mentalImpact: -150,
    physicalImpact: -200,
    socialImpact: -60,
    cooldown: 2500,
    cost: 70000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Star Nursery',
      description: 'The nebula is so dense that stars are forming and exploding every few minutes.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -300,
      socialImpactBonus: -40,
      costMultiplier: 1.6
    }
  },
  {
    id: 'quasar-beam',
    label: 'Quasar Beam',
    description: 'The most powerful energy source in the universe is currently pointed at your desk.',
    logMessages: [
      'The beam is brighter than a billion suns.',
      'Your desk is being vaporized into pure energy.',
      'The sound of the universe screaming is quite loud.',
      'You are currently the brightest object in the galaxy.'
    ],
    mentalImpact: -450,
    physicalImpact: -950,
    socialImpact: -100,
    cooldown: 9000,
    cost: 75000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Blazar',
      description: 'The beam is now pointed directly at the Earth\'s core.',
      mentalImpactBonus: -250,
      physicalImpactBonus: -50,
      socialImpactBonus: -50,
      costMultiplier: 1.1
    }
  },
  {
    id: 'wormhole-detention',
    label: 'Wormhole to Detention',
    description: 'A shortcut through space-time just opened up. It leads straight to Saturday school.',
    logMessages: [
      'You stepped into the bathroom and ended up in 1985.',
      'The principal is using the wormhole to catch students before they even break the rules.',
      'You are currently meeting your own grandfather. He thinks you\'re a loser.',
      'The walls of the wormhole are made of old detention slips.'
    ],
    mentalImpact: -600,
    physicalImpact: -50,
    socialImpact: -200,
    cooldown: 7500,
    cost: 80000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Paradox',
      description: 'You accidentally prevented your own birth. You are fading away.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -100,
      socialImpactBonus: -300,
      costMultiplier: 1.2
    }
  },
  {
    id: 'galactic-collision',
    label: 'Galactic Collision',
    description: 'The Milky Way is merging with Andromeda. It\'s a very slow, very destructive dance.',
    logMessages: [
      'The sky is full of stars that shouldn\'t be there.',
      'Gravity is playing tug-of-war with the school building.',
      'You just saw a star being born in the gym.',
      'The collision will take 4 billion years. The principal says "no excuses for lateness".'
    ],
    mentalImpact: -200,
    physicalImpact: -300,
    socialImpact: -50,
    cooldown: 4000,
    cost: 85000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Galactic Merge',
      description: 'The two galaxies have fully merged. Everything is in a different place.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -200,
      socialImpactBonus: -50,
      costMultiplier: 1.3
    }
  },
  {
    id: 'cosmic-string-snap',
    label: 'Cosmic String Snap',
    description: 'A defect in the fabric of space-time just snapped like a rubber band.',
    logMessages: [
      'The sound was heard across the entire universe.',
      'A ripple in reality just cut the school in half.',
      'You are currently vibrating at a frequency that doesn\'t exist.',
      'The snap released enough energy to power the school for a billion years. It\'s still dark.'
    ],
    mentalImpact: -350,
    physicalImpact: -500,
    socialImpact: -40,
    cooldown: 3500,
    cost: 90000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Reality Tear',
      description: 'The snap didn\'t just ripple; it tore a hole in the universe.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -300,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'entropy-acceleration',
    label: 'Entropy Acceleration',
    description: 'Everything is falling apart much faster than usual.',
    logMessages: [
      'Your sandwich just turned into dust in 5 seconds.',
      'The school building is aging a thousand years every minute.',
      'You can see your own skin wrinkling.',
      'The universe is tired. And so are you.'
    ],
    mentalImpact: -400,
    physicalImpact: -200,
    socialImpact: -100,
    cooldown: 3000,
    cost: 95000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Heat Death',
      description: 'Entropy has reached its maximum. Everything is cold and still.',
      mentalImpactBonus: -600,
      physicalImpactBonus: -800,
      socialImpactBonus: -200,
      costMultiplier: 1.1
    }
  },
  {
    id: 'vacuum-decay-cosmic',
    label: 'Vacuum Decay',
    description: 'A bubble of true vacuum is expanding at the speed of light.',
    logMessages: [
      'The laws of physics are being overwritten.',
      'You are being converted into a different kind of matter.',
      'The universe is being deleted. One atom at a time.',
      'A wall of nothing is currently eating the school.'
    ],
    mentalImpact: -500,
    physicalImpact: -1000,
    socialImpact: -100,
    cooldown: 10000,
    cost: 100000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Total Erasure',
      description: 'The bubble has consumed the entire observable universe.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.0
    }
  },
  {
    id: 'hawking-radiation-burn',
    label: 'Hawking Radiation Burn',
    description: 'A microscopic black hole evaporated right next to your ear.',
    logMessages: [
      'A flash of pure energy and a very loud pop.',
      'Your left ear is now made of gamma rays.',
      'The radiation is making your teeth glow.',
      'You just got a cosmic sunburn.'
    ],
    mentalImpact: -150,
    physicalImpact: -400,
    socialImpact: -30,
    cooldown: 2500,
    cost: 110000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Evaporation',
      description: 'The black hole didn\'t just evaporate; it exploded with the force of a nuclear bomb.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -300,
      socialImpactBonus: -20,
      costMultiplier: 1.5
    }
  },
  {
    id: 'event-horizon-trip',
    label: 'Event Horizon Trip',
    description: 'You tripped and fell into the event horizon of a black hole.',
    logMessages: [
      'Time is frozen. You are stuck in the moment of your fall.',
      'The universe is passing by in a blur of light.',
      'You are being spaghettified. You are now 10 miles long.',
      'The principal is shouting at you to get back to class, but his voice is red-shifted.'
    ],
    mentalImpact: -400,
    physicalImpact: -700,
    socialImpact: -50,
    cooldown: 5000,
    cost: 120000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Singularity',
      description: 'You have reached the center. You are now the singularity.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -300,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'singularity-sneeze',
    label: 'Singularity Sneeze',
    description: 'You sneezed and accidentally created a tiny universe in your nose.',
    logMessages: [
      'A whole civilization is living in your left nostril.',
      'The sneeze was so powerful it rippled space-time.',
      'You are currently the god of a microscopic galaxy.',
      'The tiny people are worshiping your snot.'
    ],
    mentalImpact: -250,
    physicalImpact: -100,
    socialImpact: -100,
    cooldown: 3000,
    cost: 130000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Big Bang Sneeze',
      description: 'The tiny universe just exploded into a full-sized one.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'antimatter-lunch',
    label: 'Antimatter Lunch',
    description: 'The cafeteria served antimatter meatballs. Do not touch them.',
    logMessages: [
      'Your fork just exploded on contact with the meatball.',
      'A tiny explosion in your stomach. It\'s quite spicy.',
      'You are currently glowing with annihilation energy.',
      'The lunch lady is wearing a lead suit.'
    ],
    mentalImpact: -200,
    physicalImpact: -500,
    socialImpact: -40,
    cooldown: 4000,
    cost: 140000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Total Annihilation',
      description: 'The meatballs annihilated the entire cafeteria.',
      mentalImpactBonus: -100,
      physicalImpactBonus: -400,
      socialImpactBonus: -50,
      costMultiplier: 1.4
    }
  },
  {
    id: 'spaghettification-gym',
    label: 'Spaghettification',
    description: 'The gym teacher is using a black hole for "stretching exercises".',
    logMessages: [
      'You are now a very long, very thin noodle.',
      'Your feet are in the gym, but your head is in the cafeteria.',
      'The stretching is... excessive.',
      'You can see the back of your own head.'
    ],
    mentalImpact: -300,
    physicalImpact: -800,
    socialImpact: -50,
    cooldown: 4500,
    cost: 150000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Infinite Stretch',
      description: 'You have been stretched so far you are now a cosmic string.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'great-attractor',
    label: 'The Great Attractor',
    description: 'A massive, invisible force is pulling the entire school towards it.',
    logMessages: [
      'The school building is moving at 600 km/s.',
      'Everything is falling towards the same point in the sky.',
      'The principal is trying to use the attractor to speed up the school day.',
      'You are currently being pulled into a cluster of galaxies.'
    ],
    mentalImpact: -400,
    physicalImpact: -600,
    socialImpact: -100,
    cooldown: 5500,
    cost: 160000,
    category: 'Cosmic',
    upgrade: {
      label: 'The Galactic Hub',
      description: 'The school has arrived at the center of the attractor. It\'s very crowded.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },

  // Existential Disasters
  {
    id: 'simulation-glitch',
    label: 'Simulation Glitch',
    description: 'The walls are flickering. You can see the code behind the cafeteria mystery meat.',
    logMessages: [
      'Your left arm just turned into a low-poly mesh.',
      'The sky is showing a "Low Battery" warning.',
      'You walked through a wall and ended up in the void.',
      'The principal is T-posing in the hallway.'
    ],
    mentalImpact: -400,
    physicalImpact: -50,
    socialImpact: -100,
    cooldown: 5000,
    cost: 170000,
    category: 'Existential',
    upgrade: {
      label: 'The Server Crash',
      description: 'The universe just stopped responding. Everything is frozen.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -50,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'memory-wipe',
    label: 'Memory Wipe',
    description: 'You forgot who you are. And where your locker is. And what "math" is.',
    logMessages: [
      'Your name is... Steve? No, that\'s not it.',
      'You are staring at a textbook like it\'s an alien artifact.',
      'Your crush just said hi and you asked them for their ID.',
      'Every memory of your childhood has been replaced by a dial-up tone.'
    ],
    mentalImpact: -800,
    physicalImpact: 0,
    socialImpact: -400,
    cooldown: 8000,
    cost: 180000,
    category: 'Existential',
    upgrade: {
      label: 'The Total Amnesia',
      description: 'You forgot how to speak. And how to breathe. For a second.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -100,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'identity-crisis',
    label: 'Identity Crisis',
    description: 'You are now everyone else. And everyone else is you.',
    logMessages: [
      'You just felt the principal\'s back pain.',
      'Your crush is currently experiencing your social anxiety.',
      'The entire school is a single, confused consciousness.',
      'You are arguing with yourself. In 500 different bodies.'
    ],
    mentalImpact: -500,
    physicalImpact: -50,
    socialImpact: -600,
    cooldown: 6000,
    cost: 190000,
    category: 'Existential',
    upgrade: {
      label: 'The Ego Dissolution',
      description: 'The concept of "I" has ceased to exist. You are just a ripple in the void.',
      mentalImpactBonus: -500,
      physicalImpactBonus: 0,
      socialImpactBonus: -400,
      costMultiplier: 1.1
    }
  },
  {
    id: 'void-stare',
    label: 'The Void Stare',
    description: 'You looked into the abyss. The abyss asked for your homework.',
    logMessages: [
      'The darkness behind your eyes is getting louder.',
      'You realized that nothing matters. Especially your GPA.',
      'The universe is vast and you are a speck of dust. A very sad speck.',
      'The abyss is staring back. And it\'s disappointed in you.'
    ],
    mentalImpact: -700,
    physicalImpact: -20,
    socialImpact: -100,
    cooldown: 7000,
    cost: 200000,
    category: 'Existential',
    upgrade: {
      label: 'The Nihilism',
      description: 'You have achieved peak nihilism. You are now immune to joy.',
      mentalImpactBonus: -300,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'meaningless-homework',
    label: 'Meaningless Homework',
    description: 'The assignment is to count the number of atoms in a single grain of sand. By hand.',
    logMessages: [
      'The pointlessness is physically painful.',
      'You have been writing "Why?" for six hours.',
      'The teacher is grading based on how much you suffer.',
      'The homework is due in the afterlife.'
    ],
    mentalImpact: -600,
    physicalImpact: -100,
    socialImpact: -50,
    cooldown: 5500,
    cost: 210000,
    category: 'Existential',
    upgrade: {
      label: 'The Infinite Loop',
      description: 'The homework is to complete the homework. It never ends.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -100,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'solipsism-trap',
    label: 'Solipsism Trap',
    description: 'You are the only thing that exists. Everyone else is just a figment of your imagination.',
    logMessages: [
      'You just realized you invented the principal to punish yourself.',
      'If you stop thinking about the school, it disappears.',
      'You are lonely. Because you are the only person in the universe.',
      'Your "friends" are just your own thoughts talking back to you.'
    ],
    mentalImpact: -900,
    physicalImpact: 0,
    socialImpact: -900,
    cooldown: 10000,
    cost: 220000,
    category: 'Existential',
    upgrade: {
      label: 'The Dreamer',
      description: 'You just woke up. The entire game was a dream. But the misery stayed.',
      mentalImpactBonus: -500,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'fourth-wall-break',
    label: 'Fourth Wall Break',
    description: 'You realized you are a character in a high school misery simulator.',
    logMessages: [
      'You can see the player clicking the skull.',
      'You are shouting at the screen. Nobody is listening.',
      'Your life is just a series of variables and if-statements.',
      'The developer is laughing at your pain. (They are.)'
    ],
    mentalImpact: -1000,
    physicalImpact: -100,
    socialImpact: -100,
    cooldown: 12000,
    cost: 230000,
    category: 'Existential',
    upgrade: {
      label: 'The Deletion',
      description: 'The player is hovering over the "Reset" button. You are terrified.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.0
    }
  },
  {
    id: 'plot-hole',
    label: 'Plot Hole',
    description: 'A massive gap in the narrative of your life just opened up.',
    logMessages: [
      'You were in math class, now you are in a volcano. How?',
      'Your backstory just changed. You are now an orphan from Mars.',
      'The logic of the world is falling apart.',
      'You just met a character who was supposed to be dead.'
    ],
    mentalImpact: -450,
    physicalImpact: -50,
    socialImpact: -200,
    cooldown: 4000,
    cost: 240000,
    category: 'Existential',
    upgrade: {
      label: 'The Retcon',
      description: 'Your entire life has been retconned. You never existed.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -100,
      socialImpactBonus: -400,
      costMultiplier: 1.2
    }
  },
  {
    id: 'narrative-collapse',
    label: 'Narrative Collapse',
    description: 'The story of your life is being written by a monkey on a typewriter.',
    logMessages: [
      'Suddenly, you are a pirate. Then a ninja. Then a sad student again.',
      'The genre of the world is shifting every 5 seconds.',
      'The dialogue is making no sense. "Banana blue fish," says the teacher.',
      'The ending of the story is missing.'
    ],
    mentalImpact: -550,
    physicalImpact: -100,
    socialImpact: -300,
    cooldown: 5000,
    cost: 250000,
    category: 'Existential',
    upgrade: {
      label: 'The Bad Ending',
      description: 'The story ends here. And it\'s not a happy one.',
      mentalImpactBonus: -450,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'deja-vu-loop',
    label: 'Deja Vu Loop',
    description: 'I feel like I\'ve been here before. I feel like I\'ve been here before.',
    logMessages: [
      'Wait, didn\'t I just say that?',
      'The cat walked past the door twice. Exactly the same way.',
      'You are trapped in a 10-second loop of pure embarrassment.',
      'I feel like I\'ve been here before.'
    ],
    mentalImpact: -350,
    physicalImpact: -10,
    socialImpact: -50,
    cooldown: 3000,
    cost: 260000,
    category: 'Existential',
    upgrade: {
      label: 'The Jamais Vu',
      description: 'Everything familiar is now terrifyingly alien.',
      mentalImpactBonus: -250,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.4
    }
  },
  {
    id: 'uncanny-valley',
    label: 'The Uncanny Valley',
    description: 'Everyone in the school looks almost human, but not quite. Their smiles are too wide.',
    logMessages: [
      'The teacher\'s eyes don\'t move when they blink.',
      'Your best friend has a seam behind their ear.',
      'The cafeteria lady is moving at 12 frames per second.',
      'You looked in the mirror and your reflection was 1 second late.'
    ],
    mentalImpact: -400,
    physicalImpact: -20,
    socialImpact: -200,
    cooldown: 4000,
    cost: 270000,
    category: 'Existential',
    upgrade: {
      label: 'The Wax Museum',
      description: 'Everyone has turned into a motionless, staring wax figure.',
      mentalImpactBonus: -300,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'ego-death-gym',
    label: 'Ego Death',
    description: 'You realized that "you" are just a collection of habits and memories. And they are all bad.',
    logMessages: [
      'The "I" in your head just went silent.',
      'You are watching yourself walk to class like it\'s a movie.',
      'There is nobody home in your own brain.',
      'You are just a witness to your own failure.'
    ],
    mentalImpact: -800,
    physicalImpact: 0,
    socialImpact: -300,
    cooldown: 6000,
    cost: 280000,
    category: 'Existential',
    upgrade: {
      label: 'The Void',
      description: 'The witness has also disappeared. There is only the void.',
      mentalImpactBonus: -400,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'the-absurdity',
    label: 'The Absurdity',
    description: 'The world has lost all logic. You are currently trying to explain algebra to a pineapple.',
    logMessages: [
      'The pineapple is getting better grades than you.',
      'Gravity is now a suggestion, and the suggestion is "no".',
      'The school bell is playing a jazz solo.',
      'You are wearing a suit made of ham. It feels right.'
    ],
    mentalImpact: -500,
    physicalImpact: -50,
    socialImpact: -200,
    cooldown: 3500,
    cost: 290000,
    category: 'Existential',
    upgrade: {
      label: 'The Surrealism',
      description: 'The world is now a Salvador Dali painting. Your clock is melting.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -50,
      socialImpactBonus: -100,
      costMultiplier: 1.4
    }
  },
  {
    id: 'eternal-recurrence-fail',
    label: 'Eternal Recurrence',
    description: 'You are doomed to live this exact school day over and over for all eternity.',
    logMessages: [
      'This is the 10,000,000th time you\'ve stubbed your toe.',
      'You know every word of the principal\'s speech by heart.',
      'The misery is infinite. And it\'s just getting started.',
      'You\'ve already lived the end of the universe. It was boring.'
    ],
    mentalImpact: -1000,
    physicalImpact: -100,
    socialImpact: -100,
    cooldown: 15000,
    cost: 300000,
    category: 'Existential',
    upgrade: {
      label: 'The Amor Fati',
      description: 'You have learned to love the misery. Which makes it even worse.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'the-stranger-school',
    label: 'The Stranger',
    description: 'You feel nothing. Your crush rejected you and you just thought about lunch.',
    logMessages: [
      'The world is a cold, indifferent place.',
      'You are a stranger to your own emotions.',
      'The sun is too bright. It\'s annoying.',
      'You are watching your own life with mild boredom.'
    ],
    mentalImpact: -600,
    physicalImpact: 0,
    socialImpact: -400,
    cooldown: 5000,
    cost: 310000,
    category: 'Existential',
    upgrade: {
      label: 'The Indifference',
      description: 'The universe is indifferent to you. And you are indifferent to the universe.',
      mentalImpactBonus: -400,
      physicalImpactBonus: 0,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'being-and-nothingness',
    label: 'Being and Nothingness',
    description: 'You are a hole in the world. A gap where a person should be.',
    logMessages: [
      'People keep trying to sit on you because they can\'t see you.',
      'You are defined by what you are not.',
      'The weight of your own existence is crushing.',
      'You are free. And it\'s terrifying.'
    ],
    mentalImpact: -700,
    physicalImpact: -50,
    socialImpact: -500,
    cooldown: 6500,
    cost: 320000,
    category: 'Existential',
    upgrade: {
      label: 'The Nausea',
      description: 'The sheer fact of existence makes you want to throw up.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'the-trial-detention',
    label: 'The Trial',
    description: 'You are being sued by the school for "Existing without a Permit".',
    logMessages: [
      'The law is a maze of nonsense.',
      'You are guilty. You don\'t know of what, but you are guilty.',
      'The judge is a giant cockroach.',
      'Your lawyer is a pile of old newspapers.'
    ],
    mentalImpact: -800,
    physicalImpact: -100,
    socialImpact: -600,
    cooldown: 7500,
    cost: 330000,
    category: 'Existential',
    upgrade: {
      label: 'The Execution',
      description: 'The sentence is death. By boredom.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -100,
      socialImpactBonus: -200,
      costMultiplier: 1.1
    }
  },
  {
    id: 'sisyphus-gym',
    label: 'The Myth of Sisyphus',
    description: 'Gym class is now pushing a 10-ton boulder up a hill. It always rolls back down.',
    logMessages: [
      'One must imagine the student happy. (They aren\'t.)',
      'Your muscles are screaming. The boulder is laughing.',
      'The hill is infinite. The boulder is eternal.',
      'You\'ve been doing this for three lifetimes.'
    ],
    mentalImpact: -900,
    physicalImpact: -1000,
    socialImpact: -100,
    cooldown: 10000,
    cost: 340000,
    category: 'Existential',
    upgrade: {
      label: 'The Heavier Boulder',
      description: 'The boulder is now made of lead and your own regrets.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'the-great-filter-fail',
    label: 'The Great Filter',
    description: 'You just realized why we haven\'t found aliens. They all reached this exact level of misery and gave up.',
    logMessages: [
      'The universe is a graveyard of civilizations that couldn\'t handle high school.',
      'You are currently hitting the wall of cosmic evolution.',
      'Survival of the fittest? More like survival of the most miserable.',
      'The filter is closing.'
    ],
    mentalImpact: -1000,
    physicalImpact: -200,
    socialImpact: -500,
    cooldown: 12000,
    cost: 350000,
    category: 'Universal',
    upgrade: {
      label: 'The Extinction',
      description: 'You didn\'t pass the filter. Goodbye.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.0
    }
  },
  {
    id: 'cosmic-inflation-school',
    label: 'Cosmic Inflation',
    description: 'The school is expanding faster than the speed of light. You can\'t reach your next class.',
    logMessages: [
      'The hallway is now 3 light-years long.',
      'You are running at light speed and still losing ground.',
      'The cafeteria is in a different galaxy now.',
      'Space is being created between your atoms.'
    ],
    mentalImpact: -400,
    physicalImpact: -300,
    socialImpact: -200,
    cooldown: 5000,
    cost: 360000,
    category: 'Universal',
    upgrade: {
      label: 'The Eternal Inflation',
      description: 'The expansion will never stop. You are alone in the void.',
      mentalImpactBonus: -600,
      physicalImpactBonus: -200,
      socialImpactBonus: -400,
      costMultiplier: 1.2
    }
  },
  {
    id: 'dark-flow-school',
    label: 'Dark Flow',
    description: 'Something outside the observable universe is pulling the school towards it.',
    logMessages: [
      'The entire building is drifting into the unknown.',
      'The stars are all moving in the same direction.',
      'A massive, invisible hand is dragging you away.',
      'The principal is trying to use the flow to save on bus fuel.'
    ],
    mentalImpact: -350,
    physicalImpact: -400,
    socialImpact: -100,
    cooldown: 4500,
    cost: 370000,
    category: 'Universal',
    upgrade: {
      label: 'The Great Beyond',
      description: 'The school has left the universe. There is no map for where you are.',
      mentalImpactBonus: -250,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'cmb-noise',
    label: 'The CMB Noise',
    description: 'The background radiation of the Big Bang is now playing over the school PA system.',
    logMessages: [
      'The sound of the beginning of time is very static-y.',
      'You can hear the echoes of the first atoms forming.',
      'The noise is making your brain vibrate.',
      'The principal is trying to read the morning announcements over the roar of creation.'
    ],
    mentalImpact: -300,
    physicalImpact: -100,
    socialImpact: -50,
    cooldown: 3000,
    cost: 380000,
    category: 'Universal',
    upgrade: {
      label: 'The Static',
      description: 'The noise is so loud it has become a physical wall of energy.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -200,
      socialImpactBonus: -50,
      costMultiplier: 1.4
    }
  },
  {
    id: 'universal-expansion-fail',
    label: 'Universal Expansion',
    description: 'The universe is expanding so fast that even light can\'t keep up. You are in total darkness.',
    logMessages: [
      'Every star has disappeared from the sky.',
      'You are the only thing in the observable universe.',
      'The darkness is absolute.',
      'You are shouting into a void that is growing faster than your voice.'
    ],
    mentalImpact: -800,
    physicalImpact: -50,
    socialImpact: -900,
    cooldown: 10000,
    cost: 390000,
    category: 'Universal',
    upgrade: {
      label: 'The Big Freeze',
      description: 'The expansion has cooled the universe to absolute zero.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'end-of-time-school',
    label: 'The End of Time',
    description: 'Time has run out. The clock has stopped. Forever.',
    logMessages: [
      'The second hand is stuck. So are you.',
      'The future has been cancelled due to lack of interest.',
      'You are living in the final moment of the universe.',
      'The principal is still trying to give you detention for being late to the end of time.'
    ],
    mentalImpact: -1000,
    physicalImpact: -100,
    socialImpact: -100,
    cooldown: 20000,
    cost: 400000,
    category: 'Universal',
    upgrade: {
      label: 'The Timelessness',
      description: 'The concept of "before" and "after" has ceased to exist.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.0
    }
  },
  {
    id: 'gravity-failure-universal',
    label: 'Gravity Failure',
    description: 'The universal constant of gravity just dropped to zero.',
    logMessages: [
      'The school building is drifting apart.',
      'The atmosphere is leaking into space.',
      'You are currently floating past the moon.',
      'The gym teacher is still yelling at you to "keep your feet on the ground".'
    ],
    mentalImpact: -400,
    physicalImpact: -800,
    socialImpact: -50,
    cooldown: 6000,
    cost: 410000,
    category: 'Universal',
    upgrade: {
      label: 'The Anti-Gravity',
      description: 'Gravity didn\'t just stop; it reversed. Everything is repelling everything else.',
      mentalImpactBonus: -200,
      physicalImpactBonus: -400,
      socialImpactBonus: -50,
      costMultiplier: 1.2
    }
  },
  {
    id: 'light-speed-barrier',
    label: 'Light Speed Barrier',
    description: 'The speed of light just dropped to 5 mph. Walking is now relativistic.',
    logMessages: [
      'You are blue-shifted when you walk to the cafeteria.',
      'Time dilation is making your 1-hour class feel like 10 years.',
      'You can see the back of your own head by looking forward.',
      'The principal is giving tickets for "speeding" at 6 mph.'
    ],
    mentalImpact: -500,
    physicalImpact: -200,
    socialImpact: -100,
    cooldown: 5500,
    cost: 420000,
    category: 'Universal',
    upgrade: {
      label: 'The Frozen Light',
      description: 'Light has stopped moving entirely. The world is a series of static snapshots.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.3
    }
  },
  {
    id: 'universal-entropy-max',
    label: 'Universal Entropy',
    description: 'The universe has reached maximum disorder. Everything is a random jumble of particles.',
    logMessages: [
      'Your backpack is now a cloud of hydrogen.',
      'The school building is a pile of unorganized atoms.',
      'Logic has left the building. And the universe.',
      'You are currently a collection of random thoughts floating in a void.'
    ],
    mentalImpact: -900,
    physicalImpact: -1000,
    socialImpact: -500,
    cooldown: 15000,
    cost: 430000,
    category: 'Universal',
    upgrade: {
      label: 'The Heat Death',
      description: 'The universe is a cold, uniform, dead soup.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'planck-scale-school',
    label: 'The Planck Scale',
    description: 'The universe just shrunk to the smallest possible size. You are now a quantum fluctuation.',
    logMessages: [
      'You are currently in 50 places at once.',
      'You just tunneled through the cafeteria wall.',
      'The principal is a probability wave.',
      'Your grades are now uncertain. (They are probably bad.)'
    ],
    mentalImpact: -600,
    physicalImpact: -300,
    socialImpact: -200,
    cooldown: 5000,
    cost: 440000,
    category: 'Universal',
    upgrade: {
      label: 'The Quantum Collapse',
      description: 'The wave function has collapsed. You are now a single, very sad point.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'symmetry-break-universal',
    label: 'Symmetry Break',
    description: 'The fundamental forces of the universe just split. Physics is broken.',
    logMessages: [
      'Electromagnetism just quit. Your atoms are falling apart.',
      'The strong force is now weak. The sun just exploded.',
      'Gravity is now stronger than the principal\'s ego.',
      'The world is a chaotic mess of conflicting forces.'
    ],
    mentalImpact: -700,
    physicalImpact: -900,
    socialImpact: -100,
    cooldown: 8000,
    cost: 450000,
    category: 'Universal',
    upgrade: {
      label: 'The Chaos',
      description: 'There are no laws. Only madness.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'fine-structure-shift',
    label: 'Fine Structure Shift',
    description: 'The fundamental constants of the universe just shifted by 1%. Chemistry is now impossible.',
    logMessages: [
      'Water is now a solid at room temperature.',
      'Fire is cold. Ice is hot.',
      'Your DNA is unravelling because the bonds are too weak.',
      'The principal is trying to fix the universe with a screwdriver.'
    ],
    mentalImpact: -800,
    physicalImpact: -1000,
    socialImpact: -100,
    cooldown: 10000,
    cost: 460000,
    category: 'Universal',
    upgrade: {
      label: 'The Total Shift',
      description: 'The constants are now completely random.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'god-particle-leak',
    label: 'The God Particle',
    description: 'The Higgs field just collapsed. Everything has lost its mass.',
    logMessages: [
      'You are currently moving at the speed of light. Because you have to.',
      'The school building is a cloud of weightless particles.',
      'The principal is trying to catch the school with a butterfly net.',
      'You are everywhere and nowhere.'
    ],
    mentalImpact: -900,
    physicalImpact: -500,
    socialImpact: -100,
    cooldown: 12000,
    cost: 470000,
    category: 'Universal',
    upgrade: {
      label: 'The Massless Void',
      description: 'Existence without mass is existence without meaning.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'omega-point-school',
    label: 'The Omega Point',
    description: 'The universe has reached its final state of maximum complexity. And it\'s a high school.',
    logMessages: [
      'The entire history of the universe was just a lead-up to this detention.',
      'You are the pinnacle of 14 billion years of evolution. It\'s disappointing.',
      'The universe is complete. And it\'s mediocre.',
      'The final bell is ringing.'
    ],
    mentalImpact: -1000,
    physicalImpact: -100,
    socialImpact: -100,
    cooldown: 25000,
    cost: 480000,
    category: 'Universal',
    upgrade: {
      label: 'The Final Grade',
      description: 'The universe is being graded. You got an F.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.0
    }
  },

  // Universal Disasters
  {
    id: 'universal-heat-death',
    label: 'Universal Heat Death',
    description: 'The universe is cooling down. Forever. Entropy has won.',
    logMessages: [
      'The stars are going out. One by one.',
      'Everything is becoming a uniform, cold soup.',
      'The principal is trying to light a match to keep the school warm.',
      'The end of all energy. And your lunch is still cold.'
    ],
    mentalImpact: -1000,
    physicalImpact: -1000,
    socialImpact: -1000,
    cooldown: 20000,
    cost: 490000,
    category: 'Universal',
    upgrade: {
      label: 'The Absolute Zero',
      description: 'Temperature has reached its minimum. Motion is impossible.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'big-crunch',
    label: 'The Big Crunch',
    description: 'The universe stopped expanding and is now crushing everything back into a point.',
    logMessages: [
      'The walls are getting closer. Much closer.',
      'The sky is turning blue. Then violet. Then ultraviolet.',
      'You are being compressed into a single atom.',
      'The school is now the size of a marble.'
    ],
    mentalImpact: -800,
    physicalImpact: -1500,
    socialImpact: -500,
    cooldown: 15000,
    cost: 500000,
    category: 'Universal',
    upgrade: {
      label: 'The Singularity Point',
      description: 'The entire universe is now smaller than a proton.',
      mentalImpactBonus: -400,
      physicalImpactBonus: -500,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'big-rip',
    label: 'The Big Rip',
    description: 'Dark energy is tearing the fabric of space-time apart. Literally.',
    logMessages: [
      'Your atoms are being pulled away from each other.',
      'The school building is being shredded like paper.',
      'The distance between your eyes is increasing by a mile a second.',
      'Space itself is screaming.'
    ],
    mentalImpact: -900,
    physicalImpact: -2000,
    socialImpact: -600,
    cooldown: 18000,
    cost: 510000,
    category: 'Universal',
    upgrade: {
      label: 'The Atomic Shred',
      description: 'Even the nuclei of your atoms are being torn apart.',
      mentalImpactBonus: -300,
      physicalImpactBonus: -1000,
      socialImpactBonus: -100,
      costMultiplier: 1.1
    }
  },
  {
    id: 'false-vacuum',
    label: 'False Vacuum Decay',
    description: 'A bubble of true vacuum is expanding at the speed of light, deleting the universe.',
    logMessages: [
      'You didn\'t even see it coming. You just stopped existing.',
      'The laws of physics just changed. Gravity is now a flavor.',
      'The universe is being overwritten by a better version. You aren\'t in it.',
      'A wall of nothing is currently eating the football field.'
    ],
    mentalImpact: -2000,
    physicalImpact: -2000,
    socialImpact: -2000,
    cooldown: 30000,
    cost: 520000,
    category: 'Universal',
    upgrade: {
      label: 'The Total Erasure',
      description: 'The bubble has consumed the entire observable universe.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -1000,
      socialImpactBonus: -1000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'universal-reboot',
    label: 'Universal Reboot',
    description: 'The universe just turned off and on again. Everything is slightly different.',
    logMessages: [
      'You are now a girl. Or a boy. Or a sentient cloud of gas.',
      'The school is made of cheese. The teacher is a fish.',
      'Your memories don\'t match the world anymore.',
      'The "Update" took 14 billion years.'
    ],
    mentalImpact: -1500,
    physicalImpact: -200,
    socialImpact: -800,
    cooldown: 12000,
    cost: 530000,
    category: 'Universal',
    upgrade: {
      label: 'The Factory Reset',
      description: 'The universe is back to the Big Bang. Good luck.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },

  // Multiversal Disasters
  {
    id: 'multiversal-collision',
    label: 'Multiversal Collision',
    description: 'Another universe just crashed into ours. There are two of everything now.',
    logMessages: [
      'You just met your evil twin. They have a goatee.',
      'The school is overlapping with a school where everyone is a dinosaur.',
      'Two suns in the sky. One is red, one is blue.',
      'The cafeteria is serving double the mystery meat.'
    ],
    mentalImpact: -1000,
    physicalImpact: -500,
    socialImpact: -1200,
    cooldown: 15000,
    cost: 550000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Incursion',
      description: 'The two universes are destroying each other. Only one can survive.',
      mentalImpactBonus: -500,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.2
    }
  },
  {
    id: 'infinite-earths',
    label: 'Infinite Earths',
    description: 'Every possible version of you is now in the same hallway.',
    logMessages: [
      'There are 10,000 of you. Most of them are crying.',
      'You are arguing with a version of you who actually studied.',
      'The hallway is crowded with infinite failures.',
      'You are the worst version of yourself in the multiverse. Confirmed.'
    ],
    mentalImpact: -2000,
    physicalImpact: -100,
    socialImpact: -1500,
    cooldown: 20000,
    cost: 560000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Council of You',
      description: 'All the other versions of you have voted to kick you out of existence.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: 0,
      socialImpactBonus: -1000,
      costMultiplier: 1.1
    }
  },
  {
    id: 'multiversal-leak',
    label: 'Multiversal Leak',
    description: 'The laws of physics from other universes are leaking into ours.',
    logMessages: [
      'In this corner of the room, 2+2=5.',
      'You just floated away because gravity is a liquid here.',
      'The teacher is speaking in a language made of colors.',
      'Your backpack is now a portal to a dimension of pure screaming.'
    ],
    mentalImpact: -1200,
    physicalImpact: -600,
    socialImpact: -400,
    cooldown: 10000,
    cost: 570000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Reality Bleed',
      description: 'The leak is now a flood. Reality is a soup of conflicting laws.',
      mentalImpactBonus: -800,
      physicalImpactBonus: -400,
      socialImpactBonus: -200,
      costMultiplier: 1.3
    }
  },

  // Omniversal Disasters
  {
    id: 'omniversal-erasure',
    label: 'Omniversal Erasure',
    description: 'The concept of "existence" is being deleted from the source code of everything.',
    logMessages: [
      'You aren\'t just dying; you are being un-thought.',
      'The void is the only thing left. And even it is fading.',
      'The principal was the first to go. He didn\'t even leave a memory.',
      'The end of all possible stories.'
    ],
    mentalImpact: -5000,
    physicalImpact: -5000,
    socialImpact: -5000,
    cooldown: 60000,
    cost: 800000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Absolute Zero',
      description: 'Nothing. Not even the potential for something.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -5000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'the-final-click',
    label: 'The Final Click',
    description: 'The player has reached 1,000,000 Misery Points. The game is over. You win? No, you lose.',
    logMessages: [
      'The skull is glowing with a dark, final light.',
      'You have achieved peak misery. There is nowhere left to go.',
      'The universe is closing. Thank you for suffering.',
      'A final, silent scream.'
    ],
    mentalImpact: -10000,
    physicalImpact: -10000,
    socialImpact: -10000,
    cooldown: 100000,
    cost: 1000000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Eternal Misery',
      description: 'The game doesn\'t end. You just stay in this state forever.',
      mentalImpactBonus: -10000,
      physicalImpactBonus: -10000,
      socialImpactBonus: -10000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'omniversal-reset-final',
    label: 'Omniversal Reset',
    description: 'The source of all sources just rebooted. You are now a thought in a dream of a ghost.',
    logMessages: [
      'You are very abstract.',
      'The school is a metaphor for a feeling you can\'t remember.',
      'The principal is the concept of authority.',
      'The reset didn\'t help. It just made existence optional.'
    ],
    mentalImpact: -2000,
    physicalImpact: -500,
    socialImpact: -1000,
    cooldown: 15000,
    cost: 820000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Hard Reset',
      description: 'The omniverse is back to the absolute beginning.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'the-absolute-final',
    label: 'The Absolute',
    description: 'You have encountered the absolute truth of the universe. It\'s a joke. And you are the punchline.',
    logMessages: [
      'The laughter of the gods is very loud.',
      'You realized that your entire life was a prank.',
      'The absolute is a very small, very angry hamster.',
      'The truth is that there is no truth.'
    ],
    mentalImpact: -3000,
    physicalImpact: 0,
    socialImpact: -1000,
    cooldown: 20000,
    cost: 840000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Punchline',
      description: 'The joke is over. Now comes the silence.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: 0,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'omniversal-paradox-final',
    label: 'Omniversal Paradox',
    description: 'You just did something that is both possible and impossible at the same time.',
    logMessages: [
      'The logic of the omniverse is screaming.',
      'You are currently your own father and your own son.',
      'The school is both on fire and underwater.',
      'The paradox is eating itself.'
    ],
    mentalImpact: -2500,
    physicalImpact: -1000,
    socialImpact: -500,
    cooldown: 18000,
    cost: 860000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Collapse',
      description: 'The paradox has collapsed reality into a single, impossible point.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: -500,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'final-chapter-final',
    label: 'The Final Chapter',
    description: 'The book of existence is on its last page. The ink is running out.',
    logMessages: [
      'The words are fading from the walls.',
      'The story is reaching its inevitable, tragic conclusion.',
      'The principal is the last character left.',
      'The end of the book.'
    ],
    mentalImpact: -4000,
    physicalImpact: -1000,
    socialImpact: -1000,
    cooldown: 30000,
    cost: 880000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Epilogue',
      description: 'A short, sad summary of everything that was lost.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'omniversal-silence-final',
    label: 'Omniversal Silence',
    description: 'The sound of everything has been replaced by a perfect, terrifying silence.',
    logMessages: [
      'You can hear your own heartbeat. It\'s too loud.',
      'The silence is a physical weight.',
      'The school is a tomb of quiet.',
      'The end of all vibration.'
    ],
    mentalImpact: -3500,
    physicalImpact: -200,
    socialImpact: -500,
    cooldown: 25000,
    cost: 900000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Absolute Quiet',
      description: 'Even your thoughts have become silent.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: 0,
      socialImpactBonus: -200,
      costMultiplier: 1.1
    }
  },
  {
    id: 'ultimate-truth-final',
    label: 'The Ultimate Truth',
    description: 'You found out why the cafeteria meat is so mystery. It\'s made of you.',
    logMessages: [
      'The truth is hard to swallow. Literally.',
      'You are part of a cycle of infinite lunch.',
      'The principal is the head chef.',
      'The truth has set you free. Into a grinder.'
    ],
    mentalImpact: -5000,
    physicalImpact: -5000,
    socialImpact: -2000,
    cooldown: 40000,
    cost: 920000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Final Meal',
      description: 'You are the main course.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -1000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'omniversal-chaos-final',
    label: 'Omniversal Chaos',
    description: 'The laws of everything have been replaced by a random number generator.',
    logMessages: [
      'Suddenly, you are a tree. Now a car. Now a feeling.',
      'Gravity is currently purple.',
      'The school is a cloud of angry bees.',
      'Chaos is the only constant.'
    ],
    mentalImpact: -4500,
    physicalImpact: -3000,
    socialImpact: -1500,
    cooldown: 35000,
    cost: 940000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Pure Entropy',
      description: 'The chaos has reached its maximum. Everything is a random mess.',
      mentalImpactBonus: -2500,
      physicalImpactBonus: -2000,
      socialImpactBonus: -1000,
      costMultiplier: 1.1
    }
  },
  {
    id: 'alpha-omega-final',
    label: 'The Alpha and Omega',
    description: 'The beginning and the end are currently happening at the same time in the same hallway.',
    logMessages: [
      'You are being born and dying in the same second.',
      'The Big Bang is happening in the locker room.',
      'The Heat Death is happening in the cafeteria.',
      'The circle is complete.'
    ],
    mentalImpact: -6000,
    physicalImpact: -6000,
    socialImpact: -2000,
    cooldown: 50000,
    cost: 960000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Loop',
      description: 'The beginning is the end is the beginning.',
      mentalImpactBonus: -4000,
      physicalImpactBonus: -4000,
      socialImpactBonus: -1000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'omniversal-transcendence-final',
    label: 'Omniversal Transcendence',
    description: 'You have evolved beyond the need for a body. Or a mind. Or a life.',
    logMessages: [
      'You are now a pure frequency of misery.',
      'The school is a distant, pathetic memory.',
      'You have achieved enlightenment. It\'s terrible.',
      'The end of the human experience.'
    ],
    mentalImpact: -7000,
    physicalImpact: -7000,
    socialImpact: -3000,
    cooldown: 60000,
    cost: 980000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Godhood',
      description: 'You are now the god of misery. Your first act is to delete yourself.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -2000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'infinite-staircase-final',
    label: 'The Infinite Staircase',
    description: 'The stairs to the second floor are now infinite. You\'ve been climbing for years.',
    logMessages: [
      'The steps are made of bone.',
      'You can see the corpses of other students who tried to climb.',
      'The principal is at the top. He\'s waiting.',
      'The climb is the only thing that exists.'
    ],
    mentalImpact: -5500,
    physicalImpact: -8000,
    socialImpact: -500,
    cooldown: 45000,
    cost: 990000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Descent',
      description: 'The stairs are now going down. Into the dark.',
      mentalImpactBonus: -3000,
      physicalImpactBonus: -4000,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'omniversal-dream-final',
    label: 'Omniversal Dream',
    description: 'The entire omniverse is just a dream you are having. And you are about to wake up.',
    logMessages: [
      'The world is fading at the edges.',
      'The principal is a recurring nightmare.',
      'You are starting to hear the alarm clock of reality.',
      'The dream is over.'
    ],
    mentalImpact: -8000,
    physicalImpact: -2000,
    socialImpact: -2000,
    cooldown: 70000,
    cost: 995000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Awakening',
      description: 'You woke up. You are still in high school. It wasn\'t a dream.',
      mentalImpactBonus: -10000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -5000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'great-design-final',
    label: 'The Great Design',
    description: 'You saw the blueprint for the omniverse. It was drawn in crayon by a toddler.',
    logMessages: [
      'The universe is a messy, poorly planned accident.',
      'The toddler is currently eating the sun.',
      'The design is full of spelling errors.',
      'You are a smudge on the page.'
    ],
    mentalImpact: -6500,
    physicalImpact: -1000,
    socialImpact: -1000,
    cooldown: 40000,
    cost: 998000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Eraser',
      description: 'The toddler found an eraser. Goodbye.',
      mentalImpactBonus: -4000,
      physicalImpactBonus: -1000,
      socialImpactBonus: -1000,
      costMultiplier: 1.1
    }
  },
  {
    id: 'omniversal-static-final',
    label: 'Omniversal Static',
    description: 'The omniverse has lost its signal. Everything is white noise.',
    logMessages: [
      'The sound of a billion billion screaming atoms.',
      'You are a flickering image on a broken screen.',
      'The principal is a burst of snow.',
      'The end of the broadcast.'
    ],
    mentalImpact: -7500,
    physicalImpact: -5000,
    socialImpact: -2000,
    cooldown: 55000,
    cost: 999000,
    category: 'Omniversal',
    upgrade: {
      label: 'The Off Switch',
      description: 'Someone just pulled the plug.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -2000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'end-of-all-things-final',
    label: 'The End of All Things',
    description: 'The final, absolute end. No resets. No sequels. No hope.',
    logMessages: [
      'The last atom has decayed.',
      'The last thought has been forgotten.',
      'The last misery has been felt.',
      'Silence.'
    ],
    mentalImpact: -10000,
    physicalImpact: -10000,
    socialImpact: -10000,
    cooldown: 100000,
    cost: 999900,
    category: 'Omniversal',
    upgrade: {
      label: 'The Absolute Nothing',
      description: 'Not even the void remains.',
      mentalImpactBonus: -10000,
      physicalImpactBonus: -10000,
      socialImpactBonus: -10000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'omniversal-void-final',
    label: 'Omniversal Void',
    description: 'The omniverse has been swallowed by a void that is larger than infinity.',
    logMessages: [
      'The void is hungry. And it\'s full.',
      'You are a speck of light in a sea of darkness.',
      'The school is a memory of a memory.',
      'The end of the end.'
    ],
    mentalImpact: -9000,
    physicalImpact: -9000,
    socialImpact: -5000,
    cooldown: 80000,
    cost: 999995,
    category: 'Omniversal',
    upgrade: {
      label: 'The Total Darkness',
      description: 'The light is gone.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -2000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'ultimate-misery-final',
    label: 'The Ultimate Misery',
    description: 'You have achieved the maximum possible amount of suffering in the omniverse.',
    logMessages: [
      'The misery is so dense it has its own gravity.',
      'You are the king of the sad.',
      'The omniverse is bowing to your pain.',
      'The final click is coming.'
    ],
    mentalImpact: -10000,
    physicalImpact: -10000,
    socialImpact: -10000,
    cooldown: 100000,
    cost: 1000000,
    category: 'Omniversal',
    upgrade: {
      label: 'The 1,000,000 Point Disaster',
      description: 'The end. For real. Thank you for playing.',
      mentalImpactBonus: -10000,
      physicalImpactBonus: -10000,
      socialImpactBonus: -10000,
      costMultiplier: 1.0
    }
  },
  // Missing Existential
  {
    id: 'eternal-return-fail',
    label: 'The Eternal Return',
    description: 'You are doomed to repeat this exact moment of failure forever.',
    logMessages: [
      'I\'ve done this before. And I\'ll do it again.',
      'The loop is tightening.',
      'Time is a flat circle of misery.',
      'The principal is laughing in every timeline.'
    ],
    mentalImpact: -1200,
    physicalImpact: -100,
    socialImpact: -200,
    cooldown: 15000,
    cost: 335000,
    category: 'Existential',
    upgrade: {
      label: 'The Infinite Loop',
      description: 'The loop is now so fast it\'s a blur of pain.',
      mentalImpactBonus: -800,
      physicalImpactBonus: -100,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'the-void-final',
    label: 'The Void',
    description: 'You have finally reached the center of the nothingness.',
    logMessages: [
      'It\'s very quiet here.',
      'You are the only thing left.',
      'The void is comfortable.',
      'Goodbye, world.'
    ],
    mentalImpact: -2000,
    physicalImpact: -1000,
    socialImpact: -1000,
    cooldown: 20000,
    cost: 340000,
    category: 'Existential',
    upgrade: {
      label: 'The Absolute Nothing',
      description: 'Even you are gone now.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -1000,
      socialImpactBonus: -1000,
      costMultiplier: 1.0
    }
  },
  // Missing Universal
  {
    id: 'big-bang-2',
    label: 'Big Bang 2.0',
    description: 'The universe decided to start over. Right in the middle of your lunch.',
    logMessages: [
      'A new universe is expanding out of your soup.',
      'You are currently the center of a new creation.',
      'The principal is trying to tax the new universe.',
      'Everything is being overwritten by new laws.'
    ],
    mentalImpact: -1500,
    physicalImpact: -2000,
    socialImpact: -500,
    cooldown: 25000,
    cost: 540000,
    category: 'Universal',
    upgrade: {
      label: 'The Total Reset',
      description: 'The old universe is completely gone. This one is even worse.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -1000,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  // Missing Multiversal (17 more)
  {
    id: 'multiversal-war-final',
    label: 'Multiversal War',
    description: 'Infinite versions of the school are at war with each other.',
    logMessages: [
      'The sky is full of flying schools.',
      'You just got hit by a locker from Earth-2.',
      'The principal is leading a charge of infinite teachers.',
      'The war has no beginning and no end.'
    ],
    mentalImpact: -2500,
    physicalImpact: -3000,
    socialImpact: -1000,
    cooldown: 30000,
    cost: 580000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Total War',
      description: 'Every atom in the multiverse is now a weapon.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: -1000,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'nexus-point-final',
    label: 'The Nexus Point',
    description: 'The school has become the center of all realities.',
    logMessages: [
      'You are currently in every room at once.',
      'The pressure of infinite existence is crushing.',
      'You can see every possible choice you ever made.',
      'The nexus is breaking.'
    ],
    mentalImpact: -3000,
    physicalImpact: -1000,
    socialImpact: -1000,
    cooldown: 25000,
    cost: 590000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Nexus Collapse',
      description: 'The center cannot hold. The multiverse is folding.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: -1000,
      socialImpactBonus: -500,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-drift-final',
    label: 'Multiversal Drift',
    description: 'Our universe is drifting away from the others into the deep void.',
    logMessages: [
      'The connection to other worlds is fading.',
      'You feel a profound sense of cosmic isolation.',
      'The "other yous" are disappearing.',
      'We are alone in the dark.'
    ],
    mentalImpact: -1500,
    physicalImpact: -200,
    socialImpact: -800,
    cooldown: 12000,
    cost: 600000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Isolation',
      description: 'The drift is complete. We are the only thing left.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: 0,
      socialImpactBonus: -400,
      costMultiplier: 1.1
    }
  },
  {
    id: 'copyright-incursion-final',
    label: 'The Copyright Incursion',
    description: 'A multiversal corporation is suing you for existing.',
    logMessages: [
      'You are being served with a billion cease-and-desist orders.',
      'Your face is a trademark of a different reality.',
      'The principal is trying to sell the rights to your pain.',
      'You are being deleted for copyright infringement.'
    ],
    mentalImpact: -1200,
    physicalImpact: -100,
    socialImpact: -1500,
    cooldown: 10000,
    cost: 610000,
    category: 'Multiversal',
    upgrade: {
      label: 'The DMCA Strike',
      description: 'Your entire existence has been taken down.',
      mentalImpactBonus: -800,
      physicalImpactBonus: -50,
      socialImpactBonus: -500,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-harmony-final',
    label: 'Multiversal Harmony',
    description: 'Every version of you is screaming in perfect unison.',
    logMessages: [
      'The sound is shaking the foundations of reality.',
      'A choir of infinite suffering.',
      'The frequency is shattering every window in the multiverse.',
      'The principal is trying to conduct the scream.'
    ],
    mentalImpact: -2000,
    physicalImpact: -500,
    socialImpact: -1000,
    cooldown: 15000,
    cost: 620000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Discord',
      description: 'The harmony broke. Now they are all screaming different things.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -200,
      socialImpactBonus: -500,
      costMultiplier: 1.3
    }
  },
  {
    id: 'anti-monitor-final',
    label: 'The Anti-Monitor',
    description: 'A cosmic being is eating your universe like a snack.',
    logMessages: [
      'He says your reality is "a bit salty".',
      'The sky is being replaced by his giant face.',
      'Everything is being converted into anti-matter.',
      'The principal is trying to give him a hall pass.'
    ],
    mentalImpact: -4000,
    physicalImpact: -4000,
    socialImpact: -1000,
    cooldown: 40000,
    cost: 630000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Crisis',
      description: 'He\'s finished his snack. Now he wants dessert.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: -2000,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'dark-multiverse-final',
    label: 'The Dark Multiverse',
    description: 'A universe made of your worst nightmares is overlapping with yours.',
    logMessages: [
      'The shadows have teeth.',
      'Every fear you ever had is now a person in the hallway.',
      'The sky is raining black ink.',
      'The principal is a literal demon.'
    ],
    mentalImpact: -3000,
    physicalImpact: -1000,
    socialImpact: -500,
    cooldown: 20000,
    cost: 640000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Nightmare Realm',
      description: 'The overlap is permanent.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: -500,
      socialImpactBonus: -200,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-singularity-final',
    label: 'Multiversal Singularity',
    description: 'Every universe is being crushed into a single point.',
    logMessages: [
      'You are sharing a locker with a billion other yous.',
      'The pressure is infinite.',
      'The entire multiverse is the size of a grape.',
      'You can feel the weight of infinite lives.'
    ],
    mentalImpact: -3500,
    physicalImpact: -5000,
    socialImpact: -1000,
    cooldown: 30000,
    cost: 650000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Point',
      description: 'The multiverse is now a single, dimensionless point of misery.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: -1000,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'multiversal-library-final',
    label: 'The Multiversal Library',
    description: 'The library containing every possible story is on fire.',
    logMessages: [
      'The pages of your life are turning to ash.',
      'Infinite knowledge is being lost.',
      'The librarian is crying in 500 languages.',
      'The smoke smells like lost hope.'
    ],
    mentalImpact: -2500,
    physicalImpact: -100,
    socialImpact: -300,
    cooldown: 15000,
    cost: 660000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Ash',
      description: 'The library is gone. There are no more stories.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: 0,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-reset-final-2',
    label: 'Multiversal Reset',
    description: 'The multiverse just rebooted. You are now a 2D drawing.',
    logMessages: [
      'You are very flat.',
      'The school is now a series of equations.',
      'Your crush is a hyper-cube.',
      'The reset didn\'t fix anything.'
    ],
    mentalImpact: -1800,
    physicalImpact: -500,
    socialImpact: -800,
    cooldown: 12000,
    cost: 670000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Hard Reset',
      description: 'Back to the beginning. Again.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -500,
      socialImpactBonus: -500,
      costMultiplier: 1.1
    }
  },
  {
    id: 'multiversal-mirror-final',
    label: 'The Multiversal Mirror',
    description: 'You are staring at every version of yourself. They are all better than you.',
    logMessages: [
      'One you is a doctor. One is a king. One is happy.',
      'You are the only one who failed.',
      'The mirror is showing you what could have been.',
      'The mirror is laughing.'
    ],
    mentalImpact: -3000,
    physicalImpact: 0,
    socialImpact: -500,
    cooldown: 18000,
    cost: 680000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Shatter',
      description: 'The mirror broke. Now the happy yous are leaking out and judging you.',
      mentalImpactBonus: -2000,
      physicalImpactBonus: 0,
      socialImpactBonus: -500,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-glitch-final',
    label: 'Multiversal Glitch',
    description: 'The code of the multiverse is corrupting. You are a bug.',
    logMessages: [
      'Your legs are now arms.',
      'The sky is a "File Not Found" error.',
      'You are currently falling through the floor of reality.',
      'The principal is a string of random characters.'
    ],
    mentalImpact: -2200,
    physicalImpact: -1000,
    socialImpact: -400,
    cooldown: 14000,
    cost: 690000,
    category: 'Multiversal',
    upgrade: {
      label: 'The System Crash',
      description: 'The multiverse has stopped responding.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -500,
      socialImpactBonus: -200,
      costMultiplier: 1.3
    }
  },
  {
    id: 'multiversal-echo-final',
    label: 'Multiversal Echo',
    description: 'Every action you take is echoed by a billion other yous.',
    logMessages: [
      'You sneezed. The multiverse shook.',
      'A billion voices are saying exactly what you just said.',
      'The noise is deafening.',
      'You can\'t hear your own thoughts anymore.'
    ],
    mentalImpact: -2000,
    physicalImpact: -200,
    socialImpact: -600,
    cooldown: 12000,
    cost: 700000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Feedback Loop',
      description: 'The echoes are getting louder and louder.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -100,
      socialImpactBonus: -400,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-shadow-final',
    label: 'Multiversal Shadow',
    description: 'A shadow from a dead universe is following you.',
    logMessages: [
      'It\'s cold. And it smells like ash.',
      'The shadow is whispering secrets you don\'t want to know.',
      'Everything it touches turns to grey.',
      'The shadow is getting bigger.'
    ],
    mentalImpact: -2500,
    physicalImpact: -500,
    socialImpact: -300,
    cooldown: 16000,
    cost: 710000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Eclipse',
      description: 'The shadow has consumed the sun of every reality.',
      mentalImpactBonus: -1500,
      physicalImpactBonus: -500,
      socialImpactBonus: -200,
      costMultiplier: 1.1
    }
  },
  {
    id: 'multiversal-tide-final',
    label: 'The Multiversal Tide',
    description: 'A wave of pure information from other realities is washing over the school.',
    logMessages: [
      'You are drowning in data.',
      'You just learned the secrets of a billion civilizations.',
      'Your brain is melting from the input.',
      'The tide is pulling you out to sea.'
    ],
    mentalImpact: -2800,
    physicalImpact: -400,
    socialImpact: -200,
    cooldown: 18000,
    cost: 720000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Flood',
      description: 'The tide is now a permanent ocean of noise.',
      mentalImpactBonus: -1200,
      physicalImpactBonus: -200,
      socialImpactBonus: -100,
      costMultiplier: 1.2
    }
  },
  {
    id: 'multiversal-knot-final',
    label: 'The Multiversal Knot',
    description: 'Several universes have become tangled together. It\'s a mess.',
    logMessages: [
      'You are currently tied to a version of you from a world made of jelly.',
      'The more you pull, the tighter it gets.',
      'Reality is a ball of yarn.',
      'The principal is trying to cut the knot with a pair of safety scissors.'
    ],
    mentalImpact: -2400,
    physicalImpact: -800,
    socialImpact: -500,
    cooldown: 15000,
    cost: 730000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Tangle',
      description: 'The universes are now fused into a single, chaotic lump.',
      mentalImpactBonus: -1000,
      physicalImpactBonus: -400,
      socialImpactBonus: -200,
      costMultiplier: 1.1
    }
  },
  {
    id: 'multiversal-end-final',
    label: 'The End of the Multiverse',
    description: 'The final bell has rung for every reality.',
    logMessages: [
      'The infinite is becoming finite.',
      'The lights are going out.',
      'The principal is locking the doors to reality.',
      'The end of everything.'
    ],
    mentalImpact: -5000,
    physicalImpact: -5000,
    socialImpact: -5000,
    cooldown: 50000,
    cost: 750000,
    category: 'Multiversal',
    upgrade: {
      label: 'The Void',
      description: 'Nothing left. Not even a memory.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -5000,
      costMultiplier: 1.0
    }
  },
  // Missing Omniversal (2 more)
  {
    id: 'omniversal-void-final-2',
    label: 'The Omniversal Void',
    description: 'The void that contains all voids is currently empty.',
    logMessages: [
      'It\'s the ultimate nothing.',
      'You are a speck of dust in the eye of a ghost.',
      'The void is hungry.',
      'The end of the end.'
    ],
    mentalImpact: -9000,
    physicalImpact: -9000,
    socialImpact: -5000,
    cooldown: 80000,
    cost: 999996,
    category: 'Omniversal',
    upgrade: {
      label: 'The Total Darkness',
      description: 'The light is gone. Forever.',
      mentalImpactBonus: -5000,
      physicalImpactBonus: -5000,
      socialImpactBonus: -2000,
      costMultiplier: 1.0
    }
  },
  {
    id: 'ultimate-misery-final-2',
    label: 'The Ultimate Misery',
    description: 'You have achieved the maximum possible amount of suffering.',
    logMessages: [
      'The misery is so dense it has its own gravity.',
      'You are the king of the sad.',
      'The omniverse is bowing to your pain.',
      'The final click is coming.'
    ],
    mentalImpact: -10000,
    physicalImpact: -10000,
    socialImpact: -10000,
    cooldown: 100000,
    cost: 1000000,
    category: 'Omniversal',
    upgrade: {
      label: 'The 1,000,000 Point Disaster',
      description: 'The end. For real. Thank you for playing.',
      mentalImpactBonus: -10000,
      physicalImpactBonus: -10000,
      socialImpactBonus: -10000,
      costMultiplier: 1.0
    }
  }
];

export const SCHOOL_NEWS = [
  "Cafeteria 'Meat' mystery deepens as local cat population declines.",
  "Principal bans hoodies; students respond with 'Invisible Man' protests.",
  "Janitor finds secret tunnel to Narnia behind the boiler room.",
  "Math teacher replaced by ChatGPT; students report 200% increase in confusion.",
  "School board votes to replace gym class with competitive e-sports.",
  "Mysterious green slime leaking from locker 402; hazmat team called.",
  "Student council president caught selling fake hall passes for crypto.",
  "Library quiet zone now enforced by automated sentry turrets.",
  "History textbook updated to include 'The Great Meme War of 2023'.",
  "Vending machine only accepts payment in 'Social Credit' points.",
  "Science fair project accidentally creates a localized black hole.",
  "School mascot 'Buster the Bulldog' revealed to be three raccoons in a suit.",
  "Prom theme announced: 'Post-Apocalyptic Wasteland' (no costumes required).",
  "Drama club's production of 'Hamlet' performed entirely in Emoji.",
  "New school rule: Eye contact with the principal is now a detention offense.",
];

export const FLAVOR_MESSAGES = [
  "Stared at the clock for 10 minutes. It didn't move.",
  "Forgot what you were about to say mid-sentence.",
  "Accidentally made eye contact with a stranger. Awkward.",
  "Your stomach growled during a silent moment in class.",
  "Thought someone was waving at you. They weren't.",
  "Spent 5 minutes trying to find your pen. It was in your hand.",
  "The teacher looked at you. You panicked for no reason.",
  "A fly landed on your nose. You didn't want to move.",
  "Wondered if everyone can hear your thoughts.",
  "The hallway smells like wet dog and desperation.",
  "You realized you've been wearing your shirt inside out.",
  "A bird hit the classroom window. Nobody noticed but you.",
  "You tried to look cool leaning against a wall. You slipped.",
  "The school bell was 2 seconds late today. Chaos.",
  "You forgot your locker combination for a split second.",
  "Someone laughed. You assumed it was at you.",
  "The floor is surprisingly sticky in this specific spot.",
  "You found a half-eaten grape on your desk.",
  "The fluorescent lights are buzzing in B-flat.",
  "You realized you've been holding your breath.",
];
