export type DiagnosisTypeId = "focuser" | "traveler" | "poweruser" | "safety";

export interface DiagnosisOption {
  label: string;
  scores: Partial<Record<DiagnosisTypeId, number>>;
}

export interface DiagnosisQuestion {
  question: string;
  options: DiagnosisOption[];
}

export interface DiagnosisResult {
  id: DiagnosisTypeId;
  title: string;
  tagline: string;
  description: string;
  relatedPostSlugs: string[];
}

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    question: "平日の過ごし方に近いのは？",
    options: [
      { label: "家で黙々と作業に集中する", scores: { focuser: 2 } },
      {
        label: "カフェや移動中にも作業する",
        scores: { traveler: 1, poweruser: 1 },
      },
      { label: "出張や旅行の予定が多い", scores: { traveler: 2 } },
      {
        label: "家族や同居人とデバイスをシェアすることが多い",
        scores: { poweruser: 2 },
      },
    ],
  },
  {
    question: "一番のストレスは？",
    options: [
      { label: "周りの音が気になって集中できないこと", scores: { focuser: 2 } },
      { label: "荷物が増えること", scores: { traveler: 2 } },
      { label: "充電器の取り合いになること", scores: { poweruser: 2 } },
      { label: "安物を買って壊れないか不安なこと", scores: { safety: 2 } },
    ],
  },
  {
    question: "ガジェットを選ぶときに一番気にするのは？",
    options: [
      { label: "静かな環境が作れるか", scores: { focuser: 1 } },
      { label: "とにかく軽いか・コンパクトか", scores: { traveler: 1 } },
      {
        label: "出力(パワー)や台数を同時にまかなえるか",
        scores: { poweruser: 1 },
      },
      { label: "安全基準やメーカーの信頼性", scores: { safety: 1 } },
    ],
  },
  {
    question: "自分のモットーに近いのは？",
    options: [
      { label: "集中できる環境こそ正義", scores: { focuser: 1 } },
      { label: "身軽さこそ正義", scores: { traveler: 1 } },
      { label: "パワーは正義", scores: { poweruser: 1 } },
      { label: "安物買いの銭失いはしたくない", scores: { safety: 1 } },
    ],
  },
];

export const diagnosisResults: Record<DiagnosisTypeId, DiagnosisResult> = {
  focuser: {
    id: "focuser",
    title: "サイレント・フォーカサー",
    tagline: "静けさの中でこそ本領発揮するタイプ",
    description:
      "周囲の音を遮断して集中できる環境を何より大切にするあなたは、在宅ワーク集中型。ノイズキャンセリングイヤホンと、ノートPCもまとめて充電できる急速充電器の組み合わせが力を発揮します。",
    relatedPostSlugs: [
      "telework-noise-canceling-earbuds",
      "usb-charger-hikaku-3sen",
    ],
  },
  traveler: {
    id: "traveler",
    title: "ミニマル・トラベラー",
    tagline: "身軽さこそ最強の装備だと知っている",
    description:
      "荷物は少なく、身軽に動き回りたいあなたは旅行タイプ。バッテリー持ちと軽さを兼ね備えたガジェット選びが、次の旅をもっと快適にしてくれます。",
    relatedPostSlugs: ["travel-gadget-erabikata"],
  },
  poweruser: {
    id: "poweruser",
    title: "パワーシェアラー",
    tagline: "1台で満足せず、まとめて解決したい",
    description:
      "家族や複数デバイスをまとめて充電したいあなたはパワーユーザータイプ。高出力・複数ポートの充電器で、充電の取り合いから解放されましょう。",
    relatedPostSlugs: ["usb-charger-hikaku-3sen", "usb-charger-w-suu-erabikata"],
  },
  safety: {
    id: "safety",
    title: "安心セーフティスト",
    tagline: "安さより、長く安全に使えることが正義",
    description:
      "価格よりも安全性・信頼性を重視するあなたは堅実タイプ。PSEマークやメーカー情報をきちんと確認してから選ぶ姿勢が、長く安心して使える一台につながります。",
    relatedPostSlugs: ["usb-charger-safety-checklist"],
  },
};

export function computeDiagnosisResult(
  scores: Partial<Record<DiagnosisTypeId, number>>,
): DiagnosisTypeId {
  const order: DiagnosisTypeId[] = ["focuser", "traveler", "poweruser", "safety"];
  let best: DiagnosisTypeId = order[0];
  let bestScore = -1;

  for (const id of order) {
    const score = scores[id] ?? 0;
    if (score > bestScore) {
      bestScore = score;
      best = id;
    }
  }

  return best;
}
