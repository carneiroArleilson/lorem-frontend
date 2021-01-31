import { User } from "./user.interface";

export interface Participant {
  id?: number,
  id_project: number;
  id_user: number;
  user: User;
}
