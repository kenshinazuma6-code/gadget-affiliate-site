export type Trait = "E" | "A" | "C" | "N" | "O";
export type Direction = "high" | "low";
export type BigFiveTypeId = `${Trait}-${Direction}`;

export interface BigFiveQuestion {
  trait: Trait;
  keyed: "+" | "-";
  text: string;
}

export interface BigFiveResult {
  id: BigFiveTypeId;
  trait: Trait;
  direction: Direction;
  title: string;
  tagline: string;
  description: string;
  evidence: string;
  relatedPostSlugs: string[];
}

// 20問（5特性 × 正転2問・逆転2問）。原文はIPIP/Mini-IPIP（パブリックドメイン）の
// 各特性の測定意図を参考に、ガジェット選びの文脈で完全に独自の日本語表現として書き下ろした。
export const bigFiveQuestions: BigFiveQuestion[] = [
  { trait: "E", keyed: "+", text: "初対面の人にも自分から話しかける方だ" },
  { trait: "A", keyed: "+", text: "人の気持ちに共感しやすい" },
  { trait: "C", keyed: "+", text: "やるべきことは早めに片付けたい" },
  { trait: "N", keyed: "+", text: "些細なことでも不安になりやすい" },
  { trait: "O", keyed: "+", text: "新しいものや変わったアイデアに興味がある" },

  { trait: "E", keyed: "+", text: "大勢で集まる場が好きだ" },
  { trait: "A", keyed: "+", text: "誰かのために動くのが苦にならない" },
  { trait: "C", keyed: "+", text: "物の置き場所を決めてきちんと管理している" },
  { trait: "N", keyed: "+", text: "気分の浮き沈みが激しい方だ" },
  { trait: "O", keyed: "+", text: "抽象的な話や想像を膨らませるのが好きだ" },

  { trait: "E", keyed: "-", text: "一人で過ごす時間の方が落ち着く" },
  { trait: "A", keyed: "-", text: "他人の悩みにはあまり関心が持てない" },
  { trait: "C", keyed: "-", text: "うっかり物を置き忘れることがよくある" },
  { trait: "N", keyed: "-", text: "多少のことでは動じない" },
  { trait: "O", keyed: "-", text: "目新しいものより使い慣れたものを好む" },

  { trait: "E", keyed: "-", text: "自分から話題を振るより、聞き役に回ることが多い" },
  { trait: "A", keyed: "-", text: "自分の意見はあまり譲らない方だ" },
  { trait: "C", keyed: "-", text: "部屋や持ち物が散らかりがちだ" },
  { trait: "N", keyed: "-", text: "めったに落ち込むことはない" },
  { trait: "O", keyed: "-", text: "抽象的な話より具体的な事実の方が性に合う" },
];

export const LIKERT_LABELS = [
  "全く当てはまらない",
  "あまり当てはまらない",
  "どちらとも言えない",
  "やや当てはまる",
  "非常によく当てはまる",
] as const;

const TRAIT_ORDER: Trait[] = ["E", "A", "C", "N", "O"];
const TRAIT_MIDPOINT = 12; // 4問 × 中央値3

export function scoreTrait(
  answers: number[],
  trait: Trait,
): number {
  let total = 0;
  let i = 0;
  for (const q of bigFiveQuestions) {
    if (q.trait === trait) {
      const value = answers[i] ?? 3;
      total += q.keyed === "+" ? value : 6 - value;
    }
    i++;
  }
  return total;
}

export function computeBigFiveResult(answers: number[]): BigFiveTypeId {
  let bestTrait: Trait = TRAIT_ORDER[0];
  let bestDeviation = -1;
  let bestDirection: Direction = "high";

  for (const trait of TRAIT_ORDER) {
    const score = scoreTrait(answers, trait);
    const deviation = Math.abs(score - TRAIT_MIDPOINT);
    if (deviation > bestDeviation) {
      bestDeviation = deviation;
      bestTrait = trait;
      bestDirection = score >= TRAIT_MIDPOINT ? "high" : "low";
    }
  }

  return `${bestTrait}-${bestDirection}`;
}

