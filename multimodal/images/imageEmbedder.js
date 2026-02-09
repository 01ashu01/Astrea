import embedText from "../text/textEmbedder.js";
import imageToText from "./imageToText.js";

export default async function embedImages(images = []) {
  const embeddings = [];

  for (const img of images) {
    const description = await imageToText(img);
    const emb = await embedText(description);
    embeddings.push(emb);
  }

  return embeddings;
}
