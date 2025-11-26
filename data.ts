import { Question, SignData } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "In Colorado, at what Blood Alcohol Concentration (BAC) can you be charged with DUI?",
    options: ["0.05%", "0.02%", "0.08%", "0.10%"],
    correctIndex: 2,
    explanation: "You can be charged with DUI if your BAC is 0.08% or higher. However, you can be charged with DWAI (Driving While Ability Impaired) at 0.05%."
  },
  {
    id: 2,
    question: "When driving in urban areas, how far in advance must you signal before turning?",
    options: ["50 feet", "100 feet", "200 feet", "300 feet"],
    correctIndex: 1,
    explanation: "In urban areas, you must signal continuously for 100 feet before making a turn or lane change."
  },
  {
    id: 3,
    question: "On a narrow mountain road where two vehicles cannot pass, who has the right-of-way?",
    options: ["The vehicle traveling downhill", "The vehicle traveling uphill", "The larger vehicle", "Whoever arrives first"],
    correctIndex: 1,
    explanation: "The vehicle going uphill has the right-of-way. The vehicle going downhill must back up to a wider place or stop."
  },
  {
    id: 4,
    question: "Under Colorado's Traction Law (Code 15), what is the minimum tread depth required?",
    options: ["1/8 inch", "1/16 inch", "3/16 inch", "1/4 inch"],
    correctIndex: 2,
    explanation: "During Code 15 restrictions, tires must have a minimum of 3/16 inch tread depth."
  },
  {
    id: 5,
    question: "When must you dim your high beam headlights for an oncoming vehicle?",
    options: ["Within 200 feet", "Within 300 feet", "Within 500 feet", "Within 1000 feet"],
    correctIndex: 2,
    explanation: "You must dim your lights before coming within 500 feet of an oncoming vehicle."
  },
  {
    id: 6,
    question: "What is the 'No Zone'?",
    options: ["An area where parking is prohibited", "The blind spots around large trucks/buses", "A construction zone", "A pedestrian-only walkway"],
    correctIndex: 1,
    explanation: "The 'No Zone' refers to the large blind spots around trucks and buses where cars disappear from the driver's view."
  },
  {
    id: 7,
    question: "If your vehicle begins to hydroplane, what should you do?",
    options: ["Brake hard immediately", "Steer sharply towards the shoulder", "Take your foot off the gas and let the car slow down", "Accelerate to gain traction"],
    correctIndex: 2,
    explanation: "Ease off the accelerator to allow the vehicle to slow down. Avoid hard braking or sharp steering."
  },
  {
    id: 8,
    question: "How much space must you give when passing a bicyclist?",
    options: ["1 foot", "2 feet", "3 feet", "4 feet"],
    correctIndex: 2,
    explanation: "Colorado law requires a minimum of 3 feet buffer zone between your vehicle and a bicyclist when passing."
  },
  {
    id: 9,
    question: "What does a flashing red traffic signal mean?",
    options: ["Yield to traffic", "Stop, look, and proceed when safe (same as a Stop sign)", "The light is broken", "Slow down and proceed with caution"],
    correctIndex: 1,
    explanation: "A flashing red light means the same as a STOP sign. Stop completely, yield, then go."
  },
  {
    id: 10,
    question: "Unless otherwise posted, what is the speed limit in a residential district?",
    options: ["20 mph", "25 mph", "30 mph", "35 mph"],
    correctIndex: 2,
    explanation: "Unless otherwise posted, the speed limit in any residence district is 30 mph."
  }
];

export const SIGNS: SignData[] = [
  { id: 'stop', name: 'Stop', category: 'regulatory', color: 'bg-red-600', shape: 'Octagon', description: 'Come to a complete stop.' },
  { id: 'yield', name: 'Yield', category: 'regulatory', color: 'bg-red-100 text-red-600 border-4 border-red-600', shape: 'Inverted Triangle', description: 'Slow down and give right-of-way.' },
  { id: 'speed', name: 'Speed Limit', category: 'regulatory', color: 'bg-white border-4 border-black', shape: 'Rectangle', description: 'Maximum legal speed.' },
  { id: 'merge', name: 'Merge', category: 'warning', color: 'bg-yellow-400', shape: 'Diamond', description: 'Traffic merging from side.' },
  { id: 'school', name: 'School Zone', category: 'warning', color: 'bg-yellow-400', shape: 'Pentagon', description: 'School ahead, watch for children.' },
  { id: 'slippery', name: 'Slippery When Wet', category: 'warning', color: 'bg-yellow-400', shape: 'Diamond', description: 'Road becomes slippery in rain.' },
  { id: 'hospital', name: 'Hospital', category: 'service', color: 'bg-blue-600 text-white', shape: 'Square', description: 'Hospital services available.' },
  { id: 'construction', name: 'Road Work', category: 'warning', color: 'bg-orange-500', shape: 'Diamond', description: 'Construction ahead.' },
];

export const LICENSE_POINTS = [
  { infraction: "DUI / DWAI", points: "8-12 pts" },
  { infraction: "Leaving Scene of Accident", points: "12 pts" },
  { infraction: "Speeding (20-39 over)", points: "6 pts" },
  { infraction: "Speeding (10-19 over)", points: "4 pts" },
  { infraction: "Speeding (5-9 over)", points: "1 pt" },
  { infraction: "Texting While Driving", points: "4 pts" },
  { infraction: "Failure to Yield", points: "3 pts" },
];