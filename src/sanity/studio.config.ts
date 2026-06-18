import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema, successCaseSchema, testimonialSchema } from "../schemas";

export default defineConfig({
  name: "artdent-studio",
  title: "ArtDent Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postSchema, successCaseSchema, testimonialSchema],
  },
});
