import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  properties?: PropertyListRelationFilter;
};
