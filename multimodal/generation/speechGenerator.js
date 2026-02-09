import fs from "fs";

export default async function generateSpeech(text) {
  const filePath = "output.txt";
  fs.writeFileSync(filePath, text);
  return filePath;
}
