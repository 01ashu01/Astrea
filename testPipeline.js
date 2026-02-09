import runPipeline from "./multimodal/pipeline.js";
import * as dotenv from "dotenv";

dotenv.config();

const fakeScrapedData = {
  text: "This is a test webpage about artificial intelligence.",
  images: [],
  tables: []
};

const runTest = async () => {
  const result = await runPipeline(fakeScrapedData);
  console.log(result);
};

runTest();
