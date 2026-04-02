export const nodes = [
  { id: "origin", label: "Origine plastica", x: 0, y: 0, type: "root" },
  { id: "bio", label: "Fragilità biologica", x: -300, y: 200 },
  { id: "plastic", label: "Plasticità neurale", x: 300, y: 200 },
  { id: "env", label: "Ambiente", x: 0, y: 200 },
  { id: "learning", label: "Apprendimento", x: 0, y: 400 },
  { id: "memory", label: "Memoria strutturante", x: 0, y: 600, type: "core" },
  { id: "filter", label: "Filtro cognitivo", x: -250, y: 800 },
  { id: "bias", label: "Conferma interna", x: 250, y: 800 },
  { id: "identity", label: "Identità", x: 0, y: 1000, type: "identity" },
  { id: "distort", label: "Deriva distorta", x: -250, y: 1200, type: "danger" },
  { id: "stable", label: "Struttura solida", x: 250, y: 1200, type: "safe" },
  { id: "rebuild", label: "Ristrutturazione", x: 0, y: 1400, type: "rebuild" }
];

export const edges = [
  ["origin", "bio"],
  ["origin", "plastic"],
  ["origin", "env"],
  ["env", "learning"],
  ["learning", "memory"],
  ["memory", "filter"],
  ["memory", "bias"],
  ["filter", "identity"],
  ["bias", "identity"],
  ["identity", "distort"],
  ["identity", "stable"],
  ["distort", "rebuild"],
  ["stable", "rebuild"]
];
