/* ==========================================================
   更新する情報はこのファイルにまとめています。
   キャンペーン、サービスURL、イベント、店舗情報はここだけ変更してください。
   ========================================================== */
const SITE_CONFIG = {
  campaign: {
    active: true,
    label: "CURRENT CAMPAIGN",
    title: "新規入会キャンペーン",
    startDate: "2026-10-02",
    endDate: "2026-12-27",
    period: "2026年10月2日（金）〜12月27日（日）まで",
    images: [
      {
        src: "assets/images/campaign-2026-autumn-main.webp",
        alt: "AttivoGYM東根店 新規入会キャンペーンメインビジュアル"
      },
      {
        src: "assets/images/campaign-2026-autumn-details.webp",
        alt: "AttivoGYM東根店 店舗設備とサービス案内ビジュアル"
      }
    ],
    benefits: [
      { label: "初年度年会費", before: "5,500円", after: "無料" },
      { label: "事務手数料", before: "6,600円", after: "無料" },
      { label: "水素マッサージチェア", before: "", after: "2か月無料" },
      { label: "水素チューブ", before: "1,980円", after: "無料" }
    ],
    highlight: "20,460円",
    note: "見学・体験も受付中です。詳しくは店舗または各サービスページをご確認ください。"
  },
  services: [
    { number: "01", english: "PERSONAL TRAINING", title: "カラダ改善サポート", description: "身体の悩みや目的に合わせて、必要なトレーニングや身体づくりをマンツーマンでサポートします。", url: "https://attivogym.netlify.app/" },
    { number: "02", english: "BOXING EXERCISE", title: "ボクシングエクササイズ", description: "暗闇 × 音楽 × ボクシング。音楽に合わせて全身を動かす45分間のグループエクササイズ。初心者・ジム非会員も参加できます。", url: "https://attivogym-box.netlify.app/" }
  ],
  event: { enabled: false, url: "", label: "COMING SOON" },
  store: {
    address: "さくらんぼタウン東根内",
    phone: "0237-22-9120",
    hours: ["平日 10:00〜22:00", "土曜 10:00〜20:00", "日曜・祝日 10:00〜18:00"],
    closed: ["毎月1日・16日", "お盆休み 8月14日〜17日", "年末年始 12月27日〜1月3日"]
  }
};
