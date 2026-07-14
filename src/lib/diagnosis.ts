export type DiagnosisTypeId =
  | "focuser"
  | "active"
  | "traveler"
  | "forgetful"
  | "poweruser"
  | "safety"
  | "smarthomer";

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
      { label: "出張や旅行の予定が多い", scores: { traveler: 2 } },
      {
        label: "ランニングや散歩など体を動かす時間が多い",
        scores: { active: 2 },
      },
      {
        label: "家電を自動化して家の中を効率化したい",
        scores: { smarthomer: 2 },
      },
    ],
  },
  {
    question: "一番のストレスは？",
    options: [
      { label: "周りの音が気になって集中できないこと", scores: { focuser: 2 } },
      {
        label: "鍵や財布をどこに置いたか忘れてしまうこと",
        scores: { forgetful: 2 },
      },
      { label: "充電器の取り合いになること", scores: { poweruser: 2 } },
      { label: "安物を買って壊れないか不安なこと", scores: { safety: 2 } },
    ],
  },
  {
    question: "休日の過ごし方に近いのは？",
    options: [
      {
        label: "家電の設定を見直したり、部屋を快適にする工夫をする",
        scores: { smarthomer: 1 },
      },
      { label: "ランニングやウォーキングで汗を流す", scores: { active: 1 } },
      { label: "旅行やお出かけの計画を立てる", scores: { traveler: 1 } },
      {
        label: "出発前に忘れ物がないか何度も確認してしまう",
        scores: { forgetful: 1 },
      },
    ],
  },
  {
    question: "ガジェットを選ぶときに一番気にするのは？",
    options: [
      { label: "静かな環境が作れるか", scores: { focuser: 1 } },
      { label: "周囲の音を聞きながら使えるか", scores: { active: 1 } },
      {
        label: "出力(パワー)や台数を同時にまかなえるか",
        scores: { poweruser: 1 },
      },
      { label: "安全基準やメーカーの信頼性", scores: { safety: 1 } },
    ],
  },
  {
    question: "家の中や外出先の悩みで一番近いのは？",
    options: [
      {
        label: "家電の消し忘れや、外出先から家の様子を確認できないこと",
        scores: { smarthomer: 2 },
      },
      {
        label: "鍵や小物をどこに置いたか忘れがちなこと",
        scores: { forgetful: 2 },
      },
      {
        label: "充電器の数が足りず、家族と取り合いになること",
        scores: { poweruser: 1 },
      },
      { label: "荷物が増えて身軽に動けないこと", scores: { traveler: 1 } },
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
  active: {
    id: "active",
    title: "ながら聴き・アクティブランナー",
    tagline: "周りの音を感じながら、体を動かしていたい",
    description:
      "ランニングや通勤中も周囲の音を聞き逃したくないあなたは、耳を塞がないアクティブタイプ。骨伝導・オープンイヤーイヤホンなら、音楽を楽しみながら車や自転車の接近にも気づきやすく、安全に体を動かせます。",
    relatedPostSlugs: ["kotsudendo-openear-hikaku-3sen"],
  },
  traveler: {
    id: "traveler",
    title: "ミニマル・トラベラー",
    tagline: "身軽さこそ最強の装備だと知っている",
    description:
      "荷物は少なく、身軽に動き回りたいあなたは旅行タイプ。バッテリー持ちと軽さを兼ね備えたガジェット選びが、次の旅をもっと快適にしてくれます。",
    relatedPostSlugs: ["travel-gadget-erabikata"],
  },
  forgetful: {
    id: "forgetful",
    title: "うっかり忘れ物防止タイプ",
    tagline: "「あれ、鍵どこだっけ」が口ぐせ",
    description:
      "鍵や財布、カバンをどこに置いたか忘れがちなあなたは、紛失防止タグとの相性が抜群。Apple「探す」に対応したタグを付けておけば、探し物に費やす時間もストレスもぐっと減らせます。",
    relatedPostSlugs: ["funshitsuboushi-tag-hikaku-5sen"],
  },
  poweruser: {
    id: "poweruser",
    title: "パワーシェアラー",
    tagline: "1台で満足せず、まとめて解決したい",
    description:
      "家族や複数デバイスをまとめて充電したいあなたはパワーユーザータイプ。高出力・複数ポートの充電器で、充電の取り合いから解放されましょう。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "usb-charger-hikaku-3sen"],
  },
  safety: {
    id: "safety",
    title: "安心セーフティスト",
    tagline: "安さより、長く安全に使えることが正義",
    description:
      "価格よりも安全性・信頼性を重視するあなたは堅実タイプ。PSEマークやメーカー情報をきちんと確認してから選ぶ姿勢が、長く安心して使える一台につながります。",
    relatedPostSlugs: ["usb-charger-safety-checklist"],
  },
  smarthomer: {
    id: "smarthomer",
    title: "おうちアップデート派",
    tagline: "家電を自動化して、暮らしをちょっとラクにしたい",
    description:
      "「消し忘れが気になる」「外出先から家の様子を確認したい」と感じるあなたは、スマートホーム向きタイプ。工事不要のスマートプラグやセンサーから始めれば、暮らしが少しずつ便利にアップデートされていきます。",
    relatedPostSlugs: ["smart-home-nyumon"],
  },
};

export function computeDiagnosisResult(
  scores: Partial<Record<DiagnosisTypeId, number>>,
): DiagnosisTypeId {
  const order: DiagnosisTypeId[] = [
    "focuser",
    "active",
    "traveler",
    "forgetful",
    "poweruser",
    "safety",
    "smarthomer",
  ];
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
