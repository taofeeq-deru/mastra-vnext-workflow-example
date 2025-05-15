import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { logCatWorkflow } from "./workflows/index";
import { logCatWorkflow as logCatWorkflowVNext } from "./workflows/v-next";

export const mastra = new Mastra({
  workflows: { logCatWorkflow },
  vnext_workflows: { logCatWorkflowVNext },
  logger: createLogger({
    name: "Mastra",
    level: "info"
  })
});
