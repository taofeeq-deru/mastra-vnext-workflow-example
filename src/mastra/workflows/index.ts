import { LegacyWorkflow, LegacyStep } from "@mastra/core/workflows/legacy";
import { z } from "zod";

const logCatName = new LegacyStep({
  id: "logCatName",
  outputSchema: z.object({
    rawText: z.string()
  }),
  execute: async ({ context }) => {
    const name = context?.getStepResult<{ name: string }>("trigger")?.name;
    console.log(`Hello, ${name} 🐈`);
    return { rawText: `Hello ${name}` };
  }
});

export const logCatWorkflow = new LegacyWorkflow({
  name: "log-cat-workflow",
  triggerSchema: z.object({
    name: z.string()
  })
});

logCatWorkflow.step(logCatName).commit();
