import { Agent } from "../agent/Agent";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
