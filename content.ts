import { View } from './types';
import { ChecklistItem, FlashcardItem, GuideCardItem, KeyNumberItem } from './components/LearningCards';

export interface ModuleContent {
  title: string;
  subtitle?: string;
  flashcards?: FlashcardItem[];
  keyNumbers?: KeyNumberItem[];
  checklists?: ChecklistItem[];
  quickNotes?: { label: string; body: string }[];
  guideCards?: GuideCardItem[];
}

export const moduleContent: Record<View, ModuleContent> = {
  [View.LICENSE]: {
    title: 'License & Penalties',
    subtitle: 'What can cost you your license and how to stay in good standing with Colorado DMV.',
    keyNumbers: [
      { label: 'DUI Threshold', value: '0.08% BAC', detail: '0.05% triggers DWAI; both add points and fines.' },
      { label: 'Adult Suspension', value: '12 pts / 12 mo', detail: '12 points in 12 months or 18 in 24 months leads to suspension.' },
      { label: 'Minor BAC', value: '0.02% BAC', detail: 'Under 21 zero-tolerance: 3-month revocation starting at 0.02%.' },
      { label: 'Texting Violation', value: '4 pts', detail: 'Primary offense if careless driving is observed.' },
    ],
    flashcards: [
      {
        title: 'Point Strategy',
        summary: 'Stacking violations quickly adds up to suspension—know the heavy hitters.',
        dos: ['Track your record after tickets post', 'Take a defensive driving course if eligible', 'Fight incorrect citations promptly'],
        donts: ['Ignore mailed suspension notices', 'Assume insurance won’t check your points', 'Drive if your license is revoked'],
        quickTip: '12 points in 12 months = suspension for adults; teens lose privilege sooner.',
      },
      {
        title: 'Insurance Impacts',
        summary: 'Major violations raise premiums or require SR-22 filings.',
        dos: ['Keep proof of insurance in vehicle', 'Report address changes to avoid missing notices', 'Pay reinstatement fees immediately after eligibility'],
        donts: ['Let insurance lapse after a crash', 'Skip court dates—bench warrants follow', 'Delay reinstatement paperwork'],
      },
      {
        title: 'Permit to License',
        summary: 'Graduated licensing steps for teens—each stage has a minimum duration.',
        dos: ['Hold permit 12 months', 'Log 50 hours (10 at night) with supervisor', 'No passengers under 21 for first 6 months unless sibling/medical/instructor'],
        donts: ['Carry friends under 21 in first 6 months (siblings excepted)', 'Drive past curfew (midnight–5am) without exemptions', 'Use phone while driving (ban under 18)'],
      },
    ],
    checklists: [
      { label: 'Reinstatement Prep', items: ['Check eligibility date on DMV notice', 'Complete required alcohol/driver courses', 'File SR-22 if mandated', 'Pay reinstatement fee online or in-person'] },
      { label: 'Test Day Docs', items: ['Proof of ID and legal presence', 'Proof of address (two documents)', 'Social Security number proof', 'Insurance & registration for drive test vehicle'] },
    ],
    guideCards: [
      {
        title: 'Points That Spike Fast',
        bullets: ['DUI/DWAI plus reckless: expect suspension and SR-22', '4 pts for texting when careless driving applies', 'Failure to yield or signal stacks with speeding']
      },
        {
          title: 'Teen Restrictions Snapshot',
          bullets: ['First 6 months: no passengers under 21 (siblings/medical/emergency exceptions)', 'Months 7–12: one passenger under 21 allowed unless siblings', 'Curfew midnight–5am unless work/school/medical', 'No phone use under 18—hands-free still banned'],
          tone: 'warning'
        }
    ],
    quickNotes: [
      { label: 'DWAI vs DUI', body: 'DWAI starts at 0.05% BAC; DUI at 0.08%. Refusal equals automatic license revocation via Express Consent.' },
      { label: 'Minor Drivers', body: 'Under-18 infractions carry community service and suspension faster—respect curfew and passenger limits.' },
      { label: 'Seat Belt Enforcement', body: 'Adult seat belt enforcement is secondary, but it is primary for anyone under 16 and drivers are responsible for unbelted minors.' },
    ],
  },
  [View.VEHICLE]: {
    title: 'Vehicle & Owner Duties',
    subtitle: 'Keep your car legal, visible, and safe before heading out.',
    keyNumbers: [
      { label: 'Plate Renewal', value: 'Annually', detail: 'Emissions required in select counties before renewal.' },
      { label: 'Window Tint', value: '27% VLT', detail: 'Front side windows must allow 27% light through or more.' },
      { label: 'Headlight Distance', value: '500 ft', detail: 'Headlights must illuminate persons/vehicles 500 ft ahead.' },
      { label: 'Child Seats', value: 'Up to 8 yrs', detail: 'Use age/weight-appropriate seat or booster until 4\'9" or 8 years old.' },
    ],
    flashcards: [
      {
        title: 'Pre-Trip Walkaround',
        summary: 'A 60-second check prevents tickets and breakdowns.',
        dos: ['Check tire tread and pressure monthly', 'Clean lights/plates for visibility', 'Test signals and brake lights with a helper'],
        donts: ['Ignore dashboard warnings', 'Overload vehicle beyond GVWR', 'Skip wiper/washer fluid during winter'],
        quickTip: 'Use the quarter test: Washington’s head down = ~3/16" tread remaining.',
      },
      {
        title: 'Registration Basics',
        summary: 'Your plate, tabs, and proof of insurance must be current.',
        dos: ['Renew before expiration month', 'Carry physical or digital proof of insurance', 'Replace damaged plates promptly'],
        donts: ['Cover plates with frames that hide letters', 'Drive with temp tags beyond expiration', 'Ignore emissions notices'],
      },
      {
        title: 'Equipment Law',
        summary: 'Missing or altered equipment is ticketable.',
        dos: ['Use two working headlights and one tail lamp minimum', 'Keep mufflers intact—no straight pipes', 'Secure load to prevent spill/leak'],
        donts: ['Install red/blue lights if not emergency', 'Tint windshield below AS-1 line', 'Drive with cracked windshield obstructing view'],
      },
    ],
    checklists: [
      { label: 'Emergency Kit', items: ['Spare tire + jack', 'Jumper cables or pack', 'Reflective triangle/flares', 'Phone charger + first aid kit'] },
      { label: 'Paperwork', items: ['Registration & insurance accessible', 'Emission/inspection proof if required', 'Title stored safely—not in car'] },
    ],
    guideCards: [
      {
        title: 'Visibility & Legibility',
        bullets: ['Keep plates clean and fully visible—no covers over letters', 'Tint above AS-1 line only; 27% VLT on front sides', 'Replace cracked lights/lenses that change color']
      },
      {
        title: 'Equipment Pitfalls',
        bullets: ['Muffler delete or straight pipe invites tickets', 'Loads must be secured and covered to prevent spills', 'Snow/ice on roof can be cited if it flies off'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Liability Basics', body: 'Colorado minimums: $25k bodily injury per person / $50k per crash / $15k property damage. Higher coverage is safer.' },
    ],
  },
  [View.BASIC]: {
    title: 'Basic Driving',
    subtitle: 'Fundamentals that keep the vehicle stable, predictable, and safe.',
    keyNumbers: [
      { label: 'Hand Placement', value: '9 & 3', detail: 'Modern airbags make 9-and-3 safest; 8-and-4 acceptable for long drives.' },
      { label: 'Following Gap', value: '3 sec', detail: 'Minimum dry pavement gap; double in bad weather.' },
      { label: 'Signal Ahead', value: '100 ft city / 200 ft fast', detail: 'Signal at least 100 ft before turns; 200 ft when speeds exceed 40 mph (Colorado standard).' },
      { label: 'School Zone', value: '20 mph', detail: 'Slow to posted school speed limits when lights flash or children present.' },
    ],
    flashcards: [
      {
        title: 'Smooth Steering',
        summary: 'Use push-pull steering for better control and airbag safety.',
        dos: ['Hands stay outside wheel rim', 'Look through the turn (aim high)', 'Reset hands smoothly after turns'],
        donts: ['Cross arms suddenly unless emergency', 'Palm the wheel with one hand', 'Rest thumbs inside spokes'],
      },
      {
        title: 'Controlled Starts & Stops',
        summary: 'Predictable pedals prevent jerks and rear-end risks.',
        dos: ['Heel planted, press with ball of foot', 'Check mirrors before braking', 'Stop fully behind limit lines'],
        donts: ['Ride brake on descents', 'Launch hard from green lights', 'Stop in crosswalks'],
      },
      {
        title: 'Backing Up',
        summary: 'Vision first, speed last.',
        dos: ['Walk behind car to clear blind spot', 'Left hand at 12 o’clock, look through rear window', 'Back slowly with foot over brake'],
        donts: ['Rely only on cameras', 'Cut wheel before you roll', 'Back into moving traffic without yielding'],
        quickTip: 'Choose backing into a spot rather than backing into traffic later.',
      },
    ],
    checklists: [
      { label: 'Before Moving', items: ['Seat, mirrors, headrest set', 'Doors locked, seat belt on', 'Foot on brake before shifting', 'Scan 360° for hazards'] },
      { label: 'After Parking', items: ['Set parking brake', 'Turn wheels toward/away from curb as required', 'Remove keys and valuables', 'Lock vehicle'] },
    ],
    guideCards: [
      {
        title: 'Body Position',
        bullets: ['Sit high enough to see hood edges', 'Wrists on top of wheel = correct distance', 'Head restraint even with top of ears']
      },
      {
        title: 'Smoothness Formula',
        bullets: ['Press pedals like dimmers, not switches', 'Look far ahead to avoid sudden steering', 'Make one change at a time—speed, then lane']
      }
    ],
    quickNotes: [
      { label: 'Eyes Up', body: 'Aim your vision 12–15 seconds ahead to avoid tunnel vision and smooth out your steering inputs.' },
      { label: 'Smooth Inputs', body: 'Stack small steering and pedal changes instead of one big move—your passengers and suspension will thank you.' },
    ],
  },
  [View.CONTROLS]: {
    title: 'Traffic Controls',
    subtitle: 'Decode signs, signals, and pavement markings at a glance.',
    keyNumbers: [
      { label: 'Flashing Red', value: 'Full Stop', detail: 'Treat as a STOP sign; proceed when clear.' },
      { label: 'Flashing Yellow', value: 'Yield & Scan', detail: 'Proceed carefully; pedestrians still have priority.' },
      { label: 'Stop Distance', value: 'Before Line', detail: 'Stop at limit line/crosswalk; creep only to see if blocked.' },
      { label: 'No Turn on Red', value: 'Watch Signs', detail: 'Signposted or where ped/bike present; always yield before right on red.' },
    ],
    flashcards: [
      {
        title: 'Signal Phases',
        summary: 'Green means go if clear; yellow means prepare to stop; red means stop.',
        dos: ['Scan crosswalk before moving on green', 'Commit or stop at yellow based on speed/distance', 'Wait for green arrow for protected turns'],
        donts: ['Block crosswalk on red', 'Run late yellow without checking rear traffic', 'Enter intersection after red appears'],
      },
      {
        title: 'Stop & Yield Signs',
        summary: 'Right-of-way is earned by stopping fully and yielding properly.',
        dos: ['Full stop behind line', 'Yield to pedestrians before vehicles', 'Use right-turn-on-red only after complete stop'],
        donts: ['Roll through with quick glance', 'Assume other drivers will yield', 'Stop in a bike box'],
      },
      {
        title: 'Lane Markings',
        summary: 'Solid = stay, broken = you may cross when safe.',
        dos: ['Use left lane for passing, right for travel', 'Cross double yellow only when allowed for turns', 'Respect bike lane buffers'],
        donts: ['Change lanes in an intersection', 'Drive on shoulder/median', 'Cross solid white gore areas'],
      },
    ],
    checklists: [
      { label: 'Protected Left Turn', items: ['Signal early', 'Enter turn lane near center line', 'Yield to pedestrians on green arrow end', 'Keep wheels straight until turn'] },
      { label: 'Uncontrolled Intersection', items: ['Slow and cover brake', 'Yield to vehicles on right', 'Yield to pedestrians always', 'Communicate with eye contact/gestures'] },
    ],
    guideCards: [
      {
        title: 'Signal Priorities',
        bullets: ['Green arrows override circular signals for that lane', 'Flashing yellow arrow = yield, then turn when clear', 'Dark signals act as all-way stop signs']
      },
      {
        title: 'Marking Meanings',
        bullets: ['Solid white: stay put; broken white: lane changes allowed', 'Double solid yellow: no passing; broken + solid: pass only on broken side', 'Bike boxes and crosswalks must stay clear on red'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Walk vs. Flashing Hand', body: 'Solid WALK means enter; flashing hand means finish crossing—never start driving until the crosswalk is clear.' },
    ],
  },
  [View.RULES]: {
    title: 'Rules of the Road',
    subtitle: 'Colorado right-of-way, lane use, and speed expectations.',
    keyNumbers: [
      { label: 'Residential Speed', value: '30 mph default', detail: 'Statutory in residence/business districts unless posted lower (many neighborhoods post 25 mph).' },
      { label: 'Rural Highway', value: '65-75 mph', detail: 'Follow posted; reduce for conditions.' },
      { label: '4-Way Stop', value: 'First In = First Out', detail: 'Tie goes to the right; pedestrians first.' },
      {
        label: 'Move Over',
        value: '1 Lane',
        detail: 'Change lanes away when safe; if not, slow 20 mph below the limit (or to 20 mph where posted under 45 mph).',
      },
    ],
    flashcards: [
      {
        title: 'Right of Way Basics',
        summary: 'Right-of-way is yielded, not taken.',
        dos: ['Yield to pedestrians in crosswalks', 'Let uphill traffic proceed on narrow roads', 'Yield when exiting alleys/driveways'],
        donts: ['Force merges at lane drops', 'Block intersections you cannot clear', 'Assume flashing lights will always stop others'],
      },
      {
        title: 'Speed Management',
        summary: 'Obey posted limits and adjust for weather/traffic.',
        dos: ['Reduce speed on wet/icy roads', 'Keep consistent speed in school and work zones', 'Use right lane if driving slower'],
        donts: ['Drive in left lane below flow', 'Accelerate through yellow lights to beat traffic', 'Speed past stopped school buses'],
      },
      {
        title: 'Passing Etiquette',
        summary: 'Pass on the left with a safe cushion.',
        dos: ['Signal and check blind spots', 'Return when you see full front of vehicle in mirror', 'Give cyclists 3+ feet'],
        donts: ['Pass on curves/hills with limited sight', 'Pass within 100 ft of intersections or RR crossings', 'Tailgate while waiting to pass'],
      },
    ],
    checklists: [
      { label: 'School Bus Stop', items: ['Red lights & stop arm = stop both directions (unless divided by median)', 'Stay stopped until lights stop flashing', 'Watch for children near roadway'] },
      { label: 'Lane Discipline', items: ['Keep right except to pass', 'Use center turn lane only to turn left', 'Signal every lane change', 'Check mirrors + blind spot before moving'] },
    ],
    guideCards: [
      {
        title: 'Yield Hierarchy',
        bullets: ['Pedestrians and cyclists first at crossings', 'Uphill traffic keeps priority on narrow grades', 'Emergency vehicles with lights/siren override all']
      },
      {
        title: 'Speed Context',
        bullets: ['Work zones = reduced speeds + doubled fines', 'School zones drop to posted limits when active', 'Slow for sight limits: hills, curves, parked cars'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Work Zones', body: 'Orange signs = automatic speed and fine changes. Plan for flaggers, lane shifts, and workers on foot.' },
    ],
  },
  [View.HIGHWAYS]: {
    title: 'Highways & Maneuvers',
    subtitle: 'Merging, exiting, and lane changes without surprises.',
    keyNumbers: [
      { label: 'Merge Speed', value: 'Match Flow', detail: 'Use ramp to reach near-traffic speed before joining.' },
      { label: 'Following Trucks', value: '4+ sec', detail: 'Trucks take longer to stop; leave extra room and avoid blind spots.' },
      { label: 'Parallel Park', value: '18 in', detail: 'Park within 18 inches of curb in Colorado.' },
      { label: 'Turnabout', value: 'Legal U-Turn', detail: 'Allowed when safe if no sign prohibits and visibility 500 ft each way.' },
    ],
    flashcards: [
      {
        title: 'Smart Merging',
        summary: 'Use the full ramp, signal early, and aim for a gap.',
        dos: ['Check blind spots before moving left', 'Use zipper merge at lane drops', 'Adjust speed to slot smoothly'],
        donts: ['Stop at end of ramp unless necessary', 'Force your way without signaling', 'Match speed to slow truck then cut in'],
      },
      {
        title: 'Exiting Cleanly',
        summary: 'Plan two exits ahead; miss it? Take the next one.',
        dos: ['Signal at least 200 ft before exit at higher speeds (Colorado minimum)', 'Check mirrors and blind spot before moving right', 'Keep speed under control on off-ramps'],
        donts: ['Swerve across multiple lanes', 'Back up on ramps', 'Cross solid white gore lines'],
      },
      {
        title: 'Parking Playbook',
        summary: 'Different maneuvers, same scanning habits.',
        dos: ['Angle park slowly and square to lines', 'Parallel park using 3-4 ft side gap start', 'Turn wheels correctly on hills'],
        donts: ['Park in disabled spot without placard', 'Block fire hydrants within 15 ft', 'Leave car without parking brake'],
      },
    ],
    checklists: [
      { label: 'Lane Change', items: ['Mirror-signal-head check', 'Glide—not jerk—into lane', 'Cancel signal after move', 'Reassess following gap'] },
      { label: 'Hill Parking', items: ['Uphill with curb: wheels left', 'Downhill with curb: wheels right', 'No curb: wheels toward shoulder', 'Set parking brake before leaving'] },
    ],
    guideCards: [
      {
        title: 'Merging Mindset',
        bullets: ['Use full acceleration lane to match speed', 'Form zipper merges when lanes drop', 'If a gap disappears, aim behind the next vehicle—not beside a truck']
      },
      {
        title: 'Exit Cleanly',
        bullets: ['Signal about 200 ft before exit at highway speeds', 'Move into exit lane early—never cut the gore', 'Missed your exit? Continue and loop back safely'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Ramp Etiquette', body: 'Use the whole acceleration lane; look for a zipper pattern where lanes drop to avoid last-second swerves.' },
      { label: 'Parallel Parking Math', body: 'Start with a 3–4 ft side gap, align rear bumpers, and finish within **18 inches** of the curb.' },
    ],
  },
  [View.SHARING]: {
    title: 'Sharing the Road',
    subtitle: 'Protect people outside the car: pedestrians, bikes, transit, and trucks.',
    keyNumbers: [
      { label: 'Bike Pass', value: '3 ft', detail: 'Minimum clearance when overtaking bicyclists.' },
      { label: 'School Bus Zone', value: 'Stop Both Ways', detail: 'On undivided roads all lanes stop for flashing reds; opposite traffic may proceed only when a raised median/physical barrier divides the roadway.' },
      { label: 'No-Zone', value: 'Wide Blind Spots', detail: 'Avoid truck front, right side, and tail blind areas.' },
      { label: 'Crosswalk Speed', value: 'Slow/Stop', detail: 'Pedestrians always have priority when in crosswalk.' },
    ],
    flashcards: [
      {
        title: 'Pedestrians & Crosswalks',
        summary: 'Yield every time someone is in the crosswalk—even if unmarked at intersections.',
        dos: ['Stop before crosswalk line', 'Look for turning pedestrians before moving', 'Give extra time to seniors/children'],
        donts: ['Pass a car stopped at crosswalk', 'Block curb ramps', 'Rush a yellow while people are crossing'],
      },
      {
        title: 'Cyclists',
        summary: 'Expect bikes to use full lane when narrow; treat as vehicles.',
        dos: ['Scan for bikes before right turns', 'Use 3-foot buffer when passing', 'Yield to bikes in bike boxes at red lights'],
        donts: ['Door a cyclist—check before opening', 'Drive or park in bike lanes', 'Turn right across a bike without yielding'],
      },
      {
        title: 'Large Vehicles & Transit',
        summary: 'Trucks and buses need room to swing, stop, and see.',
        dos: ['Stay out of blind spots—if you can’t see mirrors, they can’t see you', 'Give buses space to re-enter traffic', 'Leave extra following distance in rain'],
        donts: ['Cut off turning trucks', 'Ride alongside bus right turns', 'Tailgate RVs or trailers down grades'],
      },
    ],
    checklists: [
      { label: 'Railroad Crossings', items: ['Stop 15-50 ft when lights flash/gates down', 'Never go around lowered gates', 'Check for second train before crossing'] },
      { label: 'Neighborhood Driving', items: ['Cover brake near parks/schools', 'Expect kids between parked cars', 'Obey 20 mph school zone limits', 'Watch for pets and cyclists'] },
    ],
    guideCards: [
      {
        title: 'Bike & Ped Priority',
        bullets: ['Crosswalk users always win conflicts', '3-foot minimum when passing bikes—give more at speed', 'It’s legal to cross the center line to pass bikes when clear—never on blind hills/curves', 'Green bike boxes are off-limits for stopped cars']
      },
      {
        title: 'Big Vehicle Buffer',
        bullets: ['Stay out of truck “No-Zones”: front, right side, rear', 'Expect wide right turns—give buses/trucks swing room', 'Don’t cut back in until you see full grille in mirror'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Move Over Law', body: 'Colorado: change lanes away when safe; if not, drop 20 mph below the limit (or to 20 mph on roads under 45 mph) while passing emergency, tow, or maintenance vehicles with flashing lights.' },
      { label: 'Ped Priority', body: 'Treat every crosswalk like a zone of respect—Colorado expects yielding even at unmarked intersections.' },
    ],
  },
  [View.SAFETY]: {
    title: 'Driver Safety',
    subtitle: 'Prevent crashes with clear scanning, strong habits, and distraction control.',
    keyNumbers: [
      {
        label: 'Phone Use',
        value: 'No Texting',
        detail:
          'Colorado bans texting while driving; under 18 cannot use any wireless device. Adults should keep calls hands-free only when it is safe to do so.',
      },
      { label: 'Scan Ahead', value: '10-15 sec', detail: 'Look 1 block ahead in city; quarter-mile on highways.' },
      { label: 'Seat Belt', value: 'Primary for Minors', detail: 'Primary enforcement for under-16 anywhere in the vehicle; adults can still be cited when unbelted.' },
      { label: 'Following Gap', value: '3-4 sec', detail: 'Add time for heavy vehicles or poor conditions.' },
    ],
    flashcards: [
      {
        title: 'Defensive Mindset',
        summary: 'Assume others will make mistakes and build space around you.',
        dos: ['Keep escape routes open', 'Check mirrors every 5-8 seconds', 'Slow early when seeing brake lights ahead'],
        donts: ['Engage aggressive drivers', 'Drive drowsy—treat like impairment', 'Fixate on one hazard and miss others'],
      },
      {
        title: 'Distraction Control',
        summary: 'Eyes, mind, and hands must stay on driving.',
        dos: [
          'Set GPS/music before moving',
          'Ask passengers to help with controls (especially if under 18—no device use while driving)',
          'Pull over to text/call; keep any adult calls hands-free only when traffic is calm',
        ],
        donts: ['Read screens at speed', 'Eat or groom while driving', 'Use a phone at all if you are under 18 behind the wheel'],
        quickTip: 'At 55 mph, a 5-second glance = over 360 ft traveled blind.',
      },
      {
        title: 'Vision & Visibility',
        summary: 'See and be seen in all conditions.',
        dos: ['Use headlights in rain/snow/fog', 'Keep windshield and mirrors clean', 'Use horn lightly to alert when needed'],
        donts: ['Drive with burned-out lights', 'Wear dark sunglasses at dusk', 'Ignore glare—use visor, slow down'],
      },
    ],
    checklists: [
      { label: 'Night Driving', items: ['Dim high beams within 500 ft oncoming / 200 ft following', 'Watch for pedestrians in dark clothing', 'Increase following distance', 'Slow for animals near road'] },
      { label: 'Aggression Diffuser', items: ['Do not make eye contact', 'Let them pass; move right', 'Call 911 if threatened and safe to do so', 'Stop in public, well-lit place if needed'] },
    ],
    guideCards: [
      {
        title: 'Attention Anchors',
        bullets: ['Eyes move every 2 seconds: mirrors, far road, near road', 'Narrate risks aloud to stay mentally engaged', 'Hands stay at 9&3 to protect against airbag injuries']
      },
      {
        title: 'Distraction Filters',
        bullets: ['Set nav and climate before moving', 'Silence notifications or use focus modes', 'If emotions spike, pull over—never drive angry'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      { label: 'Fatigue Facts', body: 'Rolling down windows is not a strategy. Swap drivers, pull into a rest area, or nap safely before continuing.' },
      { label: 'Seat Belt Fit', body: 'Lap belt low on hips and shoulder belt across chest—never under an arm or behind your back.' },
    ],
  },
  [View.MOUNTAIN]: {
    title: 'Mountain & Winter',
    subtitle: 'Traction law basics, downhill control, and cold-weather readiness for I-70 and beyond.',
    keyNumbers: [
      { label: 'Traction Law Fine', value: '$130 - $650', detail: '$130 for no required gear; $650 plus towing if you block traffic during Code 15/16.' },
      { label: 'Minimum Tread', value: '3/16"', detail: 'Mandatory when Code 15 is active. Check with a quarter test.' },
      { label: 'Safe Speed Cushion', value: '10 mph', detail: 'Keep at least 10 mph below posted limit on packed snow or ice.' },
      { label: 'Following Distance', value: '6+ sec', detail: 'Double the dry pavement gap; add more for trucks or low visibility.' },
    ],
    flashcards: [
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
    ],
    checklists: [
      { label: 'Cab Essentials', items: ['Full tank before canyon climbs', 'Heated gear or blanket', 'Water + calorie-dense snacks'] },
      { label: 'Traction Gear', items: ['Chains/AutoSock (fits your tires)', 'Collapsible shovel + sand/kitty litter', 'Gloves and mat for chain installs'] },
      { label: 'Visibility Kit', items: ['Ice scraper & brush', 'High-vis triangle or flares', 'Phone charger + flashlight'] },
    ],
    guideCards: [
      {
        title: 'Before the Pass',
        bullets: ['Check CDOT alerts for Code 15/16', 'Test AWD/4WD engagement before traffic', 'Turn off cruise control on slick grades']
      },
      {
        title: 'During Descent',
        bullets: ['Downshift early and hold a steady speed', 'Tap brakes briefly to manage heat', 'Use pull-outs to cool brakes if you smell overheating'],
        tone: 'warning'
      }
    ],
    quickNotes: [
      {
        label: 'Traction Codes',
        body:
          'Active Sept–May on I-70. Code 15: snow/M+S tires with 3/16" tread OR AWD/4WD with 3/16" tread OR chains/AutoSock. Code 16: chains/AutoSock required for all vehicles, including AWD/4WD.',
      },
      { label: 'Cold Weather Technique', body: 'Plan your exit before braking. Whiteouts, black ice, and steep drop-offs mean vision-first driving: slow earlier, signal earlier, and avoid sudden steering.' },
      { label: 'If You’re Stuck', body: 'Stay with the vehicle, clear tailpipe of snow, crack a window slightly, and use hazards while you call for help or wait for CDOT chain areas to open.' },
    ],
  },
  [View.WEATHER]: {
    title: 'Weather & Conditions',
    subtitle: 'Wet roads, wind, and low-visibility tips to keep control.',
    keyNumbers: [
      { label: 'Rain Following', value: '4 sec', detail: 'Increase cushion as traction drops.' },
      { label: 'Fog Speed', value: 'Slow/Low Beam', detail: 'Use low beams; never high beams in fog.' },
      { label: 'Hydroplane Risk', value: '35+ mph', detail: 'Thin tires/standing water cause lift around this speed.' },
      { label: 'Headlights On', value: 'When Wipers On', detail: 'Turn on lights whenever visibility is reduced.' },
    ],
    flashcards: [
      {
        title: 'Rain & Standing Water',
        summary: 'Hydroplaning happens fast—smooth inputs only.',
        dos: ['Ease off gas if hydroplaning', 'Steer gently in direction you want to go', 'Check tire tread regularly'],
        donts: ['Brake hard in deep water', 'Use cruise control on slick roads', 'Drive through moving water of unknown depth'],
      },
      {
        title: 'Fog & Smoke',
        summary: 'See and be seen without blinding yourself.',
        dos: ['Use low beams and fog lights if equipped', 'Follow right edge/reflectors as guide', 'Pull fully off road if you must stop'],
        donts: ['Use high beams', 'Stop in a travel lane', 'Outdrive your visibility—slow down'],
      },
      {
        title: 'Wind & Debris',
        summary: 'Crosswinds push high-profile vehicles and cyclists.',
        dos: ['Grip wheel firmly near open plains', 'Give extra space to trucks/RVs', 'Expect debris after storms'],
        donts: ['Travel beside trucks for long', 'Park under weak trees during wind', 'Ignore weather alerts on mountain passes'],
      },
    ],
    checklists: [
      { label: 'Low-Visibility Prep', items: ['Clean windshield inside/out', 'Use defroster early to prevent fogging', 'Check wipers + washer fluid', 'Turn on headlights, not parking lights only'] },
      { label: 'Post-Storm Check', items: ['Brake lightly after puddles to dry rotors', 'Clear mud/snow from wheel wells', 'Inspect tires for embedded debris'] },
    ],
    guideCards: [
      {
        title: 'Wet-Weather Tactics',
        bullets: ['Turn on headlights with wipers—always', 'Cancel cruise control in rain, snow, or ice', 'If visibility drops, slow first, then adjust lane position']
      },
      {
        title: 'Fog & Smoke Discipline',
        bullets: ['Low beams only; high beams bounce back', 'If you must stop, pull far off and use hazards', 'Follow right edge lines to stay oriented without tailgating'],
        tone: 'warning'
      }
    ],
  },
  [View.EMERGENCIES]: {
    title: 'Emergencies',
    subtitle: 'Stay calm, pick a plan, and execute with small steering inputs.',
    keyNumbers: [
      { label: 'Skid Focus', value: 'Look Where You Go', detail: 'Eyes steer the car—stay off the obstacle.' },
      { label: 'ABS Stop', value: 'Stomp & Steer', detail: 'Firm pressure; steer around hazard.' },
      { label: 'Engine Failure', value: 'Glide to Edge', detail: 'Signal and steer to shoulder; brakes/steering may be harder.' },
      { label: 'Tire Blowout', value: 'Grip & Glide', detail: 'Hold wheel, ease off gas, brake gently after slowing.' },
    ],
    flashcards: [
      {
        title: 'Brake Failure',
        summary: 'Use engine braking and parking brake to slow.',
        dos: ['Downshift to lower gear', 'Pump brakes to build pressure', 'Use parking brake gradually while steering'],
        donts: ['Shut off ignition while moving', 'Pull parking brake suddenly', 'Continue driving after regaining pressure—stop safely'],
      },
      {
        title: 'Stuck Accelerator',
        summary: 'Keep steering steady while you kill speed and power.',
        dos: ['Shift to neutral immediately', 'Steer to shoulder with hazards on', 'Turn off ignition only after slowing'],
        donts: ['Turn key to lock position', 'Mash brakes until they fade', 'Reach down to free the pedal while moving'],
      },
      {
        title: 'Off-Road Recovery',
        summary: 'If wheels drop off pavement, regain control before re-entering.',
        dos: ['Grip wheel and ease off gas', 'Straddle edge until under control', 'Steer gently back when traffic clear'],
        donts: ['Jerky overcorrection', 'Hard braking on gravel/grass', 'Snap back into lane with traffic nearby'],
      },
      {
        title: 'Hydroplaning',
        summary: 'If tires float, lighten inputs until they bite again.',
        dos: ['Ease off the accelerator', 'Keep wheel straight while gliding', 'Brake gently only after traction returns'],
        donts: ['Make sudden lane changes', 'Hit brakes hard without ABS', 'Oversteer when you feel lightness'],
        quickTip: 'At 35–50 mph with standing water, even good tires can hydroplane—slow before puddles.',
      },
      {
        title: 'Fire or Smoke',
        summary: 'Move away from traffic and evacuate quickly.',
        dos: ['Signal and stop far off roadway', 'Shut engine and get everyone out', 'Move 100 ft upwind before calling 911'],
        donts: ['Open hood fully if flames visible', 'Return for items once out', 'Use water on fuel or electrical fires'],
      },
      {
        title: 'Engine Overheat',
        summary: 'Cooling is fragile—treat gently to avoid damage.',
        dos: ['Turn off A/C, turn on heat to pull temp down', 'Glide to safe stop before shutting engine', 'Wait for cool-down before opening cap'],
        donts: ['Pop radiator cap hot', 'Keep driving in red zone', 'Pour cold water on hot engine'],
        quickTip: 'Keep coolant mix in your emergency kit for safer top-ups after cooldown.',
      },
      {
        title: 'Skid Response',
        summary: 'Front = plow, rear = fishtail—fix both with smooth steering.',
        dos: ['Steer in direction you want the nose to go', 'Stay off gas/brake until traction returns', 'Practice on empty snowy lot to learn feel'],
        donts: ['Mash brakes without ABS', 'Stare at the obstacle', 'Overcorrect past center'],
      },
      {
        title: 'Tire Blowout',
        summary: 'Stability first; braking comes after speed drops.',
        dos: ['Firm grip, stay straight', 'Ease off accelerator, let speed bleed', 'Brake gently once under control'],
        donts: ['Hit brakes immediately', 'Jerky steering corrections', 'Stop in travel lane if shoulder is available'],
      },
      {
        title: 'Power Loss',
        summary: 'When engine dies, power assist fades—plan for heavier controls.',
        dos: ['Signal and aim for shoulder', 'Downshift to maintain minimal control', 'Use more force on brake and steering'],
        donts: ['Kill ignition while steering locks are engaged', 'Coast without signaling', 'Restart in traffic without looking'],
      },
      {
        title: 'Stalled on Tracks',
        summary: 'Exit, then angle the car away from the train path.',
        dos: ['Evacuate immediately; run toward train at 45° to avoid debris', 'Call the posted railroad emergency number', 'If no train, shift to neutral and push clear if safe'],
        donts: ['Stay inside trying to restart repeatedly', 'Move parallel to tracks when evacuating', 'Ignore approaching horn or signals'],
      },
      {
        title: 'Immersion (Water)',
        summary: 'Get out fast before electronics fail or pressure builds.',
        dos: ['Unbuckle, lower window quickly', 'Children out first through windows', 'Move to roof and call for help once clear'],
        donts: ['Wait for car to fill completely', 'Open doors early (creates pressure)', 'Waste time gathering belongings'],
        quickTip: 'Keep a window punch/seatbelt cutter in reach to break tempered side glass if power fails.',
      },
    ],
    checklists: [
      { label: 'Crash Scene', items: ['Stop and secure scene', 'Call 911 for injuries', 'Move vehicles out of travel lane if minor', 'Exchange info + document photos'] },
      { label: 'Roadside Safety', items: ['Use hazards immediately', 'Place triangles/flares if safe', 'Stay behind barrier away from traffic', 'Wait for tow on shoulder, not in car if risky'] },
    ],
    guideCards: [
      {
        title: 'If the Car Fails',
        bullets: ['Signal early and glide to shoulder', 'Keep steering gentle—no sudden moves on flats or blowouts', 'Stay buckled until safely out of travel lanes']
      },
      {
        title: 'If You Crash',
        bullets: ['Check for injuries first; call 911 when needed', 'Move cars off travel lane when minor and safe', 'Use hazards/triangles; stay behind guardrail if traffic is fast'],
        tone: 'warning'
      }
    ],
  },
  [View.ROAD_TEST]: {
    title: 'Road Test Prep',
    subtitle: 'Test routes favor predictable, calm driving with strong observation.',
    keyNumbers: [
      { label: 'Passing Score', value: '85%+', detail: 'Small errors add up—maintain fundamentals.' },
      { label: 'Stop Duration', value: 'Full 2 sec', detail: 'Pause long enough to scan both ways at STOP signs.' },
      { label: 'Mirror Checks', value: 'Every 5-8 sec', detail: 'Verbalize checks during test to show awareness.' },
      { label: 'Speed Control', value: 'Within Limit', detail: 'Stay within 5 mph of posted; slower only when justified.' },
    ],
    flashcards: [
      {
        title: 'Before the Test',
        summary: 'Arrive prepared so nerves don’t spike.',
        dos: ['Bring registration/insurance for test car', 'Know dashboard lights (ABS, brake, check engine)', 'Adjust seat/mirrors before moving'],
        donts: ['Forget parallel parking practice', 'Arrive late—reschedules may cost', 'Drive an unfamiliar vehicle for the first time on test day'],
      },
      {
        title: 'During the Drive',
        summary: 'Narrate your awareness and make smooth moves.',
        dos: ['Signal 100 ft before turns', 'Full stops at signs with head checks', 'Scan intersections L-R-L before entry'],
        donts: ['Roll stops or creep into crosswalk', 'Speed on downhill stretches', 'Ignore examiner directions—ask to repeat if unsure'],
      },
      {
        title: 'Parking & Maneuvers',
        summary: 'Expect backing, parallel parking, and hill parking.',
        dos: ['360° check before backing', 'Use reference points for parallel parking', 'Set parking brake and wheel direction on hills'],
        donts: ['Touch cones or hit curb hard', 'Forget to straighten wheels after parking', 'Skip mirror checks before reversing'],
      },
    ],
    checklists: [
      { label: 'Car Readiness', items: ['Windshield clear of cracks blocking view', 'Working brake lights/signals', 'Valid temp/perm plates', 'No warning alarms active'] },
      { label: 'Mindset', items: ['Breathe—drive like practice', 'If unsure, ask to repeat instructions', 'Correct mistakes safely; don’t panic', 'Eyes high, hands steady'] },
    ],
    guideCards: [
      {
        title: 'Exam Strategy',
        bullets: ['Narrate mirror checks to show awareness', 'Look far ahead—avoid staring at hood', 'If you miss a turn, continue; never slam brakes to correct']
      },
      {
        title: 'Parallel Parking Cues',
        bullets: ['Start 3–4 ft from car ahead', 'Turn wheel sharply at rear-bumper alignment, then straighten', 'Finish within **18 inches** of curb and set brake'],
        tone: 'success'
      }
    ],
  },
};
