import { Participant } from "./participant.interface";

export interface Project {
  id?: number;
  name: string;
  dt_begin: string;
  dt_end: string;
  price: string;
  risc: number;
  created_at?: string;
  updated_at?: string;
  participants?: Participant[];
}
