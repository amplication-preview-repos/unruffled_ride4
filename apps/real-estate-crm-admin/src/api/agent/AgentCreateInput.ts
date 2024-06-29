import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
