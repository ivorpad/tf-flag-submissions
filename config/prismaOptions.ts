export const prismaOptions = {
  features: { crud: true },
  client: { options: { log: ["query", "info", "warn"] } },
};