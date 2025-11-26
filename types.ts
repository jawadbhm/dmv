export enum View {
  DASHBOARD = 'Dashboard',
  LICENSE = 'License & Penalties',
  VEHICLE = 'Vehicle & Owner',
  BASIC = 'Basic Driving',
  CONTROLS = 'Traffic Controls',
  RULES = 'Rules of the Road',
  HIGHWAYS = 'Highways & Maneuvers',
  SHARING = 'Sharing the Road',
  SAFETY = 'Driver Safety',
  SIGNS = 'Signs Gallery',
  LABS = 'Interactive Labs',
  MOUNTAIN = 'Mountain & Winter',
  WEATHER = 'Weather & Conditions',
  EMERGENCIES = 'Emergencies',
  ROAD_TEST = 'Road Test Prep',
  FINAL_EXAM = 'Final Exam'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SignData {
  id: string;
  name: string;
  category: 'regulatory' | 'warning' | 'guide' | 'service';
  color: string;
  shape: string;
  description: string;
  icon?: string; 
}

export interface ProgressState {
  completedModules: string[];
  examHighScore: number;
}