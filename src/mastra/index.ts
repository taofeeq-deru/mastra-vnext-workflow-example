import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { logCatWorkflow as legacyLogCatWorkflow } from "./workflows/index";
import { logCatWorkflow } from "./workflows/v-next";

export const mastra = new Mastra({
  workflows: { logCatWorkflow },
  legacy_workflows: { legacyLogCatWorkflow },
  logger: createLogger({
    name: "Mastra",
    level: "info"
  }),
  server: {
    port: 8000
  }
});
