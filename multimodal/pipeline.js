import embedText from "./text/textEmbedder.js";
import embedImages from "./images/imageEmbedder.js";
import fuse from "./fusion/embeddingFusion.js";
import generateText from "./generation/textGenerator.js";
import generateSpeech from "./generation/speechGenerator.js";

export default async function runPipeline(data) {
  const textEmbedding = await embedText(data.text);
  const imageEmbeddings = await embedImages(data.images);

  const fusedEmbedding = fuse(textEmbedding, imageEmbeddings);

  const englishText = await generateText(fusedEmbedding);
  const audioPath = await generateSpeech(englishText);

  return { englishText, audioPath };
}
