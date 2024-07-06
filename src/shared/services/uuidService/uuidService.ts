import { randomUUID } from "node:crypto";
import { UUID, UniqueIdentifierService } from "../types";

function generate(): UUID {
  const uuid = randomUUID();

  return uuid;
}

const uniqueIdentifierService = (): UniqueIdentifierService => ({
  generate,
});

export default uniqueIdentifierService;
