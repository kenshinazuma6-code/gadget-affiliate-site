export type Letter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type Axis = "EI" | "SN" | "TF" | "JP";
export type TypeCode16 =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export interface Diagnosis16Option {
  label: string;
  letter: Letter;
}

export interface Diagnosis16Question {
  axis: Axis;
  question: string;
  options: [Diagnosis16Option, Diagnosis16Option];
}

export interface Diagnosis16Result {
  id: TypeCode16;
  group: string;
  title: string;
  tagline: string;
  description: string;
  relatedPostSlugs: string[];
}

export const diagnosis16Questions: Diagnosis16Question[] = [
  // E / I
  {
    axis: "EI",
    question: "新しいガジェットが発売されたら？",
    options: [
      { label: "友達に真っ先に教えたくなる", letter: "E" },
      { label: "まず自分でじっくり試してから話す", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "休日の過ごし方に近いのは？",
    options: [
      { label: "誰かと出かけたり、人に会ったりしたい", letter: "E" },
      { label: "家で一人の時間を満喫したい", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "カフェで作業するなら？",
    options: [
      { label: "適度に賑やかな店内の方が集中できる", letter: "E" },
      { label: "静かで一人になれる席を探す", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "新しい環境（新居や新しい職場）でまずすることは？",
    options: [
      { label: "とりあえず周りの人と話してみる", letter: "E" },
      { label: "まず自分の作業環境を整える", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "SNSでの発信スタイルは？",
    options: [
      { label: "買ったものはすぐシェアしたい", letter: "E" },
      { label: "見る専で、発信はあまりしない", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "エネルギーが切れると感じるのは？",
    options: [
      { label: "一人でいる時間がずっと続いたとき", letter: "E" },
      { label: "人と話し続けたとき", letter: "I" },
    ],
  },
  {
    axis: "EI",
    question: "新しいイヤホンを買ったら？",
    options: [
      { label: "みんなに聞いてもらいたい", letter: "E" },
      { label: "自分だけの世界に没頭したい", letter: "I" },
    ],
  },
  // S / N
  {
    axis: "SN",
    question: "ガジェットを選ぶ基準は？",
    options: [
      { label: "スペック表や実測データを細かく比較する", letter: "S" },
      { label: "「なんとなく良さそう」という直感を信じる", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "説明書を読むとき",
    options: [
      { label: "手順通りに一つずつ確認する", letter: "S" },
      { label: "だいたい把握したら、あとは触って覚える", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "欲しい家電を決める決め手は？",
    options: [
      { label: "実際に使った人のレビューや数値データ", letter: "S" },
      { label: "「これがあれば生活がこう変わる」という想像", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "買い物で重視するのは？",
    options: [
      { label: "今すぐ役に立つ実用性", letter: "S" },
      { label: "将来の可能性や新しい使い方", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "友人と話すとき",
    options: [
      { label: "具体的な事実やエピソードを話す", letter: "S" },
      { label: "アイデアや抽象的な話題で盛り上がる", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "新製品の発表を見たら",
    options: [
      { label: "スペックや価格を細かくチェックする", letter: "S" },
      { label: "「これで何ができるか」を妄想して楽しむ", letter: "N" },
    ],
  },
  {
    axis: "SN",
    question: "ガジェットのトラブルが起きたとき",
    options: [
      { label: "マニュアル通りに手順を確認する", letter: "S" },
      { label: "全体像から原因を推測する", letter: "N" },
    ],
  },
  // T / F
  {
    axis: "TF",
    question: "ガジェットを選ぶとき優先するのは？",
    options: [
      { label: "コストパフォーマンスや性能の良さ", letter: "T" },
      { label: "使っていて気分が上がるかどうか", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "友達に意見を求められたら",
    options: [
      { label: "論理的に見て正しい選択肢を伝える", letter: "T" },
      { label: "相手の気持ちに寄り添った答えを伝える", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "商品レビューを書くなら",
    options: [
      { label: "数値や事実を淡々とまとめる", letter: "T" },
      { label: "使ってみた感動や体験を伝えたい", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "家族と家電を選ぶとき",
    options: [
      { label: "スペックを比較して最適な一台を選ぶ", letter: "T" },
      { label: "みんなが喜ぶかどうかを一番に考える", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "高価な買い物をするときの決め手は？",
    options: [
      { label: "数字で見て納得できるかどうか", letter: "T" },
      { label: "「これいいな」という気持ちが動くかどうか", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "誰かのガジェット選びについて聞かれたら",
    options: [
      { label: "「それコスパ悪くない？」と指摘する", letter: "T" },
      { label: "「その気持ちわかる」と共感する", letter: "F" },
    ],
  },
  {
    axis: "TF",
    question: "買ったものが期待外れだったとき",
    options: [
      { label: "原因を分析して次に活かす", letter: "T" },
      { label: "がっかりした気持ちをまず誰かに聞いてほしい", letter: "F" },
    ],
  },
  // J / P
  {
    axis: "JP",
    question: "買い物をするときのスタイルは？",
    options: [
      { label: "事前にリサーチして計画的に買う", letter: "J" },
      { label: "その場の流れやタイミングで買う", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "旅行の荷造りは？",
    options: [
      { label: "前日までにリストを作って準備完了", letter: "J" },
      { label: "出発直前にバタバタ詰め込む", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "充電が切れそうなとき",
    options: [
      { label: "事前に充電しておくので困らない", letter: "J" },
      { label: "ギリギリになってから慌てて探す", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "スケジュールの立て方は？",
    options: [
      { label: "予定はきっちり決めておきたい", letter: "J" },
      { label: "予定は決めすぎず、その場で柔軟に動きたい", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "新しいガジェットが届いたら",
    options: [
      { label: "説明書を読んでから使い始める", letter: "J" },
      { label: "とりあえず触って使いながら覚える", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "部屋の中のケーブルやガジェット類は？",
    options: [
      { label: "きちんと整理整頓されている", letter: "J" },
      { label: "とりあえず動けばOK、多少ごちゃついてる", letter: "P" },
    ],
  },
  {
    axis: "JP",
    question: "締め切りのある作業は？",
    options: [
      { label: "早めに終わらせて余裕を持ちたい", letter: "J" },
      { label: "締め切り直前に集中力が上がるタイプ", letter: "P" },
    ],
  },
];

const AXIS_PAIRS: Record<Axis, [Letter, Letter]> = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

export function computeDiagnosis16Result(
  scores: Partial<Record<Letter, number>>,
): TypeCode16 {
  const axes: Axis[] = ["EI", "SN", "TF", "JP"];
  const code = axes
    .map((axis) => {
      const [a, b] = AXIS_PAIRS[axis];
      const scoreA = scores[a] ?? 0;
      const scoreB = scores[b] ?? 0;
      return scoreA >= scoreB ? a : b;
    })
    .join("");

  return code as TypeCode16;
}

export const diagnosis16Results: Record<TypeCode16, Diagnosis16Result> = {
  INTJ: {
    id: "INTJ",
    group: "戦略家グループ",
    title: "設計主義プランナー",
    tagline: "無駄のない最適解を追い求めるタイプ",
    description:
      "ガジェット選びも「なんとなく」では納得できず、W数やスペックまで詰めて最適な一台を選び抜くあなた。長期的に見て一番効率のいい構成を組み立てるのが得意です。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "usb-charger-hikaku-3sen"],
  },
  INTP: {
    id: "INTP",
    group: "戦略家グループ",
    title: "探究派ガジェットオタク",
    tagline: "仕組みを理解するまで気が済まない",
    description:
      "「なぜこのスペックでこの価格なのか」を知りたくなる探究心の持ち主。比較記事を読み込んで自分なりの結論を出すプロセスそのものを楽しめるタイプです。",
    relatedPostSlugs: ["usb-charger-hikaku-3sen", "smart-home-nyumon"],
  },
  ENTJ: {
    id: "ENTJ",
    group: "戦略家グループ",
    title: "効率最優先リーダー",
    tagline: "時間を無駄にすることが一番のストレス",
    description:
      "移動中も作業中も、ロスなく動き続けたいあなた。高出力充電器と集中力を保てるノイズキャンセリングイヤホンの組み合わせで、限られた時間を最大限に使いこなせます。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "telework-noise-canceling-earbuds"],
  },
  ENTP: {
    id: "ENTP",
    group: "戦略家グループ",
    title: "新しいもの好きの発明家",
    tagline: "話題のガジェットにはとりあえず飛びつく",
    description:
      "新しい技術やアイデアに触れているだけでワクワクするタイプ。スマートホーム機器や新しい形のイヤホンなど、まだ手に取ったことのないジャンルに強く惹かれます。",
    relatedPostSlugs: ["smart-home-nyumon", "kotsudendo-openear-hikaku-3sen"],
  },
  INFJ: {
    id: "INFJ",
    group: "共感者グループ",
    title: "静かな理想主義者",
    tagline: "集中できる静かな環境を何より大切にする",
    description:
      "周囲の雑音をシャットアウトして、自分の世界に入り込みたいあなた。ノイズキャンセリングイヤホンと、安心して長く使える充電器の組み合わせが心地よい環境を支えます。",
    relatedPostSlugs: ["telework-noise-canceling-earbuds", "usb-charger-safety-checklist"],
  },
  INFP: {
    id: "INFP",
    group: "共感者グループ",
    title: "マイペース夢想家",
    tagline: "自分の世界に没頭する時間が何より大事",
    description:
      "人混みより、自分だけの時間・空間を大切にするあなた。お気に入りの音に包まれながら、旅先でも自分のペースを保てるガジェットが相性抜群です。",
    relatedPostSlugs: ["telework-noise-canceling-earbuds", "travel-gadget-erabikata"],
  },
  ENFJ: {
    id: "ENFJ",
    group: "共感者グループ",
    title: "みんなの世話役",
    tagline: "家族やチームが快適に過ごせるよう気を配る",
    description:
      "自分のことより先に、家族やまわりの人が困っていないか気になるあなた。家中を見守れるスマートホーム機器や、みんなで使える充電器が役立ちます。",
    relatedPostSlugs: ["smart-home-nyumon", "usb-charger-hikaku-3sen"],
  },
  ENFP: {
    id: "ENFP",
    group: "共感者グループ",
    title: "自由な発想家",
    tagline: "新しい体験・新しい景色にワクワクする",
    description:
      "予定にとらわれず、新しい出会いや発見を求めて動き回るあなた。身軽に持ち出せる旅行ガジェットや、周囲の音も楽しめるオープンイヤーイヤホンが冒険心を後押しします。",
    relatedPostSlugs: ["travel-gadget-erabikata", "kotsudendo-openear-hikaku-3sen"],
  },
  ISTJ: {
    id: "ISTJ",
    group: "堅実家グループ",
    title: "堅実な管理者",
    tagline: "実績と信頼性がなければ手を出さない",
    description:
      "安さより「長く安全に使えるか」を最優先するあなた。メーカーの信頼性や安全基準をきちんと確認してから選ぶ姿勢が、後悔しない買い物につながります。",
    relatedPostSlugs: ["usb-charger-safety-checklist", "funshitsuboushi-tag-hikaku-5sen"],
  },
  ISFJ: {
    id: "ISFJ",
    group: "堅実家グループ",
    title: "縁の下の守り手",
    tagline: "家族の暮らしを静かに支えるタイプ",
    description:
      "自分より家族の安心を優先するあなた。鍵や持ち物の紛失を防ぐタグや、留守中の家の様子がわかるスマートホーム機器が、日々の小さな不安を減らしてくれます。",
    relatedPostSlugs: ["funshitsuboushi-tag-hikaku-5sen", "smart-home-nyumon"],
  },
  ESTJ: {
    id: "ESTJ",
    group: "堅実家グループ",
    title: "現場を仕切る実務家",
    tagline: "無駄なく、きっちり物事を進めたい",
    description:
      "決めたことは計画通りに、かつ確実にこなしたいあなた。出力や安全性がはっきりしたスペック重視の充電器選びが、あなたの効率的なスタイルに合っています。",
    relatedPostSlugs: ["usb-charger-w-suu-erabikata", "usb-charger-safety-checklist"],
  },
  ESFJ: {
    id: "ESFJ",
    group: "堅実家グループ",
    title: "気配り上手なまとめ役",
    tagline: "周りの快適さがまず気になる",
    description:
      "自分よりも、一緒にいる人が快適に過ごせているかが気になるあなた。家族みんなで使えるスマートホーム機器や、忘れ物を防ぐ紛失防止タグが安心感を支えます。",
    relatedPostSlugs: ["smart-home-nyumon", "funshitsuboushi-tag-hikaku-5sen"],
  },
  ISTP: {
    id: "ISTP",
    group: "行動派グループ",
    title: "職人肌のクラフター",
    tagline: "道具そのものへのこだわりが強い",
    description:
      "スペックや作り込みに納得できる「良い道具」を見極めたいあなた。比較検討をじっくり重ねて選ぶ充電器や、装着感にこだわったイヤホンが手になじみます。",
    relatedPostSlugs: ["usb-charger-hikaku-3sen", "kotsudendo-openear-hikaku-3sen"],
  },
  ISFP: {
    id: "ISFP",
    group: "行動派グループ",
    title: "感覚派アーティスト",
    tagline: "心地よさとデザインを大切にする",
    description:
      "スペック表よりも「使っていて気分がいいか」を大事にするあなた。耳への負担が少ないオープンイヤーイヤホンや、旅先でも身軽でいられるガジェットが好相性です。",
    relatedPostSlugs: ["kotsudendo-openear-hikaku-3sen", "travel-gadget-erabikata"],
  },
  ESTP: {
    id: "ESTP",
    group: "行動派グループ",
    title: "行動派チャレンジャー",
    tagline: "とにかく体を動かしていたい",
    description:
      "じっとしているより、動きながら物事を進めたいあなた。周囲の音を聞きながら使える骨伝導・オープンイヤーイヤホンなら、安全に体を動かしながら音を楽しめます。",
    relatedPostSlugs: ["kotsudendo-openear-hikaku-3sen", "travel-gadget-erabikata"],
  },
  ESFP: {
    id: "ESFP",
    group: "行動派グループ",
    title: "その場を楽しむエンターテイナー",
    tagline: "身軽に動いて、みんなと今を楽しみたい",
    description:
      "計画よりもその場のノリと身軽さを大事にするあなた。荷物を増やさない旅行ガジェットと、忘れ物をしても安心な紛失防止タグがあれば、気ままな行動もより楽しめます。",
    relatedPostSlugs: ["travel-gadget-erabikata", "funshitsuboushi-tag-hikaku-5sen"],
  },
};
