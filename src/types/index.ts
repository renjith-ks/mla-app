export interface PersonaGenerationRequest {
  outcome: string;
  audience: string;
}

export interface Persona {
  id: string;
  title: string;
  description: string;
  painPoints: string[];
  goals: string[];
}

export interface PersonaGenerationResponse {
  personas: Persona[];
  success: boolean;
  message?: string;
}

