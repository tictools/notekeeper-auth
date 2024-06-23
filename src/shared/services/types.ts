export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface UniqueIdentifierService {
  generate: () => UUID;
}