export const bigFiveResults: Record<BigFiveTypeId, BigFiveResult> = {
  "E-high": {
    id: "E-high",
    trait: "E",
    direction: "high",
    title: "みんなと繋がりたい社交派",
    tagline: "人と話している時間が一番のエネルギー源",
    description:
      "誰かと一緒にいる時間や、新しい人との会話からエネルギーをもらうあなた。ガジェットも「一人で黙々と使う」より「周りと共有しながら使う」ものと相性がいいタイプです。",
    evidence:
      "心理学の研究では、外向性は旅行経験や新しい体験への積極性、社会的なつながりを重視するテクノロジー選びと関連することが報告されています。",
    relatedPostSlugs: ["kotsudendo-openear-hikaku-3sen", "travel-gadget-erabikata"],
  },
  "E-low": {
    id: "E-low",
    trait: "E",
    direction: "low",
    title: "静けさ志向のひとり集中派",
    tagline: "一人の時間があってこそ、力を発揮できる",
    description:
      "人と話し続けるより、自分のペースで静かに過ごす時間を大切にするあなた。周囲の雑音をシャットアウトできる環境づくりが、パフォーマンスを大きく左右するタイプです。",
    evidence:
      "内向的な人ほど騒音下での集中力低下が大きく、外向-内向は騒音への感受性を最もよく説明する性格要因の一つだと報告されています。",
    relatedPostSlugs: ["telework-noise-canceling-earbuds", "usb-charger-hikaku-3sen"],
  },
  "A-high": {
    id: "A-high",
    trait: "A",
    direction: "high",
    title: "気配り上手なチームプレイヤー",
    tagline: "自分より先に、家族やまわりのことが気になる",
    description:
      "自分のことより、まわりの人が快適に過ごせているかどうかが気になるあなた。ガジェット選びも「自分だけ」ではなく「家族みんなが使いやすいか」を基準にするタイプです。",
    evidence:
      "スマートホーム機器の導入は世帯内の他のメンバーの態度に強く影響されることが報告されており、協調性の高さは家族単位でのテクノロジー選びと相性がよいと考えられます。",
    relatedPostSlugs: ["smart-home-nyumon", "funshitsuboushi-tag-hikaku-5sen"],
  },
  "A-low": {
    id: "A-low",
    trait: "A",
    direction: "low",
    title: "マイペースな一匹狼",
    tagline: "自分の基準で決めたい、それが一番落ち着く",
    description:
      "周りに合わせるより、自分が納得できる基準で物事を決めたいあなた。ガジェット選びも人の意見より、自分でスペックを吟味して選びたいタイプです。",
    evidence:
      "協調性が低めの人は、集団の意向より自分自身の判断基準を優先する傾向があるとされ、独自にスペックを比較・検討するタイプの買い物スタイルと結びつきやすいと考えられます。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "travel-gadget-erabikata"],
  },
  "C-high": {
    id: "C-high",
    trait: "C",
    direction: "high",
    title: "計画的な完璧主義者",
    tagline: "行き当たりばったりが、一番苦手",
    description:
      "何ごとも事前にリサーチして、計画通りに進めたいあなた。ガジェット選びでも、スペック表を細かく比較してから、最も納得できる一台を選ぶタイプです。",
    evidence:
      "勤勉性の高さは物事を整理整頓し、計画的に進める傾向と関連することが心理学研究で繰り返し示されています。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "usb-charger-safety-checklist"],
  },
  "C-low": {
    id: "C-low",
    trait: "C",
    direction: "low",
    title: "うっかり忘れ物タイプ",
    tagline: "「あれ、どこに置いたっけ」が口ぐせ",
    description:
      "細かい整理整頓より、その場の勢いで動く方が性に合うあなた。鍵や財布をどこに置いたか忘れがちなタイプなので、探し物の時間を減らす工夫が特に効果を発揮します。",
    evidence:
      "勤勉性が低い人ほど、鍵や眼鏡など身の回りの物を置き忘れるといった日常的な物忘れを自己報告しやすいことが研究で示されています。",
    relatedPostSlugs: ["funshitsuboushi-tag-hikaku-5sen", "usb-charger-hikaku-3sen"],
  },
  "N-high": {
    id: "N-high",
    trait: "N",
    direction: "high",
    title: "石橋を叩いて渡る慎重派",
    tagline: "「もし壊れたら」が真っ先に頭をよぎる",
    description:
      "価格の安さよりも、長く安心して使えるかどうかが気になるあなた。安全基準やメーカーの信頼性をきちんと確認してから選ぶ姿勢が、後悔しない買い物につながります。",
    evidence:
      "神経症傾向が高い人はリスクを大きく見積もりやすく、見慣れた選択肢や安全性を重視する傾向があることが消費者行動の研究で報告されています。",
    relatedPostSlugs: ["usb-charger-safety-checklist", "funshitsuboushi-tag-hikaku-5sen"],
  },
  "N-low": {
    id: "N-low",
    trait: "N",
    direction: "low",
    title: "動じないマイペース楽天家",
    tagline: "多少のトラブルがあっても、まあ何とかなる",
    description:
      "些細なことでは動揺せず、どっしり構えていられるあなた。ガジェット選びも難しく考えすぎず、気になったものを気軽に試してみるタイプです。",
    evidence:
      "情緒が安定している人は、リスクを過大評価しにくく、気負わずに新しいものへ手を伸ばしやすい傾向があるとされています。",
    relatedPostSlugs: ["usb-charger-hikaku-3sen", "travel-gadget-erabikata"],
  },
  "O-high": {
    id: "O-high",
    trait: "O",
    direction: "high",
    title: "新しいもの好きの探究者",
    tagline: "「まだ知らないもの」に一番惹かれる",
    description:
      "話題の新技術や、まだ手に取ったことのないジャンルのガジェットに強く惹かれるあなた。新しいものを早い段階で試してみたい、探究心旺盛なタイプです。",
    evidence:
      "開放性の高さは新しい技術への肯定的な態度や知的好奇心と関連することが報告されており、いわゆる「アーリーアダプター」的な行動傾向とも重なります。",
    relatedPostSlugs: ["smart-home-nyumon", "kotsudendo-openear-hikaku-3sen"],
  },
  "O-low": {
    id: "O-low",
    trait: "O",
    direction: "low",
    title: "使い慣れたものを大事にする堅実派",
    tagline: "目新しさより、実績と信頼が大事",
    description:
      "奇をてらった新製品より、多くの人に選ばれている定番モデルに安心感を覚えるあなた。実績のある製品を長く大切に使い続けるタイプです。",
    evidence:
      "開放性が低めの人は、目新しい選択肢より使い慣れた対象を好む傾向があるとされ、定番・実績重視の製品選びと結びつきやすいと考えられます。",
    relatedPostSlugs: ["usb-charger-hikaku-3sen", "usb-charger-safety-checklist"],
  },
};
