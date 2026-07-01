import type { ReactNode } from "react";

export const links = {
  line: "https://lin.ee/q9gkE9I",
  instagram: "https://www.instagram.com/jinsei_soudan_madoguchi/",
};

export const photos = {
  logo: "/brand/logo-mark.png",
  hero: "/brand/hero-window-woman.png",
  plant: "/brand/quiet-window.png",
  contact: "/brand/consult-contact.png",
  consult: "/brand/consult-hero.png",
  story: "/brand/consult-story.png",
  direction: "/brand/flow-direction.png",
  next: "/brand/flow-next-step.png",
  support: "/brand/flow-support.png",
  table: "/brand/card-table.png",
};

export const tabs = [
  { href: "/voice", label: "お客様の声" },
  { href: "/support", label: "サポート内容" },
  { href: "/flow", label: "ご利用の流れ" },
  { href: "/faq", label: "よくある質問" },
];

export const worries = [
  { title: "恋愛", text: "恋愛の悩みや\nパートナーとの関係", icon: HeartIcon },
  { title: "仕事", text: "仕事の不安や\nキャリアのこと", icon: BriefcaseIcon },
  { title: "お金", text: "お金の悩みや\n将来の不安", icon: YenIcon },
  { title: "人間関係", text: "友人や職場の\n人間関係のこと", icon: PeopleIcon },
  { title: "将来", text: "将来への不安や\n自分の進む道", icon: SproutIcon },
  { title: "家族", text: "家族のことや\n親との関係", icon: HomeIcon },
];

export const cases = [
  {
    title: "仕事",
    person: "40代 男性　会社員",
    concern: "仕事の責任が重なり、気持ちを切り替えられない日が続いていました。",
    voice: "話す中で、今すぐ変えることと少し待っていいことを分けて考えられました。",
    icon: BriefcaseIcon,
  },
  {
    title: "恋愛・パートナー",
    person: "20代 女性　大学生",
    concern: "相手の気持ちばかり考えてしまい、自分の本音が分からなくなっていました。",
    voice: "否定されずに聞いてもらえたことで、自分がどうしたいのかを落ち着いて考えられました。",
    icon: HeartIcon,
  },
  {
    title: "お金・将来",
    person: "50代 女性　パート",
    concern: "将来のお金のことが漠然と不安で、何から見直せばいいか分かりませんでした。",
    voice: "不安を一つずつ言葉にしたら、まず確認することが見えてきました。",
    icon: YenIcon,
  },
  {
    title: "人間関係",
    person: "30代 男性　会社員",
    concern: "職場での距離感に悩み、毎日気をつかいすぎて疲れていました。",
    voice: "自分だけで抱え込まなくていいと思えて、少し肩の力が抜けました。",
    icon: PeopleIcon,
  },
  {
    title: "家族・親子",
    person: "50代 女性　専業主婦",
    concern: "家族のことだからこそ感情的になってしまい、誰にも話せずにいました。",
    voice: "自分の気持ちも大切にしていいと分かり、落ち着いて向き合えそうだと思えました。",
    icon: HomeIcon,
  },
  {
    title: "将来・自分の生き方",
    person: "20代 男性　フリーランス",
    concern: "このままでいいのか不安で、考えるほど動けなくなっていました。",
    voice: "今の気持ちを整理したことで、次に試してみたいことが少し見えてきました。",
    icon: SproutIcon,
  },
];

export const supports = [
  {
    title: "初回相談",
    lead: "30分 2,980円（税込）",
    text: "お悩みを丁寧にお聴きし、今の状況を一緒に整理します。まずはお気軽にご相談ください。",
    icon: LeafIcon,
  },
  {
    title: "継続サポート",
    lead: "必要な方にはご案内しております。",
    text: "一人で抱え込まず、あなたに寄り添いながら、解決への道を一緒に見つけていきます。",
    icon: PeopleIcon,
  },
  {
    title: "メッセージ相談（LINE）",
    lead: "あなたのペースで相談できます。",
    text: "電話やWebが苦手な方でも、LINEのメッセージだけでご相談いただけます。",
    icon: MessageIcon,
  },
  {
    title: "オプションサポート",
    lead: "ご希望に合わせてご案内します。",
    text: "必要に応じて、さまざまなサポートメニューをご用意しています。",
    icon: SparkleIcon,
  },
];

