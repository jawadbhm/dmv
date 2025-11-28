import { ChecklistItem, FlashcardItem, KeyNumberItem } from './components/LearningCards';

export const mountainFlashcards: FlashcardItem[] = [
  {
    title: 'Code 15 Setup',
    summary: 'How to prep when Colorado activates the Traction Law on I-70 between Dotsero and Morrison.',
    dos: ['Engage AWD/4WD before you hit traffic', 'Confirm tires have at least 3/16" tread', 'Carry chains or AutoSock for 2WD'],
    donts: ['Wait until you are stuck to chain up', 'Assume M+S branding is enough during Code 16', 'Ignore overhead traction alerts'],
    quickTip: '3/16" tread + chains = legal AND safer braking distance.',
  },
  {
    title: 'Mountain Right-of-Way',
    summary: 'On narrow grades, downhill traffic yields to uphill traffic for control and safety.',
    dos: ['Give uphill traffic the lane and space to continue climbing', 'Use pull-outs early instead of stopping mid-grade', 'Scan for runaway truck ramps before descents'],
    donts: ['Force downhill vehicles to stop on steep grades', 'Park in runaway ramps or block them', 'Descend in neutral or with engine braking off'],
    quickTip: 'Golden rule: the vehicle going UPHILL keeps priority.',
  },
  {
    title: 'Brake & Gear Control',
    summary: 'Use gears to manage speed so brakes do not overheat on long descents.',
    dos: ['Shift to a lower gear before the downgrade begins', 'Use smooth, short brake taps to control speed', 'Leave larger gaps for heavy vehicles that heat faster'],
    donts: ['Ride the brake pedal the entire hill', 'Downshift only after brakes are already fading', 'Draft trucks for extra braking'],
  },
];

export const keyNumbers: KeyNumberItem[] = [
  { label: 'Traction Law Fine', value: '$130 - $650', detail: 'Ticket + towing if you block traffic without required equipment.' },
  { label: 'Minimum Tread', value: '3/16"', detail: 'Mandatory when Code 15 is active. Check with a quarter test.' },
  { label: 'Safe Speed Cushion', value: '10 mph', detail: 'Keep at least 10 mph below posted limit on packed snow or ice.' },
  { label: 'Following Distance', value: '6+ sec', detail: 'Double the dry pavement gap; add more for trucks or low visibility.' },
];

export const winterChecklist: ChecklistItem[] = [
  { label: 'Cab Essentials', items: ['Full tank before canyon climbs', 'Heated gear or blanket', 'Water + calorie-dense snacks'] },
  { label: 'Traction Gear', items: ['Chains/AutoSock (fits your tires)', 'Collapsible shovel + sand/kitty litter', 'Gloves and mat for chain installs'] },
  { label: 'Visibility Kit', items: ['Ice scraper & brush', 'High-vis triangle or flares', 'Phone charger + flashlight'] },
];

export const quickMicrocopy = {
  traction: 'Active Sept–May: Code 15 (Traction) requires AWD/4WD with 3/16" tread OR chains/AutoSock. Code 16 (Chain Law) requires chains for ALL vehicles.',
  conditions: 'Plan your exit before braking. Whiteouts, black ice, and steep drop-offs mean vision-first driving: slow earlier, signal earlier, and avoid sudden steering.',
};
