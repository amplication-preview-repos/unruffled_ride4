import { Property } from "../property/Property";

export type Agent = {
  createdAt: Date;
  id: string;
  properties?: Array<Property>;
  updatedAt: Date;
};
