import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: 'postgresql://ai-content-generator_owner:KQt7BGpoSA1H@ep-quiet-snowflake-a8o5vxhx.eastus2.azure.neon.tech/ai-content-generator?sslmode=require'
  }
});