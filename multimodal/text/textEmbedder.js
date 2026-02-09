import fetch from "node-fetch";

export default async function embedText(text) {
  const response = await fetch("https://api.jina.ai/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.JINA_API_KEY}`
    },
    body: JSON.stringify({
      model: "jina-embeddings-v3",
      input: text
    })
  });

  const data = await response.json();
  return data.data[0].embedding;
}

