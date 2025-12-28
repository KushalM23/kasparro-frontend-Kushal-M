/**
 * Architecture component types
 * Types for the architecture visualization page
 */

export interface ArchitectureComponent {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'input' | 'processing' | 'output';
  dependencies?: string[];
}

export interface ArchitectureFlow {
  id: string;
  from: string;
  to: string;
  label?: string;
}

export interface SystemArchitecture {
  components: ArchitectureComponent[];
  flows: ArchitectureFlow[];
  description: string;
}
