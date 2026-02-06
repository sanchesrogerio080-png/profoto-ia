
export interface GenerationHistoryItem {
  id: string;
  timestamp: number;
  imageUrl: string;
  config: {
    scenario: string;
    character: string;
    format: string;
  };
}

export interface User {
  id: string;
  email: string;
  name?: string;
  credits: number;
  isLoggedIn: boolean;
}

export type AppView = 'login' | 'create' | 'result' | 'payments';