export const flow = [
  {
    step: "STEP 01",
    title: "LINEを追加する",
    text: "下のボタンからLINEを追加し、トーク画面を開いてください。",
    icon: PhoneIcon,
  },
  {
    step: "STEP 02",
    title: "相談内容を送る",
    text: "今の状況やお悩みを、LINEのメッセージでお送りください。",
    icon: NoteIcon,
  },
  {
    step: "STEP 03",
    title: "返信が届く",
    text: "内容を確認し、こちらからご連絡いたします。",
    icon: MessageIcon,
  },
  {
    step: "STEP 04",
    title: "初回相談（30分 2,980円）",
    text: "ご希望の方法でご相談いただけます。",
    icon: CalendarIcon,
  },
  {
    step: "STEP 05",
    title: "必要な方のみ継続サポート",
    text: "ご相談後の状況に合わせて、継続的なサポートをご案内します。",
    icon: LeafIcon,
  },
];

export const faqs = [
  {
    question: "相談はどのように行いますか？",
    answer:
      "お電話・Web（ビデオ通話）を基本としていますが、LINEのメッセージ相談もお選びいただけます。ご希望の方法でご相談ください。",
  },
  {
    question: "どんな相談でも大丈夫ですか？",
    answer:
      "恋愛、仕事、お金、人間関係、家族、将来のことなど、まずはお気軽にご相談ください。",
  },
  {
    question: "名前や個人情報は伝えなくてもいいですか？",
    answer:
      "最初のお問い合わせでは、無理に詳しい個人情報をお伝えいただく必要はありません。",
  },
  {
    question: "相談内容の秘密は守られますか？",
    answer:
      "安心してお話しいただけるよう、相談内容は大切に扱います。",
  },
  {
    question: "相談は何回でもできますか？",
    answer:
      "必要に応じて継続相談も可能です。無理におすすめすることはありません。",
  },
  {
    question: "初回相談だけでも利用できますか？",
    answer:
      "はい。初回相談だけでも大丈夫です。まずは話して整理する時間としてご利用ください。",
  },
  {
    question: "相談料のお支払い方法を教えてください。",
    answer:
      "お支払い方法はご予約時にご案内します。分かりやすく、無理のない形でご案内します。",
  },
  {
    question: "キャンセルや日程変更は可能ですか？",
    answer:
      "可能です。ご都合が変わった場合は、分かった時点で早めにご連絡ください。",
  },
  {
    question: "どの時間帯に相談できますか？",
    answer:
      "ご希望を伺いながら、相談しやすい時間を一緒に調整します。",
  },
];

export function SiteHeader({ active = "home" }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-9">
        <a href="/" className="flex min-w-0 items-center gap-3 text-brand-navy">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl">
            <img src={photos.logo} alt="" className="h-11 w-11 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight sm:text-xl">人生の相談窓口</span>
            <span className="hidden text-xs font-bold leading-tight text-brand-navy/78 sm:block">
              ひとりで抱え込まないために
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-brand-navy lg:flex">
          <NavLink href="/" label="ホーム" active={active === "home"} />
          {tabs.map((tab) => (
            <NavLink key={tab.href} href={tab.href} label={tab.label} active={active === tab.href} />
          ))}
        </nav>
        <a
          href={links.line}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#128c36] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(18,140,54,0.18)] transition hover:bg-[#0f7e30] sm:inline-flex"
        >
          LINEで相談する
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-brand-navy/8 px-5 py-2 text-xs font-bold text-brand-navy sm:px-8 lg:hidden">
        <a className={mobileNavClass(active === "home")} href="/">
          ホーム
        </a>
        {tabs.map((tab) => (
          <a key={tab.href} className={mobileNavClass(active === tab.href)} href={tab.href}>
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function PageShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <SiteHeader active={active} />
      {children}
      <Footer active={active} />
    </main>
  );
}

export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ivory to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
      <div className="absolute left-8 top-10 hidden h-28 w-px bg-brand-beige/35 md:block" />
      <div className="absolute right-10 bottom-8 hidden h-16 w-16 rounded-full border border-brand-beige/25 md:block" />
      <div className="relative mx-auto max-w-[860px] text-center">
        <h1 className="text-4xl font-bold leading-[1.35] tracking-[0.08em] text-brand-navy sm:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-5 h-px w-10 bg-brand-beige" />
        <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-9 text-brand-ink/82 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight tracking-[0.08em] text-brand-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-10 bg-brand-beige" />
    </div>
  );
}

