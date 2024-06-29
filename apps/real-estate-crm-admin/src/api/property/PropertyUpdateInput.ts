import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
