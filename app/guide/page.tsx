import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "相談事例・よくある質問｜人生の相談窓口",
  description:
    "人生の相談窓口に寄せられる相談事例、よくある質問、相談員についてご案内します。",
};

const photos = {
  logo: "/brand/logo-mark.png",
  counselor: "/brand/consult-story.png",
  listen: "/brand/consult-hero.png",
  contact: "/brand/consult-contact.png",
  love: "/brand/coffee-hands.png",
  work: "/brand/card-table.png",
  money: "/brand/phone-profile.png",
  relation: "/brand/quiet-window.png",
  future: "/brand/flow-next-step.png",
  family: "/brand/consult-hero.png",
};

const cases = [
  {
    title: "恋愛",
    before: "相手の気持ちが分からず、毎日不安でした。",
    after: "少しずつ、自分の気持ちを大切にできるようになりました。",
    image: photos.love,
    icon: "♡",
  },
  {
    title: "仕事",
    before: "仕事を辞めたい。でも辞める勇気がありませんでした。",
    after: "納得して次の一歩を考えられるようになりました。",
    image: photos.work,
    icon: "□",
  },
  {
    title: "お金",
    before: "将来のお金が不安で、何から始めればいいか分かりませんでした。",
    after: "今できることが見えてきました。",
    image: photos.money,
    icon: "¥",
  },
  {
    title: "人間関係",
    before: "誰にも相談できず、一人で抱え込んでいました。",
    after: "話しただけなのに、気持ちが軽くなりました。",
    image: photos.relation,
    icon: "○",
  },
  {
    title: "将来",
    before: "何がしたいのか分からなくなっていました。",
    after: "自分らしい方向性が少し見えてきました。",
    image: photos.future,
    icon: "◇",
  },
  {
    title: "家族",
    before: "家族だからこそ、本音が言えませんでした。",
    after: "無理をしなくてもいいと思えるようになりました。",
    image: photos.family,
    icon: "⌂",
  },
];

const faqs = [
  {
    question: "どんな相談でも大丈夫ですか？",
    answer: "はい。恋愛、仕事、お金、人間関係、家族、将来のことなど、まずはお気軽にご相談ください。",
  },
  {
    question: "話すだけでも大丈夫ですか？",
    answer: "もちろんです。答えを急がず、話すことで気持ちを整理する時間を大切にしています。",
  },
  {
    question: "悩みでも相談できますか？",
    answer: "はい。まとまっていない気持ちや、うまく言葉にできないこともそのままお話しください。",
  },
  {
    question: "相談方法は選べますか？",
    answer: "現在はInstagramまたはLINEからのご相談を想定しています。今後、必要に応じて方法を増やしていきます。",
  },
  {
    question: "無理にサービスを勧められませんか？",
    answer: "ありません。相談者さまの気持ちと利益を最優先にし、必要以上の案内は行いません。",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <header className="sticky top-0 z-30 bg-white/78 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-4 sm:px-8 lg:px-9">
          <a href="/" className="flex items-center gap-3 text-brand-navy">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
              <img src={photos.logo} alt="" className="h-10 w-10 object-contain" />
            </span>
            <span className="text-base font-bold tracking-normal sm:text-xl">人生の相談窓口</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold text-brand-navy sm:flex">
            <a href="/">Top</a>
            <a href="#cases">事例</a>
            <a href="#faq">FAQ</a>
            <a href="#counselor">相談員</a>
          </nav>
        </div>
      </header>

      <section className="bg-brand-ivory px-5 pb-14 pt-16 sm:px-8 sm:pb-18 sm:pt-20 lg:px-9">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-sm font-bold text-brand-beige">Guide</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.35] text-brand-navy sm:text-5xl">
            相談する前に、
            <br className="sm:hidden" />
            少し安心できる場所。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-9 text-brand-navy/78 sm:text-lg">
            実際にどんな相談があるのか、どんなふうに話せるのか。
            はじめての不安が少し軽くなるようにまとめました。
          </p>
        </div>
      </section>

      <section id="cases" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle title="実際の相談事例" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {cases.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white p-4 shadow-[0_14px_40px_rgba(31,58,86,0.07)] ring-1 ring-brand-navy/5"
              >
                <div className="flex items-center gap-2 text-brand-navy">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-ivory text-lg">
                    {item.icon}
                  </span>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                </div>
                <p className="mt-4 min-h-[4.5rem] text-sm font-medium leading-7 text-brand-ink/76">
                  {item.before}
                </p>
                <div className="mt-4 overflow-hidden rounded-lg">
                  <img src={item.image} alt="" className="h-28 w-full object-cover" />
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-brand-ink/78">
                  {item.after}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm font-medium text-brand-ink/54">
            ※ プライバシー保護のため、一部内容を変更しています。
          </p>
        </div>
      </section>

      <section id="faq" className="bg-brand-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle title="よくある質問" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white p-5 shadow-[0_14px_40px_rgba(31,58,86,0.06)] ring-1 ring-brand-navy/5"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 text-brand-navy">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-ivory font-serif text-lg font-bold text-brand-beige">
                    Q
                  </span>
                  <span className="text-base font-bold leading-7">{faq.question}</span>
                  <span className="ml-auto text-brand-beige transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 text-sm font-medium leading-7 text-brand-ink/76">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="counselor" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto grid max-w-[980px] overflow-hidden rounded-xl bg-brand-ivory shadow-[0_18px_50px_rgba(31,58,86,0.07)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[300px] overflow-hidden">
            <img
              src={photos.counselor}
              alt="相談員が落ち着いて話を聞いている写真"
              className="h-full min-h-[300px] w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center px-6 py-10 sm:px-10">
            <div>
              <p className="text-sm font-bold text-brand-beige">Counselor</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.45] text-brand-navy">
                相談員について
              </h2>
              <p className="mt-6 text-base font-medium leading-9 text-brand-ink/80">
                答えを押し付けるのではなく、一緒に整理し、一緒に考えることを大切にしています。
                あなたの人生を決めるのは、あなた自身です。
                私はその前で伴走する存在でありたいと思っています。
              </p>
              <a
                href="/#contact"
                className="mt-7 inline-flex min-h-12 items-center gap-4 rounded-full bg-brand-beige px-8 py-3 text-base font-bold text-brand-navy transition hover:bg-brand-beige/82"
              >
                相談してみる
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 sm:px-8 lg:px-9">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-6 border-t border-brand-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-brand-navy">
            <img src={photos.logo} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-lg font-bold">人生の相談窓口</p>
              <p className="text-xs text-brand-ink/58">もう、一人で悩まない。</p>
            </div>
          </div>
          <p className="text-sm text-brand-ink/58">© 2026 人生の相談窓口</p>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight tracking-[0.08em] text-brand-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-10 bg-brand-beige" />
    </div>
  );
}
