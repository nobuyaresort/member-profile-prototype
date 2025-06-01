export interface Position {
  x: number;
  y: number;
}

export interface Skill {
  id: number;
  name: string;
  icon: string; // URL to technology logo
  level: number;
  colorClass: string;
  position: Position;
}