export function ContactBand({
  title = "一人で抱え込まず、まずはお気軽にご相談ください。",
}: {
  title?: string;
}) {
  return (
    <section className="px-5 pb-10 sm:px-8 lg:px-9">
      <div className="mx-auto max-w-[980px] overflow-hidden rounded-2xl bg-brand-ivory px-6 py-10 text-center shadow-[0_16px_45px_rgba(31,58,86,0.06)] sm:px-10">
          <p className="text-2xl font-bold leading-[1.55] tracking-[0.06em] text-brand-navy sm:text-3xl">
            {title}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LineButton />
            <InstagramButton />
          </div>
          <p className="mt-4 text-sm font-medium text-brand-ink/66">LINEからのご相談がおすすめです。</p>
      </div>
    </section>
  );
}

export function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={links.line}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#16a33a] px-8 py-3 text-base font-bold text-white shadow-[0_16px_30px_rgba(22,163,58,0.18)] transition hover:bg-[#118b31] sm:w-auto ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-[#16a33a]">
        LINE
      </span>
      LINEで相談する
    </a>
  );
}

export function InstagramButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={links.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-brand-navy/24 bg-white px-7 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-gray sm:w-auto ${className}`}
    >
      <span className="text-base text-[#ef4f8f]">◎</span>
      Instagramからもお問い合わせいただけます
    </a>
  );
}

function Footer({ active }: { active: string }) {
  return (
    <footer className="bg-white px-5 py-8 sm:px-8 lg:px-9">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-6 border-t border-brand-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center gap-3 text-brand-navy">
          <img src={photos.logo} alt="" className="h-10 w-10 object-contain" />
          <div>
            <p className="text-lg font-bold">人生の相談窓口</p>
            <p className="text-xs text-brand-ink/58">ひとりで抱え込まないために</p>
          </div>
        </a>
        <div className="flex flex-wrap gap-5 text-sm font-bold text-brand-navy">
          <a className={active === "home" ? "text-brand-beige" : ""} href="/">
            ホーム
          </a>
          {tabs.map((tab) => (
            <a key={tab.href} className={active === tab.href ? "text-brand-beige" : ""} href={tab.href}>
              {tab.label}
            </a>
          ))}
          <span className="font-medium text-brand-ink/58">© 2026 人生の相談窓口</span>
        </div>
      </div>
    </footer>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a href={href} className="relative px-1 py-2 transition hover:text-brand-beige">
      {label}
      {active && <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-10 bg-brand-beige" />}
    </a>
  );
}

function mobileNavClass(active: boolean) {
  return `shrink-0 rounded-full px-4 py-2 ${active ? "bg-brand-ivory text-brand-beige" : "bg-white"}`;
}

export function HeartIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 20s-7-4.4-9.2-9A5.1 5.1 0 0 1 12 6.3 5.1 5.1 0 0 1 21.2 11C19 15.6 12 20 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7m-10 4h14M5 7h14v12H5V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function YenIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="m7 5 5 7 5-7M8 12h8m-8 4h8m-4-4v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PeopleIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a5 5 0 0 1 10 0m-1.2-4.2A4.6 4.6 0 0 1 20.5 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SproutIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 20V10m0 0C9 7 6.5 6.5 4 7c.2 3 2.2 5.2 8 3Zm0 0c3-3 5.5-3.5 8-3-.2 3-2.2 5.2-8 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="m4 11 8-7 8 7m-14-1v10h12V10M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M5 19c8.5 0 13-5 14-14-9 1-14 5.5-14 14Zm0 0 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MessageIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M5 17.5 4 21l4-1.4a8.4 8.4 0 1 0-3-2.1Zm4-5.5h.01M12 12h.01M15 12h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Zm-7 2v4m-2-2h4m12 8v4m-2-2h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h10v18H7V3Zm3 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NoteIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h9l3 3v15H6V3Zm8 0v4h4M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path d="M7 4v3m10-3v3M5 8h14M5 6h14v14H5V6Zm4 6h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
