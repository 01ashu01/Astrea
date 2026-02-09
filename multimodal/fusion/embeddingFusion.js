export default function fuseEmbeddings(textEmb, imageEmbs = []) {
  const fused = [...textEmb];

  for (const imgEmb of imageEmbs) {
    fused.push(...imgEmb);
  }

  return fused;
}
